package ch5.singleton;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandler implements ActionListener{
	ViewApp viewApp = null;
	
	public EventHandler(ViewApp viewApp) {
		this.viewApp = viewApp;
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == viewApp.jbtn) {
			System.out.println("button!!");
		}
		
	}
	
}
