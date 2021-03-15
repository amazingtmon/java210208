package constructor.step4;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class JComboBoxTest1 extends JFrame implements ActionListener{
	//선언부
	JPanel jp_north = new JPanel();
	
	String cate1[] = {"전체","가전","컴퓨터","모바일"};
	String cate2[] = {"전체","주방가전","생활가전","계절가전"};
	String cate3[] = {"전체","냉장고","세탁기","에어컨"};
	
	JComboBox<String> jcb_cate1 = new JComboBox<String>(cate1);
	JComboBox<String> jcb_cate2 = new JComboBox<String>(cate2);
	JComboBox<String> jcb_cate3 = new JComboBox<String>(cate3);
	
	//생성자
	public JComboBoxTest1() {
		initDisplay();
	}
	
	//화면 처리
	public void initDisplay() {
		
		jcb_cate1.addActionListener(this);
		
		jp_north.setBackground(Color.YELLOW);
		
		jp_north.add(jcb_cate1);
		jp_north.add(jcb_cate2);
		jp_north.add(jcb_cate3);
		
		this.add("North", jp_north);
		this.setTitle("대중소분류 실습 2021");
		this.setSize(400, 400);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new JComboBoxTest1();
		

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		String label = e.getActionCommand();
		if(obj == cate1[1]) {
			System.out.println("가전!!");
		}
		
	}

}
