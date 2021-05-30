package pojo.board.step2;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

//DispatcherServlet을 사용한다면 spring.
public class FrontMVC extends HttpServlet{
	Logger logger = Logger.getLogger(FrontMVC.class);
	BoardController boardController = new BoardController();
	MemberController memberController = new MemberController();
	ZipCodeController zipCodeController = new ZipCodeController();
	
	public void doService(HttpServletRequest req, HttpServletResponse res)
			throws ServletException,IOException
	{
		logger.info("doService called");
		//web.xml 파일에 있는 <url-pattern> 내용을 가져옴. 
		String uri = req.getRequestURI();// /board/boardInsert.po2
		logger.info("uri ===> "+uri);
		String context = req.getContextPath();// /board/boardInsert.po2
		logger.info("context: "+context);
		String command = uri.substring(context.length()+1);//앞에 " / "를 삭제한다.
		logger.info("length: "+context.length());
		int end = command.lastIndexOf('.');
		command = command.substring(0, end);// board/boardInsert
		logger.info("command: "+command);
		
		String upmu[] = null;
		upmu = command.split("/");
		for(String value:upmu) {
			logger.info("upmu values: "+value);
			//upmu[0] = 폴더이름 board
			//upmu[1] = 페이지(업무페이지) 이름
		}
		
		ActionForward forward = null;
		//String crud = req.getParameter("crud");
		req.setAttribute("upmu", upmu);
		if("member".equals(upmu[0])) {
			forward = memberController.execute(req,res);
		}
		else if("board".equals(upmu[0])) {
			logger.info("게시판 구현 컨트롤계층 연결");
			//req.setAttribute("crud", crud);
			forward = boardController.execute(req,res);
		}	
		else if("zipcode".equals(upmu[0])) {
			forward = zipCodeController.execute(req,res);
		}
		
		//null 비교가 없으면 NullPointerException이 발생한다. 500번
		if(forward != null) {
			if(forward.isRedirect()){
				res.sendRedirect(forward.getPath());
			}
			else {
				RequestDispatcher view = req.getRequestDispatcher(forward.getPath());
				view.forward(req, res);
			}
		}
		
	}	
	
	public void doGet(HttpServletRequest req, HttpServletResponse res)
			throws ServletException,IOException
	{
		doService(req,res);
	}
	
	//js가 있어야 단위테스트 가능.
	public void doPost(HttpServletRequest req, HttpServletResponse res)
			throws ServletException,IOException
	{
		doService(req,res);		
	}
	
}
