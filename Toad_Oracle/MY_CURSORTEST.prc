-- CREATE OR REPLACE PROCEDURE -> PROCEDURE����� ����.

--DDL -> CREATE, ALTER, DROP - ���� �

--DML -> SELECT, INSERT, UPDATE, DELETE - ������ ���

CREATE OR REPLACE PROCEDURE SCOTT.MY_CURSORTEST2(P_RC OUT SYS_REFCURSOR)
IS
BEGIN
    OPEN P_RC
    FOR SELECT deptno, dname, loc 
            FROM dept d, emp e
            WHERE e.deptno = d.deptno;
END;