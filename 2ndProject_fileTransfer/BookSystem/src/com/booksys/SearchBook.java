package com.booksys; // 도서검색화면

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.CallableStatement;
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


public class SearchBook extends JPanel implements ActionListener{
	SearchBook sBook = null;
	JPanel jp_north = new JPanel();
	JPanel jp_south = new JPanel();

	JTextField jtf_ser = new JTextField(15);
	JComboBox<String> jcb_ser;
	String [] ser = {"isbn13", "제목", "저자","출판사"};
	String[] colNames = {"isbn13", "title", "author", "publisher"};
	String colName = "isbn13";
	Long[] isbn13s;
	String[] titles, authors, publishers;
	JButton jbtn_ser = new JButton(new ImageIcon("src\\com\\booksys\\ser.png"));

	String cols[] = {"일련번호", "isbn13", "제목", "저자", "출판사", "대여가능여부"};
	DefaultTableModel dtm_book = new DefaultTableModel(cols,0);

	JTable jtb_book = new JTable(dtm_book);
	JScrollPane jsp_book = new JScrollPane(jtb_book);

	JButton jbtn_sel = new JButton("도서 상세정보");
	JButton jbtn_in = new JButton("도서대출");

	// 도서 전체 조회 - 도서번호, isbn13, 제목, 저자, 출판사, 대여가능여부
	public SearchBook() { //생성자
		initDisplay();
		////////////////전체조회메소드
		DaoOracle dao = new DaoOracle();
		Vector<BookVO> vecVO = new Vector<BookVO>();
		vecVO = dao.AllBookSQL();

		while(dtm_book.getRowCount() > 0) {
			dtm_book.removeRow(0);
		}
		for(int i=0; i< vecVO.size(); i++) {
			Vector<Object> onRow = new Vector<Object>();
			onRow.add(vecVO.get(i).getBookno());
			onRow.add(vecVO.get(i).getIsbn13());
			onRow.add(vecVO.get(i).getTitle());
			onRow.add(vecVO.get(i).getAuthor());
			onRow.add(vecVO.get(i).getPublisher());
			onRow.add(vecVO.get(i).getRent());
			dtm_book.addRow(onRow);
		}
		////////////////전체조회메소드 끝끝끝끝
	}
	//화면처리부
	public void initDisplay() { // 화면 설정
		setLayout(new BorderLayout());
		jcb_ser = new JComboBox(ser);

		jp_north.add(jcb_ser);
		jp_north.add(jtf_ser);
		jp_north.add(jbtn_ser);
		jp_north.setBackground(new Color(25, 106, 179));
		jbtn_ser.setPreferredSize(new Dimension(30,26));
		jbtn_ser.setBorderPainted(false);
		jbtn_ser.setContentAreaFilled(false);

		jbtn_ser.addActionListener(this);
		jtf_ser.addActionListener(this);
		jbtn_sel.addActionListener(this);
		jbtn_in.addActionListener(this);

		jp_south.add(jbtn_sel);
		jp_south.add(jbtn_in);
		jp_south.setBackground(Color.white);
		jbtn_sel.setBackground(new Color(25, 106, 179));
		jbtn_sel.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_sel.setForeground(new Color(255, 255, 255));
		jbtn_in.setBackground(new Color(25, 106, 179));
		jbtn_in.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_in.setForeground(new Color(255, 255, 255));

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

		// 대출하기 바튼 눌렀을때
		else if(obj == jbtn_in){
			int index[] = jtb_book.getSelectedRows();
			String check = dtm_book.getValueAt(index[0], 5).toString();
			if(index.length==0) {//테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "조회할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) {//선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}

			else if(check == "대여중") {//도서가 대여중일때
				JOptionPane.showMessageDialog(this, "이미 대출중인 도서입니다.","Error",JOptionPane.INFORMATION_MESSAGE);

			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();
				boolean result = dao.RentSQL(bookno);

				if(result == false) {
					JOptionPane.showMessageDialog(this, "대출을 완료했습니다.");               
				}
			}
		}
	}
}