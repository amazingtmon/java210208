package com.design;

public class BaseBallGame_self {
	
	BaseBallGameView_self bgv = new BaseBallGameView_self(this);
	
	//생성자
	public BaseBallGame_self() {
//		bgv = new BaseBallGameView_self(this);
		bgv.initDisplay();
	}
	
	//main
	public static void main(String[] args) {
		new BaseBallGame_self();
	}
}