package com.quiz_210222;
class Q39_1{
	void methodA() {
		Q39 a1 =new Q39();
		Q39 a2 =new Q39();
		Q39 a3 =new Q39();
		System.out.println(Q39.getInstanceCount());
	}
}


public class Q39 {
	private int counter = 0;
	
	public static int getInstanceCount() {
		return counter;
	}
	public static void main(String[] args) {
		

	}

}
