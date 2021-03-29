package level2.basic;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;

//JLabel은 ActionListener를 지원받지 못한다.

public class FrameRefresh implements ActionListener, MouseListener{
	//선언
	JFrame jf = new JFrame();
	JPanel jp = new JPanel();
	JPanel jp_north = new JPanel();
	JTextArea jta_display = new JTextArea();
	JLabel jlb = new JLabel("화면갱신");
	JButton jbtn1 = new JButton("Button1!!");
	JButton jbtn2 = new JButton("Button2!!");
	JButton jbtn3 = new JButton("Button3!!");
	
	//생성자
	public FrameRefresh() {
		initDisplay();
	}
	
	//화면
	public void initDisplay() {
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		jlb.addMouseListener(this);
		jbtn2.addActionListener(this);
		
		jp.setLayout(new BorderLayout());
		jp.add("Center", jta_display);
		jp.add("South", jlb);
		jp.add("North", jbtn1);
		
		jp_north.setLayout(new GridLayout(1,2));
		jp_north.add(jbtn2);
		jp_north.add(jbtn3);
		
		jf.setLayout(new BorderLayout());
		jf.add("Center", jp);
		jf.add("North", jp_north);
		jf.setSize(400, 400);
		jf.setVisible(true);
	}
	
	protected void viewAllUpdate(ActionEvent e) {
		//선언부여ㅘ 생성부를 다르게 하여 인스턴스화를 하면 인스턴스 변수로는 
		//부모타입에서 제공되는 메소드만 사용할 수 있다.
		//자녀 클래스의 메소드는 호출이 불가하다.
		//JPanel jp = new CenterPanel();
		CenterPanel jp = new CenterPanel();
		jp.initDisplay();//initDisplay(); 를 호출하려면 CenterPanel로 선언해야한다.
		jf.add("Center", jp);
		jf.revalidate();
	}
	
	public void viewUpdate(MouseEvent me) {
		jta_display.setBackground(Color.orange);
		jp.remove(jbtn1);
		jp.revalidate();
	}
	
	public static void main(String[] args) {
		new FrameRefresh();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		
		if(obj == jbtn2) {
			viewAllUpdate(e);
		} else if(obj == jbtn3) {
			
		}
		
	}


	@Override
	public void mouseClicked(MouseEvent me) {
		System.out.println("JLabel");
		viewUpdate(me);
	}


	@Override
	public void mouseEntered(MouseEvent arg0) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void mouseExited(MouseEvent arg0) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void mousePressed(MouseEvent arg0) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void mouseReleased(MouseEvent arg0) {
		// TODO Auto-generated method stub
		
	}

}
