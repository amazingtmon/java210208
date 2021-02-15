package variable.step1;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

//인터페이스이다. 결합도를 낮추는 코드를 작성할 때 필요하다.클래스 설계시 필요함.
public class LoginView2 extends JFrame implements ActionListener{
	//java.lang에 있는 패키지가 아니므로 별도로 import해야한다.
	JFrame jf = new JFrame();
	JButton jbtn_login = new JButton("로그인");
	//화면 그리기 구현
	public void initDisplay() {
		this.add("North", jbtn_login);
		this.setTitle("네이버 로그인");
		this.setSize(500, 400);
		this.setVisible(true);//true: 화면에 보여줌, false:비활성화.
		jbtn_login.addActionListener(this);//이벤트 소스와 이벤트 처리를 담당하는 클래스 연결.
		//내 자신이 이벤트 처리를 담당하는 핸들러 클래스이다 라는 의미로 this를 사용하기도 한다. 
	}
	
	public static void main(String[] args) {
		LoginView2 view = new LoginView2();
		view.initDisplay();
	
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		//로그인 버튼을 누른것인가?
		if(jbtn_login==e.getSource()) {//이벤트 감지는 컴퓨터가. 주소번지는 내가 정해줌. 주소번지가 같은지 확인.
			System.out.println("환엽합니다.");
		}
		
	}

}
