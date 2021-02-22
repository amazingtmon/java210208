package com.cosmo;

import java.util.Random;
import java.util.Scanner;

/*
 * Q : N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 * 
 * ex) input N value : 5, [20, 10, 35, 30, 7];
 *     output : 7, 35;
 * */
public class backjunQuiz_210221 {
	
	public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	Random r = new Random();
	int i,j,r_num,num,range;
	
	num = sc.nextInt();
	range = sc.nextInt();
	
	int arr[] = new int[num];//배열 크기 초기화.
	
	int max = arr[0];
	int min = arr[0];
	for(i=0; i<num ; i++) {
		r_num = r.nextInt(range);
		arr[i] = r_num;
		System.out.println("#1 "+arr[i]);
		
		if(arr != null) {
			for(j=0; j<num ; j++) {
				if(arr[j] > max) {
					max = arr[j];
					System.out.println("#2 "+max);
				}
			}
		}
	}
	
	}

}
