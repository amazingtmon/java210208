package ch5.singleton;

import javax.swing.JButton;
import javax.swing.JFrame;

public class ViewApp2 {
	JFrame jf = new JFrame();
	JFrame jf2 = null;
	JButton jbtn = null;
	EventHandler2 eh2 = null;
	
	public void initDisplay() {
		eh2 = new EventHandler2(this);
		
		jbtn.addActionListener(eh2);
		jbtn = new JButton("전송");
		jf.add("North", jbtn);
		jf.setSize(300, 300);
		jf.setVisible(true);
		
	}

	public static void main(String[] args) {
		ViewApp2 va2 = new ViewApp2();
		va2.initDisplay();
	}
}
