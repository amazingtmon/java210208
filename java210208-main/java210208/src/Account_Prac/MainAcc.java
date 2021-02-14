package Account_Prac;

public class MainAcc {
	double korScore = 0;
	double engScore = 0;
	double mathScore = 0;
	
	public static void main(String[] args) {
		MainAcc main = new MainAcc();
		main.korScore = 86;
		main.engScore = 75;
		main.mathScore = 90;
		int subject = 3;
		
		SubjectSum sum = new SubjectSum();
		double sumTotal = sum.sumMethod(main.korScore, main.engScore, main.mathScore);
		
		SubjectAvg avg = new SubjectAvg();
		double subAvg = avg.avgMethod(sumTotal, subject);
		
		
		System.out.println(sumTotal);
		System.out.printf("%.1f", subAvg);
		

	}

}
