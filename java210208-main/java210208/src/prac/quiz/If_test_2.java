package prac.quiz;

public class If_test_2 {
	public int doStuff(int x) {
		System.out.println("1_doStuff x = "+ x);
		System.out.println("2_doStuff x = "+ x++);
		System.out.println("3_doStuff x = "+ x);
		int a = x++;
		return a;
	}

  public static void main(String [] args) {
	   	int x = 5; 
	   	If_test_2 p = new If_test_2();
	   	p.doStuff(x);
	   	System.out.println("4_main x = "+ p.doStuff(x));
	    
	 }

}
