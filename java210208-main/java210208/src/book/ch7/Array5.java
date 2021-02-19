package book.ch7;
/*
 * 변수는 한번에 하나의 값만 담을 수 있다. -변수의 한계점
 * 배열은 한번에 어려개의 값을 담을 수 있으나 같은 타입만 담을 수 았다 [문제제기]. - 객체 배열, ArrayList [문제해결능력을 가진자]
 * 또한 끼워넣기가 불가능하다. 크기를 조절할 수 없다. -> ArrayList를 사용하면 문제가 해결된다.
 * 
 * 자료구조(List, Map, Set계열) ->크기 조절가능하다. 끼워넣기 가능. ex)회원탈퇴, 신입사원 등록.
 * 
 * 세션과 쿠키
 * 
 * 오라클 서버 - 영원하다.
 * 
 * */
public class Array5 {
	void methodB(boolean isOk[]) {
		System.out.println(isOk.length);
//		System.out.println(isOk[3]);
	}
	public static void main(String[] args) {	
		Array5 a5 = new Array5();
		boolean isOk[] = null; //선언만 하였다. 크기가 결정되지 않았다.
		a5.methodB(isOk);
	}

}
