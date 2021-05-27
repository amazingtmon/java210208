package pojo.board.step1;

import org.apache.log4j.Logger;

public class SqlBoardSDao {
	Logger logger = Logger.getLogger(SqlBoardSDao.class);
	
	public int boardSInsert() {
		logger.info("SqlBoardSDao called");
		int result = 1;
		return result;
	}

}
