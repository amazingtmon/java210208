package com.pattern;

import java.awt.Color;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;

/*
 * 클래스 쪼개기를 하면서 생성자에 대한 활용 능력을 키워본다.
 * static을 사용하는 것은 반칙이다.(생성자 공부가 안되기 때문에).
 * 뷰계층-업무처리계층-이벤트처리 핸들러(최소 3개 이상으로 쪼개보기)
 * 
 * 누가 누구를 인스턴스화 해야 하는가?
 * 
 * 생성자의 파라미터 자리에는 무엇을 써야 할까? - 생성자 오버로딩에 대해서는 알고 있는가?
 * - SalaryMgrView
 * - SalaryMgrHandler
 * - SalaryMgrLogic
 * - 한개만, 두개, 세개 다 필요한가?
 * 세 개의 클래스를 그림으로 표시한 뒤 화살표를 통해서 객체 주입관계를 완성하시오.
 * */
public class SalaryMgrView {//main class Part.
	//선언부
	SalaryMgrHandler	smEvent = null;
	SalaryMgrLogic		smLogic = null;
	
	JFrame 				jf_sal = null;
	JTable 				jtb_sal = null;//화면, 양식, 폼 그리기.
	//DefaultTableModel(DataSet역할-@param 2개: data[][], header[]) + JTable => 테이블의 형태 제공.
	String 				cols[] = {"사원 이름","부서명"};
	String 				data[][] = new String[0][2];
	DefaultTableModel 	dtm_sal = null;
	JScrollPane			jsp_sal = null;
	JTableHeader		jth_sal = null;
	JButton				jbtns[] = null;
	JButton				jbtn    = null;
	String				jbtns_label[] = {"조회","입력","수정","삭제","종료"};
	JPanel				jp_north = null;
	
	//생성자
	public SalaryMgrView() {
		smEvent = new SalaryMgrHandler(this);//
		smLogic = new SalaryMgrLogic(this);
		
		jf_sal = new JFrame();//선언과 생성을 분리해본다. - 메모리에 로딩됨.
		dtm_sal = new DefaultTableModel(data,cols);
		//테이블의 양식을 작성하는 클래스 생성.
		jtb_sal = new JTable(dtm_sal);
		jsp_sal = new JScrollPane(jtb_sal);
		//메소드를 통해서 객체를 주입받을 수 있다.
		//테이블의 헤더를 그려줄 클래스 생성.
		jth_sal = jtb_sal.getTableHeader();
		//버튼추가
		jp_north = new JPanel();
		jp_north.setLayout(new GridLayout(1,4,3,3));
		jbtns = new JButton[jbtns_label.length];//버튼 배열 방생성.
		for(int i=0; i<jbtns_label.length ; i++) {
			jbtn = new JButton(jbtns_label[i]);
			jbtns[i] = jbtn;//버튼 객체 배열과 동기화 처리하기.
			jp_north.add(jbtn);
			//이벤트소스와 이벤트 처리 핸들러 메소드 매칭
			jbtns[i].addActionListener(smEvent);
		}
		initDisplay();
	}
	
	//화면처리부
	public void initDisplay() {
		jth_sal.setBackground(Color.green);//API활용 능력 키우기.
		jf_sal.add("North", jp_north);
		jf_sal.add("Center", jsp_sal);
		jf_sal.setTitle("급여 명세서");
		jf_sal.setSize(400, 300);
		jf_sal.setVisible(true);
	}
	
	//main
	   public static void main(String[] args) {
	      new SalaryMgrView();
	   }   
}

