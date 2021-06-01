package web.mvc;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class Board41Controller extends MultiActionController {
	Logger logger = Logger.getLogger(Board41Controller.class);
	
	private Board41Logic boardLogic = null;
	//setter메소드를 통하여 게으른 객체 주입
	public void setBoardLogic(Board41Logic boardLogic) {
		this.boardLogic = boardLogic;
	}
	
	//request로 유지.
	//메소드를 정의하는 것은 가능하다.
	//파라미터가 없이도 괜찮은건가?
	/*
	 * 파라미터에 req나 res가 없으면 아무리 xml문서에 url매핑을해두었다 하더라도 찾지를 못한다.
	 * 이 사실 하나만 보더라도 이것은 의존적이다 라고 이야기 할 수 있다.
	 * 최초 ModelAndView를 사용하였고, 이것은 MultiActionController를 상속 받았을 때
	 * 우리가 doGet에서는 누릴 수 없었던 반환 타입을 바꾸어 쓸 수 있는 혜택을 누릴 수 있게 된 것이다.
	 * MdelAndView의 scope를 request로 한 이유도 생각해보자.
	 * 이 생각의 끝에 forward로 페이지를 부른 다는 사실을 인지하게 될 것이다.
	 * ModelAndView가 있는데 굳이 파라미터에 req, res가 있어야만 하고, 만약 req, res가 없을시
	 * 매핑을 해주지 않을 것이라고 하는 것은 앞뒤가 맞지 않는 것이다.
	 * 
	 * */
	public ModelAndView getBoardList() {
		logger.info("getBoardList called");
		ModelAndView mav = new ModelAndView();
		return mav;
	}
	
	//json으로 내보내주기. - @RestController:String, @Controller:void, ModelAndView, String
	public void jsonGetBoardList(HttpServletRequest req, HttpServletResponse res) {
		logger.info("getBoardList called");
		
	}
}