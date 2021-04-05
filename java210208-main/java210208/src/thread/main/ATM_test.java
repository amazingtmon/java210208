package thread.main;

public class ATM_test {
	
	public static void main(String[] args) {
		ATM atm = new ATM();
		Thread a1 = new Thread(atm, "a1");
		Thread b1 = new Thread(atm, "b1");
		
		a1.start();
		b1.start();
	}

}
