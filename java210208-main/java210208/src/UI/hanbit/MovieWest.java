package UI.hanbit;

import java.awt.BorderLayout;
import java.awt.Color;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class MovieWest extends JPanel {
	JButton jbtn1 = new JButton("button1");
	JLabel  jbl	  = new JLabel("West label");
	
	public MovieWest() {
		jbl.setHorizontalAlignment(JLabel.CENTER);
		
		this.setBackground(Color.yellow);
		this.setLayout(new BorderLayout());
		this.add("North", jbtn1);
		this.add("Center", jbl);
	}
}
