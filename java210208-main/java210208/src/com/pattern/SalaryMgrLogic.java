package com.pattern;

import java.util.Vector;

import com.vo.DeptVO;
import com.vo.EmpVO;

public class SalaryMgrLogic {
	SalaryMgrView smView = null;
	
	public SalaryMgrLogic(SalaryMgrView smView) {//SalaryMgrHandler 생성자.
		this.smView = smView;
	}
	
	public void getEmpDetail(int pempno) {
		EmpVO eVO = new EmpVO();
		eVO.setEname("이순신");
		
		DeptVO dVO = new DeptVO();
		//dVO.setDname("개발1팀");
		dVO.setDeptno(20);
		
		eVO.setDvo(dVO);//Today's issue!!
		System.out.println("#1 "+dVO);//dVO호출시 oneRow에서 get으로 호출된 값이 넘어온다.
		
		//java.util에서 제공되는 클래스로, 타입에 대한 제약없이 늘었다 줄었다함.
		//연관있는 레코드를 한번에 밀어넣기 위해서 사용함.
		Vector oneRow = new Vector();
		oneRow.addElement(eVO.getEname());
		oneRow.addElement(eVO.getDvo().getDeptno());
		smView.dtm_sal.addRow(oneRow);
	}
}
