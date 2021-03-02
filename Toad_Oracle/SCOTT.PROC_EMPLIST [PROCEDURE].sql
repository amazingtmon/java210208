CREATE OR REPLACE PROCEDURE SCOTT.proc_empList(pempno IN number, msg OUT varchar2)
IS
    sdeptno number(5); --변수 선언
    rdname varchar2(50);
BEGIN
    SELECT deptno INTO sdeptno
    FROM emp
    WHERE empno = pempno;
    SELECT dname INTO rdname--dname을 rdname에 넣겠다.
    FROM dept
    WHERE deptno = sdeptno;
    msg:= '조회한 부서이름은 ' ||rdname||'입니다';
END;