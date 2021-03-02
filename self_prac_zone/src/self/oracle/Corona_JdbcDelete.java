package self.oracle;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Corona_JdbcDelete {
	//선언부
		static final String _DRIVER = "oracle.jdbc.driver.OracleDriver";
		static final String _URL = "jdbc:oracle:thin:@192.168.0.3:1521:orcl11";
		String              _USER = "client";
		String              _PW = "abcd1234";
		Scanner 			sc = new Scanner(System.in);
		
		//물리적으로 떨어져 있는 서버에 연결통로 만들기
		Connection			con = null;
		
		//24번 서버에 내가 작성한 select문을 전달해줄 객체 선언
		PreparedStatement	pstmt = null;
		
		//오라클의 커서를 조작하는 객체 선언
		ResultSet			rs = null;
		
		public Corona_JdbcDelete() {
			String sql = "DELETE FROM CORONA WHERE SERIAL_NUM=?";
			
			System.out.println("CORONA확진자 데이터 삭제, SERIAL_NUM 입력해주세요.");
			
			System.out.print("SERIAL_NUM > ");
			int num = sc.nextInt();
			
			try {
				//오라클 드라이버 클래스 로딩하기
				Class.forName(Corona_JdbcDelete._DRIVER);
				//연결통로 확보하기
				con = DriverManager.getConnection(_URL, _USER, _PW);
				//오라클 서버에 select문을 전달할 전령 객체 생성
				pstmt = con.prepareStatement(sql);
				
				pstmt.setInt(1, num);
				
				int rowCount = pstmt.executeUpdate();
				System.out.println(rowCount + "개의 행이 삭제되었습니다.");
				
			} catch (ClassNotFoundException ce) {
				System.out.println("드라이버 클래스 로딩 실패");
				return;
			} catch (SQLException se) {
				//부적합한 식별자 입니다.
				System.out.println("SQLException: "+se.getMessage());//좀 더 구체적인 예외처리 클래스 정보를 알 수 있다.
			}
			System.out.println("여기");
		}
}
