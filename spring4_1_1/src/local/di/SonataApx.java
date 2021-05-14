package local.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SonataApx {

	public static void main(String[] args) {
		Sonata herCar = new Sonata();
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("local\\di\\sonataBean.xml");
		
		Sonata myCar = null;
		myCar = (Sonata)context.getBean("myCar");
		System.out.println(myCar.toString());
		System.out.println("myCar의 현재 속도는 "+myCar.getSpeed());
		
		Sonata yourCar = null;
		yourCar = (Sonata)context.getBean("yourCar");
		System.out.println(yourCar.toString());
		System.out.println("yourCar의 현재 속도는 "+yourCar.getSpeed()+", "+yourCar.getWheelNum());
		
		Sonata himCar = null;
		himCar = (Sonata)context.getBean("himCar");
		System.out.println(himCar.toString());
		System.out.println("himcar의 현재 속도는 "+ himCar.getSpeed());
	}

}
