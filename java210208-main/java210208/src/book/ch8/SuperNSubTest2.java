package book.ch8;

public class SuperNSubTest2 {

	public static void main(String[] args) {
		//자녀 클래스의 인스턴스화 시 어떻게 부모의 메소드 원형을 알고 있는 것일까?
		//자녀 클래스의 인스턴스화를 했다고 해도 부모 생성자가 항상 우선하여 먼저 실행된다.
		
		Super sup  = new Super();
		Super sup2 = new Sub();
		//Sub   sub2 = new Super();
		Sub	  sub  = new Sub();
		
		sup = sup2;
		sup = sub;
		sup2 = sup;
	}

}
