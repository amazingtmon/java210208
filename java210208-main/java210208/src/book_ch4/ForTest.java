package book_ch4;

public class ForTest {
	//1부터 10까지 홀수의 합 과 짝수의 합을 따로 계산하시오.
	public static void main(String[] args) {
		int even = 0;
		int odd = 0;
	
		for(int i = 1; i <= 10; i++ ) {
			if(i%2==0) {//i로 나눈 나머지가 0하고 같은가?
				even = even + i;//조건이 참일때만 이 공식이 발동된다.
				System.out.println("even! "+even);
			} else {
				odd = odd + i;
				System.out.println("odd! "+odd);
			}
			System.out.println(i + " 번쨰 " + "even 값: "+even+ " odd 값: "+odd);
			System.out.println("짝수의 합을 구한 결과 " + even);
			System.out.println("홀수의 합을 구한 결과 " + odd);
		}
		
	}

}
