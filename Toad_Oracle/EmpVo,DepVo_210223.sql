SELECT empno FROM emp

SELECT empno, ename FROM emp

--��ȸ�ϴ� �÷��� PK�̸� �����ͺ��̽� ��ǰ���� ����ũ �ε����� �����Ѵ�.
--�ε����� ����ϴ� ���� ��Ʈ���� �����͸� ã�� �� ���� �˻��ӵ��� ���� �� �ִ�.
SELECT deptno FROM dept

--�μ���ȣ�� �ε����� ������ �μ��̸��� �ε����� �����Ƿ� ���̺��� �������ؾ� ��ȸ�� �� �ִ�.
SELECT deptno, dname FROM dept

�ڹٿ� ����Ŭ�� ���� => �������̽��Ǵ� �κ�, ����ȭ�� �ʿ��ϴ�.

------------------------------------------------------------------

String -> Varchar2

int, long -> number(4) - 9999���� ��´�.
float, double -> number(7 ,2) - 99999.99 ������+������. �Ǽ��� ������ ����.

xxxVO.java (== xxxDTO.java)
����, �Ǽ� ���ڿ��� �� ����ش�. -> ������ Ŭ����!!
------------------------------------------------------------------

SELECT sysdate, TO_CHAR(sysdate, 'YYYY-MM-DD HH:MI:SS')
       ,sysdate-1, sysdate+1, sysdate+2
 FROM dual
 
- TO_CHAR => dateŸ���� ���ڿ� Ÿ������ ��ȯ.

------------------------------------------------------------------
1-1
SELECT
        deptno
  FROM  emp
  WHERE empno =:pempno
  
1-2
SELECT
        (SELECT dname FROM dept WHERE deptno=30) dname
  FROM  emp
  WHERE empno =:pempno
  

1-3 - �������� - String type
SELECT
        (SELECT dname 
           FROM dept 
           WHERE deptno=(SELECT deptno 
                           FROM emp 
                           WHERE empno=:pempno)) dname --pempno: �Ķ���� �� 
  FROM  dual

EmpVO.java�� ���� ����.

param: �����ȣ.
return: �μ���ȣ.

1-4 - ���� DeptVO�� ���
SELECT
            d.dname
    FROM emp e, demp d
    WHERE e.deptno = d.deptno
      AND e.empno=:X
      
1-5 - equals ���� EmpVO + DeptVO ����
SELECT
         e.ename, d.dname
    FROM emp e, demp d
    WHERE e.deptno = d.deptno
      AND e.empno=:X