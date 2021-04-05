package athread.talk2;

import java.util.StringTokenizer;
import java.util.Vector;

import javax.swing.text.MutableAttributeSet;
import javax.swing.text.SimpleAttributeSet;

/*
 * 이벤트 핸들러의 역할은 말하기 이고
 * 클라이언트측 스레드의 역할은 듣기 이다.
 * */

public class Client_TalkClientThread_2 extends Thread{
	
	Client_TalkClient tc = null;
	
	public Client_TalkClientThread_2(Client_TalkClient tc) {
		this.tc = tc;
	}
	
	/*
	 * 서버에서 말한 내용을 들어봅시다.
	 */
	public void run() {
		boolean isStop = false;
		while(!isStop) {
			try {
				String msg = "";//100#apple
				msg = (String)tc.ois.readObject();
				StringTokenizer st = null;
				int protocol = 0;//100|200|201|202|500
				if(msg !=null) {
					st = new StringTokenizer(msg,"#");
					protocol = Integer.parseInt(st.nextToken());//100
				}
				switch(protocol) {
				
					case Protocol.ROOM_IN:{//130#apple
						String nickName = st.nextToken();
						MutableAttributeSet attr = new SimpleAttributeSet();
						try {
							tc.sd_display.insertString(tc.sd_display.getLength(), nickName+" 님이 입장.\n", attr);
						} catch(Exception e) {
							e.printStackTrace();
						}
						Vector<String> v = new Vector<>();
						v.add(nickName);
						tc.dtm.addRow(v);
					}break;
					
					case Protocol.MESSAGE:{
						
					}break;
					
					case Protocol.CHANGE:{//300#nickName#afterName
						String nickName = st.nextToken();
						String afterName = st.nextToken();
						String message = st.nextToken();
						
						//테이블에 대화명 변경하기
						for(int i=0; i<tc.dtm.getRowCount();i++) {
							//기존 대화명 가져오기
							String currentName = (String)tc.dtm.getValueAt(i, 0);
							if(currentName.equals(nickName)) {
								tc.dtm.setValueAt(afterName, i, 0);
								break;
							}
						}
						try {
							tc.sd_display.insertString(tc.sd_display.getLength(), 
														message, null);
						} catch(Exception e) {
							e.printStackTrace();
						}
						tc.jtp_display.setCaretPosition(tc.sd_display.getLength());
						if(nickName.equals(tc.nickName)) {
							tc.setTitle(afterName+" 님의 대화창");
							tc.nickName = afterName;//동기화해줄것.
						}
					}break;
					
					case Protocol.ROOM_OUT:{
						String nickName = st.nextToken();
						MutableAttributeSet attr = new SimpleAttributeSet();
						try {
							tc.sd_display.insertString(tc.sd_display.getLength(), 
														nickName+" 님이 퇴장.\n", attr);
						} catch(Exception e) {
							e.printStackTrace();
						}
						tc.jtp_display.setCaretPosition(tc.sd_display.getLength());
						for(int i=0;i<tc.dtm.getRowCount();i++) {
							String n =(String)tc.dtm.getValueAt(i, 0);
							if(n.equals(nickName)) {
								tc.dtm.removeRow(i);
							}
						}
					}break;
				}////////////end of switch
			} catch (Exception e) {
				// TODO: handle exception
			}
		}////////////////////end of while
	}////////////////////////end of run

}
