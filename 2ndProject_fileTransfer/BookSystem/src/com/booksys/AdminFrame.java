package com.booksys; // 관리자용 전체화면

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTabbedPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class AdminFrame extends JFrame {
	AdminSearchBook search;
	AdminMember list;
	JTabbedPane tabs;

	public AdminFrame() {
		tabs = new JTabbedPane(JTabbedPane.TOP);
		search = new AdminSearchBook();
		list = new AdminMember();

		tabs.add("도서검색", search);
		tabs.add("회원목록", list);

		add(tabs);

		setVisible(false); 
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setBounds(650,200,600,600); 
		setTitle("도서관리시스템-관리자용");
	}
}