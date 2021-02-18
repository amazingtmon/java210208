package book.ch7;

import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;

public class ObjectArray {

	public static void main(String[] args) {
		//JFrame은 윈도우 운영체제에서 창을 띄울때 사용하는 클래스이다.
		JFrame jf = new JFrame();
		
		//그 화면안에 버튼을 배치하기 위해서는 Layout에 대한 설정이 필요하다.
		//똑같은 크기의 방이 10개가 필요하다.
		jf.setLayout(new GridLayout(1,10));
		//버튼의 갯수가 10개 이므로 객체 배열의 크기를 10으로 하였다.
		JButton jbtns[] = new JButton[10];
		
		//버튼에 들어갈 숫자문자열을 생성.
		String jbtn_label[] = {"0","1","2","3","4","5","6","7","8","9"};
		
		JButton jbtn = null;
		for(int i=0; i<jbtns.length; i++) {
			//jbtn_label에서 생성 및 초기화된 문자열 배열을 JButton객체를 생성할 때 
			//생성자의 파라미터로 사용하여 버튼의 라벨을 출력하였다.
			jbtn = new JButton(jbtn_label[i]);
			jbtns[i] = jbtn;
			jf.add(jbtn);
			System.out.println(jbtns +": "+jbtns[i].getText());
		}
		
		jf.setTitle("객체 배열 실습");
		jf.setSize(400, 300);
		jf.setVisible(true);

	}

}
