package variable.step1;

public class MainMethod {
	/*
	 * @param args - 파라미터의 타입은 배열입니다.
	 * String args[] = new String[3];
	 * 
	 * */

	public static void main(String[] args) {
		//args[0] 가 숫자라면 20을 출력.
		//args[0] 가 문자라면 1010을 출력.
		//int + int = int
		//int + String = 붙여쓰기.
		System.out.println(args[0] + 10);
		//타입을 체크할 수 있는, 비교할 수 있는 연산자가 있다.
		//왜냐하면 자바는 컴파일을할 때 타입을 따지기 때문.
		if(args[0] instanceof String) {
			System.out.println("나는 문자열이야");
		} else {
			System.out.println("나는 문자열이 아니야.....");
		}
		
		for(int i=0; i < 100; i = i+1) {
			if(true) {
				System.out.println(i +"번째" + " 참 입니다.");
			}
		}
	}

}
