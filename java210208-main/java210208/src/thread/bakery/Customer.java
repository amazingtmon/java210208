package thread.bakery;

public class Customer extends Thread{
	
	BakerStack bs = null;
	
	public Customer(BakerStack bs) {
		this.bs = bs;
	}

	public void run() {
		String bread = null;
		bread = bs.pop();
		
		try {
			Thread.sleep();
		} catch(Exception e) {
			System.out.println("Exception : "+e.toString());
		}
	}
}

