package UI.hanbit;

import java.awt.Color;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JPanel;

public class MovieWest extends JPanel {
	JButton jb1 = new JButton("button1");
	JButton jb2 = new JButton("button2");
	JButton jb3 = new JButton("button3");
	
	public void MovieWest() {
		this.setBackground(Color.YELLOW);
		this.setLayout(new GridLayout(3,1));
		this.add(jb1);
		this.add(jb2);
		this.add(jb3);
	}
}
