package book.ch7;

public class TwoArray6 {

	public static void main(String[] args) {
		//2는 로우를 말함.
		//3은 컬럼을 말함.
		int is[][] = new int[3][2];//2차 배열이다.
		for(int i = 0; i<is.length; i++) {
			System.out.println(is[i]);
			for(int j=0; j<is[i].length; j++) {
				System.out.println("is["+ i + "]["+ j +"]="+ is[i][j]);
			}/////////end of inner for
		}////////////end of outter for
		
		System.out.println("===================================");
		
		int aa[][] = new int[3][2];
		aa[0] = new int[2];
		aa[0][0] = 1;
		aa[0][1] = 2;
		aa[1] = new int[2];
		aa[1][0] = 1;
		aa[1][1] = 2;
		aa[2] = new int[2];
		aa[2][0] = 1;
		aa[2][1] = 2;
		
		for(int i=0; i<aa.length; i++) {
			System.out.println(aa[i]);
			for(int j=0;j<aa[i].length; j++)
				System.out.println(aa[i][j]);
		}
		
		
	}
}
