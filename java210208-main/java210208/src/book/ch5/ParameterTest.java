package book.ch5;
/*
 * static에 대해 이해하고 있는가?
 * 
 * */
public class ParameterTest {
	String g_rdname = null;
	
	int methodA() {
		return 100;
	}
	
	static int methodA(int empno) {
		return 100;
	}
	
	void methodA(int empno, String rdname) {//메소드의 파라미터 값(rdname)을 전역변수 g_rdname을 통해 프린트할 수 있다.
		g_rdname = rdname;
	}
	
	public static void main(String[] args) {
		//static을 사용하더라고 소유주와 type을 명시해주는게 좋다.
		int x = ParameterTest.methodA(7566);
		//int x2 = methodA(7566); -- 권장하지 않음.
		System.out.println(x);
		
		String rdname = "개발 2팀";//변수 선언 및 초기화.
		ParameterTest pt = new ParameterTest();//인스턴스화.
		
		pt.methodA(7566, rdname);
		// #32 -> new ParameterTest로 새로 만들어졌으나 void methodA를 경유하지 않았기 때문에 g_rdname의 값은 null로 나타난다.
		System.out.println(new ParameterTest().g_rdname);//null
		// #34 -> void methodA 에서 g_rdname이 파라미터값으로 초기화가 이뤄졌다. 
		System.out.println(pt.g_rdname);//개발 2팀
		new ParameterTest().methodA(7566);
		
	}

}
