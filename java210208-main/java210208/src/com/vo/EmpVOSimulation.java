package com.vo;

public class EmpVOSimulation {

	public static void main(String[] args) {
		DeptVO dVO = new DeptVO(30, "세일즈", "부산");
//		dVO.setDeptno(30);
//		dVO.setDname("리서치");
//		dVO.setLoc("부산");
		
		EmpVO eVO = new EmpVO(7566, "이순신", "세일즈", 7800, 
								"2010-10-26", 1000, 200, 30, dVO);
		System.out.println("#1 "+eVO.getDvo().getDname());
		System.out.println("#2 "+dVO.getDname());
		
	    dVO = new DeptVO(40,"ACCOUNTING","인천");
//	      dVO = new DeptVO();
//	      dVO.setDeptno(40);
//	      dVO.setDname("개발부");
//	      dVO.setLoc("제주");
	    
	    eVO = new EmpVO(7432, "강감찬", "리서치", 7000,
	    				"2012-01-01", 800, 100, 20, dVO);
	    
	      System.out.println("#3 "+eVO.getDvo().getDname());
	      System.out.println("#4 "+dVO.getDname());
	}

}
