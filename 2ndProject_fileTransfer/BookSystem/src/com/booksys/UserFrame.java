package com.booksys; // 시작화면

import javax.swing.JFrame;
import javax.swing.JTabbedPane;

public class UserFrame extends JFrame {
	JTabbedPane tabs = null;
	//생성자
	public UserFrame() {
		tabs = new JTabbedPane(JTabbedPane.TOP);

		tabs.addTab("도서검색", new SearchBook());
		tabs.addTab("대출도서목록", new RentBook());

		add(tabs);

		setVisible(false); 
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setBounds(650,200,600,600); 
		setTitle("도서관리시스템");
	}


}