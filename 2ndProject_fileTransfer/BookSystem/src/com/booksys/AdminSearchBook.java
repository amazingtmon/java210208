package com.booksys; // 관리자용 도서검색화면

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class AdminSearchBook extends JPanel implements ActionListener{
	JPanel jp_north = new JPanel();
	JPanel jp_south = new JPanel();

	JTextField jtf_ser = new JTextField(15); //검색창
	JComboBox<String> jcb_ser;				//콤보박스
	String [] ser = {"isbn13", "제목", "저자","출판사"};
	String[] colNames = {"isbn13", "title", "author", "publisher"};
	String colName = "isbn13";
	Long[] isbn13s;
	String[] titles, authors, publishers;
	JButton jbtn_ser = new JButton(new ImageIcon("src\\com\\booksys\\ser.png"));

	String cols[] = {"일련번호", "isbn13", "제목", "저자", "출판사", "대여가능여부"};
	DefaultTableModel dtm_book = new DefaultTableModel(cols,0); // 첫번째 data,두번째 컬럼
	JTable jtb_book = new JTable(dtm_book);
	JScrollPane jsp_book = new JScrollPane(jtb_book);

	JButton jbtn_sel = new JButton("도서 상세정보");
	JButton jbtn_in = new JButton("도서추가");
	JButton jbtn_up = new JButton("도서수정");
	JButton jbtn_del = new JButton("도서삭제");

	// 도서 전체 조회
	public AdminSearchBook() { 
		initDisplay();
		///////////////////////////////////////////
		Vector<BookVO> vec = null;
		DaoOracle dao = new DaoOracle();
		vec = dao.AllBookSQL();
		while(dtm_book.getRowCount() > 0) {
			dtm_book.removeRow(0);
		}
		for(int i=0; i< vec.size(); i++) {
			Vector<Object> oneRow = new Vector<Object>();
			oneRow.add(vec.get(i).getBookno());
			oneRow.add(vec.get(i).getIsbn13());
			oneRow.add(vec.get(i).getTitle());
			oneRow.add(vec.get(i).getAuthor());
			oneRow.add(vec.get(i).getPublisher());
			oneRow.add(vec.get(i).getRent());
			dtm_book.addRow(oneRow);
		}///////////////////////////////////////////
	}

	public void initDisplay() { // 화면 설정
		setLayout(new BorderLayout());
		jcb_ser = new JComboBox(ser);

		jp_north.add(jcb_ser);
		jp_north.add(jtf_ser);
		jp_north.add(jbtn_ser);
		jbtn_ser.setPreferredSize(new Dimension(30,26));
		jbtn_ser.setBorderPainted(false);
		jbtn_ser.setContentAreaFilled(false);
		jp_north.setBackground(new Color(25, 106, 179));
		jp_north.setFont(new Font("굴림", Font.BOLD, 30));
		jp_north.setForeground(new Color(255, 255, 255));

		jbtn_ser.addActionListener(this);
		jtf_ser.addActionListener(this);
		jbtn_sel.addActionListener(this);
		jbtn_in.addActionListener(this);
		jbtn_up.addActionListener(this);
		jbtn_del.addActionListener(this);

		jp_south.add(jbtn_sel);
		jp_south.add(jbtn_in);
		jp_south.add(jbtn_up);
		jp_south.add(jbtn_del);
		jbtn_sel.setBackground(new Color(25, 106, 179));
		jbtn_sel.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_sel.setForeground(new Color(255, 255, 255));
		jbtn_in.setBackground(new Color(25, 106, 179));
		jbtn_in.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_in.setForeground(new Color(255, 255, 255));
		jbtn_up.setBackground(new Color(25, 106, 179));
		jbtn_up.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_up.setForeground(new Color(255, 255, 255));
		jbtn_del.setBackground(new Color(25, 106, 179));
		jbtn_del.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_del.setForeground(new Color(255, 255, 255));

		jp_south.setBackground(new Color(255,255,255));

		this.add("North", jp_north);
		this.add("Center", jsp_book);
		this.add("South",jp_south);
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		// 검색 버튼 눌렀을때
		if(obj == jbtn_ser||obj == jtf_ser) {
			String type = jcb_ser.getSelectedItem().toString();
			Vector<BookVO> vec = null;
			DaoOracle dao = new DaoOracle();
			String search = jtf_ser.getText();
			if("제목".equals(type)) {
				type = "title";
			}
			else if("저자".equals(type)) {
				type = "author";
			}
			else if("출판사".equals(type)) {
				type = "publisher";
			}
			vec = dao.SearchSQL(type, search);
			while(dtm_book.getRowCount() > 0) {
				dtm_book.removeRow(0);
			}

			for(int i=0; i< vec.size(); i++) {
				Vector<Object> onRow = new Vector<Object>();
				onRow.add(vec.get(i).getBookno());
				onRow.add(vec.get(i).getIsbn13());
				onRow.add(vec.get(i).getTitle());
				onRow.add(vec.get(i).getAuthor());
				onRow.add(vec.get(i).getPublisher());
				onRow.add(vec.get(i).getRent());
				dtm_book.addRow(onRow);
			}
		}

		// 상세정보 버튼 눌렀을때
		else if(obj == jbtn_sel) {
			Vector<BookVO> vec = null;
			int index[] = jtb_book.getSelectedRows();
			if(index.length==0) {//테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "조회할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) {//선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();
				vec = dao.DetailSQL(bookno);
				OpenView oview = new OpenView(vec);
			}
		}
		// 도서추가 버튼 눌렀을때
		else if(obj == jbtn_in){
			OpenView oview = new OpenView();
		}

		// 도서 수정 버튼 눌렀을때
		else if(obj == jbtn_up) {
			Vector<BookVO> vec = null;
			int index[] = jtb_book.getSelectedRows();
			String check = dtm_book.getValueAt(index[0], 5).toString();
			if(index.length==0) {//테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "수정할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) {//선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}
			else if(check == "대여중") {//도서가 대여중일때
				JOptionPane.showMessageDialog(this, "대출중인 도서는 수정할 수 없습니다.","Error",JOptionPane.INFORMATION_MESSAGE);
			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();
				vec = dao.updateSQL(bookno);
				OpenView oview = new OpenView(vec, "도서수정");
			}
		}

		// 도서삭제 버튼 눌렀을때
		else if(obj == jbtn_del) {
			int index[] = jtb_book.getSelectedRows();
			String check = dtm_book.getValueAt(index[0], 5).toString();
			if(index.length==0) {//테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "삭제할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) {//선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}
			else if(check == "대여중") {//도서가 대여중일때
				JOptionPane.showMessageDialog(this, "대출중인 도서는 삭제할 수 없습니다.","Error",JOptionPane.INFORMATION_MESSAGE);
			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();//오라클 연결 실행
				int result = dao.deleteSQL(bookno);

				if(result == 1) {
					JOptionPane.showMessageDialog(this, "삭제를 완료했습니다.");               
				}
			}
		}
	}
}