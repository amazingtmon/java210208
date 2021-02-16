package prac.quiz;

public class ParamTest {
	void effectParam(Param p) {
		System.out.println("inMethod ival = " + p.ival);
		p = new Param();//insert here일때 sub ival & main ival은 얼마가 출력될까?
		System.out.println("chng ref ival = " + p.ival);
		p.ival = 500;
		System.out.println("sub ival = " + p.ival);
	}
	
	public static void main(String [] args) {
		//클래스는 반드시 대문자
		ParamTest tp = new ParamTest();
		Param p = new Param();
		System.out.println("origin ival = " + p.ival);
		p.ival = 100;
		System.out.println("chng origin ival = " + p.ival);
		
		tp.effectParam(p);
		System.out.println("main ival = " + p.ival);
	}
	
}
