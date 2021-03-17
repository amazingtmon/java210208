package com.zipcode;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;

import com.util.DBConnectionMgr;

import design2020.book.MemberShip;

/*
 * dispose에 대한 설명임
 * 이 Window, 하위 구성 요소 및 모든 소유 된 하위 구성 요소에서 사용하는 모든 기본 화면 리소스를
 * 해제합니다. 즉, 이러한 구성 요소에 대한 리소스가 파괴되고 사용하는 모든 메모리가 OS로 반환되며
 * 표시 할 수없는 것으로 표시됩니다.
Window 및 하위 구성 요소는 pack 또는 show에 대한 후속 호출로 네이티브 리소스를 다시 빌드하여
다시 표시 가능하게 만들 수 있습니다. 다시 생성 된 Window 및 해당 하위 구성 요소의 상태는 Window가
삭제 된 시점에서 이러한 개체의 상태와 동일합니다 (해당 작업 간의 추가 수정은 고려하지 않음).
 *
 * setVisiable에 대한 설명임.
 * 재정의 : 구성 요소의 setVisible (...)
매개 변수 : b true이면 Window를 표시하고 그렇지 않으면 Window를 숨 깁니다.
Window 및 / 또는 해당 소유자가 아직 표시 가능하지 않은 경우 둘 다 표시 가능하게됩니다.
창은 보이기 전에 유효성이 검사되며 창이 이미 보이는 경우에는 창을 앞으로 가져옵니다.
false이면이 Window, 하위 구성 요소 및 모든 소유 자식을 숨 깁니다. Window 및 해당 하위 구성
요소는 #setVisible (true)를 호출하여 다시 표시 할 수 있습니다.
 */

