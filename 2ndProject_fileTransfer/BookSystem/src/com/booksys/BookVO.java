package com.booksys;

public class BookVO {
	private int bookno = 0; // 도서번호
	private long isbn13 = 0; // isbn번호
	private String title = ""; // 제목
	private String author = ""; // 저자
	private String publisher = ""; // 출판사
	private int pub_date = 0; // 발행일
	private String rent = ""; // 대출가능여부
	private String desciption = ""; // 책소개
	private String rdate = "";//대출일
	private String expdate = "";//반납일

	/////////////////////////////////////////
	public int getBookno() {
		return bookno;
	}
	public void setBookno(int bookno) {
		this.bookno = bookno;
	}
	/////////////////////////////////////////
	public long getIsbn13() {
		return isbn13;
	}
	public void setIsbn13(long isbn13) {
		this.isbn13 = isbn13;
	}
	/////////////////////////////////////////
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	/////////////////////////////////////////
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	/////////////////////////////////////////
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	/////////////////////////////////////////
	public int getPub_date() {
		return pub_date;
	}
	public void setPub_date(int pub_date) {
		this.pub_date = pub_date;
	}
	/////////////////////////////////////////
	public String getRent() {
		return rent;
	}
	public void setRent(String rent) { // 도서대출가능여부 표기
		switch(rent){
		case "0":
			this.rent = "대여중";
			break;
		case "1":
			this.rent = "대여가능";
			break;
		}
	}
	/////////////////////////////////////////
	public String getDesciption() {
		return desciption;
	}
	public void setDesciption(String desciption) {
		this.desciption = desciption;
	}
	/////////////////////////////////////////
	public String getRdate() {
		return rdate;
	}
	public void setRdate(String rdate) {
		this.rdate = rdate;
	}
	/////////////////////////////////////////
	public String getExpdate() {
		return expdate;
	}
	public void setExpdate(String expdate) {
		this.expdate = expdate;
	}
}
