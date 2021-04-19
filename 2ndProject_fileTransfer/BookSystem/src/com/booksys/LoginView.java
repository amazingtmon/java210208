package com.booksys;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.PasswordAuthentication;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

public class LoginView implements ActionListener {
	JFrame jf = new JFrame();
	JPanel jp_center = new JPanel();

	JLabel jlb_top = new JLabel("회원 로그인");
	JTextField jtf_id = new JTextField(); // 아이디입력
	JPasswordField jpa_pw = new JPasswordField(); // 비밀번호입력

	JButton jbtn_login = new JButton("로그인");

	MemberVO memVO = null;
	public LoginView() {    
		initDisplay();
	}
	public void initDisplay() {
		jp_center.setLayout(null);
		jlb_top.setBounds(105, 20, 150, 25);
		jlb_top.setFont(new Font("굴림", Font.BOLD, 20));
		jtf_id.setBounds(90, 55, 150, 25);
		jpa_pw.setBounds(90, 85, 150, 25);
		jbtn_login.setBounds(90, 120, 150, 40);

		jp_center.add(jlb_top);
		jp_center.add(jtf_id);
		jp_center.add(jpa_pw);
		jp_center.add(jbtn_login);
		jbtn_login.setBackground(new Color(25, 106, 179));
		jbtn_login.setFont(new Font("굴림", Font.BOLD, 20));
		jbtn_login.setForeground(new Color(255, 255, 255));

		jbtn_login.addActionListener(this);
		jpa_pw.addActionListener(this);

		jf.add("Center", jp_center);
		jp_center.setBackground(Color.white);

		jf.setVisible(true);
		jf.setBounds(780, 350, 350, 250);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jf.setTitle("로그인");
	}

	public static void main(String[] args) {
		new LoginView();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn_login || obj == jpa_pw) {
			DaoOracle dao = new DaoOracle();
			dao.loginSQL(this, jtf_id.getText(), jpa_pw.getText());
		}
	}
}