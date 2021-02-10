package variable.step1;

public class Quiz1 {
	//컴파일은 저장이 될때 실행된다.
	//메소드에는 2가지 종류가 있다.
	//JVM에서 제공되는 메소드와 사용자정의 메소드
	//메소드 선언 순서는 -> 타입 메소드이름() {실행문;}
	int methodA (int a) {
		return 1;
	}
	
	float methodB (float a) {
		return (float) 1;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Quiz1 q = new Quiz1();
		System.out.println(q.methodA(1));
		System.out.println(q.methodB(1));
		
		//methodC의 호출이 선언 앞에 오더라도 에러가 아님.
		//자바는 절차지향의 프로그램 언어가 아니다.
		//자바는 객체지향 언어이므로 호출순서와는 상관이 없다.
		//자바에서는 같은 이름의 메소드를 중복하여 선언할 수 있다.
		//이것을 가능하게 하는 규칙은 메소드 오버로딩이다.
		//메소드 오버로딩은 반드시 파라미터의 타입이 다르거나, 파라미터의 갯수가 달라야 한다.
		//주의사항: 리턴타입이 있고 없고는 영향을 주지 않는다.
//		q.methodC();
		q.methodC(1);
		System.out.println(q.methodC("a"));
	}

//	private void methodC() {
//		//private = 내 안에서만 사용가능하다. 외부 클래스에서는 접근이 불가하다.
//		//호출이 안됨. 재사용 불가.
//		System.out.println("methodA 호출 성공");
//	}
	
	private int methodC(int a) {
		//private = 내 안에서만 사용가능하다. 외부 클래스에서는 접근이 불가하다.
		//호출이 안됨. 재사용 불가.
		System.out.println("methodC(int a) 호출 성공!!!" + a);
		return 1;
	}
	
	private String methodC(String a) {
		//private = 내 안에서만 사용가능하다. 외부 클래스에서는 접근이 불가하다.
		//호출이 안됨. 재사용 불가.
		System.out.println("methodC(String a) 호출 성공!!!" + a);
		return "apple";
	}


}
