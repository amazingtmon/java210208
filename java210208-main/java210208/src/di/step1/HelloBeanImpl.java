package di.step1;

public class HelloBeanImpl implements HelloBean {
	
	private String msg = null;
	//msg = new String("안녕");
	
	//객체 생성을 내가 관리해야 한다.
	String name = new String("SCOTT");
	
	//setter객체 주입법.(자바코드적용)
	//생성자 객체 주입법.(xml코드활용)
	//setter메소드로 사용하는 것은 객체 생성 및 관리를 스프링에서 대신 해줌.
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	@Override
	public String getGreeting(String msg) {
		return "Spring "+this.msg;
	}

	//Bean이 초기화 된 후 호출되는 메소드
	public void initMethod() {
		System.out.println("initMethod 호출 성공");
	}
	
	//Bean이 소멸되기 전에 호출되는 메소드
	public void destroyMethod() {
		System.out.println("destroyMethod 호출 성공");
	}
}
