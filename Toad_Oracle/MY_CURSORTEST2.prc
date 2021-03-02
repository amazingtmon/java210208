CREATE OR REPLACE PROCEDURE SCOTT.MY_CURSORTEST2(P_RC OUT SYS_REFCURSOR)
IS
BEGIN
    OPEN P_RC
    FOR SELECT d.deptno, e.ename, d.dname 
            FROM dept d, emp e
            WHERE e.deptno = d.deptno;
END;


variable p_dept REFCURSOR
exec my_cursortest2(:p_dept);
print p_dept; --f5 눌러서 script output에서 미리 확인가능.