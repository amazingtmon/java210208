SELECT ENAME, SAL FROM EMP
WHERE SAL BETWEEN 2000 AND 5000
-------------------------------------------------------
SELECT EMPNO FROM EMP -- �ε����� ����̺��ϰ� ��ȸ������޾ƿ´�.

--ENAME�� PK�� �ƴ϶� ��, ����ũ �ε����� ���⶧���� ���̺� ��ü�� 
--��ĵ�ؾ� �Ѵ�.
SELECT EMPNO, ENAME FROM EMP

--�������� �ε����� �־ �ѹ��� ���ϴ� ������ ��ȸ�� �� �ִ�.
SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO > 7600

--�º��� �����ϸ� �ε����� ����� �� ����. �ӵ��� ��������.
SELECT EMPNO, ENAME FROM EMP
WHERE NVL(EMPNO, -1) > 7600

SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO >7500
UNION ALL
SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO < 7600

SELECT EMPNO, ENAME FROM EMP
WHERE EMPNO BETWEEN 7400 AND 7600
