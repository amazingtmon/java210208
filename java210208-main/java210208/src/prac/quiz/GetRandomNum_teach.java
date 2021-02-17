package prac.quiz;

import java.util.Random;
import java.util.Scanner;

public class GetRandomNum_teach {
	/*
	 * 1. 난수 발생을 지원하는 클래스 추가하기 - 인스턴스화 하기
	 * 2. 그 클래스가 제공하는 메소드를 호출하여 채번하기
	 * 3. 사용자로부터 입력한 값 받아오기
	 * 4. 사용자가 이렵한 값 담기 - 선언 및 초기화;
	 * 5. 0부터 9중에서 고르기.
	 * 6. 기회는 3번까지 제공. - 1번, 2번, 3번  - 반복문.
	 * */

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Random r = new Random();
		int r_num = r.nextInt(10);
		int count = 3;
		String user = null;
		System.out.println("Game Start : Guess Number");
		
		for(count = 0; (user = sc.nextLine()) != null; count++) {
			if(count < 3) {
				if(Integer.parseInt(user) == r_num) {
					System.out.println("정답!");
					break;//for문 탈출.
				} else if(Integer.parseInt(user) > r_num) {
					count ++;
					System.out.println("low");
					
				} else if(Integer.parseInt(user) < r_num) {
					count ++;
					System.out.println("high");
				}
			} else {
				System.out.println("You lost");
				break;
			}
		}
		System.out.println("Game End");
	}

}
