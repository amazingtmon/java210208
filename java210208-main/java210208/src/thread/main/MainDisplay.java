package thread.main;

import javax.swing.JFrame;

public class MainDisplay extends Thread {
	JFrame jf = null;
	
	public void initDisplay() {
		System.out.println("initDisplay called");
		
		jf = new JFrame();
		
		jf.setTitle("화면 출력");
		jf.setSize(500, 300);
		jf.setVisible(true);
	}
	
	public void run() {
		System.out.println("run called");
		try {
			sleep(3000);
			for(double d=0; d<500; d++) {
				//지연시키기.
				System.out.println("d===>"+d);
				if(jf!=null) {
					jf.setTitle("run메소드 경유함");
					jf.revalidate();
				}
			}
		} catch (InterruptedException e) {
			System.out.println(e.toString());
		}
	}
	
	public static void main(String[] args) {
		MainDisplay md = new MainDisplay();
		
		md.initDisplay();
		md.run();
	}

}
