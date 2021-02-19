package com.cosmo;

import java.util.Random;

/*배열의 크기가 10인 난수 배열에서 가장 큰 숫자는 얼마인지 찾아내는 프로그램을 작성하시오

	출력 ) 배열 : 11, 4, 2, 18, 11, 17, 11, 3, 4, 8
          최대값: 18
 * */
/*
 * 1. 메인메소드
 * 2. 배열을 초기화 하는 메소드 선언 - 파라미터의 타입과 갯수 결정|선택
 *	  initArray(파라미터 갯수, 타입결정 - 기초가 아니다):리턴타입결정.
 *
 * 3. 최대값을 찾는 메소드 선언
 *	  maxInArray(파라미터) : 리턴타입고려.
 *
 * 4. 배열 출력하는 메소드 선언
 * 	  printArray(?) :
 * */
public class ArrayQuiz_210219 {
	//선언부
	int nums[] = null;
	
	//배열의 초기화
	void initArray(int size) {
		nums = new int[size];
		Random r = new Random();
		for(int i=0; i<size; i++) {
			int r_num = r.nextInt(10);
			nums[i] = r_num;
			System.out.printf(i +"번방 nums:%d, ", nums[i]);	
		}
	}
	
	// 배열 출력하기
	void printArray(int size) {
		if(nums != null) {
			for(int x=0; x<nums.length; x++) {
				System.out.printf("%3d", nums[x]);
			}
			System.out.println();
		}
	}
	
	//최대값 구하기
	int maxInArray(int size) {
		int j, max = nums[0];
		for(j=0; j<size; j++) {//size에 할당된 j회차까지 for문 진행.
			System.out.println("maxInArray j: "+ j);
			System.out.println("maxInArray max: "+ max);
			if(nums[j] > max) {//현재 max = nums[0]의 값이다.
				//nums[0]~nums[9]까지 max값과 비교.
				//만약 nums[j]의 값이 max값보다 크다면 
				//max의 값이 nums[j]값으로 초기화된다.
				System.out.println("if j: "+nums[j]);
				System.out.println("if max: "+max);
				max = nums[j];//
			}
			System.out.println("result: "+nums[j]+", "+max);
			System.out.println("===============================");
		}
		return max;
	}
	
	public static void main(String[] args) {
		ArrayQuiz_210219 aq = new ArrayQuiz_210219();
		int size = 10;
		aq.initArray(size);
		System.out.printf("%n");
		aq.printArray(size);
		aq.maxInArray(size);
		int max = aq.maxInArray(size);
		System.out.println("최대값 : " + max);
	}

}
