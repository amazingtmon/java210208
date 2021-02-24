package Account_Prac;

import java.util.Scanner;

public class MainAcc {
	SubjectSum sum = null;
	
	double korScore = 0;
	double engScore = 0;
	double mathScore = 0;
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		MainAcc main = new MainAcc();
		
		main.korScore = sc.nextDouble();
		main.engScore = sc.nextDouble();
		main.mathScore = sc.nextDouble();
		int subject = sc.nextInt();
		
		SubjectSum sum = new SubjectSum();
		double sumTotal = sum.sumMethod(main.korScore, main.engScore, main.mathScore);
		
		SubjectAvg avg = new SubjectAvg();
		double subAvg = avg.avgMethod(sumTotal, subject);
		
		
		System.out.println(sumTotal);
		System.out.printf("%.1f", subAvg);
		

	}

}
