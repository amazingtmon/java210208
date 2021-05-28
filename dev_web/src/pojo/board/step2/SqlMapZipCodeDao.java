package pojo.board.step2;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;

import com.util.MyBatisCommonFactory;

public class SqlMapZipCodeDao {
	Logger logger = Logger.getLogger(SqlMapZipCodeDao.class);
	MyBatisCommonFactory mcf = new MyBatisCommonFactory();
	SqlSessionFactory sqlSessionFactory = MyBatisCommonFactory.getSqlSessionFactory();
	SqlSession sqlSession = null;
	
	public void getZipCodeList() {
		logger.info("getZipCodeList called: "+sqlSessionFactory);
		String time = null;
		try {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			time = sqlSession.selectOne("getZipCodeList");
			logger.info("test: "+time);
		} catch(Exception e) {
			logger.info(e.toString());
			e.printStackTrace();
		}
	}
}
