package prac.quiz;

import java.util.Scanner;

class Common {
	
	public double moonWeight(double Weight) {
		double m_Weight = 0.0;
		m_Weight = Weight * 0.17;
		return m_Weight;
	}
}

public class ScannerTest_2 { //Scanner 관련 내용. 책 517~518p 참고.

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		//문제 1.
		
		double myWeight = 0.0;
		double mWeight = 0.0;
		
		ScannerTest_2 st = new ScannerTest_2();	
		Common cm = new Common();
		myWeight = scan.nextDouble();
		mWeight = cm.moonWeight(myWeight);
		
		System.out.println("지구에서 나의 몸무게는 " + myWeight);
		System.out.println("달에서 나의 몸무게는 " + mWeight);
		
		}
		
}
