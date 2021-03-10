package self.vo;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class LaunchFoodEvent implements ActionListener{
	LaunchFood lf = null;
	FoodVO fVO = null;
	
	
	public LaunchFoodEvent(LaunchFood lf) {
		this.lf = lf;
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		int i = 0;
		fVO = new FoodVO();
		Random r = new Random();
		
		Object obj = e.getSource();
		if(obj == lf.jbtns[0]) {
			i = r.nextInt(fVO.name.length);
			System.out.println(fVO.name[i]);
		}
		else if (obj == lf.jbtns[3]) {
			System.out.println("exit");
			System.exit(0);// 자바 가상머신과의 연결고리를 끊는다.
		}
	}

}
