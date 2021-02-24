package com.pattern;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SalaryMgrHandler implements ActionListener{
	SalaryMgrView smView = null;
	public SalaryMgrHandler(SalaryMgrView smView) {//SalaryMgrHandler 생성자.
		this.smView = smView;
	}

	@Override
	public void actionPerformed(ActionEvent ae) {
		Object obj = ae.getSource();//버튼의 주소번지를 출력함.
		String command = ae.getActionCommand();//버튼의 라벨값을 출력함.
		if(smView.jbtns[4] == obj) {// 종료버튼 누렀을때.
			//자바 가상머신과의 연결고리 끊어줌. - 가비지 컬렉터에 의해서 Candidate상태로 빠짐.
			System.exit(0);
			//쓰레기값 청소. 호출하더라도 스레드에 의해 순서대로 처리됨. 즉시 처리안됨.
			System.gc();
		} else if("조회".equals(command)) {
			System.out.println("조회버튼 감지됨.");
			smView.smLogic.getEmpDetail(7566);
		}
	}//////////////////////// end of actionPerformed //////////////////////
	
}
