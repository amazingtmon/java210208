package com.zone;

import java.awt.Color;
import java.awt.Component;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;

import javax.swing.DefaultCellEditor;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;

import com.util.DBConnectionMgr;
import com.zipcode.ZipCodeVO;
public class Exam3_zipcode implements ItemListener, ActionListener, FocusListener {
	String zdos[] = null;
	String sigus[] = null;
	String dongs[] = null;
	String zdo = null;
	String sigu = null;
	String dong = null;
	JComboBox jcb_zdo = null;
	JComboBox jcb_sigu = null;
	JComboBox jcb_dong = null;
	DBConnectionMgr dbMgr = DBConnectionMgr.getInstance();
	Connection 			con 	= null;
	PreparedStatement 	pstmt 	= null;
	ResultSet 		rs  		= null;
	JTextField 		jtf_dong 	= new JTextField("동이름을 입력하세요.",20);
	JButton 		jbtn_search = new JButton("조회");
	String 			cols[]      = {"ChkBox","주소","우편번호"};
	String 		    data[][] 	= new String[0][3];
	DefaultTableModel dtm_zip	= new DefaultTableModel(data,cols);
	
	JTable		    jt_zip 		= new JTable(dtm_zip);
	JScrollPane     jsp_zip		= new JScrollPane(jt_zip);
	
	JTableHeader    jth_zip		= new JTableHeader();
	JFrame			jf_zip		= new JFrame();
	JPanel 			jp_north	= new JPanel();
	public Exam3_zipcode() {
		zdos = getZDOList();
		sigus = new String[]{"전체"};
		dongs = new String[]{"전체"};
		jcb_zdo = new JComboBox(zdos);
		jcb_sigu = new JComboBox(sigus);
		jcb_dong = new JComboBox(dongs);
		System.out.println("나는 파라미터가 없는 디폴트 생성자라고 해.");
		System.out.println("나는 인스턴스화 하면 자동으로 호출되는 거야.");
	}
	public Exam3_zipcode(String str, int i) {
	}
	public void refreshData(String zDO,String myDong) {
		con = dbMgr.getConnection();
		System.out.println("refreshData호출 성공"+myDong+", "+zDO);
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT 'false' ChkBox, address, zipcode");
		sql.append("  FROM zipcode_t");
		sql.append(" WHERE 1=1");
		if(zDO!=null && zDO.length()>0) {
			sql.append(" AND zdo=?");		
		}
		if(myDong!=null && myDong.length()>0) {
			sql.append(" AND dong LIKE '%'||?||'%'");		
		}
		int i=1;
		try {
			pstmt = con.prepareStatement(sql.toString());
			if(zDO!=null && zDO.length()>0) {
				pstmt.setString(i++, zDO);
			}			
			if(myDong!=null && myDong.length()>0) {
				pstmt.setString(i++, myDong);
			}
			System.out.println("sql:"+sql.toString());
			rs = pstmt.executeQuery();
			Vector<ZipCodeVO> v = new Vector<>();
			ZipCodeVO zcVOS[] = null; 
			ZipCodeVO zcVO = null; 
			while(rs.next()) {
				zcVO = new ZipCodeVO();
				Boolean ChkBox = Boolean.parseBoolean(rs.getString("ChkBox"));
				zcVO.setChkBox(ChkBox);
				zcVO.setAddress(rs.getString("address"));
				zcVO.setZipcode(rs.getInt("zipcode"));
				v.add(zcVO);
			}
			zcVOS  = new ZipCodeVO[v.size()];
			v.copyInto(zcVOS);
			System.out.println("v.size():"+v.size()+", "+zcVOS.length);
			if(v.size()>0) {
				while(dtm_zip.getRowCount() > 0) {
					dtm_zip.removeRow(0);
				}
				for(int x=0;x<v.size();x++) {
					Vector oneRow = new Vector();
					oneRow.add(0, zcVOS[x].getChkBox());
					oneRow.add(1, zcVOS[x].getAddress());
					oneRow.add(2, zcVOS[x].getZipcode());
					dtm_zip.addRow(oneRow);
				}
			}
		} catch (SQLException se) {
			System.out.println("[[query]]"+sql);
		} catch(Exception e) {
			System.out.println("[[Exception]]"+e);
		}
	}
	//화면그리기
	public void initDisplay() {
		jt_zip.getColumn("ChkBox").setCellRenderer(dcr);
		JCheckBox box = new JCheckBox();
		box.setHorizontalAlignment(JLabel.CENTER);
		jt_zip.getColumn("ChkBox").setCellEditor(new DefaultCellEditor(box));
		jcb_zdo.addItemListener(this);
		jcb_sigu.addItemListener(this);
		jtf_dong.addFocusListener(this);
		System.out.println("initDisplay 호출 성공");
		jth_zip = jt_zip.getTableHeader();
		jth_zip.setBackground(new Color(22,22,100));
		jth_zip.setForeground(Color.white);
		jth_zip.setFont(new Font("맑은고딕",Font.BOLD,16));
		jt_zip.setGridColor(Color.BLUE);
		jt_zip.setRowHeight(20);
		jt_zip.getColumnModel().getColumn(0).setPreferredWidth(50);
		jt_zip.getColumnModel().getColumn(1).setPreferredWidth(250);
		jt_zip.getColumnModel().getColumn(2).setPreferredWidth(100);
		jt_zip.setSelectionBackground(new Color(186,186,241));
		jt_zip.setSelectionForeground(new Color(22,22,100));
		jp_north.setLayout(new FlowLayout(FlowLayout.LEFT));
		jp_north.setBackground(Color.red);
		jp_north.add(jcb_zdo);
		jp_north.add(jcb_sigu);
		jp_north.add(jcb_dong);
		jp_north.add(jtf_dong);
		jp_north.add(jbtn_search);
		jbtn_search.addActionListener(this);
		jtf_dong.addActionListener(this);
		jf_zip.setTitle("우편번호 검색");
		jf_zip.add("North",jp_north);
		jf_zip.add("Center",jsp_zip);
		jf_zip.setSize(600, 500);
		jf_zip.setVisible(true);
	}
	
