package pojo.board.step1;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@Configuration
//@Controller
public class BoardController extends HttpServlet implements Action{
	//@Autowired
	//@Bean
	private BoardLogic boardLogic = new BoardLogic();
	private ActionForward forward = null;
	public void boardInsert() {
		Map<String,Object> pmap = new HashMap<>();
		String path = null;
		boolean isRedirect = false;
		int result = 0;
		result = boardLogic.boardInsert(pmap);
		if(result == 1) {
			path = "boardInsertSuccess.jsp";
		}
		else if(result == 0) {
			path = "boardInsertFail.jsp";
		}
		res.sendRedirect(path);
	}
	
	public static ActionForward execute (HttpServletRequest req, HttpServletResponse res)
			throws ServletException, IOException{
				return null;
	}
}
