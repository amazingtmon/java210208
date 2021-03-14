package network.step1;

import java.io.BufferedReader;//필터 역할의 클래스. 단독으로 사용못함.
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import javax.swing.JLabel;

import book.ch5.AddressBook2;

public class TimeClient extends Thread{
	AddressBook2 aBook2 = null;
	public String timeStr = null;
	JLabel jlb_time = null;
	PrintWriter out = null;
	BufferedReader br = null;
	
	
	public TimeClient (JLabel jlb_time) {
		this.jlb_time = jlb_time;
	}
	
	public TimeClient() {
	}
	
	@Override
	public void run() {//콜백 메소드 - 사용자가 아니라 시스템 레벨에서 자동 호출되는 메소드임.
		Socket socket = null;
		BufferedReader br = null;
		boolean isFlag = false;
		try {
			socket = new Socket("192.168.0.128", 3344);//local port
			out = new PrintWriter(socket.getOutputStream(), true);
			br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			//내 소켓에 대한 포트번호는 따로 할당된다.
			while(!isFlag) {
				while((timeStr = br.readLine())!=null) {
					System.out.println(timeStr);
					jlb_time.setText(timeStr);
					try {
						sleep(1000);
					} catch(InterruptedException e) {
						System.out.println("who are you....??");
					}
				}
			}
		} catch(Exception e) {
			
		}
	}
	/*public static void main(String[] args) {
		TimeClient tc = new TimeClient();
		tc.start();//run메소드 호출해줌.
	}*/

}
