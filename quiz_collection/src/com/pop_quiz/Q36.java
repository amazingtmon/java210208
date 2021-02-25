package com.pop_quiz;
/*
 * non-static 영역에서 static타입은 접근할 수 있다.
 * 그러나
 * static 영역에서 non-static은 접근불가하다.
 * 
 * */
class q36_1{
	void methodC() {
		//methodB(); -> 호출불가
		Q36.methodB(); //methodB의 소유주를 밝혀줘야 호출가능.
		Q36 q36 = new Q36();
		q36.methodB();
	}
	
}
//==========================================================================
public class Q36 {
	//main method보다 static블럭이 실행하는데에서 우선순위가 높다.
	static {
		System.out.println("static block");
	}
	void methodA() {//non-static
		System.out.println("methodA call");
	}
	static void methodB() {//static
		System.out.println("methodB call");
	}
	//메인메소드도 [static] 이다.
	//main method = main thread라고 한다. 우선순위가 높다.
	//자바스크립트는 싱글 스레드이다.
	public static void main(String[] args) {
		System.out.println("static main");
		Q36 q36 = new Q36();
		q36.methodA();
		methodB();

	}
}
