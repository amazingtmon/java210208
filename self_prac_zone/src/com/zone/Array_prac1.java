package com.zone;

import java.util.Random;

public class Array_prac1 {
	//전역변수 선언.
	int arry1 [] = null;
	int arry2 [] = null;
	
	public void ArrayMethod(int arry []) {
		for(int i=0; i< arry.length; i++) {
			System.out.printf("%d ", arry[i]);
		}
	}
	
	public void ArraySum(int arry[], int arry2[]) {
		for(int i=0; i< arry.length; i++) {
			System.out.printf("%d ", arry[i]+arry2[i]);
		}
	}
	
	public static void main(String[] args) {
		Array_prac1 arpr1 = new Array_prac1();
		Random r = new Random();
		
		int arry1 [] = new int[5];//arry1에 방이 5개 만들어짐.
		
		for(int i=0; i<arry1.length; i++) {
			int r_num = r.nextInt(10);
			arry1[i] = r_num;
			
			System.out.printf("%d ", arry1[i]);
		}
		System.out.printf("%n");
//===========================================================================
		int arry2 [] = new int[5];
		
		for(int j =0; j< arry2.length; j++) {
			arry2[j] = r.nextInt(20);
			
			System.out.printf("%d ", arry2[j]);
		}
		System.out.printf("%n");
		System.out.println(arry2[0]);		
		
		arpr1.ArraySum(arry1, arry2);
	}

}
