package com.base;

public class Sonata {
	//전역변수 선언
	//변수를 호출하면 
	//바퀴수를 담을 변수 선언
	int wheelNum = 4; //선언과 초기화를 동시에 처리함.
	//타입이 String이면 문자열을 담을 수 있다.
	String carColor = "white";
	/*
	 * 메소드를 선언하기
	 * @param - 파라미터의 타입은 배열.
	 * 파라미터 : 사용자가 입력한 값을 받는 곳이다.
	 * 파라미터 자리에도 변수를 선언할 수 있다.
	 * -> 이것을 지역변수라고 한다.
	 * -> 초기화를 할 수 없다. 
	 * -> 왜냐하면 호출될 때 값이 넘어 오므로.
	 * */
	public static void main(String[] args) {
		//System - 클래스
		//out - 변수인데 출력창에 출력을 담당하는 변수.
		//사용자가 입력한 값을 입력 받고 싶을 때는 System.in과 같이 사용함.
		//System은 현재 사용되고 있는 컴퓨터를 말함.
		//출력창에 뭔가를 내보내고 싶을때 사용하는 변수(속성) - out
		//out을 제공하는 자는 = System
		//자바가상머신이 System.out을 확인하려면 속성에 접근할 수 있어야 하는데
		//이때 사용하는 식별자가 .(dot)연산자 이다.
		//소유주.속성.메소드이름()
		//클래스의 구성요소 2가지 = 변수, 메소드(함수).
		System.out.println("나는 소나타 입니다.");
		//insert here
		//자동차 바퀴수를 출력하고 싶다면?
		//전역변수를 인스턴스화 시킨다.
		Sonata himCar = new Sonata();
		System.out.println("소나타의 바퀴수는 " + himCar.wheelNum + "개 입니다.");
		int speed;
		speed = 50;
		System.out.println("현재 소나타의 속도는 " + speed);
	}

}
