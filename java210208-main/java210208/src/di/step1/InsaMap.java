package di.step1;

import java.util.Map;

public class InsaMap {
	Map<String, String> mapBean = null;
	
	//myBatis의 경우 자바가 아니고 자바코드는 jar의 형태로 주입되므로
	//constructor 주입법으로 처리한다.
	//DB커넥션 풀도 자바 표준에서 제공하는 것은 아니기때문에 
	//생성자 객체 주입법으로 처리해야 할 것이다. (xml에서 처리하는 것.)
	//setter 객체 주입법 - java
	public void setInsaMap(Map<String, String> mapBean) {
		this.mapBean = mapBean;
	}
	
}
