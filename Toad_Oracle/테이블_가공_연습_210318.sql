���̺� ������ Ȱ���Ͽ� ���� ���ϴ� ��� ������� ��� ���� �����н�.

���̺� ������ ������ �ƴ� ��������ڰ� ���ϴ� ���·� ����, ��ȯ

<<�ζ��κ� ���� - ����>>

FROM�� �Ʒ� SELECT���� �ִ� ���.
JOIN�ÿ� ����� ���� �ٿ��� �Ϸ��� ���δ�.
���̺��� ���� �÷������� �����ڰ� �ʿ��Ͽ� �߰��� �÷���
�������̳� AND ���� ����� ��.
�ζ��κ信�� ���� �÷��� �� �������� ����� �� �ִ�.

<<WHERE�� �Ʒ� (AND�� OR�� ����) - ��������>>
���������� Ȱ���ؼ� ���ϴ� ����� ã�� ��.
  
SELECT
    ROWNUM RNO 
    ,DECODE(EMP_ID, EMP_ID, 'YES')
  FROM TEMP
 WHERE RNO < 5 --ROWNUM �� ���������� �������� �ʴ� �÷��̱⿡ ������� �ʴ´�. 
  
 
SELECT RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )
 WHERE RNO < 5 --ROWNUM �� �ζ��� �������� ���� ��ȸ�� �� �ֵ��� �����.         


SELECT CEIL(RNO/4) CNO, RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )
       
SELECT CEIL(RNO/4) CNO, MOD(RNO,4) MNO, RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )       




---------------------------------------------------------------
1. TEMP�� �ڷḦ �̿��� �� �࿡ 5���� ����� ������ �����ִ� �������� �ۼ��Ͻÿ�.

SELECT EMP_ID, EMP_NAME FROM TEMP

SELECT EMP_ID, EMP_NAME, LEV FROM TEMP

SELECT A.EMP_ID, A.EMP_NAME
      ,B.EMP_ID, B.EMP_NAME
  FROM TEMP A, TEMP B
  
SELECT ROWNUM NO, EMP_ID, EMP_NAME FROM TEMP
ORDER BY EMP_ID ASC

SELECT ROWNUM NO, 
       DECODE(EMP_ID, EMP_ID, EMP_ID) ID,
       DECODE(EMP_NAME, EMP_NAME, EMP_NAME) NAME
  FROM TEMP     

SELECT ROWNUM NO, EMP_ID ID, EMP_NAME NAME  
FROM (SELECT ROWNUM NO,
             EMP_ID,
             EMP_NAME
            FROM TEMP)
 WHERE NO < 10



--��.
SELECT ceil(no/5) rno
      ,max(decode(mod(no,5),1,emp_id)) id1
      ,max(decode(mod(no,5),1,emp_name)) name1
      ,max(decode(mod(no,5),2,emp_id)) id2
      ,max(decode(mod(no,5),2,emp_name)) name2
      ,max(decode(mod(no,5),3,emp_id)) id3
      ,max(decode(mod(no,5),3,emp_name)) name3
      ,max(decode(mod(no,5),4,emp_id)) id4
      ,max(decode(mod(no,5),4,emp_name)) name4   
      ,max(decode(mod(no,5),0,emp_id)) id5
      ,max(decode(mod(no,5),0,emp_name)) name5                
  FROM (
        SELECT rownum no,emp_id,emp_name FROM temp
       )
GROUP BY ceil(no/5)
ORDER BY ceil(no/5)