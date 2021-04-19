package web_basic;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

//@ 어노테이션 방식이 먼저 발생하고 
//xml 방식이 그후에 발생한다.
@WebServlet(urlPatterns="/dept.nhn")
//서블릿이 되기 위해서는 HttpServlet을 상속해야 한다.
public class JSonDept extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse res)
				//예외처리를 미룬다.
				throws ServletException, IOException
	{
		res.setContentType("application/json;charset=utf-8");
		PrintWriter out = res.getWriter();
		
		List<Map<String, Object>> dname = new ArrayList<>();
		int i = 0;
		
		Map<String, Object> rmap = new HashMap<>();
		rmap.put("deptno", 10);
		rmap.put("dname", "개발 4팀");
		rmap.put("loc", "강원");
		dname.add(i++, rmap);
		rmap = null;
		
		rmap = new HashMap<>();
		rmap.put("deptno", 20);
		rmap.put("dname", "운영 3팀");
		rmap.put("loc", "괌");
		dname.add(i++, rmap);
		rmap = null;
		
		rmap = new HashMap<>();
		rmap.put("deptno", 30);
		rmap.put("dname", "형상관리 2팀");
		rmap.put("loc", "충청");
		dname.add(i++, rmap);
		
		Gson g = new Gson();
		String imsi = g.toJson(dname);
		System.out.println(imsi);
		
		out.println(imsi);
	}
}
