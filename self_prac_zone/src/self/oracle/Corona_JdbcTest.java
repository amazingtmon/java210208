package self.oracle;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Corona_JdbcTest {
	//선언부
	static final String _DRIVER = "oracle.jdbc.driver.OracleDriver";
	static final String _URL = "jdbc:oracle:thin:@192.168.0.3:1521:orcl11";
	String              _USER = "client";
	String              _PW = "abcd1234";
	
	//물리적으로 떨어져 있는 서버에 연결통로 만들기
	Connection			con = null;
	
	//24번 서버에 내가 작성한 select문을 전달해줄 객체 선언
	PreparedStatement	pstmt = null;
	
	//오라클의 커서를 조작하는 객체 선언
	ResultSet			rs = null;
	
	//생성자
	public Corona_JdbcTest() {
		String sql = "SELECT * FROM CORONA";
		
		try {
			//오라클 드라이버 클래스 로딩하기
			Class.forName(Corona_JdbcTest._DRIVER);
			//연결통로 확보하기
			con = DriverManager.getConnection(_URL, _USER, _PW);
			//오라클 서버에 select문을 전달할 전령 객체 생성
			pstmt = con.prepareStatement(sql);
			//오라클에 살고 있는 커서 조작을 위해서 자바가 제공하는 객체 생성.
			rs = pstmt.executeQuery();
			Corona_eVO corona_eVO = null;
			rs.next();
			while(rs.next()) {
				corona_eVO = new Corona_eVO();
				corona_eVO.setSERIAL_NUM(rs.getInt("SERIAL_NUM"));
				corona_eVO.setCONFIRMATION_DAY(rs.getString("CONFIRMATION_DAY"));
				corona_eVO.setLOC(rs.getString("LOC"));
				corona_eVO.setINFECTED_LOC(rs.getString("INFECTED_LOC"));
				
				System.out.println(corona_eVO.getSERIAL_NUM()+", "+corona_eVO.getCONFIRMATION_DAY()+
									", "+corona_eVO.getLOC()+","+corona_eVO.getINFECTED_LOC());
			}
			
		} catch (ClassNotFoundException ce) {
			System.out.println("드라이버 클래스 로딩 실패");
			return;
		} catch (SQLException se) {
			//부적합한 식별자 입니다.
			System.out.println("SQLException: "+se.getMessage());//좀 더 구체적인 예외처리 클래스 정보를 알 수 있다.
		}
		System.out.println("여기");
	}
	
	//오라클 서버 접속
	public static void main(String[] args) {
		Corona_JdbcTest cojt = new Corona_JdbcTest();

	}

}
