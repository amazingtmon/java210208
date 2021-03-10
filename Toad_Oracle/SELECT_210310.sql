SELECT ENAME, SAL FROM EMP
WHERE SAL BETWEEN 2000 AND 5000
-------------------------------------------------------
SELECT EMPNO FROM EMP -- 인덱스만 드라이브하고도 조회결과를받아온다.

--ENAME은 PK가 아니라서 즉, 유니크 인덱스가 없기때문에 테이블 전체를 
--스캔해야 한다.
SELECT EMPNO, ENAME FROM EMP

--조건절에 인덱스가 있어서 한번에 원하는 정보를 조회할 수 있다.
SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO > 7600

--좌변을 가공하면 인덱스를 사용할 수 없다. 속도가 느려진다.
SELECT EMPNO, ENAME FROM EMP
WHERE NVL(EMPNO, -1) > 7600

SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO >7500
UNION ALL
SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO < 7600

SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO BETWEEN 7400 AND 7600
