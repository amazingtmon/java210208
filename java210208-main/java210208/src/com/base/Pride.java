package com.base;
/* 선언이 먼저, 사용은 나중이다. - 위치
 * 순서가 중요하다 - 알고리즘
 * 한 문제를 가지고 다양한 문제풀이를 해본다.
 * 답안지를 다양하게 작성(A타입, B타입, C타입) -> 문제해결 능력이 있다.
 * */
public class Pride {
	int wheelNum = 4;
	int i = 10;
	void go(int x) {
		x = 10;
	}
	
	public static void main(String[] args) {
		Pride herCar = new Pride(); //인스턴스화
		Pride gnomCar = new Pride(); //인스턴스화
		System.out.println("자동차 바퀴수가 " + gnomCar.wheelNum  + " 입니다.");
		gnomCar.wheelNum = 6;//초기값을 변경할 수 있다.
		System.out.println("자동차 바퀴수가 " + gnomCar.wheelNum  + " 입니다.");
		//지역변수는 gnomCar.x 라고 쓸수 없다. stack영역에 살고 있고 자원관리를 JVM으로부터 관리받는다.
		//전역변수만이 아래와 같이 사용 가능하다.
		//gnomCar.x = 100;
		//insert here - 자동차 바퀴수가 4개 입니다.
		//non-static의 변수 wheelNum는 static영역인 main안에서 사용할 수 없다.
		//해결방법: 인스턴스화를 하면 클래스 안에 존재하는 변수 혹은 메소드라 하더라도 호출 가능하다.
		System.out.println("자동차 바퀴수가 " + herCar.wheelNum  + " 입니다.");
	}

}
