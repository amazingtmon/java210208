package mvc.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import web_basic.DeptServlet;

public class FrontContorller extends HttpServlet {
	Logger logger = Logger.getLogger(DeptServlet.class);
	
	//WAS(Tomcat이 req, res를 제공)
	public void doService(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		
	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		doService(req, res);
	}
	
	public void doPost(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		doService(req, res);
	}
}
