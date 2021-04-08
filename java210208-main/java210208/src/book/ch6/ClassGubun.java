package book.ch6;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class ClassGubun extends JFrame {
	JButton jbtn_search = new JButton("조회");
	JButton jbtn_exit = new JButton("종료");
	
	public void start() {
		jbtn_search.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent ae) {
				System.out.println("search!!");
				
			}
			
		});
		
		jbtn_exit.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent ae) {
				System.out.println("exit!!!");
				
			}
			
		});
	}
	
	public void initDisplay() {
		this.setLayout(new FlowLayout());
		this.add(jbtn_search);
		this.add(jbtn_exit);
		this.setSize(300, 200);
		this.setVisible(true);
	}
	
	public ClassGubun()	{
		initDisplay();
		start();
	}
	
	public static void main(String[] args) {
		new ClassGubun();
//		ClassGubun cg = new ClassGubun();
//		cg.initDisplay();
//		cg.start();
	}
}
