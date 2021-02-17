package com.cosmo;

import java.util.Scanner;

public class Quiz_210216 {
	//두 개의 정수 사이에 있는 3의 배수는 몇개일까요?
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int a,b,c;
		//a = sc.nextInt();
		b = sc.nextInt();
		c = 0;
		for(int i=1; i <= b; i=i+1) {
			if(i%3 == 0) {
				System.out.println("3의배수");
			}
		}
		
		
	}

}
