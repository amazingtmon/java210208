package book.ch5;

import javax.swing.JFrame;
/*
 * extends로 JFrame을 상속받는 경우 AddressBook class를 다른 외부 class에서 인스턴스화를 진행했을때,
 * JFrame의 반복적인 호출이 일어나는 것을 방지할 수 있다.
 * 즉, 상속(extends)은 JFrame을 직접 인스턴스화 하지 않으며, JFrame에 대한 복제본을 만들지 않는다.
 * 
 * */
public class AddressBook extends JFrame{//extends = 상속.
	//선언부
	
	//생성자
	public AddressBook () {
		initDisplay();
	}
	
	//화면처리부
	public void initDisplay() {
		this.setTitle("주소록 - Ver1.0");
		this.setSize(500, 500);
		this.setVisible(true);
	}
	public static void main(String[] args) {
		AddressBook aBook = new AddressBook();
		aBook.initDisplay();
		

	}

}
