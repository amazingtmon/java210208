package com.base;

import javax.swing.JFrame;
/*
 * 메소드의 파라미터는 없을 수도 있고 하나일 수도 있고 둘이상도 가능하다.
 * 메소드를 호출할 때는 파라미터의 갯수와 타입 모두가 일치해야 한다.
 * */
public class LoginView {
	int go(int x, int y) {
		return x + y;
	}
	public static void main(String[] args) {
		JFrame jf = new JFrame();
		JFrame jf2 = new JFrame();
		int width = 700;
		int height = 300;
		jf.setSize(width, height);
		jf.setVisible(true);
		String title = "로그인";
		jf.setTitle(title);
		jf2.setVisible(true);
		jf2.setSize(width, 300);
		
		LoginView sum = new LoginView();
		int y = sum.go(50, 100);
		System.out.println(y);
		
	}

}
