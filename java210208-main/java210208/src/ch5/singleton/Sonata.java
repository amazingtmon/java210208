package ch5.singleton;

public class Sonata {
	private static Sonata myCar = null ;
	int speed = 0;
	
	public void speed() {
		System.out.println("stop method");
		speed = speed - 1;
	}
	
	
	private Sonata () {}
	
	//동기화 된 메소드이다.
	//절대 동시에 입장할 수 없다.
	// 0.1초라도 늦으면 기다려 했다가 입장된다.
	public static synchronized Sonata getInstance() {
	  if ( myCar == null ) {
	        myCar = new Sonata();
	  }
	  return myCar;
	}
	
}
