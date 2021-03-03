package book.ch5;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

import com.vo.DeptVO;

public class AddressDialog2 extends JDialog implements ActionListener{
	JScrollPane jsp = null;
	JPanel jp_center = new JPanel();
	JPanel jp_south = new JPanel();
	JLabel jlb_deptno = new JLabel("부서번호");
	JTextField jtf_deptno = new JTextField();
	JLabel jlb_dname = new JLabel("부서이름");
	JTextField jtf_dname = new JTextField();
	JLabel jlb_loc = new JLabel("지역");
	JTextField jtf_loc = new JTextField();
	JButton jbtn_account    = new JButton("처리");
	JButton jbtn_close       = new JButton("닫기");
	static AddressBook2 aBook = null;
	DeptVO dVO = null;
	
	public AddressDialog2() {
		initDisplay();
	}

	//화면처리부
	public void initDisplay() {
		//JPanel이 디폴트로 갖는 FlowLayout을 무시한다.
		jp_center.setLayout(null);
		jlb_deptno.setBounds(20, 20, 100, 20);
		jtf_deptno.setBounds(130, 20, 100, 20);
		jlb_dname.setBounds(20, 45, 100, 20);
		jtf_dname.setBounds(130, 45, 150, 20);
		jlb_loc.setBounds(20, 70, 100, 20);
		jtf_loc.setBounds(130, 70, 150, 20);
		jp_center.add(jlb_deptno);
		jp_center.add(jtf_deptno);
		jp_center.add(jlb_dname);
		jp_center.add(jtf_dname);
		jp_center.add(jlb_loc);
		jp_center.add(jtf_loc);
		jsp = new JScrollPane(jp_center);
	    jp_south.add(jbtn_account);
	    jp_south.add(jbtn_close);
	    this.add("Center", jsp);
	    this.add("South",jp_south);
		this.setSize(400, 500);
		this.setVisible(false);
	}
	/*
	 * @param string - 사용자가 선택한 요청에 대한 제목을 정함.
	 * @param aBook - 부모창에서 화면처리에 대한 원본 주소번지가 필요함.
	 * 입력 일때 새창을 열어서 입력 받아야함.
	 * 수정 일때는 오라클을 경유한 후 그 결과를 화면에 출력해 놓고 수정할 정보만 새로 입력받음.
	 * 상세조회일때도 오라클을 경유하여 한 건만 출력을 해야함. - readonly
	 * 수정과 입력 일때는 writeable
	 * 수정과 상세조회를 하나로 묶고, 입력을 하나로 묶어 처리.
	 * 오라클을 경유 했을 때 VO를 유지해야 한다.
	 * 그 값을 가진 주소번지를 부모창에서 받아서 자식창의 이벤트 처리 메소드인
	 * actionPerformed에서 재사용해야 하므로 전역변수로 선언한 다음 지변과 초기화를 하여 사용.
	 * */
	public void set(String title, DeptVO dVO, AddressBook2 aBook) {
		this.setTitle(title);
		this.dVO = dVO;
		this.aBook = aBook;
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		//처리버튼을 눌렀을 때 입력과 수정을 처리
		//목적지가 다시 부모창의 목록페이지로 돌아가서 새로고침이 일어남.
		//부모창의 주번이 있어야 새로고침을 처리하는 메소드를 호출가능함.
		String command = e.getActionCommand();
	      if("처리".equals(command)) {
	            //입력 혹은 수정처리
	         aBook.refresh();
	         
	      }else if("닫기".equals(command)) {
	         //닫기 버튼을 누르면 자바가상머신과의 연결 고리를 끊어서 강제 종료 시킴.
	         System.exit(0);
	      }
	      //닫기 버튼을 눌렀을 때

		
	}
}