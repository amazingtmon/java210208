CREATE OR REPLACE PROCEDURE SCOTT.proc_empList(pempno IN number, msg OUT varchar2)
IS
    sdeptno number(5); --���� ����
    rdname varchar2(50);
BEGIN
    SELECT deptno INTO sdeptno
    FROM emp
    WHERE empno = pempno;
    SELECT dname INTO rdname--dname�� rdname�� �ְڴ�.
    FROM dept
    WHERE deptno = sdeptno;
    msg:= '��ȸ�� �μ��̸��� ' ||rdname||'�Դϴ�';
END;