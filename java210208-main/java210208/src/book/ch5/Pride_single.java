package book.ch5;
/*
 * 싱글톤 패턴의 정의
 * 해당 클래스의 인스턴스가 하나만(정적이다) 만들어지고 어디서든지(public) 그 인스턴스에 접근할 수 있도록
 * 하기 위한 패턴이다.
 * 클래스변수 - static variable, 값은 하나다.
 * 인스턴스변수 - 인스턴스화가 필요하다.
 * 방법1 - 고전적인 싱글톤 패턴 구현법
 * 방법2 - 성능이나 병목현상을 고려하여 구현하기
 * 
 * */
public class Pride_single {
	//클래스 변수 - static이 붙은 것.
	static int wheelNum = 0;
	int 		  speed = 0;
	
	//생성자
	private Pride_single() {
		
	}
	
	public Pride_single(int speed) {
		this.speed = speed;
	}
	
	public Pride_single(int wheelNum, int speed) {
		this.speed = speed;
		this.wheelNum = wheelNum;
	}
	
	void speedUp() {
		speed = speed + 1;
	}
	
//	static void stop() {
//		speed = 0;
//	}
	
	static void change() {
		wheelNum = 2;
	}
	
	public void print() {
		System.out.println("W: "+wheelNum+","+"S: "+speed);
	}
}
