package com.booksys;

import java.sql.Date;

public class MemberVO {
	private String mid = "";
	private String mpw = "";
	private String mname = "";
	private Date mdate = null;

	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getPw() {
		return mpw;
	}
	public void setPw(String mpw) {
		this.mpw = mpw;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public Date getMdate() {
		return mdate;
	}
	public void setMdate(Date mdate) {
		this.mdate = mdate;
	}


}