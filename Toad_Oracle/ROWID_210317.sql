SELECT ROWID RNO FROM EMP

DBMS�� ������ �ִ� ��� �������� ������ ������ �ĺ���
1)6�ڸ�:�������� ������Ʈ ��ȣ
2)3�ڸ�:����� ���� ��ȣ
3)6�ڸ�:��Ϲ�ȣ
4)3�ڸ�:��� ���� �� ��ȣ

�� -> 4K, 8K ����
���� ���ӵǾ� �ִ°��� ����.
�׷��� �̷��� ����� �� ä���� �ʴ´�.
�ֳ��ϸ� ü�̴� ������ �Ͼ�� ��ȸ �ӵ��� ������ �� �ֱ� �����̴�.

SELECT * FROM EMP WHERE ROWID = 'AAARE8AAEAAAACTAAA'

�������� ������ �ƴϰ� ������ ���������� ������ index���̺� ���� �ִ� 
rowid�� �ش� �����͸� ã�� ���� ������ ������ ���̴�.

SELECT EMPNO FROM EMP
WHERE EMPNO > 7500

SELECT ENAME FROM EMP
WHERE EMPNO > 7500

SELECT ROWNUM RNO FROM EMP
----------------------------------------------------------
----------------------------------------------------------
----------------------------------------------------------

SELECT dept FROM test11
UNION ALL
SELECT '1' FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual


SELECT dept
  FROM test11,(
SELECT '1' FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual
)


SELECT dept, a.grade
  FROM test11,(
SELECT '1' grade FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual
)a


SELECT dept, a.grade, DECODE(a.grade,1,'1�г�')
  FROM test11,(
SELECT '1' grade FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual
)a

SELECT dept, a.grade
     , DECODE(a.grade,1,'1�г�',2,'2�г�',3,'3�г�',4,'4�г�') as "�г�"
  FROM test11,(
SELECT '1' grade FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual
)a


SELECT dept, a.grade
     , DECODE(a.grade,1,'1�г�',2,'2�г�',3,'3�г�',4,'4�г�') as "�г�"
  FROM test11,(
SELECT '1' grade FROM dual
UNION ALL
SELECT '2' FROM dual
UNION ALL
SELECT '3' FROM dual
UNION ALL
SELECT '4' FROM dual
)a
ORDER BY dept asc, a.grade


SELECT dept
     , DECODE(a.dm,1,'1�г�',2,'2�г�',3,'3�г�',4,'4�г�') as "�г�"
  FROM test11,(SELECT rownum dm FROM temp WHERE rownum <5) a
ORDER BY dept asc, a.dm asc

SELECT dept
     , DECODE(a.dm,1,'1�г�',2,'2�г�',3,'3�г�',4,'4�г�') as "�г�"
     , DECODE(a.dm,1,fre,2,sup,3,jun,4,sen)||'��' as "������"
  FROM test11,(SELECT rownum dm FROM temp WHERE rownum <5) a
ORDER BY dept asc, a.dm asc

�ζ��κ�
�ζ��κ信�� ����� �÷��� ���� ���������� ����� �����ϴ�.
������ �������� �ʴ� �÷��̴��� �ζ��κ信 ����ϸ� ��ġ �ִ� �÷��� ��ó�� ��� �����ϴ�.
���̺� ���� �״�ΰ� �ƴ� ���� ����ڰ� ���ϴ� ȭ������ ������� �� �����ϰ� ��� �����ϴ�.