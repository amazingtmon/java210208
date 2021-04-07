package web_basic;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class DeptServlet extends HttpServlet {
	Logger logger = Logger.getLogger(DeptServlet.class);
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		logger.info("doGet 호출 성공");
		String mem_id = req.getParameter("m_id");
		logger.info("사용자가 입력한 아이디는 "+mem_id);
	}
	
	//단위 테스트 불가능. 다른 웹페이지를 통해서만 가능.
	public void doPost(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		logger.info("doGet 호출 성공");
	}
}
