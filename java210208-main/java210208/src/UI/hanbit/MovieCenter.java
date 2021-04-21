package UI.hanbit;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class MovieCenter extends JPanel {
	JPanel	mvw = null;
	MovieSouth mvs = new MovieSouth();
	JButton jbtn1 = new JButton("button1");
	JButton jbtn2 = new JButton("button2");
	JLabel  jbl	  = new JLabel("Center label");
	JLabel  jbl2  = new JLabel("Center label");
	
	public MovieCenter() {
		mvw = new MovieWest();
		jbl.setHorizontalAlignment(JLabel.CENTER);
		
		this.setBackground(Color.gray);
		this.setLayout(new BorderLayout());
		this.add("Center", jbl);
		this.add("West", mvw);
	}
	
}
