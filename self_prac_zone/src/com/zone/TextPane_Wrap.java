package com.zone;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Container;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextPane;
import javax.swing.text.BadLocationException;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;

public class TextPane_Wrap extends JFrame implements ActionListener, WindowListener{
	
	public TextPane_Wrap() {
		init();
	}
	
	public void init() {
		JFrame frame = new JFrame("Demo");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container container = frame.getContentPane();
		JTextPane textPane = new JTextPane();
		textPane.setBackground(Color.BLUE);
		Font font = new Font("Serif", Font.ITALIC, 22);
		textPane.setFont(font);
		
		SimpleAttributeSet attributeSet = new SimpleAttributeSet();
		StyleConstants.setItalic(attributeSet, true);
		StyleConstants.setForeground(attributeSet, Color.blue);
		StyleConstants.setBackground(attributeSet, Color.white);
		textPane.setCharacterAttributes(attributeSet, true);
		textPane.setText("This is demo text1. This is demo text2. This is demo text3."
				+ "This is demo text4.This is demo text5. This is demo text6. "
				+ "This is demo text7. This is demo text8. This is demo text9. "
				+ "This is demo text10. This is demo text11. This is demo text12."
				+ "This is demo text13. This is demo text13. This is demo text14."
				+ "This is demo text15. This is demo text13. This is demo text16."
				+ " This is demo text17. This is demo text13. This is demo text18."
				+ " This is demo text19.This is demo text13.This is demo text20.");
		
		JScrollPane scrollPane = new JScrollPane(textPane);
		scrollPane.setVerticalScrollBarPolicy(javax.swing.ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);
		container.add(scrollPane, BorderLayout.CENTER);
		frame.addWindowListener(this);
		frame.setSize(500, 300);
		frame.setVisible(true);
		
	}

   public static void main(String args[]) throws BadLocationException {
	   new TextPane_Wrap();
   }

@Override
public void actionPerformed(ActionEvent e) {
	Object obj = e.getSource();
	System.out.println(obj);
	
}

@Override
public void windowActivated(WindowEvent arg0) {
	// TODO Auto-generated method stub
	
}

@Override
public void windowClosed(WindowEvent we) {
	Object obj = we.getWindow();
	System.out.println("closed "+obj);
	
}

@Override
public void windowClosing(WindowEvent we) {
	Object obj = we.getWindow();
	System.out.println("closing "+obj);
	System.out.println("닫힘");
	System.out.println(we);

	
}

@Override
public void windowDeactivated(WindowEvent arg0) {
	// TODO Auto-generated method stub
	
}

@Override
public void windowDeiconified(WindowEvent arg0) {
	// TODO Auto-generated method stub
	
}

@Override
public void windowIconified(WindowEvent arg0) {
	// TODO Auto-generated method stub
	
}

@Override
public void windowOpened(WindowEvent arg0) {
	// TODO Auto-generated method stub
	
}

}
