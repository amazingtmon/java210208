package com.zone;

import java.util.Random;

public class Array_prac1 {
	//전역변수 선언.
	int arry1 [] = new int[5];
	
	
	public static void main(String[] args) {
		Array_prac1 array_p = new Array_prac1();
		Random r = new Random();
		
		int arry2 [] = new int[5];//arry2에 방이 5개 만들어짐.
		System.out.println(arry2);
		System.out.println("===============================");
		
		for(int i=0; i<arry2.length; i++) {
			int r_num = r.nextInt(10);
			arry2[i] = r_num;
			
			System.out.printf("%d ", arry2[i]);
		}
	}

}
