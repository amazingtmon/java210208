package ch5.singleton;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandler2 implements ActionListener{
	ViewApp2 viewApp2 = null;

	public EventHandler2(ViewApp2 viewApp) {
		this.viewApp2 = null;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == viewApp2.jbtn) {//NullPointerException
			System.out.println("button!!");
		}
		
	}
	
}
