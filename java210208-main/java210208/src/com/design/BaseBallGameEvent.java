package com.design;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JOptionPane;

public class BaseBallGameEvent implements ActionListener{
	BaseBallGameView bbgView = null;
	BaseBallGame_Logic bbgLogic = null;
	
	public BaseBallGameEvent(BaseBallGameView bbgView, BaseBallGame_Logic bbgLogic) {
		this.bbgView = bbgView;
		this.bbgLogic = bbgLogic;
	}
	
	

	@Override
	public void actionPerformed(ActionEvent e) {
		//ActionListener al = new BaseBallGameEvent();
		
		//이벤트가 감지된 소스의 주소번지를 얻어오기.
//		Object obj = e.getSource();
//		//bbgView가 null이 아니기 위해서는 BaseBallGameEvent의 생성자를 경유해야한다.
//		if(obj == bbgView.jbtns[0]) {//새게임 버튼;
//			
//		}
		
		Object obj = e.getSource();
		// 라벨값으로 처리하고 싶으면
		String label = e.getActionCommand(); //새게임,지우기
		System.out.println("event label:"+label);
		if(obj == bbgView.jtf_input){
			String input =  bbgView.jtf_input.getText().trim();
			
			//만일 숫자가 아닌 값이 있을 때도 고려해야 한다.
			try {
				Integer.parseInt(input);//356			
			} catch (NumberFormatException nfe) {
				bbgView.jop.showMessageDialog( bbgView.jf, "숫자만 입력하세요", "Error", JOptionPane.ERROR_MESSAGE);
				bbgView.jtf_input.setText("");
				bbgView.jtf_input.requestFocus();				
				return ;
			}
			
			if(input.length()!=3){
				return;
			}
			else{
				 bbgView.jta_display.append(++bbgView.cnt+"."+ bbgView.jtf_input.getText()+":"+bbgLogic.call(input)+"\n");
				 bbgView.jtf_input.setText("");
			}
		}
		else if("지우기".equals(label)){
			 bbgView.jta_display.setText("");
			 bbgView.jtf_input.requestFocus();
		}
		else if("종료".equals(label)){
			System.exit(0);// 자바 가상머신과의 연결고리를 끊는다.
		}
		else if(obj ==  bbgView.jmi_dap){
			 bbgView.jta_display.append("정답은 "+ bbgLogic.com[0]+ bbgLogic.com[1]+ bbgLogic.com[2]+"\n");
			 bbgLogic.nanSu();
		}
		else if(obj ==  bbgView.jbtns[1]){
			 bbgView.jta_display.append("정답은 "+ bbgLogic.com[0]+ bbgLogic.com[1]+ bbgLogic.com[2]+"\n");
			 bbgLogic.nanSu();
		}
		//새게임
		else if(obj ==  bbgView.jbtns[0]){
			bbgView.cnt = 0;
			 bbgLogic.nanSu();
			bbgView.jta_display.setText("");
			bbgView.jtf_input.setText("");
			bbgView.jtf_input.requestFocus();
		}
	}
}
