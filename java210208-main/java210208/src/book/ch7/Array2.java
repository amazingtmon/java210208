package book.ch7;

public class Array2 {
	int x = 3;
	String names[] = null;
	
	
	public static void main(String[] args) {
		Array2 a3 = new Array2();
		boolean isOk[] = new boolean[a3.x];
		for(boolean bo:isOk) {
			System.out.println(bo);
		}
		
		a3.names = new String[a3.x];
		a3.names = new String[] {"이순신", "강감찬", "홍길동"};
	}

}
