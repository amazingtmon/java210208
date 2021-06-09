package web.mvc;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.google.gson.Gson;
import com.util.HashMapBinder;

public class Board41Controller extends MultiActionController {
	Logger logger = Logger.getLogger(Board41Controller.class);

	private Board41Logic boardLogic = null;

	// setter메소드를 통하여 게으른 객체 주입
	public void setBoardLogic(Board41Logic boardLogic) {
		this.boardLogic = boardLogic;
	}

	// request로 유지.
	// 메소드를 정의하는 것은 가능하다.
	// 파라미터가 없이도 괜찮은건가?
	/*
	 * 파라미터에 req나 res가 없으면 아무리 xml문서에 url매핑을해두었다 하더라도 찾지를 못한다. 이 사실 하나만 보더라도 이것은
	 * 의존적이다 라고 이야기 할 수 있다. 최초 ModelAndView를 사용하였고, 이것은 MultiActionController를 상속
	 * 받았을 때 우리가 doGet에서는 누릴 수 없었던 반환 타입을 바꾸어 쓸 수 있는 혜택을 누릴 수 있게 된 것이다. MdelAndView의
	 * scope를 request로 한 이유도 생각해보자. 이 생각의 끝에 forward로 페이지를 부른 다는 사실을 인지하게 될 것이다.
	 * ModelAndView가 있는데 굳이 파라미터에 req, res가 있어야만 하고, 만약 req, res가 없을시 매핑을 해주지 않을
	 * 것이라고 하는 것은 앞뒤가 맞지 않는 것이다.
	 * 
	 */
	
	//ModelAndView를 만나면 WEB-INF 로 이동.
	public ModelAndView getBoardList(HttpServletRequest req, HttpServletResponse res) {
		logger.info("getBoardList 호출 성공");
		HashMapBinder hmb = new HashMapBinder(req);
		Map<String, Object> target = new HashMap<>();
		hmb.bind(target);
		List<Map<String, Object>> boardList = null;
		boardList = boardLogic.getBoardList(target);
		//boardLogic.getBoardList(target); where bm_no=? and bm_title LIKE '%'||?||'%'
		ModelAndView mav = new ModelAndView();
		mav.setViewName("board/getBoardList");//페이지 이름. url은 sp4, 페이지는 jsp페이지.
		mav.addObject("boardList", boardList);
		logger.info("boardList: "+boardList);
		logger.info("mav: "+mav);
//		String name = "이순신";
//		HttpSession session = req.getSession();
//		session.setAttribute("name", name);
//		      RequestDispatcher view = req.getRequestDispatcher("jsonGetBoardList.jsp");
//		      try {
//				view.forward(req, res);
//			} catch (ServletException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		    session.invalidate();
		return mav;
	}

	// json으로 내보내주기.- @RestController:String, @Controller:void, ModelAndView, String
	public void jsonGetBoardList(HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("jsonGetBoardList 호출 성공");
		List<Map<String, Object>> boardList = null;
		boardList = boardLogic.getBoardList(null);
		Gson g = new Gson();
		String imsi = g.toJson(boardList);
		res.setContentType("application/json;charset=utf-8");//mime type 결정.
		PrintWriter out = res.getWriter();
		out.print(imsi);
	}
	
	public void boardInsert(HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("boardInsert 호출 성공");
		HashMapBinder hmb = new HashMapBinder(req);
		Map<String, Object> pmap = new HashMap<>();
		hmb.bind(pmap);
		int result = 0;
		result = boardLogic.boardInsert(pmap);
		if(result == 1) {
			res.sendRedirect("./getBoardList.sp4");
		} else {
			res.sendRedirect("./getFail.sp4");
		}
	}

}