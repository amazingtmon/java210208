DECODE - ���ǹ� ����

�Ϲ����� ���α׷��� ����� IF���� SQL���� �Ǵ� PL/SQL������ ����鿩
����ϱ� ���� ������� �Լ��̴�.

SELECT���� DECODE����� FROM���� ����� ��𼭳� ����� �� �ִ�.
FROM������ ����� �� ���ٴ� ���� SELECT�� ���̺��� DECODE�� ����Ͽ�
�������� ������ �� ���ٴ� ���̱⵵ �ϴ�.

IF A = B THEN
    RETURN 'T';
END IF;

DECODE(1,1,'T')

SELECT DECODE(1,1,'T')
      ,DECODE(1,1,'T')
      ,DECODE(1,51,'T') FROM DUAL
      
SELECT DECODE(1,1,'T')
      ,DECODE(3,1,'T')
      ,DECODE(1,51,'T') FROM DUAL      

SELECT SUM(SAL), AVG(SAL) FROM EMP

�׷��Լ���� �Ѵ�.
�׷��Լ��� �ݵ�� ��ü ���� ó���̴�.

�κй��� ó���� �Ұ��ϴ�.


IF A = B THEN
    RETURN 'T';
ELSE
    RETURN 'F';
END IF;

DECODE(5,15,'T','F')

�Ϲ��÷��� �׷��Լ��� �� �÷��� ���� ��� �Ұ�

SELECT ENAME, MAX(SAL) FROM EMP

�ٸ� �÷����� �׷��Լ��� ������ ������ �ذ���.
������ 

SELECT ENAME, SAL
 FROM EMP
 WHERE SAL = (SELECT MAX(SAL) FROM EMP)
 --� ��쵵 ���̺� ���� �״�� ��µǴ� ���� ����.
 --���������� �ƴ� ������������ �˻��� �ؾ��ϴ� ��쵵 ����.
 
SELECT 
        DECODE(COMM,500,1,0)
    FROM EMP
    
SELECT DECODE(COMM,500,1,0


SELECT SIGN(500-50), SIGN(1-500), SIGN(100-100)
FROM DUAL

DECODE�� ũ�� �۴ٴ� ���� �� ����.
�տ� �ִ� ���ڿ��� �ڿ� ���ڸ� �� ���� 0���� ũ�� <<ũ��>>
������ <<�۴�>>
������ <<����>> ��� �� �� �ִ�.