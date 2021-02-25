package book_ch4;

import java.util.StringTokenizer;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class SwitchTest_2 extends JFrame{

	public static void main(String[] args) {
		SwitchTest_2 st2 = new SwitchTest_2();
		int protocol = 0;
		
		String id = "tomato";
		String input = "오늘 스터디 할까?";
		String msg = 300+"#"+id+"#"+input;
		
		//"#"을 기준으로 String msg 를 300, id, input 순서대로 끊는다.
		StringTokenizer st = new StringTokenizer(msg, "#");
		
		protocol = Integer.parseInt(st.nextToken());
		String s_id = st.nextToken();
		String s_input = st.nextToken();
		

		switch(protocol) {//원시형 타입 + String 타입
			case 100:
				//실행문
				System.out.println("100");
				break;
			case 200:
				//실행문
				System.out.println("301");
				break;
			case 300:
				//실행문
				System.out.println("["+s_id+"]"+s_input);
				break;
			default:
				JOptionPane.showMessageDialog(st2, "Wrong message");
				System.out.println("Wrong");
				break;
				
		}//////////end of switch
		System.out.println("여기");
	}

}
