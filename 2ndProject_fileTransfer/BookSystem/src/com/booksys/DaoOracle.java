package com.booksys;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

import org.omg.CORBA.FREE_MEM;

public class DaoOracle {
	static String userID = "test";
	DBConnection dbMgr = null;
	Connection con = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	CallableStatement cstmt = null;

	LoginView login = null;
	SearchBook sBook = null;
	public DaoOracle(){
		dbMgr = DBConnection.getInstance();
		try {
			con = dbMgr.getConnection();
			System.out.println("오라클 연결 성공");
		}catch (Exception e) {
			System.out.println("오라클 서버 연결 실패"+e.toString());
		}
	}
	
	public void loginSQL(LoginView log, String mid, String mpw) {//로그인 연결 메소드
		this.login = log;
		String sql = "select * from member where mid=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, mid);
			rs = pstmt.executeQuery();
			if (rs.next()) { 
				if (mpw.equals(rs.getString("pw"))) {
					if("admin".equals(rs.getString("mid"))) {
						AdminFrame af = new AdminFrame();
						af.setVisible(true);
						login.jf.dispose();
					}
					else {
						userID = mid;//접속한 유저 아이디 저장
						UserFrame bf = new UserFrame();
						bf.setVisible(true);
						login.jf.dispose();
					}
				}
				else {
					JOptionPane.showMessageDialog(null, "비밀번호가 일치하지 않습니다");
				}
			}
			else {
				JOptionPane.showMessageDialog(null, "아이디가 존재하지 않습니다");
			}
		} catch (Exception e1) {
			System.out.println("로그인문제");
			e1.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt, rs);
		}
	}
	//////////////////////////////////////////////////////////
	public Vector<BookVO> SearchSQL(String type, String search) {//도서검색 메소드
		Vector<BookVO> vec = new Vector<BookVO>();
		BookVO bvo = null;
		StringBuilder sql = new StringBuilder();
		sql.append("select * from book");
		sql.append(" where "+type+" like  ?");
		try {
			pstmt = con.prepareStatement(sql.toString());
			//pstmt.setString(1, type);
			pstmt.setString(1, "%"+search+"%");
			rs = pstmt.executeQuery();
			while(rs.next()) {
				bvo = new BookVO();
				bvo.setBookno(rs.getInt("bookno"));
				bvo.setIsbn13(rs.getLong("isbn13"));
				bvo.setTitle(rs.getString("title"));
				bvo.setAuthor(rs.getString("author"));
				bvo.setPublisher(rs.getString("publisher"));
				bvo.setRent(rs.getString("rent"));
				vec.add(bvo);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return vec;
	}
	////////////////////////////////////////////////////////////
	public Vector<BookVO> AllBookSQL() {//전체조회 메소드
		String sql = "select * from book";
		Vector<BookVO> vec = new Vector<BookVO>();
		BookVO bvo = null;
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				bvo = new BookVO();
				bvo.setBookno(rs.getInt("bookno"));
				bvo.setIsbn13(rs.getLong("isbn13"));
				bvo.setTitle(rs.getString("title"));
				bvo.setAuthor(rs.getString("author"));
				bvo.setPublisher(rs.getString("publisher"));
				bvo.setRent(rs.getString("rent"));
				vec.add(bvo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return vec;
	}
	////////////////////////////////////////////////////////////
	public Vector<BookVO> RentAllSQL() {//유저가 빌린도서 전체조회 메소드
		Vector<BookVO> vecVO = new Vector<BookVO>();
		BookVO bVO = null;
		StringBuilder sql = new StringBuilder();
		sql.append("select a.bookno, a.title, a.author, b.rdate, b.expdate");
		sql.append(" from book a, membook b");
		sql.append(" where a.bookno = b.bookno and B.MID = ?");
		try {
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				bVO = new BookVO();
				bVO.setBookno(rs.getInt("bookno"));
				bVO.setTitle(rs.getString("title"));
				bVO.setAuthor(rs.getString("author"));
				bVO.setRdate(rs.getString("rdate"));
				bVO.setExpdate(rs.getString("expdate"));
				vecVO.add(bVO);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return vecVO;
	}
	////////////////////////////////////////////////////////////
	public Vector<BookVO> DetailSQL(Integer bookno) {//상세조회 메소드
		String sql = "select * from book where bookno = ?";
		Vector<BookVO> vec = new Vector<BookVO>();
		BookVO bvo = null;     
		try {
			con =dbMgr.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, bookno);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				bvo = new BookVO();
				bvo.setBookno(rs.getInt("bookno"));
				bvo.setIsbn13(rs.getLong("isbn13"));
				bvo.setTitle(rs.getString("title"));
				bvo.setAuthor(rs.getString("author"));
				bvo.setPublisher(rs.getString("publisher"));
				bvo.setPub_date(rs.getInt("pub_date"));
				bvo.setDesciption(rs.getString("description"));
				vec.add(bvo);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			//사용한 자원 반납하기
			//이걸 상습적으로 안하면 오라클에서 세션을 닫아버린다. -자바 튜닝팀의 권장사항
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return vec;
	}
	////////////////////////////////////////////////////////////
	//도서대출 메소드
	public boolean RentSQL(Integer bookno) {
		String sql = "{call proc_rent(?, ?)}";
		boolean result = true;
		try {
			cstmt = con.prepareCall(sql);
			cstmt.setInt(1, bookno);
			cstmt.setString(2, userID);
			result = cstmt.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, cstmt);
		}
		return result;
	}
	////////////////////////////////////////////////////////////
	//도서반납 메소드
	public boolean ReturnSQL(Integer bookno) {
		String sql = "{call proc_turn(?)}";
		boolean result = true;
		try {
			cstmt = con.prepareCall(sql);
			cstmt.setInt(1, bookno);
			result = cstmt.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, cstmt);
		}
		return result;
	}
	////////////////////////////////////////////////////////////
	//대출연장 메소드
	public boolean DelaySQL(Integer bookno) {
		String sql = "{call proc_delay(?)}";
		boolean result = true;
		try {
			cstmt = con.prepareCall(sql);
			cstmt.setInt(1, bookno);
			result = cstmt.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, cstmt);
		}
		return result;
	}
	////////////////////////////////////////////////////////////
	//admin 도서 추가 메소드
	public int insertSQL(Vector<BookVO> vec) {
		int result = 0;
		StringBuilder sql = new StringBuilder();
		sql.append("INSERT INTO book");
		sql.append(" VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

		try {
			System.out.println(vec.get(0).getBookno());
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setInt(1, vec.get(0).getBookno());
			pstmt.setLong(2, vec.get(0).getIsbn13());
			pstmt.setString(3, vec.get(0).getTitle());
			pstmt.setString(4, vec.get(0).getAuthor());
			pstmt.setString(5, vec.get(0).getPublisher());
			pstmt.setInt(6, vec.get(0).getPub_date());
			pstmt.setString(7, "1");
			pstmt.setString(8, vec.get(0).getDesciption());
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt);
		}
		return result;

	}
	////////////////////////////////////////////////////////////
	//admin 도서 수정할 값 받아올 메소드
	public Vector<BookVO> updateSQL(Integer bookno) {
		String sql = "select * from book where bookno = ?";
		BookVO bvo = null;
		Vector<BookVO> vec = new Vector<BookVO>();
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, bookno);
			rs = pstmt.executeQuery();

			while(rs.next()) {
				bvo = new BookVO();
				bvo.setBookno(rs.getInt("bookno"));
				bvo.setIsbn13(rs.getLong("isbn13"));
				bvo.setTitle(rs.getString("title"));
				bvo.setAuthor(rs.getString("author"));
				bvo.setPublisher(rs.getString("publisher"));
				bvo.setPub_date(rs.getInt("pub_date"));
				bvo.setDesciption(rs.getString("description"));
				vec.add(bvo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt, rs);
		}
		return vec;
	}
	////////////////////////////////////////////////////////////
	// admin 도서 수정 완료 메소드
	public int updateEndSQL(Vector<BookVO> v) {
		StringBuilder sql = new StringBuilder();
		sql.append("update book");
		sql.append(" set isbn13 = ?, title = ?, author = ?, publisher = ?, pub_date = ?, description = ?");
		sql.append(" where bookno = ?");

		int result = 0;
		try {
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setLong(1, v.get(0).getIsbn13());
			pstmt.setString(2, v.get(0).getTitle());
			pstmt.setString(3, v.get(0).getAuthor());
			pstmt.setString(4, v.get(0).getPublisher());
			pstmt.setInt(5, v.get(0).getPub_date());
			pstmt.setString(6, v.get(0).getDesciption());
			pstmt.setInt(7, v.get(0).getBookno());
			result = pstmt.executeUpdate();


		} catch (Exception e) {
			// TODO: handle exception
		}finally {
			dbMgr.freeConnection(con, pstmt);
		}
		return result;
	}
	////////////////////////////////////////////////////////////
	//admin 도서 삭제 메소드
	public int deleteSQL(Integer bookno) {
		String sql = "delete from book where bookno = ?";
		int result = 0;
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, bookno);
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			dbMgr.freeConnection(con, pstmt);
		}
		return result;
	}
}
