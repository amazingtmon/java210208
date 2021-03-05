package self.singleton;

public class MainSingle {
	private static MainSingle mysingle = null;
	
	public MainSingle() {}
	
	public int sum (int a, int b) {
		int c = 0;
		
		c = a +b;
		return c;
	}
	
	public static MainSingle getInstance() {
		if(mysingle == null) {
			mysingle = new MainSingle();
			System.out.println("call getInstance");
		}
		return mysingle;
	}
}