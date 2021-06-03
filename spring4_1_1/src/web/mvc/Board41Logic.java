package web.mvc;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import kosmo80.mvc.sp4.EmpLogic;

public class Board41Logic {
	Logger logger = Logger.getLogger(Board41Logic.class);
	
	private Board41MDao boardMDao = null;
	public void setBoardMDao(Board41MDao boardMDao) {
		this.boardMDao = boardMDao;
	}
	
	private Board41SDao boardSDao = null;
	public void setBoardSDao(Board41SDao boardSDao) {
		this.boardSDao = boardSDao;
	}

	public List<Map<String,Object>> getBoardList(Map<String, Object> pmap) {
		logger.info("Board41Logic called");
		
		List<Map<String,Object>> boardList = null;
		boardList = boardMDao.getBoardList(pmap);
		
		return boardList;
	}

}
