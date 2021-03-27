package com.zipcode;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.util.MyBatisCommonFactory;

public class MyBatisZipCodeDao {
	   SqlSessionFactory     sqlSessionFactory   = null;
	   
	   //생성자
	   public MyBatisZipCodeDao() {
	      sqlSessionFactory = MyBatisCommonFactory.getInstance();
	      System.out.println("sqlSessionFactory:"+sqlSessionFactory);
	   }
	   
	   //클래스 쪼개기에서 초급자가 항상 염두에 둘 사항은 배달 사고 임.
	   public List<ZipCodeVO> getZipCodeList(ZipCodeVO pzVO){
	      System.out.println("getZipCodeList 호출 성공"+ pzVO);
	      List<ZipCodeVO> zipcodeList = new ArrayList<>();
	      SqlSession sqlSession = null;
	       try {
	          sqlSession = sqlSessionFactory.openSession();
	          zipcodeList = sqlSession.selectList("getSIGUList",pzVO);
	          System.out.println(zipcodeList.size());
	      } catch (Exception e) {
	         System.out.println("[[Exception]]"+e.toString());
	      } finally {
	         //사용한 자원 명시적으로 반납하기
	         sqlSession.close();
	      }
	      return zipcodeList;
	   }
	   
	   public static void main(String args[]) {
	      MyBatisZipCodeDao zcd = new MyBatisZipCodeDao();
	      List<ZipCodeVO> zipcodeList = new ArrayList<>();
	      ZipCodeVO pzVO = new ZipCodeVO();//ZipCodeVO 인스턴스화.
	      pzVO.setZdo("경기");
	      //pzVO.setDong("상봉");
	      zipcodeList=zcd.getZipCodeList(pzVO);
	      for(ZipCodeVO rzVO:zipcodeList) {
	         //System.out.println("rzVO:"+rzVO.getAddress()+", "+rzVO.getZipcode());
	    	  System.out.println("rzVO:"+rzVO.getSigu());
	      }
	   }
	}