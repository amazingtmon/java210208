package variable.step1;

public class Account1_1 {
	double kor = 0;
	double math = 0;
	double eng = 0;
	/*
	 * 총점을 구하는 메소드
	 * @param kor - 국어점수.
	 * @param math - 수학점수.
	 * @param eng - 영어점수.
	 * @return tot - 한 학생의 세과목의 총점을 구하여 담는 변수.
	 * */
	private double hap(double kor, double math, double eng) {
		double tot =  kor +  math + eng;
		return tot;
	}
	/* 평균을 구하는 메소드 구현
	 * @param tot - hap 메소드를 호출하여 tot를 받아온다.
	 * @return
	 * */
	
	//	private double avg(double tot) {
//		double avg = tot / 3;
//		return avg;
//	}
	
	private double avg(double tot, int subjectNum) {
		double avg = tot / subjectNum;
		return avg;
	}
	
	public static void main(String[] args) {
		Account1_1 ac = new Account1_1();
		ac.kor = 70;
		ac.math = 80;
		ac.eng = 90;
		
		double tot = ac.hap(ac.kor, ac.math, ac.eng);
		System.out.println(tot);
		
//		double test_avg = ac.avg(tot);
//		System.out.println(test_avg);

		double test_avg2 = ac.avg(tot, 3);
		System.out.println(test_avg2);
	}

}