public class ZipCodeSearch extends JFrame implements MouseListener
                                                   , ItemListener
                                                   , FocusListener
                                                   , ActionListener {
	//선언부
	String zdo = null;
	JPanel jp_north = new JPanel();
	
	//insert here
	String zdos[] = {"전체","서울","경기","강원"};
	String zdos2[] = {"전체","부산","전남","대구"};
	Vector<String> vzdos = new Vector<>();//vzdos.size()==>0
	
	JComboBox jcb_zdo = null;//West
	JComboBox jcb_zdo2 = null;//West
	
	JTextField jtf_search = new JTextField("동이름을 입력하세요.");//Center
	JButton jbtn_search = new JButton("조회");//East
	
	String cols[] = {"우편번호","주소"};
	String data[][] = new String[0][2];
	DefaultTableModel dtm_zipcode = new DefaultTableModel(data,cols);
	
	JTable jtb_zipcode = new JTable(dtm_zipcode);
	JTableHeader jth = jtb_zipcode.getTableHeader();
	JScrollPane jsp_zipcode = new JScrollPane(jtb_zipcode
			,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED
			,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
	
	String zdos3[] = null;
	MemberShip memberShip = null;
	
	//DB연동에 필요한 변수들.
	Connection 			con = null;
	PreparedStatement pstmt = null;
	ResultSet 			 rs = null;
	DBConnectionMgr   dbMgr = null;
	
	//생성자
	public ZipCodeSearch() {
		zdos3 = getZDOList();
		jcb_zdo = new JComboBox(zdos3);
	}
	
	public ZipCodeSearch(MemberShip memberShip) {
		this();
		this.memberShip = memberShip;
	}
	
	//화면처리부
	public void initDisplay() {
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		
		jth.setBackground(Color.orange);
		jth.setFont(new Font("맑은고딕",Font.BOLD,18));
		
		jtb_zipcode.requestFocus();
		jtb_zipcode.addMouseListener(this);
		jbtn_search.addActionListener(this);
		jtf_search.addFocusListener(this);
		jtf_search.addActionListener(this);
		jp_north.setLayout(new BorderLayout());
		/*	*/
		//vzdos.copyInto(zdos2);
		for(int x=0;x<zdos2.length;x++) {
			vzdos.add(zdos2[x]);
		}
		for(String s:vzdos) {
			System.out.println("s===>"+s);
		}
		
/* String배열에 있는 정보를 굳이 벡터에 담아야 한다.
 * 생성자 선택을 Vector타입으로 결정했기 때문이다.
 * 벡터 자체는 값을 가지고 있지 않는 상태이다.
 * 값은 1차 배열 안에 초기화 되어 있다.
 * 이것을 벡터에 재 초기화 한다.
 * 그 후에 콤보박스를 생성하고 화면에 장착해야 리스트에서 값을 볼 수 있을 것이다.
 * 	
 */
//		jcb_zdo2 = new JComboBox(vzdos);//West
		jcb_zdo2 = new JComboBox(zdos3);//West
		jcb_zdo2.addItemListener(this);
		
		jp_north.add("West",jcb_zdo2);
		jp_north.add("Center",jtf_search);
		jp_north.add("East",jbtn_search);
		
		this.add("North",jp_north);
		this.add("Center",jsp_zipcode);
		this.setTitle("우편번호 검색");
		this.setSize(430, 400);
		this.setVisible(true);
	}
	
	//콤보박스에 나타낼 ZDO컬럼의 정보를 오라클 서버에서 가져오기.
	public String[] getZDOList() {
		String zdos[] = null;
		dbMgr = DBConnectionMgr.getInstance();
		
		//오라클 서버에 보낼 select문 작성
		//String 자체는원본이 바뀌지 않는 특성을 가진다.
		//StringBuilder는 단일 스레드에서 안전하고
		//StringBuffer는 다중 스레드에서 안전하다.
		StringBuilder sb = new StringBuilder();
		sb.append("SELECT '전체' ZDO FROM DUAL\r\n" + 
				"UNION ALL\r\n" + 
				"SELECT ZDO\r\n" + 
				"  FROM ( \r\n" + 
				"        SELECT DISTINCT(ZDO) ZDO\r\n" + 
				"          FROM ZIPCODE_T\r\n" + 
				"         ORDER BY ZDO ASC\r\n" + 
				"        )");
		try{
			con = dbMgr.getConnection();
			pstmt = con.prepareStatement(sb.toString());
			rs = pstmt.executeQuery();
			Vector<String> v = new Vector<>();
			List<String> v2 = new Vector<>();
			while(rs.next()) {
				String zdo = rs.getString("zdo");
				v.add(zdo);
			}
			zdos = new String[v.size()];
			v.copyInto(zdos);
			//v2.copyInto(zdos);
		} catch(Exception e) {
			
		} finally {
			
		}
		
		return zdos;
	}
	
	//메인메소드
	public static void main(String[] args) {
		JFrame.setDefaultLookAndFeelDecorated(true);
		ZipCodeSearch zcs = new ZipCodeSearch();
		zcs.initDisplay();
	}
	
	@Override
	public void focusGained(FocusEvent e) {
		System.out.println("focusGained 호출 성공");
		if(e.getSource() == jtf_search) {
		}
		
	}
	
	@Override
	public void focusLost(FocusEvent e) {
		
	}
	
	public void refreshData(String zdo, String dong) {
		System.out.println("zdo:"+zdo+", dong:"+dong);
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT ADDRESS, ZIPCODE");
		sql.append("  FROM ZIPCODE_T");
		sql.append(" WHERE 1=1");
		if(zdo!=null && zdo.length()>0) {
			sql.append(" AND ZDO=?");
		}
		if(dong!=null && dong.length()>0) {
			sql.append(" AND DONG LIKE '%'||?||'%'");
		}
		
		int i = 1;
		try{
			con = dbMgr.getConnection();
			pstmt = con.prepareStatement(sql.toString());
			if(zdo!=null && zdo.length()>0) {
				pstmt.setString(i++,zdo);
			}
			if(dong!=null && dong.length()>0) {
				pstmt.setString(i++, dong);
			}
			rs = pstmt.executeQuery();
			Vector<ZipCodeVO> v = new Vector<>();
			ZipCodeVO[] zVOS = null;
			ZipCodeVO zVO = null;
			while(rs.next()) {
				zVO = new ZipCodeVO();
				zVO.setAddress(rs.getNString("address"));
				zVO.setZipcode(rs.getInt("zipcode"));
				v.add(zVO);
			}
			zVOS = new ZipCodeVO[v.size()];
			v.copyInto(zVOS);
			if(v.size() > 0) {
				
			}
		} catch(Exception e) {
			
		} finally {
			
		}
	}
	
	
	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn_search || obj == jtf_search) {
		}
		
	}
	@Override
	public void itemStateChanged(ItemEvent e) {
		Object obj = e.getSource();
		if(obj == jcb_zdo2) {
			
		}
		
	}
	@Override
	public void mouseClicked(MouseEvent e) {
		
	}
	@Override
	public void mouseEntered(MouseEvent e) {
		
	}
	@Override
	public void mouseExited(MouseEvent e) {
		
	}
	@Override
	public void mousePressed(MouseEvent e) {
		if(e.getClickCount()==2) {
			System.out.println("더블 클릭 한거야");
		}
		
	}
	@Override
	public void mouseReleased(MouseEvent e) {
		
	}
}