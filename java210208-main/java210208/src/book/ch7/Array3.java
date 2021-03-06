package book.ch7;

public class Array3 {

	public static void main(String[] args) {
		EmpVO eVOS[] = new EmpVO[3];
		
		EmpVO eVO = new EmpVO();
		eVO.setEmpno(10);
		eVO.setEname("Sabrina");
		eVO.setSal(100.01);
		eVOS[0] = eVO;
		System.out.println(eVO.getEmpno()+","+eVO.getEname()+","+eVO.getSal());
		System.out.println("#1 : "+eVO);//@7852e922
		
		eVO = new EmpVO();
		eVO.setEmpno(20);
		eVO.setEname("Ella");
		eVO.setSal(100.02);
		eVOS[1] = eVO;
		System.out.println(eVO.getEmpno()+","+eVO.getEname()+","+eVO.getSal());
		System.out.println("#2 : "+eVO);//@4e25154f
		
		eVO = new EmpVO();
		eVO.setEmpno(30);
		eVO.setEname("Angel");
		eVO.setSal(100.03);
		eVOS[2] = eVO;
		System.out.println(eVO.getEmpno()+","+eVO.getEname()+","+eVO.getSal());
		System.out.println("#3 : "+eVO);//@70dea4e
		
		//EmpVO타입의 변수 eVO2를 선언하고
		//eVOS라는 배열.
		//배열에 순차적으로 적용해서 출력하겠다
		System.out.println("===================");
		for(EmpVO eVO2:eVOS) { //eVOS [0<= eVO2 < eVOS.length]
			System.out.println("2 : "+eVO2);
			System.out.println(eVO2.getEmpno()+","+eVO2.getEname()+","+eVO2.getSal());
//			2 : book.ch7.EmpVO@7852e922
//			10,Sabrina,100.01
//			2 : book.ch7.EmpVO@4e25154f
//			20,Ella,100.02
//			2 : book.ch7.EmpVO@70dea4e
//			30,Angel,100.03
		}
		
		System.out.println("===================");
		for(EmpVO eVO3:eVOS) {
			System.out.println("3 : "+eVO3);
			System.out.println(eVO3.getEmpno()+","+eVO3.getEname()+","+eVO3.getSal());
//			3 : book.ch7.EmpVO@7852e922
//			10,Sabrina,100.01
//			3 : book.ch7.EmpVO@4e25154f
//			20,Ella,100.02
//			3 : book.ch7.EmpVO@70dea4e
//			30,Angel,100.03
		}
	}

}
