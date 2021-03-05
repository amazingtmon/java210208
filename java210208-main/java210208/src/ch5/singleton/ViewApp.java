package ch5.singleton;

import javax.swing.JButton;
import javax.swing.JFrame;

public class ViewApp {
	JFrame jf = new JFrame();
	JFrame jf2 = null;
	JButton jbtn = new JButton("전송");
	EventHandler eh = null;
	
	public void initDisplay() {
		eh = new EventHandler(this);
		
		jbtn.addActionListener(eh);
		jf.add("North", jbtn);
		jf.setSize(300, 300);
		jf.setVisible(true);
		
	}

	public static void main(String[] args) {
		ViewApp va = new ViewApp();
		va.initDisplay();
	}
}
