package book.ch7;

public class ArrayPrac {

	public static void main(String[] args) {
		int[] intArray = new int[5];
		
        intArray[3] = 8;

        for (int i : intArray) {
            System.out.printf("%d ", i);
        }
        
        System.out.printf("%n");
        
        int[] intArray2 = new int[5];
        
        intArray2[3] = 1;
        
        for (int j : intArray2) {
            System.out.printf("%d ",j);
        }

	}

}
