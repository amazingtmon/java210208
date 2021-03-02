1-1
CREATE OR REPLACE PROCEDURE proc_salIncrease(
                                p_empno IN number, 
                                msg OUT varchar2 )
IS
    avg number(7, 2);
    name varchar2(20);
    salary number(7, 2);
    rate number(7, 2);
BEGIN
     SELECT ename, sal INTO name, salary FROM emp
     WHERE empno = p_empno;

END;

1-2
CREATE OR REPLACE PROCEDURE proc_salIncrease(
                                p_empno IN number, 
                                msg OUT varchar2 )
IS
    v_avg number(7, 2);
    name varchar2(20);
    salary number(7, 2);
    rate number(3, 1); --99.9
BEGIN
     SELECT ename, sal INTO name, salary FROM emp
     WHERE empno = p_empno;
     msg:= name||'����� '||salary||'�޿��� '
           ||rate||' �λ�����'||salary*rate||'�� �λ�Ǿ���';

END;

1-3
CREATE OR REPLACE PROCEDURE proc_salIncrease(
                                p_empno IN number, 
                                msg OUT varchar2 )
IS
    v_avg number(7, 2);
    name varchar2(20);
    salary number(7, 2);
    rate number(3, 1); --99.9
BEGIN
     SELECT ename, sal INTO name, salary FROM emp
     WHERE empno = p_empno;
     
     SELECT avg(sal) INTO v_avg FROM emp
     WHERE deptno = (SELECT deptno FROM emp WHERE empno=p_empno);
     
     msg:= name||'����� '||salary||'�޿��� '
           ||rate||' �λ�����'||salary*rate||'�� �λ�Ǿ���';
     EXCEPTION
        WHEN NO_DATA_FOUND THEN
        NULL;

END;

1-4
CREATE OR REPLACE PROCEDURE proc_salIncrease(
                                p_empno IN number, 
                                msg OUT varchar2 )
IS
    v_avg number(7, 2);
    v_name varchar2(20);
    v_salary number(7, 2);
    v_rate number(3, 1); --99.9
BEGIN
     SELECT ename, sal INTO v_name, v_salary FROM emp
     WHERE empno = p_empno;
     
     SELECT avg(sal) INTO v_avg FROM emp
     WHERE deptno = (SELECT deptno FROM emp WHERE empno=p_empno);
     
     IF v_salary > v_avg THEN
        v_rate := 1.1;
     ELSIF v_salary <= v_avg THEN
        v_rate := 1.2;
     END IF;
     
     msg:= v_name||'����� '||v_salary||'�޿��� '
           ||v_rate||' �λ�����'||v_salary*v_rate||'�� �λ�Ǿ���';
           
     EXCEPTION
        WHEN NO_DATA_FOUND THEN
        NULL;

END;