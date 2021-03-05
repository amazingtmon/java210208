package ch5.singleton;

public class SonataSimulation {
	Sonata myCar = null;
	
	public static void main(String[] args) {
		Sonata yourCar = Sonata.getInstance(); // 싱글톤
		Sonata meCar = Sonata.getInstance(); // 싱글톤
		Sonata gnomCar = Sonata.getInstance(); // 싱글톤
		
		yourCar.speed = 10;
		System.out.println(yourCar.speed);
		System.out.println(meCar.speed);
		meCar.speed = 20;
		
		yourCar.speed();
		System.out.println(gnomCar.speed);
		
	}

}
