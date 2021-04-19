package com.booksys;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class OpenView extends JDialog implements ActionListener{

	//중단
	JPanel jp_center = new JPanel();
	JLabel jlb_bookno = new JLabel("일련번호"); // 일련번호
	JTextField jtf_bookno = new JTextField();// 일련번호
	JLabel jlb_isbn13 = new JLabel("isbn13"); // isbn13
	JTextField jtf_isbn13 = new JTextField();// isbn13
	JLabel jlb_title = new JLabel("제목");  // 제목  
	JTextField jtf_title = new JTextField();// 제목  
	JLabel jlb_author = new JLabel("저자");	// 저자
	JTextField jtf_author = new JTextField();// 저자
	JLabel jlb_publisher =  new JLabel("출판사"); // 출판사
	JTextField jtf_publisher = new JTextField();// 출판사
	JLabel jlb_pubdate = new JLabel("발행일");	// 발행일 
	JTextField jtf_pubdate = new JTextField();// 발행일 
	JLabel jlb_desc = new JLabel("책소개");	// 책소개 
	JTextArea jta_desc = new JTextArea();  // 책소개 
	JScrollPane jsp = new JScrollPane(jta_desc);
	//하단
	JPanel jp_bottom  = new JPanel();
	JButton jbtn_close = new JButton("닫기");//닫기
	JButton jbtn_insert = new JButton("추가");//추가
	JButton jbtn_update = new JButton("수정");//수정


	//생성자
	public OpenView() {//도서 추가일때
		jp_bottom.add(jbtn_insert);
		initDisplay();


	}
	public OpenView(Vector<BookVO> vec) {//도서 조회일때 
		jtf_bookno.setText(String.valueOf(vec.get(0).getBookno()));
		jtf_isbn13.setText(String.valueOf(vec.get(0).getIsbn13()));
		jtf_title.setText(vec.get(0).getTitle());
		jtf_author.setText(vec.get(0).getAuthor());
		jtf_publisher.setText(vec.get(0).getPublisher());
		jtf_pubdate.setText(String.valueOf(vec.get(0).getPub_date()));
		jta_desc.setText(vec.get(0).getDesciption());
		jtf_bookno.setEnabled(false);
		jtf_isbn13.setEnabled(false);
		jtf_title.setEnabled(false);
		jtf_author.setEnabled(false);
		jtf_publisher.setEnabled(false);
		jtf_pubdate.setEnabled(false);
		jta_desc.setEnabled(false);
		initDisplay();

	}
	public OpenView(Vector<BookVO> vec, String isFlag) {//도서 수정일때 
		jtf_bookno.setText(String.valueOf(vec.get(0).getBookno()));
		jtf_isbn13.setText(String.valueOf(vec.get(0).getIsbn13()));
		jtf_title.setText(vec.get(0).getTitle());
		jtf_author.setText(vec.get(0).getAuthor());
		jtf_publisher.setText(vec.get(0).getPublisher());
		jtf_pubdate.setText(String.valueOf(vec.get(0).getPub_date()));
		jta_desc.setText(vec.get(0).getDesciption());
		jtf_bookno.setEnabled(false);
		jp_bottom.add(jbtn_update);
		initDisplay();

	}
	//화면처리부
	public void initDisplay() {
		//중단
		jp_center.setLayout(null);
		jlb_bookno.setBounds(70, 40, 100, 20);
		jtf_bookno.setBounds(150, 40, 270, 23);
		jlb_isbn13.setBounds(70, 70, 100, 20);
		jtf_isbn13.setBounds(150, 70, 270, 23);
		jlb_title.setBounds(70, 100, 100, 20);
		jtf_title.setBounds(150, 100, 270, 23);
		jlb_author.setBounds(70, 130, 100, 20);
		jtf_author.setBounds(150, 130, 270, 23);
		jlb_publisher.setBounds(70, 160, 100, 20);
		jtf_publisher.setBounds(150, 160, 270, 23);
		jlb_pubdate.setBounds(70, 190, 100, 20);
		jtf_pubdate.setBounds(150, 190, 270, 23);
		jlb_desc.setBounds(70, 220, 100, 20);
		jsp.setBounds(150, 220, 270, 40);
		jp_center.add(jlb_bookno);
		jp_center.add(jtf_bookno);
		jp_center.add(jlb_isbn13);
		jp_center.add(jtf_isbn13);
		jp_center.add(jlb_title);
		jp_center.add(jtf_title);
		jp_center.add(jlb_author);
		jp_center.add(jtf_author);
		jp_center.add(jlb_publisher);
		jp_center.add(jtf_publisher);
		jp_center.add(jlb_pubdate);
		jp_center.add(jtf_pubdate);
		jp_center.add(jlb_desc);
		jp_center.add(jsp);
		jp_center.setBackground(Color.white);

		//하단
		jbtn_close.addActionListener(this);
		jbtn_close.setBackground(new Color(25, 106, 179));
		jbtn_close.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_close.setForeground(new Color(255, 255, 255));
		jbtn_insert.addActionListener(this);
		jbtn_insert.setBackground(new Color(25, 106, 179));
		jbtn_insert.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_insert.setForeground(new Color(255, 255, 255));
		jbtn_update.addActionListener(this);
		jbtn_update.setBackground(new Color(25, 106, 179));
		jbtn_update.setFont(new Font("굴림", Font.BOLD, 17));
		jbtn_update.setForeground(new Color(255, 255, 255));


		jp_bottom.setBackground(Color.white);
		jp_bottom.add(jbtn_close);


		//프레임
		this.add("Center", jp_center);
		this.add("South",jp_bottom);
		this.setTitle("도서 상세조회");
		this.setSize(500, 450);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		this.setVisible(true);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn_close) {//닫기
			this.dispose();
		}
		else if(obj == jbtn_insert) {//도서 추가
			Vector<BookVO> vec = new Vector<BookVO>();
			BookVO bvo = new BookVO();
			bvo.setBookno(Integer.parseInt(jtf_bookno.getText()));
			bvo.setIsbn13(Long.parseLong(jtf_isbn13.getText()));
			bvo.setTitle(jtf_title.getText());
			bvo.setAuthor(jtf_author.getText());
			bvo.setPublisher(jtf_publisher.getText());
			bvo.setPub_date(Integer.parseInt(jtf_pubdate.getText()));
			bvo.setDesciption(jta_desc.getText());
			vec.add(bvo);
			DaoOracle dao = new DaoOracle();
			int result = dao.insertSQL(vec);
			if(result ==1) {
				JOptionPane.showMessageDialog(this, "도서추가를 완료했습니다.");    
			}
		}
		else if(obj == jbtn_update) {//도서 수정
			Vector<BookVO> v = new Vector<BookVO>();
			BookVO bvo = new BookVO();
			bvo.setBookno(Integer.parseInt(jtf_bookno.getText()));
			bvo.setIsbn13(Long.parseLong(jtf_isbn13.getText()));
			bvo.setTitle(jtf_title.getText());
			bvo.setAuthor(jtf_author.getText());
			bvo.setPublisher(jtf_publisher.getText());
			bvo.setPub_date(Integer.parseInt(jtf_pubdate.getText()));
			bvo.setDesciption(jta_desc.getText());
			v.add(bvo);
			DaoOracle dao = new DaoOracle();
			int result = dao.updateEndSQL(v);
			if(result ==1) {
				JOptionPane.showMessageDialog(this, "도서수정을 완료했습니다.");
			}
		}

	}

}
