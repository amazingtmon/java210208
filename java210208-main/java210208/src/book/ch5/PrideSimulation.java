package book.ch5;

public class PrideSimulation {

	public static void main(String[] args) {
//		Pride_single myCar = new Pride_single();
		Pride_single herCar = new Pride_single(4, 100);
		Pride_single himCar = new Pride_single(10, 100);
		Pride_single.wheelNum = 5;
		herCar.print();
		herCar.wheelNum = 10;
		himCar.wheelNum = 9;
		herCar.speed = 150;
		himCar.speed = 130;
		himCar.speed = 80;
		
		System.out.println("herCar wheelNum: "+ herCar.wheelNum);
		System.out.println("himCar wheelNum: "+ herCar.wheelNum);
		System.out.println("herCar speed: "+ herCar.speed);
		System.out.println("himCar speed: "+ himCar.speed);
		Pride_single.change();
		System.out.println("herCar wheelNum: "+ herCar.wheelNum);
	}

}
