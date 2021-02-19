package book.ch7;

/*
 * 배열은 한번 선언하면 원소의 수를 조정할 수 없다.
 * 끼워넣기가 안된다.
 * 배열의주번.length - 원소의 갯수이다.
 * "hello".length() - 문자열의 길이이다.
 * */
public class Array1 {
	
	public void printArray(int empnos[]) {
		int cnt = 0;
		for(int i=0; i <empnos.length; i++) {
			System.out.println(++cnt + "번방 :" + empnos[i]);
		}
	}
	
	public void printArray2(int empnos[]) {
		int cnt = 0;
		int i = 0;
		while(i < empnos.length) {
			System.out.println(++cnt + "번방 :" + empnos[i]);
			i++;
		}
	}
	
	public static void main(String[] args) {
		int empnos[] = new int[10];
		//초기값 14개의 방에는 어떤 값이 들어있을까요?
		Array1 a1 = new Array1();
//		a1.printArray(empnos);
		a1.printArray2(empnos);
		

	}

}
