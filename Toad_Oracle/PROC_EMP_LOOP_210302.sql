1-1
사용자 정의 커서 선언

CURSOR emp_cur IS
SELECT empno, ename, sal
    FROM emp
    WHERE deptno = p_deptno
   
1-2 
그 부서번호의 급여 평균 구하기

SELECT avg(sal) INTO v_avg FROM emp
WHERE deptno = p_deptno;

커서를 열기

반복문 실행

FETCH emp_cur INTO v_empno, v_ename, v_sal;

반복문 빠져나가기

EXIT WHEN emp_cur%NOTFOUND;

급여 수정은 동일하게 처리함.
사원번호를 커서로 받아서 처리해야 한다.
커서는 사용후 반드시 닫는다.

CREATE OR REPLACE PROCEDURE proc_emp_update2(p_deptno IN number)
IS
 v_avg_sal number;
 v_empno   number;
 v_ename varchar2(30);
 v_sal number(7,2);
 v_rate number(3,1);--99.9
 CURSOR emp_cur IS
 SELECT empno, ename, sal
    FROM emp
    WHERE deptno = p_deptno;
 
BEGIN

 SELECT avg(sal) INTO v_avg_sal FROM emp
  WHERE deptno = p_deptno;
  OPEN emp_cur;
  
  LOOP
    FETCH emp_cur INTO v_empno, v_ename, v_sal;
    EXIT WHEN emp_cur%NOTFOUND;
    
     IF v_sal > v_avg_sal THEN
        v_rate := 1.1;
     ELSIF v_sal <= v_avg_sal THEN
        v_rate := 1.2;   
     END IF;
     UPDATE emp
        SET sal = sal * v_rate
      WHERE empno = v_empno;
   END LOOP;
   commit;
   CLOSE emp_cur;
 
 EXCEPTION
   WHEN NO_DATA_FOUND THEN
    NULL;
END;
