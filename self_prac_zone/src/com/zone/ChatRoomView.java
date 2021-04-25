package com.zone;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Cursor;
import java.awt.FileDialog;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.text.DefaultStyledDocument;
import javax.swing.text.StyleContext;
import javax.swing.text.StyledDocument;

public class ChatRoomView extends JFrame{
	//ActionHandler action = null;
	//ClientSocket client = null;
	String roomName = null;
	FileDialog fd = new FileDialog(this);
	
	JPanel	jp_first = new JPanel();//채팅내용 보여주는 부분.
	JPanel	jp_first_south = new JPanel();//채팅메세지 입력 부분.
	JPanel  jp_second = new JPanel();//채팅방에 있는 유저 보여주기.
	JPanel  jp_second_south = new JPanel();
	
	///////////////////////////////
	JPanel  jp_test = new JPanel();
	JScrollPane jsp_test = new JScrollPane(jp_test,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED
			, JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
	////////////////////////////////
	
	StyledDocument sd_display = 
			new DefaultStyledDocument(
					new StyleContext());
	JTextField jtf_msg = new JTextField(); 
	//JTextArea jta_display = new JTextArea();
	JTextPane jtp_display = new JTextPane(sd_display);
	JTextArea jta_user_display = new JTextArea();//채팅방 유저 아이디 부분.
	JScrollPane jsp_display = new JScrollPane(jtp_display,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED
	        									, JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
	JScrollPane jsp_user_display = new JScrollPane(jta_user_display,
												JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED
												,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);

	JButton jbtn_send  = new JButton("전송");
	JButton jbtn_exit  = new JButton("나가기");
	JButton jbtn_file  = new JButton("파일전송");
	Font font = new Font("고딕체",Font.BOLD,15);	

	public ChatRoomView() {
		initDisplay();
	}



	private void initDisplay() {
		
		//채팅 메세지 보내기.
		jtf_msg.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("enter");
				
				jtf_msg.setText("");
			}
		});
		jbtn_send.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println("button");
				JLabel hypertext = new JLabel("Hyper");
				System.out.println(hypertext.getClass());
				hypertext.setForeground(Color.BLUE.darker());
				hypertext.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
				
				jp_test.add(hypertext);
				jp_test.revalidate();
				jtf_msg.setText("");
			}
		});
		
		/*
		//채팅방 나가기.
		jbtn_exit.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent ae) {
				System.out.println("exit!!");
				dispose();
				try {
					client.send(Protocol.closeRoom,roomName, Protocol.myID);
				} catch (IOException e) {
					e.printStackTrace();
				}
				
			}
		});
		
		//파일전송.
		jbtn_file.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				fd.setDirectory("..");
			    fd.setVisible(true);
			    String fileName = fd.getFile();
			    String filePath = fd.getDirectory();
			    System.out.println(fileName);
			    System.out.println(filePath);
			    System.out.println(filePath+fileName);
			    try {
			    	File file = new File(filePath+fileName);
			    	client.send(roomName, file);
					client.send(Protocol.sendFile,roomName, filePath, fileName, Protocol.myID);
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
			
		});
		*/
		
		//show 채팅내용
//		jta_display.setFont(font);
//		jta_display.setEditable(false);
//		jta_display.setLineWrap(true);
		
		jtp_display.setFont(font);
		jtp_display.setEditable(false);
		jsp_display.setViewportView(jtp_display);
		
		//show 채팅방유저 
		jta_user_display.setFont(font);
		jta_user_display.setEditable(false);

		jp_first.setLayout(new BorderLayout());
		jp_first.add("Center", jp_test);
		jp_first.add("South", jp_first_south);
		
		//////////////////////BoxLayout.Y_AXIS, BoxLayout.PAGE_AXIS
		jp_test.setLayout(new BoxLayout(jp_test, BoxLayout.Y_AXIS));
		//jp_test.setLayout(new GridLayout(50,1,0,0));
		jp_test.add(new JButton("<HTML>Click the <FONT color=\"#000099\"><U>link</U></FONT>"
		        + " to go to the Java website.</HTML>"));

		jp_first_south.setLayout(new BorderLayout());
		jp_first_south.add("Center",jtf_msg);
		jp_first_south.add("East",jbtn_send);
		
		jp_second.setLayout(new BorderLayout());
		jp_second.add("Center", jsp_user_display);
		jp_second.add("South", jp_second_south);
		
		jp_second_south.setLayout(new GridLayout(0,1,2,2));
		jp_second_south.add(jbtn_file);
		jp_second_south.add(jbtn_exit);
		
		
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		this.add("Center", jp_first);
		this.add("East", jp_second);
		this.setBounds(1000, 200, 500, 600);
		//jf.setSize(500, 600);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new ChatRoomView();
	}
}

