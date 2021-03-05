package ch5.singleton;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class ViewApp1_2 implements ActionListener{
	JFrame jf = new JFrame();
	JFrame jf2 = null;
	JButton jbtn_click = null;
	
	public void initDisplay() {
		jf2 = new JFrame();
		jbtn_click = new JButton("버튼");
		
		jbtn_click.addActionListener(this);
		/*
		 * 이벤트처리 메소드가 외부에 있을때
		 * ViewAppEvent ve = new ViewAppEvent();
		 * jbtn_click.addActionListener(ve);
		 * */
		
		jf2.add("North", jbtn_click);
		
		jf2.setSize(300, 300);
		jf2.setVisible(true);
		
	}
	

	public static void main(String[] args) {
		ViewApp1_2 va2 = new ViewApp1_2();
		va2.initDisplay();
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn_click) {
			System.out.println("버튼!!");
		}
		
	}

}
