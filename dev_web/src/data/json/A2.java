package data.json;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.google.gson.Gson;

import data.vo.DeptVO;

public class A2 {

	public static void main(String[] args) {
		Logger logger = Logger.getLogger(A2.class);
		List<DeptVO> dname = new ArrayList<>();
		int i = 0;
		DeptVO dvo = new DeptVO();
		dvo.setDeptno(10);
		dvo.setDname("개발 1팀");
		dvo.setLoc("제주");
		dname.add(i++, dvo);
		dvo = null;
		
		dvo = new DeptVO();
		dvo.setDeptno(20);
		dvo.setDname("운영팀");
		dvo.setLoc("괌");
		dname.add(i++, dvo);
		dvo = null;
		
		dvo = new DeptVO();
		dvo.setDeptno(30);
		dvo.setDname("형상관리팀");
		dvo.setLoc("서울");
		dname.add(i++, dvo);
		dvo = null;
		
		System.out.println("#1: "+dname.get(1).getDeptno());
		
		Gson g = new Gson();
		String imsi = g.toJson(dname);
		System.out.println(imsi);
		
		for(int x = 0; x<dname.size();x++) {
			 System.out.println(dname.get(x).getDeptno()
					 		   +" "+dname.get(x).getDname()
		 			 		   +" "+dname.get(x).getLoc()
					 			);
		}
		for(DeptVO value : dname) {
			logger.info("#2: "+value.getDeptno()+" "+value.getDname()+" "+value.getLoc());
			
		}
		
	}
}
