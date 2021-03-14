package athread.talk1;

import java.util.StringTokenizer;

public class TalkClientThread extends Thread {
	TalkClientVer2 tc = null;
	
	public TalkClientThread(TalkClientVer2 tc) {
		this.tc = tc;
	}

	
	@Override
	public void run() {//듣는곳.
		System.out.println("run called!!");
		boolean isStop = false;
		while(!isStop) {
			try {
				String msg = "";
				msg = (String)tc.ois.readObject();
				StringTokenizer st = null;//#을 기준으로 자름.
				int protocol = 0;
				if(msg != null) {//100#someone#오늘 스터디 할까?
					st = new StringTokenizer(msg,"#");
					protocol = Integer.parseInt(st.nextToken());//100
				}
				switch(protocol) {
					case 100: {
						String nickName = st.nextToken();
						tc.jta_display.append(nickName+" 님이 입장하였습니다.\n");
					};
					case 200: {
						String nickName = st.nextToken();
						String msg2 = st.nextToken();
						tc.jta_display.append("["+nickName+"]"+msg2+"\n");
						System.out.println("["+nickName+"] "+"msg2 appended!!");
					}
						
				}
			} catch(Exception e) {
				
			}
		}
	}
}
