package UI.hanbit;

import javax.swing.JFrame;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BookManager extends JFrame {
	Logger logger = LogManager.getLogger();
	//선언
	JFrame jf = new JFrame();
	//JFrame bm = new BookManager();//new JFrame();
	//static BookManager bm2 = new BookManager();//new JFrame();
	static BookManager bm3 = null;//new JFrame();
	
	//생성자
	public BookManager() {
		//bm.initDisplay();
		//jf.initDisplay();
		initDisplay();
		//this.setSize(500, 300);
		//this.setVisible(true);
	}
	
	//화면
	public void initDisplay() {
		logger.info("initDisplay 호출 성공");
		//this - BookManager
		this.setSize(500, 300);
		//super - JFrame
		//super.setSize(500, 300);
		//setVisible에 대해서 오버라이딩을 하지 않았다. 따라서 부모의 메소드가 호출되었다.
		//bm.setVisible(true);
		super.setVisible(true);
	}
	
	//메인메소드
	public static void main(String[] args) {
		//new BookManager();
		bm3 = new BookManager();
		bm3.initDisplay();
		
	}

}
