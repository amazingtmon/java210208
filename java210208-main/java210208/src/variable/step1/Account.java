package variable.step1;

public class Account {
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
	private double sum(double kor, double math, double eng) {
		double total =  kor +  math + eng;
		return total;
	}
	/* 평균을 구하는 메소드 구현
	 * @param tot - hap 메소드를 호출하여 tot를 받아온다.
	 * @return
	 * */
	
	//	private double avg(double tot) {
//		double avg = tot / 3;
//		return avg;
//	}
	
	private double avg(double total, int a) {
		double avg = total / a;
		return avg;
	}
	//대입연산자 - ex) int i = 2;
	//메소드 괄호 안에 있는 "," 는 열거형 연산자라고 한다.
	//"." dot 연산자 - ex) 주소번지.전역변수
	//접근제한자(access modifier) - static 수정자 - 리턴타입 - 메소드이름(param1, param2)
	public static void main(String[] args) {
		Account ac = new Account();
		ac.kor = 70;
		ac.math = 80;
		ac.eng = 90;
		
		double total = ac.sum(ac.kor, ac.math, ac.eng);
		System.out.println(total);
		
//		double test_avg = ac.avg(tot);
//		System.out.println(test_avg);

		double test_avg2 = ac.avg(total, 3);
		System.out.println(test_avg2);
	}

}
