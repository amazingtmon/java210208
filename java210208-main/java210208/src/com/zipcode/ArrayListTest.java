package com.zipcode;

import java.util.ArrayList;

public class ArrayListTest {
/*
 * 컬렉션 프레임워크에서 제공하는 클래스 중에 하나이다.
 * 여기에 담을 수 있는 것들은 기본적으로 Object급이다.
 * 원시형 타입은 담을 수가 없다.
 * 
 * 배열과는 무엇이 다른가? 
 * -> 늘었다가 줄었다가 가능
 * -> 
 * 
 * */
	public static void main(String[] args) {
		ArrayList a1 = new ArrayList();
		
		a1.add("메론");
		a1.add("수박");
		a1.add("포도");
		
		/*제네릭이 없는 경우이므로 타입을 확인할 수 없다. 
		  Object인것 까지만 확인이 가능하다.
		
		for(String str:a2) {
			System.out.println(str);
		}
		
		*/
		String my = (String)a1.get(0);
		Object obj = a1.get(2);
		
		System.out.println(my);
		System.out.println(obj);
		System.out.println("================================================");
		
		ArrayList<String> a2= new ArrayList();
		
		a2.add("메론");
		a2.add("수박");
		a2.add(1, "바나나");
		a2.add("포도");
		
		for(String str:a2) {
			System.out.println(str);
		}
		
		String my2 = a2.get(0);
		Object obj2 = a2.get(2);
		
		System.out.println(my2);
		System.out.println(obj2);
		
		ArrayList<ZipCodeVO> a3= new ArrayList<ZipCodeVO>();
		ZipCodeVO zVO = null;
		
		zVO = new ZipCodeVO();
		zVO.setZipcode(12345);
		zVO.setAptname("레미안아파트");
		a3.add(zVO);
		zVO.setAptname("신사아파트");
		
		zVO = new ZipCodeVO();
		zVO = new ZipCodeVO();
		zVO.setZipcode(12367);
		zVO.setAptname("더샵아파트");
		a3.add(zVO);
		zVO.setAptname("신사아파트");
		
		zVO = new ZipCodeVO();
		zVO = new ZipCodeVO();
		zVO.setZipcode(12389);
		zVO.setAptname("현대아파트");
		a3.add(zVO);
		zVO.setAptname("신사아파트");
		
		
		for(ZipCodeVO ar1 : a3) {
			System.out.println("ar1: "+ar1);
			System.out.println("ar1: "+ar1.getZipcode()+", "+ar1.getAptname());
		}
		
		System.out.println("==========================================");
		
		System.out.println(a3);
		
		/*ArrayList<ZipCodeVO> a4= new ArrayList<ZipCodeVO>();
		
		zVO = new ZipCodeVO();
		zVO.setZipcode(12345);
		zVO.setAptname("레미안아파트");
		a4.add(zVO);
		
		ZipCodeVO zVO2 = new ZipCodeVO();
		zVO2.setZipcode(12367);
		zVO2.setAptname("더샵아파트");
		a4.add(zVO2);
		
		ZipCodeVO zVO3 = new ZipCodeVO();
		zVO3.setZipcode(12389);
		zVO3.setAptname("현대아파트");
		a4.add(zVO3);
		
		for(ZipCodeVO ar2 : a4) {
			System.out.println("ar2: "+ar2);
			System.out.println("ar2: "+ar2.getZipcode()+", "+ar2.getAptname());
		}*/
		
	}

}
