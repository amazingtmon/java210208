package pojo.board.step2;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class FrontMVC extends HttpServlet{
	Logger logger = Logger.getLogger(FrontMVC.class);
	BoardController boardController = new BoardController();
	MemberController memberController = new MemberController();
	ZipCodeController zipCodeController = new ZipCodeController();
	
	public void doService(HttpServletRequest req, HttpServletResponse res)
			throws ServletException,IOException
	{
		logger.info("doService called");
		String uri = req.getRequestURI();// /board/curdBoard.po2
		logger.info("uri ===> "+uri);
		String context = req.getContextPath();// /board/curdBoard.po2
		logger.info("context: "+context);
		logger.info("length: "+context.length());
		String command = uri.substring(context.length()+1);//앞에 " / "를 삭제한다.
		int end = command.lastIndexOf('.');
		command = command.substring(0, end);// board/crudBoard
		
		String upmu[] = null;
		upmu = command.split("/");
		for(String value:upmu) {
			logger.info("upmu values: "+value);
		}
		
		ActionForward forward = null;
		String crud = req.getParameter("crud");
		if("member".equals(upmu[0])) {
			forward = memberController.execute(req,res);
		}
		else if("board".equals(upmu[0])) {
			logger.info("게시판 구현 컨트롤계층 연결");
			req.setAttribute("crud", crud);
			forward = boardController.execute(req,res);
		}	
		else if("zipcode".equals(upmu[0])) {
			forward = zipCodeController.execute(req,res);
		}
		
		//null 비교가 없으면 NullPointerException이 발생한다.
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

	public void doPost(HttpServletRequest req, HttpServletResponse res)
			throws ServletException,IOException
	{
		doService(req,res);		
	}
	
}
