package com.zipcode;

import java.util.ArrayList;

public class UnitTest {

	public static void main(String[] args) {
		ZipCodeDao zcd = new ZipCodeDao();
		
		ArrayList<ZipCodeVO> zipcodeList = null;
		zipcodeList = zcd.getZipCodeList("상봉동");
		zipcodeList = zcd.getZipCodeList("상암동");
		zipcodeList = zcd.getZipCodeList("상도동");
		System.out.println(zipcodeList);

	}

}
