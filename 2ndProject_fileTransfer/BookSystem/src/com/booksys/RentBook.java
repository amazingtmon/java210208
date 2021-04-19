package com.booksys;	// 대출도서목록 화면

import java.awt.BorderLayout;
import java.awt.Color;
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

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class RentBook extends JPanel implements ActionListener{
	JPanel jp_north = new JPanel();
	JPanel jp_south = new JPanel();

	JLabel jlb_top = new JLabel("대출 도서 목록");
	JButton jbtn_F5 = new JButton("새로고침");
	String cols[] = {"일련번호", "제목", "저자", "대출일", "반납일"};
	DefaultTableModel dtm_book = new DefaultTableModel(cols, 0); // 첫번째 data,두번째 컬럼
	JTable jtb_book = new JTable(dtm_book);
	JScrollPane jsp_book = new JScrollPane(jtb_book);

	JButton jbtn_sel = new JButton("대출도서 상세정보");
	JButton jbtn_del = new JButton("반납");
	JButton jbtn_re = new JButton("대출연장");

	public RentBook() {//생성자
		initDisplay();
		/////////////////전체조회메소드
		DaoOracle dao = new DaoOracle();
		Vector<BookVO> vecVO = new Vector<BookVO>();
		vecVO = dao.RentAllSQL();

		while(dtm_book.getRowCount() > 0) {
			dtm_book.removeRow(0);
		}
		for(int i=0;i<vecVO.size();i++) {
			Vector<Object> oneRow = new Vector<Object>();
			oneRow.add(vecVO.get(i).getBookno());
			oneRow.add(vecVO.get(i).getTitle());
			oneRow.add(vecVO.get(i).getAuthor());
			oneRow.add(vecVO.get(i).getRdate());
			oneRow.add(vecVO.get(i).getExpdate());
			dtm_book.addRow(oneRow);
		}
		//////////////전체조회 메소드 끝끝끝
	}

	public void initDisplay() { // 화면 설정
		setLayout(new BorderLayout());

		jp_north.add(jlb_top);
		jp_north.add(jbtn_F5);
		jp_north.setBackground(new Color(25, 106, 179));
		jlb_top.setFont(new Font("굴림", Font.BOLD, 20));
		jlb_top.setForeground(new Color(255, 255, 255));

		jbtn_F5.addActionListener(this);
		jbtn_sel.addActionListener(this);
		jbtn_re.addActionListener(this);
		jbtn_del.addActionListener(this);
		jbtn_sel.setBackground(new Color(25, 106, 179));
		jbtn_sel.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_sel.setForeground(new Color(255, 255, 255));
		jbtn_del.setBackground(new Color(25, 106, 179));
		jbtn_del.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_del.setForeground(new Color(255, 255, 255));
		jbtn_re.setBackground(new Color(25, 106, 179));
		jbtn_re.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_re.setForeground(new Color(255, 255, 255));

		jp_south.add(jbtn_sel);
		jp_south.add(jbtn_del);
		jp_south.add(jbtn_re);
		jp_south.setBackground(Color.WHITE);

		this.add("North", jp_north);
		this.add("Center", jsp_book);
		this.add("South",jp_south);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn_F5) {
			DaoOracle dao = new DaoOracle();
			Vector<BookVO> vecVO = new Vector<BookVO>();
			vecVO = dao.RentAllSQL();

			while(dtm_book.getRowCount() > 0) {
				dtm_book.removeRow(0);
			}
			for(int i=0;i<vecVO.size();i++) {
				Vector<Object> oneRow = new Vector<Object>();
				oneRow.add(vecVO.get(i).getBookno());
				oneRow.add(vecVO.get(i).getTitle());
				oneRow.add(vecVO.get(i).getAuthor());
				oneRow.add(vecVO.get(i).getRdate());
				oneRow.add(vecVO.get(i).getExpdate());
				dtm_book.addRow(oneRow);
			}
		}
		// 대출도서 상세정보 버튼 눌렀을때
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
		// 반납 버튼 눌렀을때
		else if(obj == jbtn_del){
			int index[] = jtb_book.getSelectedRows();
			if(index.length==0) { // 테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "반납할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) { // 선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();
				boolean result = dao.ReturnSQL(bookno);
				if(result == false) {
					JOptionPane.showMessageDialog(this, "반납을 완료했습니다.");               
				}
			}
		}
		// 대출연장 버튼 눌렀을때
		else if(obj == jbtn_re) {
			int index[] = jtb_book.getSelectedRows();
			if(index.length==0) { // 테이블의 데이터를 선택하지 않은 경우
				JOptionPane.showMessageDialog(this, "연장할 데이터를 선택하세요","Error",JOptionPane.ERROR_MESSAGE);
				return;
			}
			else if(index.length > 1) {//선택된 로우가 한 개 이상인 경우
				JOptionPane.showMessageDialog(this, "데이터를 한건만 선택하세요","Error",JOptionPane.INFORMATION_MESSAGE);
				return;
			}
			else {//그 나머지
				Integer bookno = Integer.parseInt(dtm_book.getValueAt(index[0], 0).toString());
				DaoOracle dao = new DaoOracle();
				boolean result = dao.DelaySQL(bookno);
				if(result == false) {
					JOptionPane.showMessageDialog(this, "대출을 연장했습니다.");               
				}
			}
		}
	}
}
