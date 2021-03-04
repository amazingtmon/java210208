package ch5.singleton;

public class Testing {

	public static void main(String[] args) {
		Singleton1_1 s1 = new Singleton1_1();
		System.out.println("s1 : "+s1); //@7852e922
		s1 = null;//Candidate 상태로 빠진다.
		s1 = new Singleton1_1();
		System.out.println("s1 : "+s1); //@4e25154f
		s1 = null;
		s1 = new Singleton1_1();
		System.out.println("s1 : "+s1); //@70dea4e
		
		Singleton1_1 uniqueaInstance = Singleton1_1.getInstance();
		System.out.println("uniqueaInstance : "+uniqueaInstance); //@5c647e05
		Singleton1_1 uniqueaInstance2 = Singleton1_1.getInstance();
		System.out.println("uniqueaInstance2 : "+uniqueaInstance2); //@5c647e05
		Singleton1_1 uniqueaInstance3 = Singleton1_1.getInstance();
		System.out.println("uniqueaInstance3 : "+uniqueaInstance3); //@5c647e05

	}

}
