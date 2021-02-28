package com.vo;

public class DeptVOSimulation {
	void methodA() {
		
	}
	DeptVO methodB() {
		
		return new DeptVO();
	}
	DeptVO[] methodC() {
		
		return new DeptVO[3];
	}
	public static void main(String[] args) {
		DeptVOSimulation ds = new DeptVOSimulation();
		DeptVO dvo = new DeptVO();
		//deptno의 접근제어자가 private이므로 같은 class내에서만 접근이 가능하다.
		String myDname = dvo.getDname();
		String myLoc = dvo.getLoc();
		int myDeptNo = dvo.getDeptno();//0이 출력됨.
		
		//insert here - 부서번호 30을 출력하도록 코드를 추가하시오.
		dvo.setDeptno(30);
		System.out.println(dvo);//@15db9742
		System.out.println("origin "+dvo.getDeptno());//30
		
		dvo = new DeptVO();
		dvo.setDeptno(30);
		myDeptNo = dvo.getDeptno();//0...?
		System.out.println(dvo);//@6d06d69c
		System.out.println("copy1 "+myDeptNo);//30
		
		
	}

}
