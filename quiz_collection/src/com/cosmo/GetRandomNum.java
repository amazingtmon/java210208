package com.cosmo;
/*
 * 1-1 : main 메소드안에 하나로 처리하기.
 * 1-2 : 메소드 중심의 코딩 전개, 파라미터와 리턴타입의 적극적인 활용.
 * 1-3 : class 쪼개기.
 * 1-4 : UI추가해서 구현, 생성자의 적극적인 활용연습.
 * 1-5 : 이벤트 적용해 보기.
 * */
import java.util.Random;
import java.util.Scanner;

public class GetRandomNum {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Random r = new Random();
		int r_num = r.nextInt(10);//0.0 ~ 10.0 구간
		
		int count = 3;
		System.out.println("Game Start : Guess Number");
		
		for(int i=1 ; i <= count ; i = i+1) {
			int input_num = sc.nextInt();
			if(input_num < r_num) {
				System.out.println("high");
			} else if(input_num > r_num) {
				System.out.println("low");
			} else if(input_num == r_num) {
				System.out.println("win");
				System.out.println("Game End");
				return;
			}
		}
		System.out.println("lose");
		System.out.println("Game End");
		

	}

}
