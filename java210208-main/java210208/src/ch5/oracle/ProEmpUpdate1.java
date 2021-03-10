package ch5.oracle;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.util.DBConnectionMgr;

public class ProEmpUpdate1 extends JFrame{

	Connection 			con1 = null;
	CallableStatement cstmt1 = null;
	String 				sql1 = "";
	DBConnectionMgr    dbMgr = null;
/*
 * proc_salIncrease 프로시저 호출 테스트
 * @param p_empno -> 사원번호를 입력받아서 단일 레코드 처리 실습.
 * @result 프로시저 처리 결과를 int값으로 확인해 본다.
 * 
 * */
	public void salUpdate(int p_empno) {
        int result = 0;//0이면 수정 실패, 1이면 수정 성공
        dbMgr = DBConnectionMgr.getInstance();
        try {
           con1 = dbMgr.getConnection();
           cstmt1 = con1.prepareCall("{call proc_salIncrease(?, ?)}");
           cstmt1.setInt(1, p_empno);
           cstmt1.registerOutParameter(2, java.sql.Types.VARCHAR);
           result = cstmt1.executeUpdate();
           String msg = cstmt1.getString(2);
           System.out.println("result: "+result);
           
           if(result == 1) {
              JOptionPane.showMessageDialog(this, "수정하였습니다.");
           }else {
              JOptionPane.showMessageDialog(this, "실패하였습니다.");          
           }
           
        } catch (Exception e) {
           System.out.println(e.toString());
        }
     }
	
	public void salUpdate2(int p_deptno) {
        int result = 0;//0이면 수정 실패 1이면 수정 성공
        dbMgr = DBConnectionMgr.getInstance();
        try {
           con1 = dbMgr.getConnection();
           cstmt1 = con1.prepareCall("{call proc_emp_update2(?)}");
           cstmt1.setInt(1, p_deptno);
           cstmt1.registerOutParameter(2, java.sql.Types.VARCHAR);
           result = cstmt1.executeUpdate();
           System.out.println("result: "+result);
           
           if(result == 1) {
              JOptionPane.showMessageDialog(this, "수정하였습니다.");
           }else {
              JOptionPane.showMessageDialog(this, "실패하였습니다.");          
           }
           
        } catch (Exception e) {
           System.out.println(e.toString());
        }
     }
	

	public static void main(String[] args) {
		ProEmpUpdate1 neu1 = new ProEmpUpdate1();
//        String user_input = JOptionPane.showInputDialog("사원번호를 입력하세요");
//        int empno = 0;
//        if(user_input !=null || user_input.length()>1) {
//           empno = Integer.parseInt(user_input);
//        }
//        neu1.salUpdate(empno);
        
        String user_input2 = JOptionPane.showInputDialog("부서번호를 입력하세요");
        int deptno = 0;
        if(user_input2 !=null || user_input2.length()>1) {
        	deptno = Integer.parseInt(user_input2);
        }
        neu1.salUpdate(deptno);
        
     }

}
