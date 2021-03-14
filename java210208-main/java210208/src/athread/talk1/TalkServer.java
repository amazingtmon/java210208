package athread.talk1;

import java.awt.Color;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Vector;

import javax.swing.JFrame;
/*
 * 클라이언트 측에서 접속 시도가 있을 때 서버측에서 클라이언트의 로그 정보를 보고 싶다.
 * 따라서 화면에 전광판을 하나 추가하여 텍스트로 로그 정보를 확인할 수 있도록 하기 위해서
 * JFrame을 상속 받았다.
 * 
 * main메소드가 있는 클래스는 디폴트 스레드를 가진다.
 * 이 스레드에서 소켓 서버 정보를 관리하는 것이 경합이 일어날 수 있고
 * 그에 따라 충돌이나 이상이 발생가능하므로 별도의 스레드를 구현하고 그 run메소드 안에서
 * 안전하게 소켓들이 생성되고 관리될 수 있도로고 한다.
 * 
 * */
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class TalkServer extends JFrame implements Runnable{
	//통신에 관련된 전변 
	ServerSocket			 	 server = null;
	Socket						 client = null;	
	TalkServerThread 				tst = null;
	Vector<TalkServerThread> globalList = null;
	JTextArea		jta_log  = new JTextArea();
	JScrollPane		jsp_log	 = new JScrollPane(jta_log);
	
	public void initDisplay() {
		jta_log.setBackground(Color.PINK);
		this.add("Center", jsp_log);
		this.setSize(500, 400);
		this.setVisible(true);
	}

	public static void main(String[] args) {
		TalkServer ts = new TalkServer();
		ts.initDisplay();
		Thread th = new Thread(ts);
		th.start();//run메소드 호출.
	}
	
	@Override
	public void run() {
		System.out.println("run 호출 성공!!");
		globalList = new Vector<>();
		boolean isStop = false;
		try {
			server = new ServerSocket(3344);//port번호 3344 서버 생성.
			jta_log.append("Server Ready......\n");//서버가동후 클라이언트 접속까지 대기중...
			while(!isStop) {
				client = server.accept();//클라이언트 소켓의 정보를 파악함.
				jta_log.append("Client info : "+client+"\n");
				tst = new TalkServerThread(this);//TalkServerThread의 생성자 호출.
				tst.start();
			}
		} catch(Exception e) {
			//예외 발생에 대한 메시지들을 stack영역에 관리하는데 이것들을 출력해주는 메소드.
			//라인 번호와 호출 순서에 대한 내용까지도 포함하니까더 많은 힌트를 얻을 수가 있다.
			
		}
		
	}
}
