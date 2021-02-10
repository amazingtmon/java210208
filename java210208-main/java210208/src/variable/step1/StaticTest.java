package variable.step1;

public class StaticTest {
	/*
	 * non-static 타입은 static 영역에서 접근불가, 호출안됨.
	 * 
	 * */
	
	static void avg() { //이건 사용자 정의 메소드.
		System.out.println("avg");
	}
	
	public static void main(String[] args) {
		if(args.length == 0) {
			//아래 문장은 if 조건에 따라 실행기회를 못 가질수도 있다. -> O
			System.out.println("입력필요!!");
			return;//main메소드 탈출!
		}
		System.out.println(args[0]+10);//20출력 되도록 코드를 수정하시오.
		int chngToInt = Integer.parseInt(args[0]);
		System.out.println(chngToInt+10);
		System.out.println("==========>" + (chngToInt+10));
		//메소드 이름앞에 static이 있다면...!! 인스턴스화 없이도 메소드를 호출할 수 있다.
		//main 메소드는 자바가 제공하는 메소드 인가? -> O
		//사용자 정의 메소드도 가능하다.
		//문자열을 집어 넣으면 (파라미터로 대입하면) int타입으로 변환하여 반환(리턴)해주는 메소드가 필요.
		//parseInt()가 사용됨.
		StaticTest.avg();
	}

}
