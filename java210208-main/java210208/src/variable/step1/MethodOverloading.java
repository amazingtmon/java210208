package variable.step1;

import com.vo.DeptVO;

public class MethodOverloading {
	DeptVO go(DeptVO pdvo) {
		System.out.println(pdvo.getDeptno()+","+pdvo.getDname()+","+pdvo.getLoc());
		DeptVO rdvo = null;
		return rdvo;
	}
	
	//메소드 이름은 같은데 서로 다른 메소드로 인지함.
	void go() {
		System.out.println("go() 호출 성공!");
	}
	void go(int i) {//값에 의한 호출이다. i에는 메소드가 호출할 때 파라미터로 넘어오는 10이 복사됨.
		System.out.println("go(int) 호출 성공! " + i);
	}
	void go(String name) {
		System.out.println("go(String) 호출 성공! " + name);
	}
	
	public static void main(String[] args) {
		MethodOverloading mol = new MethodOverloading();
		mol.go();
		mol.go(10);//메소드를 호출할 때 파라미터 값이 결정됨. 값에 의한 호출.
		mol.go("Name");//참조형 타입이라 참조에 의한 호출이다. 호출할때 주소번지가 아니라 값이 출력된다.
		
		DeptVO pdvo = new DeptVO();
		pdvo.setDeptno(50);
		pdvo.setDname("개발 1팀");
		pdvo.setLoc("제주도");
		
		mol.go(pdvo);
	}

}
