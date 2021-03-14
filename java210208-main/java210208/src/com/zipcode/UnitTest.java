package com.zipcode;

import java.util.ArrayList;
import java.util.Random;

public class UnitTest {

	public static void main(String[] args) {
		ArrayList<ZipCodeVO> zc = new ArrayList<>();//ArrayList 초기화.
		ZipCodeVO z = null;
		String[] ad = {"대치동","면목동","상도동","행당동"};
		Random r = new Random();
		
		//ad.length로 랜덤 숫자 범위 설정.
		//숫자 랜덤으로 받아서 z.setDong에 랜덤으로 동 할당.
		//zc ArrayList에 z 주소번지들을 삽입.
		for(int i=0; i<ad.length; i++) {
			z = new ZipCodeVO();
			int num = r.nextInt(ad.length);
			z.setDong(ad[num]);
			System.out.println("z 의 주소번지: "+z);
			System.out.println("z 의 할당 된 동: "+z.getDong());
			zc.add(z);
		}
		
		for(int x=0; x<zc.size(); x++) {
			System.out.println(zc.get(x).getDong());
		}
		
		
		
	}
}
