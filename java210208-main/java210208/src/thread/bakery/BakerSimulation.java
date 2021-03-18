package thread.bakery;

public class BakerSimulation {

	public static void main(String[] args) {
		BakerStack bs = new BakerStack();
		Baker b1 = new Baker(bs);
		
		Customer cs = new Customer(bs);
		

	}

}
