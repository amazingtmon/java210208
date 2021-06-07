package com.zone;

public class Another {
	public String name = "";
	public int age = 0;
	
	public int sum1 (int a, int b) {
		int c = a + b;
		
		return c;
	}
	
	
	public void sum2 (int a, int b) {
		int c = a + b;
		System.out.println("난 그냥 void "+ c);
	}
	
	
	public static void main(String args[]) {
		Another an = new Another();
		String address = "";
		
		an.name = "sangChul";
		an.age = 31;
		//an.address = "상봉동";
		
		address = "상봉동";
		
		System.out.println("name: "+an.name);
		System.out.println("age: "+an.age);
		System.out.println(address);
	}

}
