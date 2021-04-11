package UI.hanbit;

import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;

public class MovieSouth extends JPanel {
	JTextArea jtx = new JTextArea();
	JButton jbtn1 = new JButton("south button");
	JButton jbtn2 = new JButton("south button2");
	JLabel  jbl	  = new JLabel("South label");
	
	public MovieSouth() {
		jbl.setHorizontalAlignment(JLabel.CENTER);
		
		this.setLayout(new BorderLayout());
		this.add("Center", jbl);
	}
	
}
