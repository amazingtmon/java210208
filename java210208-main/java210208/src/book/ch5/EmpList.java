package book.ch5;

import com.vo.DeptVO;
import com.vo.EmpVO;

public class EmpList {
	/*
	 * @param empno - 사원번호
	 * @return String[] - 사원이름, 부서명
	 * */
	public String[] getEmpDetail(int empno) {
		String[] info = new String[2];
		
		EmpVO eVO = new EmpVO();
		eVO.setEmpno(empno);
		int deptno = eVO.getDeptno();//7566 사원에 대한 부서번호
		String ename = eVO.getEname();
		info[0] = ename;
		
		DeptVO dvo = new DeptVO();
		dvo.setDeptno(deptno);//emp테이블에서 얻어온 7566 사원에 대한 부서번호.
		String dname = dvo.getDname();
		info[1] = dname;
		
		return info;
	}
	
	public static void main(String[] args) {
		EmpVO eVO = new EmpVO();
		

	}

}
