package pojo.board.step2;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class ZipCodeController {
	Logger logger = Logger.getLogger(ZipCodeController.class);
	private ZipCodeLogic zipCodeLogic = new ZipCodeLogic();
	private ActionForward forward = null;
	
	public ActionForward execute(HttpServletRequest req, HttpServletResponse res) {
		logger.info("execute called");
		forward = new ActionForward();
		zipCodeLogic.getZipCodeList();
		//forward.setPath("XXX.jsp");
		return forward;
	}
	
}
