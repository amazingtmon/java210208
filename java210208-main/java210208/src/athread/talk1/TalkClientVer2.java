package athread.talk1;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class TalkClientVer2 extends JFrame implements ActionListener {

	// 통신과 관련된 전역변수 추가
	Socket socket = null;

	// 직렬화를 누릴 수 있다.
	ObjectOutputStream oos = null;// 이모지와 파일 등 다양한 메시지들을 가능하게 해줌.
	ObjectInputStream ois = null;

	// 닉네임 담을 변수.
	String nickName = null;

	// 속지 2장 추가하기
	JPanel jp_first = new JPanel();
	JPanel jp_second = new JPanel();
	JPanel jp_second_south = new JPanel();

	// 화면 관련 전역변수 추가
	JTextArea jta_display = new JTextArea();
	JScrollPane jsp_display = new JScrollPane(jta_display);
	JPanel jp_south = new JPanel();
	JTextField jtf_msg = new JTextField(20);
	JButton jbtn_send = new JButton("send");

	// 두번째 화면에 들어갈 전변선언
	String cols[] = { "대화명" };
	String data[][] = new String[0][1];
	DefaultTableModel dtm_nick = new DefaultTableModel(data, cols);
	JTable jtb_nick = new JTable(dtm_nick);
	JTextArea jta_nick = new JTextArea();
	JScrollPane jsp_nick = new JScrollPane(jtb_nick);
	JScrollPane jsp_nick2 = new JScrollPane(jta_nick);
	JButton jbtn_one = new JButton("1:1대화");
	JButton jbtn_chng = new JButton("대화명 변경");
	JButton jbtn_emoji = new JButton("이모티콘");
	JButton jbtn_exit = new JButton("나가기");


	public void initDisplay() {
		nickName = JOptionPane.showInputDialog("닉네임을 입력하세요.");

		jtf_msg.addActionListener(this);

		jta_display.setEditable(false);
		jta_nick.setEditable(false);
		jp_south.setLayout(new BorderLayout());

		jp_south.add("Center", jtf_msg);
		jp_south.add("East", jbtn_send);

		jp_first.setLayout(new BorderLayout());
		jp_first.add("Center", jsp_display);
		jp_first.add("South", jp_south);
		jp_first.setBackground(Color.yellow);

		jp_second_south.setLayout(new GridLayout(2, 2));
		jp_second_south.add(jbtn_one);
		jp_second_south.add(jbtn_chng);
		jp_second_south.add(jbtn_emoji);
		jp_second_south.add(jbtn_exit);

		jp_second.setLayout(new BorderLayout());
		jp_second.add("Center", jsp_nick);
		// jp_second.add("West", jsp_nick2);
		jp_second.add("South", jp_second_south);
		jp_second.setBackground(Color.blue);

		this.setLayout(new GridLayout(1, 2));
		this.add(jp_first);
		this.add(jp_second);
		this.setTitle(nickName + "님의 창");
		this.setSize(400, 500);
		this.setVisible(true);
	}

	public static void main(String[] args) {
		TalkClientVer2 tc = new TalkClientVer2();
		tc.initDisplay();
		tc.init();// 소켓 처리.
	}

	// 소켓 관련 초기화.
	public void init() {
		try {
			// 소켓 생성하기 - ip, port -> 서버측 ServerSocket에 연결됨.
			socket = new Socket("192.168.0.3", 3344);
			oos = new ObjectOutputStream(socket.getOutputStream());
			ois = new ObjectInputStream(socket.getInputStream());
			oos.writeObject(100 + "#" + nickName);
			TalkClientThread tct = new TalkClientThread(this);// 스레드와 연결되는 부분.
			tct.start();// tct run() 호출.
		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		String msg = jtf_msg.getText();
		if (obj == jtf_msg) {
			try {
				oos.writeObject(200 + "#" + nickName + "#" + msg);
				jtf_msg.setText("");
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}

}
