package pojo.board.step2;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;


public class BoardController {
	Logger logger = Logger.getLogger(BoardController.class);
	private BoardLogic boardLogic = new BoardLogic();
	private ActionForward forward = null;
	
	public ActionForward execute(HttpServletRequest req, HttpServletResponse res) {
		logger.info("execute called");
		forward = new ActionForward();
		//forward = null;
		String viewName = null;
		boolean isRedirect = false;
		//String crud = (String) req.getAttribute("crud");
		String[] upmu = (String[]) req.getAttribute("upmu");
		if("boardInsert".equals(upmu[1])) {
			logger.info("글쓰기 호출 성공");
			viewName = "boardInsertSuccess.jsp";
			isRedirect = true;
			forward.setRedirect(isRedirect);
			forward.setPath(viewName);
			
		}
		
		return forward;
	}
	

}