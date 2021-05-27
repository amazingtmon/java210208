package pojo.board.step2;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;


public class MemberController {
	Logger logger = Logger.getLogger(MemberController.class);
	private MemberLogic memberLogic = new MemberLogic();
	private ActionForward forward = null;
	
	public ActionForward execute(HttpServletRequest req, HttpServletResponse res) {
		// TODO Auto-generated method stub
		return null;
	} 

}
