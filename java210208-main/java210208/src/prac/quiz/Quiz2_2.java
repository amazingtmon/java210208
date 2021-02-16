package prac.quiz;

import java.util.Scanner;

public class Quiz2_2 { //Scanner 관련 내용. 책 517~518p 참고.

	public static void main(String[] args) {
		//문제 2.
		Scanner scan = new Scanner(System.in);
		
		int i,end,sum;
		i = 0;
		sum = 0; //합을 구할때 결과값에 영향을 줄 수 있으므로 0으로 초기화해야함.
		end = scan.nextInt();
		
		for(i = 1; i <= end; i++) {
			sum = sum + i;
			System.out.println(sum);
			}
			System.out.println("입력한 값은 "+ end + " 입니다.");
			System.out.println(sum);
			
			scan.close();
		}
		
}
