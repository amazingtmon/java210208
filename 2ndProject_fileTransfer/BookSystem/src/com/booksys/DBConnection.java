package com.booksys;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBConnection {
	private final static String _DRIVER = "oracle.jdbc.driver.OracleDriver";
	private final static String _URL    = "jdbc:oracle:thin:@192.168.0.11:1521:orcl11";
	private final static String _USER    = "admin";
	private final static String _PW    = "tiger";

	static DBConnection dbcon = null;
	Connection con = null;
	public static DBConnection getInstance() {
		if(dbcon == null) {
			dbcon = new DBConnection();
		}
		return dbcon;
	}
	public Connection getConnection() {
		try {
			Class.forName(_DRIVER);
			con = DriverManager.getConnection(_URL, _USER, _PW);
		} catch (ClassNotFoundException e) {
			System.out.println("드라이버 클래스를 찾을 수 없습니다.");
		} catch (Exception e) {
			System.out.println("오라클 서버와 연결 실패!!!.");
		}
		return con;
	}
	//사용한 자원 반납하기
	//이것을 하지 않으면 오라클 서버에 접속할 때 세션 수의 제한 때문에 오라클서버를 재기동해야 할 수도 있음.
	public void freeConnection(Connection con, PreparedStatement pstmt, ResultSet rs) {
		try {
			if(rs !=null) rs.close();
			if(pstmt !=null) pstmt.close();
			if(con !=null) con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	//rs 없는 자원반납
	public void freeConnection(Connection con, PreparedStatement pstmt) {
		try {
			if(pstmt !=null) pstmt.close();
			if(con !=null) con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public void freeConnection(Connection con, CallableStatement cstmt, ResultSet rs) {
		try {
			if(rs !=null) rs.close();
			if(cstmt !=null) cstmt.close();
			if(con !=null) con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public void freeConnection(Connection con, CallableStatement cstmt) {
		try {
			if(cstmt !=null) cstmt.close();
			if(con !=null) con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}