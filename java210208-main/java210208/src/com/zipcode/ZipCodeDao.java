package com.zipcode;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.util.DBConnectionMgr;

public class ZipCodeDao {
	Connection 			con = null;
	PreparedStatement pstmt = null;
	ResultSet 			 rs = null;
	DBConnectionMgr   dbMgr = null;
	
	//생성자
	public ZipCodeDao() {
		dbMgr = DBConnectionMgr.getInstance();
		try {
			con = dbMgr.getConnection();
		} catch(Exception e) {
			System.out.println("Fail to connect with oracle server!!!");
		}
	}
	
	//클래스 쪼개기에서 초급자가 항상 염두에 둘 사항은 배달 사고임.
	public ArrayList<ZipCodeVO> getZipCodeList(String dong){
		System.out.println("getZipCodeList call success "+dong);
		ArrayList zipcodeList = null;
		
		return zipcodeList;
	}
}
