package Account_Prac;

public class SubjectSum {
	public double sumMethod(double kor, double eng, double math) {
//		MainAcc main = new MainAcc();
		double sum = kor + eng + math;
		return sum;
	}
	public static void main(String[] args) {
		SubjectSum sumTest = new SubjectSum();
		System.out.println(sumTest.sumMethod(75, 77, 80));
	}
	
}
