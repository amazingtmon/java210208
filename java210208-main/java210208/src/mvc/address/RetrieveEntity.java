package mvc.address;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import com.util.DBConnectionMgr;

public class RetrieveEntity {
	Connection 			con 	= null;
	PreparedStatement 	pstmt 	= null;
	ResultSet 		    rs  	= null;
	
	//오버로딩에 리턴타입은 영향이 없다.
	/*
	 * 상세조회 구현.
	 * @parma VO - getId();
	 * @return AddressVO ( or Map)
		select
		        id, name, address, telephone, gender, relationship
		        birthday, comments, REGISTEDATE
		    from mkaddrtb
		   where id= :x
	 * */
	public AddressVO select(AddressVO pvo) {//무조건 1개 로우만 가능함.
		System.out.println("RetrieveEntity select(pvo) 호출 성공");
		return null;
	}
	
	public Map<String, Object> selectMap(AddressVO vo) {//무조건 1개 로우만 가능함.
		System.out.println("RetrieveEntity select(vo) 호출 성공");
		return null;
	}
	
	public AddressVO[] select() {//n개 로우 가능함.
		System.out.println("RetrieveEntity select 호출 성공");
		StringBuilder sl = new StringBuilder();
		sl.append("select                                             ");
        sl.append("	id, name, address, telephone, gender, relationship");
        sl.append("	birthday, comments, REGISTEDATE                   ");
        sl.append("from mkaddrtb                                      ");
        sl.append("where id= :x                                       ");
        DBConnectionMgr 	dbMgr 	= DBConnectionMgr.getInstance();
        Vector<AddressVO> v = new Vector<>();
        AddressVO[] aVOS = null;
        try {
        	con = dbMgr.getConnection();
        	pstmt = con.prepareStatement(sl.toString());
        	rs = pstmt.executeQuery();
        	AddressVO aVO = null;
        	while(rs.next()) {
        		aVO = new AddressVO();
        		aVO.setId(rs.getInt("id"));
        		aVO.setName(rs.getString("name"));
        		aVO.setAddress(rs.getString("address"));
        		aVO.setTelephone(rs.getString("telephone"));
        		aVO.setGender(rs.getString("gender"));
        		aVO.setRelationship(rs.getString("relationship"));
        		aVO.setBirthday(rs.getString("birthday"));
        		aVO.setComments(rs.getString("comments"));
        		aVO.setRegistedate(rs.getString("REGISTEDATE"));
        		v.add(aVO);
        	}
        	aVOS = new AddressVO[v.size()];
        	v.copyInto(aVOS);
        } catch(Exception e) {
        	e.printStackTrace();
        } finally {
        	dbMgr.freeConnection(con, pstmt, rs);
        }
		return aVOS;
	}
	
	public List<AddressVO> selectList(AddressVO vo) {//n개 로우 가능함.
		System.out.println("RetrieveEntity selectList() 호출 성공");
		return null;
	}

}
