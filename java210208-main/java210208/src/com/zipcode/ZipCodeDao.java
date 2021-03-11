package com.zipcode;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Vector;

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
	
	//콤보박스에 담을 시,도 정보 조회하기 구현
	/*
	 * 쿼리문
	 * SELECT '전체' ZDO FROM DUAL
		UNION ALL
		SELECT DISTINCT(ZDO) FROM ZIP_CODE
		ORDER BY ZDO ASC
	 * @return String[]
	 * */
	public String[] getZdoList() {
		//원격에 있는 오라클 서버에 접속하기 위해 DBConnectionMgr객체 생성하기
		//콤보 박스에 도에 대한 정보를 가져오기
		String zdos[] = null;
		
		StringBuilder sql = new StringBuilder(); 
		sql.append("SELECT '전체' ZDO FROM DUAL UNION ALL "
				+ "SELECT DISTINCT(ZDO) FROM ZIP_CODE ORDER BY ZDO ASC");
		try {
			pstmt = con.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();
			Vector<String> v = new Vector<>();
			while(rs.next()) {
				String zdo = rs.getString("zdo");
				v.add(zdo);
			}
			for(String zdo1 : v) {
				System.out.println(zdo1);
			}
			zdos = new String[v.size()];
			v.copyInto(zdos);
		}
		catch(SQLException se) {
			System.out.println("[[query]] : "+sql.toString());
		}
		catch (Exception e) {
			System.out.println("Exceptioin : "+e.toString());
		} finally {
			//사용한 자원 반납하기
			//반납할때는 열린것의 역순으로 닫아준다.
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return zdos;
	}
	
	//클래스 쪼개기에서 초급자가 항상 염두에 둘 사항은 배달 사고임.
	public ArrayList<ZipCodeVO> getZipCodeList(String dong){
		System.out.println("getZipCodeList call success: "+dong);
		ArrayList<ZipCodeVO> zipcodeList = new ArrayList<>();
		
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT ZIPCODE, ADDRESS FROM ZIP_CODE WHERE DONG LIKE ?||'%'");
		
		try {
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, dong);
			rs = pstmt.executeQuery();
			ZipCodeVO zcVO = null;
			while(rs.next()) {
				zcVO = new ZipCodeVO();
				zcVO.setZipcode(rs.getInt("zipcode"));
				zcVO.setAddress(rs.getString("address"));
				zipcodeList.add(zcVO);
			}
		} catch(SQLException se) {
			System.out.println("[[query]] : "+sql.toString());
			System.out.println("[[SQLException]] : "+se.toString());
		} catch (Exception e) {
			System.out.println("[[Exceptioin]] : "+e.toString());
		} finally {
			//사용한 자원 반납하기
			//반납할때는 열린것의 역순으로 닫아준다.
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return zipcodeList;
	}
	
	public static void main(String[] args) {
		ZipCodeDao zcd = new ZipCodeDao();
		//zcd.getZdoList();
		ArrayList<ZipCodeVO> zipcodeList = zcd.getZipCodeList("상봉");
		for(ZipCodeVO zcVO : zipcodeList) {
			System.out.println(zcVO.getAddress()+", "+zcVO.getZipcode());
		}
	}
}
