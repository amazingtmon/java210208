package com.booksys;	// 회원목록 화면

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class AdminMember extends JPanel{
	JPanel jp_north = new JPanel();
	JPanel jp_south = new JPanel();

	JLabel jlb_top = new JLabel("회원 목록");

	String cols[] = {"회원아이디", "비밀번호" , "이름", "생성날짜"};
	DefaultTableModel dtm_mem = new DefaultTableModel(cols, 0); // 첫번째 data,두번째 컬럼
	JTable jtb_mem = new JTable(dtm_mem);
	JScrollPane jsp_mem = new JScrollPane(jtb_mem);

	MemberVO memberVO = null;
	AdminMember list;

	static DBConnection dbCon = null; 

	public AdminMember() {
		initDisplay();

		dbCon = DBConnection.getInstance();
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from member";

		try {
			con = dbCon.getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			Vector<MemberVO> vecVO = new Vector<MemberVO>();
			while(rs.next()) {
				memberVO = new MemberVO();
				memberVO.setMid(rs.getString("mid"));
				memberVO.setPw(rs.getString("pw"));
				memberVO.setMname(rs.getString("mname"));
				memberVO.setMdate(rs.getDate("mdate"));
				vecVO.add(memberVO);
			}

			while(dtm_mem.getRowCount() > 0) {
				dtm_mem.removeRow(0);
			}

			for(int i=0; i< vecVO.size(); i++) {
				Vector<Object> onRow = new Vector<Object>();
				onRow.add(vecVO.get(i).getMid());
				onRow.add(vecVO.get(i).getPw());
				onRow.add(vecVO.get(i).getMname());
				onRow.add(vecVO.get(i).getMdate());
				dtm_mem.addRow(onRow);
			}

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public void initDisplay() { // 화면 설정
		setLayout(new BorderLayout());
		jp_north.add(jlb_top);
		jp_north.setBackground(new Color(25, 106, 179));
		jlb_top.setFont(new Font("굴림", Font.BOLD, 20));
		jlb_top.setForeground(new Color(255, 255, 255));

		this.add("North", jp_north);
		this.add("Center", jsp_mem);
	}
}