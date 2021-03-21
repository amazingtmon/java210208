package self.oracle;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Vector;

import com.util.DBConnectionMgr;

public class RSnextTest {

	Connection 			con = null;
	PreparedStatement 	pstmt = null;
	ResultSet 			rs = null;
	DBConnectionMgr 	dbmgr = null;
	
	public RSnextTest() {
		dbmgr = dbmgr.getInstance();
		StringBuilder sb = new StringBuilder();
		sb.append("SELECT * FROM T_GIFTMEM");
		con = dbmgr.getConnection();
		
		try{
			pstmt = con.prepareStatement(sb.toString());
			rs = pstmt.executeQuery();
			while(rs.next()) {
				String mem_cd = rs.getString("MEMCD_VC");
				String name = rs.getString("NAME_VC");
				int point = rs.getInt("POINT_NU");
				
				System.out.println(mem_cd+" "+name+" "+point);
			}
			
		} catch(Exception e) {
			
		} finally {
			dbmgr.freeConnection(con, pstmt, rs);
		}
		
		
		
	}
	
	
	public static void main(String[] args) {
		new RSnextTest();

	}

}
