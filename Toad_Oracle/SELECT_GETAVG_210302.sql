평균 구하기
SELECT avg(sal) FROM emp

SELECT avg(sal) FROM emp
 WHERE deptno =: p_deptno;
 
SELECT deptno FROM dept
MINUS
SELECT deptno FROM emp

SELECT distinct(deptno) FROM emp

오라클에는 옵티마이저 라는 일꾼이 있어서 일을 처리한다.

SELECT /*+index_desc(emp pk_emp)*/ empno FROM emp

SELECT empno FROM emp --오름차순 정렬이 default.

SELECT avg(sal) INTO v_avg FROM emp
WHERE deptno = (SELECT deptno FROM emp WHERE empno=:p_empno)
-> WHERE절 아래 SELECT문이 오면 서브쿼리이다.
-> 직접조건이 아닌 간접조건을 주고 찾으라 하면 서브쿼리를 사용함.
--===========================================================
SELECT : 검색
-> int, int[], Object[], List, Map

INSERT, UPDATE, DELETE : 리턴값이 int이다.
commit과 rollback의 대상이다.