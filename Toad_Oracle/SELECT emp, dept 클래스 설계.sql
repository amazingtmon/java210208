SELECT
            e.ename
           ,d.dname
           ,e.deptno
           ,d.deptno
    FROM emp e, dept d
    WHERE e.deptno = d.deptno
    
SELECT dname FROM emp

SELECT dname FROM dept

집합에는 primary key가 있다.
유니크 인덱스가 생성된다. - 오라클에서 생성.

SELECT deptno FROM dept
MINUS
SELECT deptno FROM emp

equal조인

outer조인

SELECT
        d.deptno, d.dname, e.ename
   FROM emp e, dept d
   WHERE e.deptno(+) = d.deptno DEPT EMP DEPT BONUS 