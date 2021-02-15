package prac.quiz;

import java.util.Scanner;

public class ScannerTest {

	public double weight(double n) {
		double r = 0.0;
		r = n * 0.17;
		return r;
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		//문제 1.
		
		ScannerTest st = new ScannerTest();
		double w = scan.nextDouble();
		
		System.out.println("달에서 나의 몸무게는 " + st.weight(w));
		
		
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
