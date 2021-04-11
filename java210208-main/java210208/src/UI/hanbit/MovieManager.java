package UI.hanbit;

import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class MovieManager extends JFrame {
	//선언
	MovieCenter mvc = new MovieCenter();
	MovieSouth mvs = new MovieSouth();
	JPanel jp1 = new JPanel();
	JPanel jp2 = new JPanel();
	JButton jbtn1 = new JButton("button1");
	JButton jbtn2 = new JButton("button2");
	JButton jbtn3 = new JButton("button3");
	
	//생성자
	public MovieManager() {
		initDisplay();
	}
	
	//화면
	public void initDisplay() {
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		this.setLayout(new BorderLayout());
//		jp2.setLayout(new GridLayout(0,1,3,3));
//		jp1.setBackground(Color.BLUE);
//		jp2.setBackground(Color.yellow);
		
		this.add("Center", mvc);
		this.add("South", mvs);
		
//		this.add("Center", jp1);
//		this.add("West", jp2);
//	
//		jp2.add(jbtn1);
//		jp2.add(jbtn2);
//		jp2.add(jbtn3);
		
		this.setBounds(650, 200, 500, 600);
		this.setVisible(true);
	}
	
	//메인메소드
	public static void main(String[] args) {
		new MovieManager();
	}

}