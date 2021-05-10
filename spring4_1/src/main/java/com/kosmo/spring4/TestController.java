package com.kosmo.spring4;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
 * 자바코드를 통해 페이지 이동을 시켜야 하고, 상태를 유지시켜야 한다.
 * 경로는 항상 절대경로보단 상대경로를 사용한다.
 * */

@Controller
/*
 * 업무에 따른 공통 경로.
 * webapp폴더 하위에 해당 폴더가 존재해야 한다.
 * */
@RequestMapping("/test/*")
public class TestController {
	Logger logger = LoggerFactory.getLogger(TestController.class);
	@RequestMapping("testList.sp")//testList와 연결돼있다. 요청매핑.
	public String testListener() {
		logger.info("testList 호출성공");
		return "redirect:testList.jsp";//업무경로에 있는 이동할 페이지의 이름.
	}
}
