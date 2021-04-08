package book.ch6;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.xml.XmlConfigurationFactory;

class Outter{
	Logger logger = LogManager.getLogger(Outter.class);
	int i = 5;
	
	Outter() {
		System.setProperty
		(XmlConfigurationFactory.CONFIGURATION_FILE_PROPERTY,"log4j.xml");
	}
	class Inner {
		int j = 0;
		public void go() {
			System.out.println("go()!!");
			logger.info("go 호출 성공");
		}
	}
	
	public void print() {
		System.out.println("Outter Class!!");
		logger.info("Outer 호출 성공");
	}
}

public class OutterInnerTest {
	Logger logger = LogManager.getLogger(OutterInnerTest.class);
	
	public void methodA() {
		logger.info("methodA 호출성공");
	}
	
	public static void main(String[] args) {
		System.setProperty
			(XmlConfigurationFactory.CONFIGURATION_FILE_PROPERTY,"log4j.xml");
		
		OutterInnerTest oit = new OutterInnerTest();
		oit.methodA();
		
		Outter out = new Outter();
		out.print();
		
		Outter.Inner in = out.new Inner();
		in.go();
	}
}
