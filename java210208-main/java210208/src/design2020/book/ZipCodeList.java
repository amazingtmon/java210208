package design2020.book;

import java.util.List;
import java.util.Vector;

import com.zipcode.ZipCodeVO;

public class ZipCodeList {
	
	public static void main(String[] args) {
		Vector<ZipCodeVO> v = new Vector<>(); //다형성을 누릴 수 없다.
		List<ZipCodeVO>   v2 = new Vector<>(); //다형성을 누린다.
		
		ZipCodeVO zcVO = null;
		ZipCodeVO zcVOs[] = null;
		
		int i = 0;
		while(i<3) {
			//zcVO.setAddress("서울시"); -> 초기화가 안됐으므로 null;
			zcVO = new ZipCodeVO();//zcVO 초기화.
			zcVO.setAddress("서울시"); //-> 문법적으로 ok. setAddress 초기화.
			System.out.println("zcVO 주소번지가 바뀐다. ====>" + zcVO.getAddress());
			v.add(zcVO);//Vector ArrayList에 zcVO 주소번지 추가.
			zcVO.setAddress("인천시");//zcVO setAddress 다시 초기화.
			i++;
		}
		
		for (int x=0; x<v.size(); x++) {
			ZipCodeVO zVO = v.get(x);
			System.out.println(zVO);
		}
		
		zcVOs = new ZipCodeVO[v.size()];//객체배열이 3개 만들어진다.
		System.out.println("배열의 크기는 "+zcVOs.length);//3이 출력됨.
		v.copyInto(zcVOs);//벡터에 담긴 것을 배열에 담아준다.
		
		for(int y=0; y<zcVOs.length ;y++) {
			System.out.println(zcVOs[y]+", "+zcVOs[y].getAddress());//객체 배열의 주소번지가 3개 출력된다.
		}
	}
}
