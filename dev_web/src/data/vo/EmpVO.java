package data.vo;

public class EmpVO {
	public DeptVO getDvo() {
		return dVO;
	}
	public void setDvo(DeptVO dvo) {
		this.dVO = dvo;
	}
	
	//이곳의 변수들은 모두 private으로 한다. - 캡슐레이션(은닉화) - 보호, 직접 값을 변경불가.
	//각각의 값을 유지하거나 재사용하는 문제는 인스턴스화에 따라 각각 다르게 활용가능하다.
	//값을 초기화하는 방법에 대해서는 두가지가 있다. 1)setter, 2)생성자 이용.
	private DeptVO dVO = null;
	private int empno = 0; //7566 
	private String ename = null; //사원명 
	private String job = null; // 
	private int mgr = 0; //그룹코드 
	private String hiredate = null; //입사일자 
	private double sal = 0.0; //급여 
	private double comm = 0.0; //인센티브
	//릴레이션은 부모로부터 내려받은 속성이다.
	private int deptno = 0; //부서번호(FK) - 외래키 - 조인시에 사용되는 컬럼 - 릴레이션.
	
	//생성자의 경우 생략할 수 있고 생략되었을때 JVM이 대신 제공해줌.
	//그러나 한개라도 생성자가 정의되어 있다면 제공안된다.
	
	//EmpVo 생성자=================================================================
	public EmpVO() {}
	public EmpVO(int empno) {
		this.empno = empno; //대입연산자를 통해 그 값(지역변수)이 (다른 클래스에서)유지된다.
	}
	
	public EmpVO(int empno, String ename, String job, int mgr, 
			String hiredate, double sal, double comm, int deptno, DeptVO dVO) {
		this.empno = empno;
		this.ename = ename;
		this.job = job;
		this.mgr = mgr;
		this.hiredate = hiredate;
		this.comm = comm;
		this.deptno = deptno;
		this.sal = sal;
		this.dVO = dVO; 
	}
	
	//EmpVo get, set==============================================================
	public int getEmpno() {
		return empno;
	}
	public void setEmpno(int empno) {
		this.empno = empno;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public int getMgr() {
		return mgr;
	}
	public void setMgr(int mgr) {
		this.mgr = mgr;
	}
	public String getHiredate() {
		return hiredate;
	}
	public void setHiredate(String hiredate) {
		this.hiredate = hiredate;
	}
	public double getSal() {
		return sal;
	}
	public void setSal(double sal) {
		this.sal = sal;
	}
	public double getComm() {
		return comm;
	}
	public void setComm(double comm) {
		this.comm = comm;
	}
	public int getDeptno() {
		return deptno;
	}
	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}
}
