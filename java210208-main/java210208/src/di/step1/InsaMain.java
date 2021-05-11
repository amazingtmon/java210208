package di.step1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InsaMain {

	public static void main(String[] args) {
		ApplicationContext context = 
				new ClassPathXmlApplicationContext
									("di\\step1\\insaBean.xml");
		
		InsaList insaList = (InsaList) context.getBean("insa");
		InsaMap insaMap = (InsaMap) context.getBean("insaMap");
		
		//insaBean.xml <property> name에 있는 value들을 가져옴. 
		System.out.println(insaList.insaBean);
		
		System.out.println(insaMap.mapBean);
		
		for(String s: insaList.insaBean) {
			System.out.println(s);
		}
		
		InsaList insaList2 = new InsaList();
		System.out.println(insaList2);
		System.out.println(insaList2.insaBean);//null
		
	}

}
