package com.zone;

import java.util.Scanner;

public class Param_prac1 {
	
	//덧셈 메소드
	int plus(int a, int b) {
		int result = 0;
		result = a + b;
		
		return result;
	}
	//뺄셈 메소드
	//곱셈 메소드
	//나눗셈 메소드
	
	public static void main(String[] args) {
		Param_prac1 pr = new Param_prac1();
		Scanner sc = new Scanner(System.in);
		int x,y;
		x = sc.nextInt();
		y = sc.nextInt();
		
		int plus_result = 0;
		plus_result = pr.plus(x, y);
		System.out.println(plus_result);

	}

}
