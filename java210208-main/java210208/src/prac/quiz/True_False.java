package prac.quiz;
/*
 * ++i 는 i = i + 1; 과 같다.
 * --i 는 i = i - 1; 과 같다.
 * i++는 후위 연산자 이므로 먼저 비교하고 나중에 1을 증가시킴.
 * ++i 전위 연산자. 
 * 
 * 
 * */

public class True_False {

	public static void main(String[] args) {
		int a, b;
		a = 1;
		b = 2;
		//  2 > 2 F b=1 &  3 > 1 T
 		if((++a > b--)&(++a > b)) {
			System.out.println("True 1 " + a + ", " + b);
		} else {
			System.out.println("False 1 " + a + ", " + b);
		}
		
		a = 1;
		b = 2;
		
		if ((++a > b--)&&(++a > b)) {
			System.out.println("True 2 " + a + ", " + b);
		} else {
			System.out.println("False 2 " + a + ", " + b);
		}
	}

}
