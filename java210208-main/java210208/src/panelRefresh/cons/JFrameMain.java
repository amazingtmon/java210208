package panelRefresh.cons;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;

public class JFrameMain extends JFrame implements ActionListener{
	//선언부
	JPanel1 jp1 = new JPanel1(this);
	
	JPanel			jp    = new JPanel();
	JTextArea 		jta   = new JTextArea();
	JButton 		jbtn  = new JButton("Button!!");
	
	public JFrameMain() {
		initDisplay();
	}
	
	public void initDisplay() {
		jbtn.addActionListener(this);
		
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		this.setLayout(new BorderLayout());
		
		jp.setLayout(new BorderLayout());
		jp.add("Center", jta);
		this.add("Center", jp);
		this.add("South", jbtn);
		
		this.setTitle("JFrame Testing");
		this.setSize(500, 500);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new JFrameMain(); 	
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if(obj == jbtn) {
			Container cont = this.getContentPane();
			if(jp != null) {
				cont.remove(jp);
				cont.remove(jbtn);
			}
			JPanel1 jp1 = null;
			jp1 = new JPanel1();
			this.add("Center", jp1);
			cont.revalidate();
		}
		
	}

}
