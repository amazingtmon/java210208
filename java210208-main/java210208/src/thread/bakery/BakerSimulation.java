package thread.bakery;

public class BakerSimulation {

	public static void main(String[] args) {
		BakerStack bs = new BakerStack();
		
		Baker b1 = new Baker(bs);
		b1.start();
		Baker b2 = new Baker(bs);
		b2.start();
		Baker b3 = new Baker(bs);
		b3.start();
		
		Customer cs1 = new Customer(bs);
		cs1.start();
		Customer cs2 = new Customer(bs);
		cs2.start();
		Customer cs12 = new Customer(bs);
		cs12.start();
		Customer cs23 = new Customer(bs);
		cs23.start();

	}

}
