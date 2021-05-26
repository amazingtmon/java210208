package com.zone;

public class Exam1 {

	public static void main(String[] args) {
		for(int i=1; i <= 100; i++) {
			if(i%5 == 0 && i%7 == 0) {
				System.out.println(i+": "+"FizzBuzz");
			}
			else if(i%7 == 0) {
				System.out.println(i+": "+"Buzz");
			}
			else if(i%5 == 0) {
				System.out.println(i+": "+"Fizz");
			}
		}

		int j = 1;
		while (j<101) {
			if(j%5 == 0 && j%7 == 0) {
				System.out.println(j+": "+"FizzBuzz");
			}
			else if(j%7 == 0) {
				System.out.println(j+": "+"Buzz");
			}
			else if(j%5 == 0) {
				System.out.println(j+": "+"Fizz");
			}
			j++;
		}
	}
	
}


