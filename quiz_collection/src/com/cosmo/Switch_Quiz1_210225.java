package com.cosmo;

import java.util.Scanner;

/*
 * Q.
 * 5와 7의 공배수이면  fizz, buzz를 출력하고
 * 나머지는 숫자를 출력하는 프로그램을 작성하시오.
 * 
 * */
public class Switch_Quiz1_210225 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		/*int i;
		int input = 100;
		
		for(i=1; i<=input ;i++) {
				if(i%5 == 0 && i%7 == 0) {
					System.out.println("fizzbuzz");
				} else if(i%7 == 0) {
					System.out.println("buzz");
				} else if(i%5 == 0){
					System.out.println("fizz");
				} else {
					System.out.println(i);
				}
			}
		}
		
	}*/
		int i;
		int input = 100;
		
		for(i=1; i <= input; i++) {
			switch(i%5) {
			
			default:
				if(i%7 == 0 && i%5 == 0) {
					System.out.println("fizzbuzz");
				} else if(i%7 == 0 ) {
					System.out.println("buzz");
				} else {
					System.out.println(i);
				}
				break;
				
			case 0:
				System.out.println("fizz");
				break;
					
			}/////////////end of switch
		}////////////////end of for
	}////////////////////end of main
}///////////////////////end of class
		
		
		