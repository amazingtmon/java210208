package variable.step1;

public class Variable {
	//선언부
	
	//메소드 선언
	void methodA(int a) {
		
	}
	
	double methodB(int a) {
		System.out.println(a);
		return 3.14;
	}
	//메인메소드 - exe파일로 만들 수 있음.
	/******************************************
	 * @return void이다. - 비어있다. - 돌려받을 수 있는 값이 없다. - 이것때문에 에러 발생 가능있음.
	 * @param args
	 * ****************************************/
	
	public static void main(String[] args) {
		/* System:컴퓨터, out속성:출력장치, print(): 파라미터가 없어서 에러가 발생한다.
		 print(int i), print(double pi), print("hello") */
		//SELECT 이름  FROM 회원 집합
		//WHERE 아이디 = 'test'
		// AND  비번 = '123'
		//API, 클래스안 or 객체(객체란, 결정되지 않은것)안에 있는 것을 꺼내쓴다.
		
		//print메소드는 여러개이다. 같은 이름의 메소드를 여러개 만들 수도 있다.
		//System.out.print(); 줄바꿈 안됨. -> 반환값이 없어서 에러. 
		Variable v = new Variable();
		//System.out.println(v.methodA(1));
		System.out.println(v.methodB(1));
		
		System.out.print(1);//param이 추가되면 합법으로 변함.
		System.out.println();//줄바꿈이 추가된 메소드.
		System.out.println(1 + "   " + 1);
		System.out.println(10+10);
		System.out.println(10+"10");
		System.out.println(10+" "+10);
		System.out.println("     ");
	}

}
