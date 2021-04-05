package athread.talk2;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.StringTokenizer;


public class Client_TalkServerThread extends Thread{
	Client_TalkServer 	ts = null;
	Socket 				client = null;
	ObjectOutputStream 	oos = null;
	ObjectInputStream 	ois = null;
	String 				chatName = null;//현재 서버에 입장한 클라이언트 스레드 닉네임 저장
	
	public Client_TalkServerThread(Client_TalkServer ts) {
		this.ts = ts;
		this.client = ts.socket;
		try {
			oos = new ObjectOutputStream(client.getOutputStream());
			ois = new ObjectInputStream(client.getInputStream());
			//130#user
			String msg = (String)ois.readObject();//듣기.
			ts.jta_log.append(msg+"\n");//서버에 출력.
			StringTokenizer st = new StringTokenizer(msg,"#");//msg 나누기
			st.nextToken();//100
			chatName = st.nextToken();//user
			ts.jta_log.append(chatName+"님이 입장하였습니다.\n");
			for(Client_TalkServerThread tst:ts.globalList) {
			//이전에 입장해 있는 친구들 정보 받아내기
				//String currentName = tst.chatName;
				this.send(Protocol.ROOM_IN+"#"+tst.chatName);
			}
			//현재 서버에 입장한 클라이언트 스레드 추가하기
			//최초 입장시 for문은 작동 안하고 스레드가 추가됨.
			ts.globalList.add(this);
			this.broadCasting(msg);
		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	
	//현재 입장해 있는 친구들 모두에게 메시지 전송하기 구현
	public void broadCasting(String msg) {
/*???*/for(Client_TalkServerThread tst:ts.globalList) {
			tst.send(msg);
		}
	}
	
	//클라이언트에게 말하기 구현
	public void send(String msg) {
		try {
			oos.writeObject(msg);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void run() {
		String msg = null;
		boolean isStop = false;
		try {
			//while(true) {//무한루프에 빠질 수 있다.
			run_start:
			while(!isStop) {
				msg = (String)ois.readObject();
				ts.jta_log.append(msg+"\n");
				ts.jta_log.setCaretPosition
				(ts.jta_log.getDocument().getLength());
				StringTokenizer st = null;
				int protocol = 0;//100|200|201|202|500
				if(msg !=null) {
					st = new StringTokenizer(msg,Protocol.seperator);
					protocol = Integer.parseInt(st.nextToken());//100
				}
				switch(protocol) {
					case 201:{
						
					}break;
					
					case Protocol.MESSAGE:{
						String nickName = st.nextToken();
						String message = st.nextToken();
						broadCasting(Protocol.MESSAGE
								   +Protocol.seperator+nickName
								   +Protocol.seperator+message);
					}break;
					
					case Protocol.CHANGE:{
						String nickName = st.nextToken();
						String afterName = st.nextToken();
						String message = st.nextToken();
						this.chatName = afterName;
						broadCasting(Protocol.CHANGE
								+Protocol.seperator+nickName
								+Protocol.seperator+afterName
        						+Protocol.seperator+message);
					}break;
					
					case Protocol.ROOM_OUT:{
						String nickName = st.nextToken();
						ts.globalList.remove(this);
						broadCasting(Protocol.ROOM_OUT
								+Protocol.seperator+nickName);
					}break run_start;
				}/////////////end of switch
			}/////////////////end of while			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}/////////////////////////end of run
	


}
