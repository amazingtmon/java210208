package self.vo;

public class SelfDeptVO {
	
	private    int deptno = 0;//원시형 타입 - 부르면 값이 나온다. 4byte.
	private String dname = null;//레퍼런스 타입 - 클래스 급이다. -> 값이아니라 주소번지가나옴.
	private String loc = null;
	
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
