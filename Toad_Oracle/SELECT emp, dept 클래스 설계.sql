SELECT
            e.ename
           ,d.dname
           ,e.deptno
           ,d.deptno
    FROM emp e, dept d
    WHERE e.deptno = d.deptno
    
SELECT dname FROM emp

SELECT dname FROM dept

���տ��� primary key�� �ִ�.
����ũ �ε����� �����ȴ�. - ����Ŭ���� ����.

SELECT deptno FROM dept
MINUS
SELECT deptno FROM emp

equal����

outer����

SELECT
        d.deptno, d.dname, e.ename
   FROM emp e, dept d
   WHERE e.deptno(+) = d.deptno DEPT EMP DEPT BONUS 