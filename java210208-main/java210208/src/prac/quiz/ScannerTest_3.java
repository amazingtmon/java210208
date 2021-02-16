package prac.quiz;

import java.util.Scanner;

public class ScannerTest_3 { //Scanner 관련 내용. 책 517~518p 참고.

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		//문제 1.
		
		double myWeight = 0.0;
		double mWeight = 0.0;
		
		Common cm = new Common();
		
		if(scan.hasNextDouble()) {
			myWeight = scan.nextDouble();
			mWeight = cm.moonWeight(myWeight);
			System.out.println("지구에서 나의 몸무게는 " + myWeight);
			System.out.printf("달에서 나의 몸무게는 %.1f ", mWeight);
		} else {
			System.out.println("실수만 입력해 주세요");
			return;
		}
		System.out.println("return 없으면 여기가 print된다.");
		
		
	}
		
}
