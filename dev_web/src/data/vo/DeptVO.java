package data.vo;
//오라클과 자바의 만남. 연결고리.
//VO패턴 - 데이터의 영속성을 유지해주는 오라클 서버 제품과 연결하기.
//Data 관리 목적. -> 모든 집합의 이름 뒤에 접미어로 VO를 붙여서 사용.
//메인메소드는 필요없다. 단독으로 실행하지 않는다.

/*
 * 오라클에서
 * Number(2) - 정수형. 담을 수 있는 최대 크기는 99까지 이다. 임계값.
 * 			 - 자바에서는 int(4byte), long(8byte).
 * Varchar2(4000) - 자바에서는 String.
 * VO패턴을 사용하면 한번에 3가지 종류[부서번호, 부서명, 지역]의 값을 관리 가능한다.
 * 종류의 갯수는 제한이 없고, 단지 한번에 한개의 로우만 가능하다.
 * 서버 자체는 항상 동시에 여러사람이 접속할 수 있다. 
 * 이는 여러 사람이 따로 관리할 수 있어야 한다. - Thread 공부 - 내가 직접 서버를 운영할 수 있는 코딩.
 * 
 * 인스턴스화 하는 이유
 * DeptVO dvo = new DeptVO();
 * 
 * dvo = new DeptVO();
 * 
 * dvo = new DeptVO();
 * 
 * 이것이 문법적으로 옳은가?
 * 어떻게 다른것인가?
 * 어떤 방법이 더 좋은가?
 * 언제 저렇게 사용해야 하나?
 * 
 * */

public class DeptVO {
	private    int deptno = 0;//원시형 타입 - 부르면 값이 나온다. 4byte.
	private String dname = null;//레퍼런스 타입 - 클래스 급이다. -> 값이아니라 주소번지가나옴.
	private String loc = null;
	
	//생성자
	public DeptVO() {}
	public DeptVO(int deptno, String dname, String loc) {
		this.deptno = deptno;
		this.dname = dname;
		this.loc = loc;
	}
	
	//getter메소드 - Read
	public int getDeptno() {
		return deptno;
	}
	//setter메소드 - Write, Save
	public void setDeptno(int deptno) {
		this.deptno = deptno;
		//this가 붙으면 전역변수를 가리킨다. 생략은 가능하나, this.deptno와 deptno가 식별이 불가능해진다.
	}
	
	public String getDname() {
		return dname;
	}
	public void setDname(String dname) {
		this.dname = dname;
	}
	
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}

}
