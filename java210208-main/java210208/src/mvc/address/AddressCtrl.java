package mvc.address;

import java.io.*;
import java.util.*;

public class AddressCtrl {

	private AddressVO returnVO = new AddressVO();
	
	//아래와 비교되는 값들은 모두 AddressBook에서 받아오거나 또는 ModifyDialog에서 받아와야 한다.
	//ModifyDialog에서는 입력, 수정만 처리한다.
	//INSERT INTO 집합명(컬럼명, , , ) VALUES(?, ?, ?)
	//UPDATE 집합명 SET address='서울시 마포구 공덕동', WHERE ano=5;
	//삭제는 AddressBook의 JTable에서 직접 처리한다. Delete from 집합 WHERE ano=5;
	//command = delete, ano = 5;
	private static String _DEL = "delete";
	private static String _INS = "insert";
	private static String _MOD = "update";
	private static String _SEL = "select";
	private static String _ALL = "selectall";
	
	//생성자
	public AddressCtrl() {
	}
	/* 입력, 수정, 삭제, 상세조회
	 * @param VO - 사용자가 선택하거나 개발자가 필요로 하는 값을 넘길 수 있다.
	 * @reuturn returnVO - 입력 성공: 1(입력성공) or 0(입력 실패)
	 * 
	 * */
	public AddressVO send(AddressVO pvo) throws Exception {
		String command = pvo.getCommand();
		if (_DEL.equals(command)) {
			System.out.println("DEL 호출성공!!!");
			DeleteEntity del = new DeleteEntity();
			returnVO = del.delete(pvo);
		} else if(_INS.equals(command)) {
			System.out.println("INS 호출성공!!!");
			RegisterEntity regi = new RegisterEntity();
			returnVO = regi.insert(pvo);
		} else if(_MOD.equals(command)) {
			System.out.println("MOD 호출성공!!!");
			ModifyEntity modi = new ModifyEntity();
			returnVO = modi.update(pvo);
		} else if(_SEL.equals(command)) {
			System.out.println("SEL 호출성공!!!");
			RetrieveEntity ret = new RetrieveEntity();
			returnVO = ret.select(pvo);
		}
		return returnVO;
	}

	public AddressVO[] send() {
		System.out.println("send() 호출 성공 - AddressVo[]");
		AddressVO[] returnVOs = null;
		RetrieveEntity ret = new RetrieveEntity();
		AddressVO pVO = new AddressVO();
		pVO.setCommand("select");
		ret.selectList(pVO);
		return returnVOs;
	}
	public List<AddressVO> sendAll() {
		System.out.println("sendAll() 호출 성공 - List<AddressVO>");
		List<AddressVO> selectAll = null;
		RetrieveEntity ret = new RetrieveEntity();
		AddressVO pVO = new AddressVO();
		pVO.setCommand("selectall");
		ret.selectList(pVO);
		return selectAll;
	}
	public List<Map<String, Object>> sendAllMap() throws Exception {
		System.out.println("sendAllMap() 호출 성공 - List<Map<String, Object>>");
		List<Map<String, Object>> selectAll = null;
		return selectAll;
	}
}
