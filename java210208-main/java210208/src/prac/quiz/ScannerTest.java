package prac.quiz;

import java.util.Scanner;

public class ScannerTest { //Scanner 관련 내용. 책 517~518p 참고.

	public double moonWeight(double Weight) {
		double m_Weight = 0.0;
		m_Weight = Weight * 0.17;
		return m_Weight;
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		//문제 1.
		
		double myWeight = 0.0;
		double mWeight = 0.0;
		
		ScannerTest st = new ScannerTest();
		myWeight = scan.nextDouble();
		mWeight = st.moonWeight(myWeight);
		
		System.out.println("지구에서 나의 몸무게는 " + myWeight);
		System.out.println("달에서 나의 몸무게는 " + mWeight);
		
		
		//문제 2.
		int s,a;
		s = scan.nextInt();
		a = 0;
		for(int i = 1; i <= s; i++) {
			a = a + i;	
			}
			System.out.println("입력한 값은 "+ s + " 입니다.");
			System.out.println(a);
			
			scan.close();
		}
		
}
