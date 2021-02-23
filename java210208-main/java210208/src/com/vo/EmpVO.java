package com.vo;

public class EmpVO {
	public DeptVO getDvo() {
		return dvo;
	}
	public void setDvo(DeptVO dvo) {
		this.dvo = dvo;
	}
	
	private DeptVO dvo = null;
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
