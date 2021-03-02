-- CREATE OR REPLACE PROCEDURE -> PROCEDURE만드는 선언문.

--DDL -> CREATE, ALTER, DROP - 서버 운영

--DML -> SELECT, INSERT, UPDATE, DELETE - 개발자 모드

CREATE OR REPLACE PROCEDURE SCOTT.MY_CURSORTEST2(P_RC OUT SYS_REFCURSOR)
IS
BEGIN
    OPEN P_RC
    FOR SELECT deptno, dname, loc 
            FROM dept d, emp e
            WHERE e.deptno = d.deptno;
END;