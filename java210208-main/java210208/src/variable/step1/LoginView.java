package variable.step1;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

//인터페이스이다. 결합도를 낮추는 코드를 작성할 때 필요하다.클래스 설계시 필요함.
public class LoginView extends Object implements ActionListener{
	//java.lang에 있는 패키지가 아니므로 별도로 import해야한다.
	JFrame jf = new JFrame();
	JButton jbtn_login = new JButton("로그인");
	
	//화면 그리기 구현
	public void initDisplay() {
		jf.add("North", jbtn_login);
		jf.setSize(500, 400);
		jf.setVisible(true);//true: 화면에 보여줌, false:비활성화.
		jbtn_login.addActionListener(this);//이벤트 소스와 이벤트 처리를 담당하는 클래스 연결.
		//내 자신이 이벤트 처리를 담당하는 핸들러 클래스이다 라는 의미로 this를 사용하기도 한다. 
	}
	
	public static void main(String[] args) {
		LoginView view = new LoginView();
		view.initDisplay();

	}
	//어노테이션이다.
	//같은 이름의 메소드를 여러개 정의할 수 있다. - 뒷받침하는 개념이 오버로딩과 오버라이딩(메소드이름이 같고 서로 상속관계일때)이다.
	@Override
	public void actionPerformed(ActionEvent e) {//콜백메소드. 내가 호출하는 메소드가 아니라 이벤트감지가 일어나면 자동 호출됨.
		//로그인 버튼을 누른것인가?
		if(jbtn_login==e.getSource()) {//이벤트 감지는 컴퓨터가. 주소번지는 내가 정해줌. 주소번지가 같은지 확인.
			System.out.println("환엽합니다.");
		}
		
	}

}
