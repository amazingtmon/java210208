��� ���ϱ�
SELECT avg(sal) FROM emp

SELECT avg(sal) FROM emp
 WHERE deptno =: p_deptno;
 
SELECT deptno FROM dept
MINUS
SELECT deptno FROM emp

SELECT distinct(deptno) FROM emp

����Ŭ���� ��Ƽ������ ��� �ϲ��� �־ ���� ó���Ѵ�.

SELECT /*+index_desc(emp pk_emp)*/ empno FROM emp

SELECT empno FROM emp --�������� ������ default.

SELECT avg(sal) INTO v_avg FROM emp
WHERE deptno = (SELECT deptno FROM emp WHERE empno=:p_empno)
-> WHERE�� �Ʒ� SELECT���� ���� ���������̴�.
-> ���������� �ƴ� ���������� �ְ� ã���� �ϸ� ���������� �����.
--===========================================================
SELECT : �˻�
-> int, int[], Object[], List, Map

INSERT, UPDATE, DELETE : ���ϰ��� int�̴�.
commit�� rollback�� ����̴�.