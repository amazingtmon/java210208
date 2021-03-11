package com.zone;

public class Another {

	
	public int sum1 (int a, int b) {
		int c = a + b;
		
		return c;
	}
	
	
	public void sum2 (int a, int b) {
		int c = a + b;
		System.out.println("난 그냥 void "+ c);
	}
	
	
	public static void main() {
		Another an = new Another();
		
		System.out.println("sum1의 return c = "+an.sum1(1, 2));
	
		an.sum2(1, 2);
	}

}
