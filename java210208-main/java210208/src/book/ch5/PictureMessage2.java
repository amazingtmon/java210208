package book.ch5;

import java.awt.GridLayout;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JPanel;

public class PictureMessage2 extends JDialog {
	//./src/images
	String imagePath = "D:\\cosmo_ysc_80th\\java210208-main\\java210208\\src\\images\\";
	JPanel jp_emoticon = new JPanel();
	GridLayout gl_emoticon = new GridLayout(1,5,2,2);
	JButton pic0 = new JButton("1");
	JButton pic1 = new JButton("1");
	JButton pic2 = new JButton("1");
	JButton pic3 = new JButton("1");
	JButton pic4 = new JButton("1");
	
	String imgFile[] = {"lion11.png","lion22.png","lion33.png","lion44.png","lion55.png"};
	JButton imgButton[] = {pic0,pic1,pic2,pic3,pic4};
	ImageIcon img[] = new ImageIcon[imgButton.length];
	
	
	//생성자
	public PictureMessage2() {
		initDisplay();
		}
	
	//화면처리
	public void initDisplay() {
		this.setDefaultCloseOperation(JDialog.DISPOSE_ON_CLOSE);
		
		jp_emoticon.setLayout(gl_emoticon);
		
		pic0.setIcon(new ImageIcon(imagePath+imgFile[0]));
		pic1.setIcon(new ImageIcon(imagePath+imgFile[1]));
		jp_emoticon.add(pic0);
		jp_emoticon.add(pic1);
		jp_emoticon.add(pic2);
		jp_emoticon.add(pic3);
		jp_emoticon.add(pic4);
		
		
		this.add("Center",jp_emoticon);
		this.setSize(400, 200);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new PictureMessage2();

	}
}
