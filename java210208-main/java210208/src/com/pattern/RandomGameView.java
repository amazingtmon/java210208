package com.pattern;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class RandomGameView extends JFrame implements ActionListener {
	//선언부
	//동쪽에 붙일 속지 선언 및 생성
	JPanel jp_east = new JPanel();
	JButton jbtn_new = new JButton("새게임");
	JButton jbtn_clear = new JButton("지우기");
	JButton jbtn_dap = new JButton("정답");
	JButton jbtn_exit = new JButton("종료");
	
	JTextArea jta_display = new JTextArea(7,20);
	
	//남쪽에 그려질 속지 선언 및 생성. 여기에 버튼 10개 삽입예정.
	JPanel jp_south = new JPanel();
	JButton jbtns[] = new JButton[10];//방 10개만 생성해놓음.
	//참조형 타입의 초기화는 null로 할 수 있다.
	JButton jbtn = null;
	String nums_label[] = {"0","1","2","3","4","5","6","7","8","9"};//10개 방에 문자열로 초기화시킴.
	//생성자
	
	//화면처리부
	public void initDisplay() {
		JFrame jf = new JFrame();
		
		jbtn_exit.addActionListener(this);
		
		jp_south.setLayout(new GridLayout(1,10,3,3));
		for(int i=0; i<jbtns.length; i++) {
			jbtn = new JButton(nums_label[i]);
			jp_south.add(jbtn);
			jbtns[i] = jbtn;
			jbtn.addActionListener(this);
			
		}
		
		jp_east.setLayout(new GridLayout(4,1,2,2));
		jp_east.add(jbtn_new);
		jp_east.add(jbtn_clear);
		jp_east.add(jbtn_dap);
		jp_east.add(jbtn_exit);
		JScrollPane jsp_display = new JScrollPane(jta_display, 
				JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, 
				JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
		
		jp_east.setBackground(Color.blue);
		jp_south.setBackground(Color.red);
		jf.setLayout(new BorderLayout());
		
		jf.add("East", jp_east);
		jf.add("Center", jta_display);
		jf.add("South", jp_south);
		
		jf.setSize(500, 400);
		jf.setVisible(true);
	}
	
	//메인메소드
	public static void main(String[] args) {
		RandomGameView rgView = new RandomGameView();
		rgView.initDisplay();

	}


	@Override
	public void actionPerformed(ActionEvent e) {
		System.out.println("actionPerformed호출 성공");
		String command = e.getActionCommand();
		System.out.println(command+", "+e.getSource());
		if(e.getSource() == jbtn_exit) {
			System.exit(0);//자바 가상머신과의 연결고리가 끊어짐.
		} else if("5".equals(command)) {
			jta_display.append(command);
		}
		
	}

}
