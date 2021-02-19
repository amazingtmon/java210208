package book.ch7;

import java.util.Random;

public class ArrayPrac {

	public static void main(String[] args) {
		int[] intArray = new int[5];
		Random r = new Random();
        for (int i : intArray) {
            System.out.printf("%d ", i);
            for(int j=0;j<intArray.length;j++) {
            	intArray[j] = r.nextInt(10);
            	System.out.println(intArray[j]);
            }
        }
        
        System.out.printf("%n");
        
//        int[] intArray2 = new int[5];
//        
//        intArray2[3] = 1;
//        
//        for (int j : intArray2) {
//            System.out.printf("%d ",j);
//        }

	}

}
