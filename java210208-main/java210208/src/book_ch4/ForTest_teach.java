package book_ch4;
//자바언어를 사용해서 코딩하려면 보안문제로 반드시 pakage를 정의하도록 권장하고 있다. book.ch4
//디폴트 패키지는 불가하다.
//모든 코딩은 class선언안에 와야한다. - 왜 그렇게해야하나? 자바는 기본 단위가 클래스이기 때문.
//콜백 메소드이다. -> 시스템이 호출하는 메소드이다. -> 개발자는 죽어도 호출할 수 없다. - main메소드 안에 코딩하는 것은 나쁜 방법이다.
//하나의 클래스 내에 모든 메소드를 선언해서 사용하는 것은 좋지 않다. ====> 클래스의 재사용성이 떨어지기 때문에.
//메인메소드를 선언하려면 반드시 클래스 선언이 먼저이다. - 처리 주체가(일꾼이) JVM(자바가상머신)이다.
//모든 코딩의 기준은 자바가상 머신이 해석할 수 있는 방식으로 코딩이 전개되어야 한다.
//===================================================================================
//클래스 선언은 접근제한자 class라는 예약어 그리고 클래스명 순서로 선언된다.
//public private protected 같은 폴더(패키지)에 있는 클래스 끼리는 공유가능하다.-> friendly상태이다.
//===================================================================================
//클래스 내부는 선언부와 메소드 선언부로 나누어서 코딩을 전개한다.

public class ForTest_teach {
	void methodA() {}//---> friendly상태.
	//1부터 10까지 홀수의 합 과 짝수의 합을 따로 계산하시오.
	public static void main(String[] args) {
		//선언부
		int i = 0; // 초기화는 0으로 함.
		int even = 0;
		int odd = 0;
	
	//선언부 - 전역변수이다. 초기화를 생략할 수 있다. 생성자가 있는데 역할이 전변의 초기화를 담당한다.
	//지역변수는 선언이 불가하다.
	//if문, for문은 사용불가하다. 실행문을 갖고있다. hap = hap+i;//실행문 공식 알고리즘.
	//선언과 초기화를 분리할 수 없다. - 컴파일이 안되니까 실행할 수 없다.
	//int i; i=10; -> 메소드 안에서는 가능. 선언부에서는 불가능.
	//메소드 안에는 또다른 메소드를 선언하지 않는다. 호출할 수 없기 때문이다.
	//================================================================= end of 선언부
	//메소드를 선언한 영역

		for(i = 1; i <= 10; i++ ) {
			if(i%2==0) {//i로 나눈 나머지가 0하고 같은가? - 짝수인가?
				even = even + i;//조건이 참일때만 이 공식이 발동된다.
				System.out.println("even! "+even);
				
			} if(i%2==1) {// 홀수인가?
				odd = odd + i;
				System.out.println("odd! "+odd);
			}
			System.out.println(i + " 번쨰 " + "even 값: "+even+ " odd 값: "+odd);
			System.out.println("짝수의 합을 구한 결과 " + even);
			System.out.println("홀수의 합을 구한 결과 " + odd);
		}
		
	}

}
