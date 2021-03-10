package com.zipcode;

import javax.swing.JFrame;

public class ZipCodeSearch extends JFrame{
	//선언부
	
	//생성자
	public ZipCodeSearch() {} //default. no param.
	
	
	//화면처리부
	public void initDisplay() {
		this.setTitle("우편번호 검색기");
		this.setSize(500, 500);
		this.setVisible(true);
	}
	
	//main
	public static void main(String[] args) {
		ZipCodeSearch zcs = new ZipCodeSearch();
		//zcs.initDisplay();
	}
}