	public String[] getZDOList() {
		String zdos[] = null;
		StringBuilder sb = new StringBuilder();
		sb.append("SELECT '전체' zdo FROM dual      ");
		sb.append("UNION ALL                        ");
		sb.append("SELECT zdo                       ");
		sb.append("  FROM (                         ");
		sb.append("        SELECT distinct(zdo) zdo ");
		sb.append("          FROM zipcode_t         ");
		sb.append("        ORDER BY zdo asc         ");
		sb.append("       )                         ");
	    try {
			con = dbMgr.getConnection();
			pstmt = con.prepareStatement(sb.toString());
			rs = pstmt.executeQuery();
			Vector<String> v = new Vector<>();
			while(rs.next()) {
				String zdo = rs.getString("zdo");
				v.add(zdo);
			}
			zdos = new String[v.size()];
			v.copyInto(zdos);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return zdos;
	}
	public String[] getSiguList(String pzdo) {
		System.out.println("getSiguList 호출 성공");
		String sigus[] = null;
		StringBuilder sb = new StringBuilder();
		sb.append("SELECT '전체' sigu FROM dual      ");
		sb.append("UNION ALL                        ");
		sb.append("SELECT sigu                       ");
		sb.append("  FROM (                         ");
		sb.append("        SELECT distinct(sigu) sigu ");
		sb.append("          FROM zipcode_t         ");
		sb.append("         WHERE zdo=?         ");
		sb.append("        ORDER BY sigu asc         ");
		sb.append("       )                         ");
		try {
			con = dbMgr.getConnection();
			pstmt = con.prepareStatement(sb.toString());
			pstmt.setString(1,pzdo);
			rs = pstmt.executeQuery();
			Vector<String> v = new Vector<>();
			while(rs.next()) {
				String sigu = rs.getString("sigu");
				v.add(sigu);
			}
			sigus = new String[v.size()];
			v.copyInto(sigus);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sigus;
	}
	public String[] getDongList(String psigu) {
		System.out.println("getDongList 호출 성공");
		String dongs[] = null;
		StringBuilder sb = new StringBuilder();
		sb.append("SELECT '전체' dong FROM dual      ");
		sb.append("UNION ALL                        ");
		sb.append("SELECT dong                       ");
		sb.append("  FROM (                         ");
		sb.append("        SELECT distinct(dong) dong ");
		sb.append("          FROM zipcode_t         ");
		sb.append("         WHERE sigu=?         ");
		sb.append("        ORDER BY dong asc         ");
		sb.append("       )                         ");
		try {
			con = dbMgr.getConnection();
			pstmt = con.prepareStatement(sb.toString());
			pstmt.setString(1,psigu);
			rs = pstmt.executeQuery();
			Vector<String> v = new Vector<>();
			while(rs.next()) {
				String dong = rs.getString("dong");
				v.add(dong);
			}
			dongs = new String[v.size()];
			v.copyInto(dongs);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return dongs;
	}
	//메인메소드
	public static void main(String[] args) {
		JFrame.setDefaultLookAndFeelDecorated(true);
		Exam3_zipcode zipApp = new Exam3_zipcode();
		zipApp.initDisplay();
	}
	//
	@Override
	public void actionPerformed(ActionEvent ae) {
		Object obj = ae.getSource();
		if((obj == jbtn_search)||(obj == jtf_dong)) {
			String myDong = jtf_dong.getText();
			refreshData(zdo,myDong);			
		}
	}
	@Override
	public void focusGained(FocusEvent e) {
		if(e.getSource() == jtf_dong) {
			jtf_dong.setText("");
		}
	}
	@Override
	public void focusLost(FocusEvent e) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void itemStateChanged(ItemEvent ie) {
		Object obj = ie.getSource();
		if(obj == jcb_zdo) {
			if(ie.getStateChange() == ItemEvent.SELECTED) {
				System.out.println("선택한 ZDO ===> "+zdos[jcb_zdo.getSelectedIndex()]);
				zdo = zdos[jcb_zdo.getSelectedIndex()];
				sigus = getSiguList(zdo);
				jcb_sigu.removeAllItems();
				for(int i=0;i<sigus.length;i++) {
					jcb_sigu.addItem(sigus[i]);
				}
			}
		}
		if(obj == jcb_sigu) {
			if(ie.getStateChange() == ItemEvent.SELECTED) {
				System.out.println("선택한 SIGU ===> "+sigus[jcb_sigu.getSelectedIndex()]);
				sigu = sigus[jcb_sigu.getSelectedIndex()];
				dongs = getDongList(sigu);
				jcb_dong.removeAllItems();
				for(int i=0;i<dongs.length;i++) {
					jcb_dong.addItem(dongs[i]);
				}
			}
		}
		if(obj == jcb_dong) {
			if(ie.getStateChange() == ItemEvent.SELECTED) {
				System.out.println("선택한 DONG ===> "+dongs[jcb_dong.getSelectedIndex()]);
				dong = dongs[jcb_dong.getSelectedIndex()];
			}
		}
	}
	DefaultTableCellRenderer dcr = new DefaultTableCellRenderer()
	{
	  public Component getTableCellRendererComponent
	   (JTable table, Object value, boolean isSelected, boolean hasFocus
	  , int row, int column)
	  {
		  JCheckBox box= new JCheckBox();
		  box.setSelected(((Boolean)value).booleanValue());   
		  box.setHorizontalAlignment(JLabel.CENTER);
		  return box;
	  }
	};	
}//////////end of ZipCodeSearchApp





