package com.zone;

public class Exam2 {

	public static void main(String[] args) {
		int i = 1;
		while (i<101) {
			if(i%5 == 0 && i%7 == 0) {
				System.out.println(i+": "+"FizzBuzz");
			}
			else if(i%7 == 0) {
				System.out.println(i+": "+"Buzz");
			}
			else if(i%5 == 0) {
				System.out.println(i+": "+"Fizz");
			}
			i++;
		}

	}

}
