package level2.basic;

import javax.swing.JButton;
import javax.swing.JFrame;

public class A extends JFrame {
	JButton jbtn = null;
	boolean isView = false;
	
	public A() {
		initDisplay();
	}
	
	public A(boolean isView) {
		this.isView = isView;
		jbtn = new JButton();
		jbtn.setText("button!!!");
		initDisplay();
	}
	
	public void initDisplay() {
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.add("Center", jbtn);
		this.setSize(400, 400);
		this.setVisible(isView);
	}
	
	public static void main(String[] args) {
		new A(true);

	}

}
