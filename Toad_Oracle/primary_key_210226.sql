SELECT empno FROM EMP

SCOTT - emp���̺� ���� ������

pk_emp - �ε��� �̸� - primary key�� �����߱� �����̴�.
�ڵ����� �ε����� ����� ����.

���̺��� ������ ���� �ʰ� �ε����� �а� ����� ��������.

primary key �� ���̺��� ���������� �ʰ� �ε����� �о ������� ������ �� �ִ�.


//-------------------------------------------
SELECT empno, ename, sal FROM EMP 

ename �� primary key�� �ƴϴ�. -> �ε����� ����.

DML���� - ������ ���۾�.

new int[];       empno number(4) -> 9999���� ���� �� ����.

new String[14];  ename varchar2(20)

new double[14];  sal   number(7,2) 99999.99 -> 7�ڸ�

empno, ename, sal -> EmpVO�� ��ƾ� �Ѵ�.

EmpVO(); 0, null, 0.0 EmpVO[0]

EmpVO(); 0, null, 0.0 EmpVO[1]

EmpVO(); 0, null, 0.0 EmpVO[2]