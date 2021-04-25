package UI.hanbit;

import java.awt.Color;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;

import javax.swing.JButton;
import javax.swing.JComponent;
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
	
	//GridBagLayout
	GridBagLayout grid = new GridBagLayout();
    GridBagConstraints gbc = new GridBagConstraints();
	
	//생성자
	public MovieManager() {
		initDisplay();
	}
	
	//화면
	public void initDisplay() {
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		jp1.setBackground(Color.DARK_GRAY);
		
        gbc.fill = GridBagConstraints.BOTH;
        gbc.weightx = 1;
        gbc.weighty = 1;
		
		make(mvc, 0, 0, 1, 1);
		make(mvs, 1, 0, 1, 1);
		make(jp1, 2, 0, 1, 1);
		make(jp2, 3, 0, 1, 1);
		
		this.add(mvc);
		this.add(mvs);
		this.add(jp1);
		this.add(jp2);
		this.setLayout(grid);
		this.setBounds(650, 200, 500, 600);
		this.setVisible(true);
	}
	
	//그리드 레이아웃 
	// jcomponent인 객체에 x,y의 좌표의 시작점에서 w,h 크기의 단추를 만듭니다
    public void make(JComponent c, int x, int y, int w, int h) {

        gbc.gridx = x;

        gbc.gridy = y;

        gbc.gridwidth = w;

        gbc.gridheight = h;



        grid.setConstraints(c, gbc);
        // GridBagLayout의 GridBagConstraints의 set하는 방법
 }
	
	//메인메소드
	public static void main(String[] args) {
		new MovieManager();
	}

}
