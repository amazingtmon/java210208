package com.jdbc;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.List;
import java.util.Vector;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;



public class EmpServer extends JFrame implements Runnable{
	private static final long serialVersionUID = 1L;
	//EmpServerThread 		tst 		= null;
	//List<EmpServerThread> 	globalList 	= null;
	ServerSocket 			server 		= null;
	Socket 					socket 		= null;
	JTextArea 				jta_log = new JTextArea(10,30);
	JScrollPane 			jsp_log = new JScrollPane(jta_log
			                                         ,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED
			                                         ,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
	String processID = null;
	List globalList = null;
	
	public void initDisplay() {
	   ManagementFactory.getRuntimeMXBean();
	   RuntimeMXBean rt = ManagementFactory.getRuntimeMXBean();
	   processID = rt.getName();
	   System.out.println("PID = " + processID);                     
	   processID = processID.substring(0, processID.indexOf("@"));
	   System.out.println("PID = " + processID);  
	   System.out.println("taskkill /f /pid "+processID);  
		   
		this.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent we) {
				System.out.println("서버가 다운됩니다.");
				if(server!=null) {
					try {
/*
 * ServerSocket을 닫는 것과 Socket을 닫는 것을 혼동해서는 안 된다. 
 * ServerSocekt을 닫으면 사용중인 로컬 호스트의 포트가 해제되며 다른 서버가 해당 포트를 바인드 
 * 할 수 있게 된다. 또한 해당 ServerSocket을 통해 수용된 모든 소켓의 연결이 끊어진다.
 * taskkill /pid 39716 /f
 * taskkill /im afidev.exe /f
   taskkill /im afidev.exe -> 3312, 3313, 3314 afidev.exe 프로세스 모두 종료
   netstat -ano | findstr 8005
 */
						try{
							
							Process p1 = Runtime.getRuntime().exec("taskkill /f /pid "+processID);
							System.out.println("p1:"+p1);
							p1.waitFor();
							p1.destroy();
						}catch(Exception e){
							e.printStackTrace();
						}
						socket.close();
						server.close();

						System.exit(1);
					} catch (Exception e) {
						System.out.println("");
					}
				}
			}
		});
		this.add("Center",jsp_log);
		this.setTitle("EmpServer");
		this.setSize(500, 400);
		this.setVisible(true);
	}	
	//서버소켓과 클라이언트측 소켓을 연결하기
	@Override
	public void run() {
		//서버에 접속해온 클라이언트 스레드 정보를 관리할 벡터 생성하기 
		globalList = new Vector<>();
		boolean isStop = false;
		int port = 3000;
		try {
			server = new ServerSocket(port);
			this.setTitle("서버소켓 포트번호 ===> "+port);
			jta_log.append("Server Ready.........\n");
			while(!isStop) {
				socket = server.accept();
				jta_log.append("client info:"+socket+"\n");				
				jta_log.append("client info:"+socket.getInetAddress()+"\n");				
				//EmpServerThread tst = new EmpServerThread(this);
				//tst.start();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		
		}
	}
	public static void main(String[] args) {
		EmpServer ts = new EmpServer();
		ts.initDisplay();
		Thread th = new Thread(ts);
		System.out.println("현재스레드이름:"+Thread.currentThread().getName());
		System.out.println("th:"+th.getName());
		th.start();
	}

}
