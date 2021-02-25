package com.pop_quiz;

enum Dogs {collie, harrier, shepherd};//열거형 타입. 사용빈도 낮음.

public class Q52 {
	void m() {
		String name = "이순신";
		//switch 안에 String 타입 가능함.
		switch(name) {
			case "이순신":
				System.out.println("Lee");
				break;
				
			case "김유신":
				System.out.println("Kim");
				break;
		}
	}
	
	public static void main(String [] args) {
		Q52 q52 = new Q52();
		q52.m();
		
		Dogs myDog = Dogs.shepherd;
		
		switch (myDog) {
			case collie:
				System.out.print("collie ");
				
			case shepherd:  
				System.out.print("shepherd ");
				
			case harrier:
				System.out.print("harrier ");
		}
	}
}

