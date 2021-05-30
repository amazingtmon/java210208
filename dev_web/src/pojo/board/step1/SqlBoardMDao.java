package pojo.board.step1;

import org.apache.log4j.Logger;

import web_basic.DeptServlet;

public class SqlBoardMDao {
	Logger logger = Logger.getLogger(SqlBoardMDao.class);

	public int boardMInsert() {
		logger.info("SqlBoardMDao called");
		int result = 1;
		return result;
	}

}
