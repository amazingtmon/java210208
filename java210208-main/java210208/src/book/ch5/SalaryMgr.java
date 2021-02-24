package book.ch5;

import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;

import com.vo.DeptVO;
import com.vo.EmpVO;

public class SalaryMgr implements ActionListener{
	//선언부
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
	public SalaryMgr() {
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
			jbtns[i].addActionListener(this);
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
		new SalaryMgr();
	}

	@Override
	public void actionPerformed(ActionEvent ae) {
		Object obj = ae.getSource();//버튼의 주소번지를 출력함.
		String command = ae.getActionCommand();//버튼의 라벨값을 출력함.
		if("종료".equals(command)) {// 종료버튼 누렀을때.
			//자바 가상머시과의 연결고리 끊어줌. - 가비지 컬렉터에 의해서 Candidate상태로 빠짐.
			System.exit(0);
			//쓰레기값 청소. 호출하더라도 스레드에 의해 순서대로 처리됨. 즉시 처리안됨.
			System.gc();
		} else if("조회".equals(command)) {
			System.out.println("조회버튼 감지됨.");
//***********************************[ 중 요 ]***********************************
			EmpVO eVO = new EmpVO();
			eVO.setEname("이순신");
			
			DeptVO dVO = new DeptVO();
			//dVO.setDname("개발1팀");
			dVO.setDeptno(20);
			
			eVO.setDvo(dVO);//Today's issue!!
			System.out.println("#1 "+dVO);//dVO호출시 #101에 get으로 호출된 값이 넘어온다.
			
//***********************************[ 중 요 ]***********************************		
			//java.util에서 제공되는 클래스로, 타입에 대한 제약없이 늘었다 줄었다함.
			//연관있는 레코드를 한번에 밀어넣기 위해서 사용함.
			Vector oneRow = new Vector();
			oneRow.addElement(eVO.getEname());
			oneRow.addElement(eVO.getDvo().getDeptno());
			dtm_sal.addRow(oneRow);
//			for(int r=0; r<1 ; r++) {
//				dtm_sal.setValueAt(eVO.getEname(), r, 0);
//				dtm_sal.setValueAt(eVO.getDvo().getDeptno(), r, 1);
//			}
		}
		
	}

}
