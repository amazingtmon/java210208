SELECT empno FROM emp

SELECT empno, ename FROM emp

--조회하는 컬럼이 PK이면 데이터베이스 제품들은 유니크 인덱스를 제공한다.
--인덱스를 사용하는 것이 노트에서 데이터를 찾는 것 보다 검색속도를 높일 수 있다.
SELECT deptno FROM dept

--부서번호는 인덱스가 있지만 부서이름은 인덱스가 없으므로 테이블을 엑세스해야 조회할 수 있다.
SELECT deptno, dname FROM dept

자바와 오라클과 만남 => 인터페이스되는 부분, 동기화가 필요하다.

------------------------------------------------------------------

String -> Varchar2

int, long -> number(4) - 9999까지 담는다.
float, double -> number(7 ,2) - 99999.99 정수부+가수부. 실수의 영역을 관리.

xxxVO.java (== xxxDTO.java)
정수, 실수 문자열을 다 담아준다. -> 데이터 클래스!!
------------------------------------------------------------------

SELECT sysdate, TO_CHAR(sysdate, 'YYYY-MM-DD HH:MI:SS')
       ,sysdate-1, sysdate+1, sysdate+2
 FROM dual
 
- TO_CHAR => date타입을 문자열 타입으로 변환.

------------------------------------------------------------------
1-1
SELECT
        deptno
  FROM  emp
  WHERE empno =:pempno
  
1-2
SELECT
        (SELECT dname FROM dept WHERE deptno=30) dname
  FROM  emp
  WHERE empno =:pempno
  

1-3 - 서브쿼리 - String type
SELECT
        (SELECT dname 
           FROM dept 
           WHERE deptno=(SELECT deptno 
                           FROM emp 
                           WHERE empno=:pempno)) dname --pempno: 파라미터 값 
  FROM  dual

EmpVO.java가 먼저 결정.

param: 사원번호.
return: 부서번호.

1-4 - 조인 DeptVO만 사용
SELECT
            d.dname
    FROM emp e, demp d
    WHERE e.deptno = d.deptno
      AND e.empno=:X
      
1-5 - equals 조인 EmpVO + DeptVO 결합
SELECT
         e.ename, d.dname
    FROM emp e, demp d
    WHERE e.deptno = d.deptno
      AND e.empno=:X