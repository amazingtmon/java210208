SELECT * FROM temp

SELECT * FROM tdept

SELECT EMP_ID, EMP_NAME, LEV, SALARY FROM temp WHERE LEV=:X

1-1
�� �޿��� ������ 18�� ������ Ȧ�� �޿��� ������ 1/18�� ���޵ǰ�, ¦���޿��� ������
2/18�� ���޵ȴٰ� �������� �� Ȧ�� �ް� ¦�� �޿� ���� �ݾ��� ��Ÿ���ÿ�.

SELECT EMP_NAME, (SALARY/18) FROM temp
SELECT EMP_NAME, (SALARY/9) FROM temp

SELECT (SALARY/18) AS SAL1 
      ,(SALARY/9) AS SAL2
  FROM temp

SELECT 
     ROUND((SALARY/18), 2)||' WON' AS SAL1 
      ,ROUND((SALARY/9), 0)||' WON' AS SAL2
  FROM temp
  
SELECT 
     TO_CHAR(ROUND((SALARY/18), 2), '999,999,999.99')||' WON' AS SAL1 
      ,TO_CHAR(ROUND((SALARY/9), 0), '999,999,999.99')||' WON' AS SAL2
  FROM temp

2.������ ���� �� �޿��� ����� 10������ ���޵ȴٸ�(¦������ 20����)���� ������
��� �ٲ��� �ۼ��� ���ÿ�.

SELECT 
     TO_CHAR(ROUND((SALARY/18), 2), '999,999,999.99')||' WON' AS SAL1 
      ,TO_CHAR(ROUND((SALARY/9), 0), '999,999,999.99')||' WON' AS SAL2
  FROM temp

3. TEMP ���̺��� ��̰� NULL �� �ƴ� ����� ������ �о���ÿ�.

SELECT EMP_NAME FROM TEMP WHERE HOBBY IS NOT NULL;

SELECT EMP_NAME FROM TEMP WHERE HOBBY IS NULL;

SELECT EMP_NAME, HOBBY FROM TEMP
MINUS
SELECT EMP_NAME, HOBBY FROM TEMP
WHERE HOBBY IS NULL; --��ü���տ��� ��̰� ���� ����� ������ ������� ����.

SELECT EMP_NAME, HOBBY FROM TEMP
ORDER BY HOBBY ASC--��̿� ���� ��������.

SELECT EMP_NAME, HOBBY FROM TEMP
ORDER BY HOBBY DESC--��̿� ���� ��������.

4.TEMP ���̺��� ��̰� NULL�� ����� ��� HOBBY�� ���������̶�� ���� ġȯ�Ͽ�
�������� �������� �״�� ���� �о���ÿ�.

SELECT EMP_NAME, NVL(HOBBY, '����')--���� HOBBY�� ���� �ٲ�� ���� �ƴϴ�. 
FROM TEMP

5.TEMP�� �ڷ� �� HOBBY�� ���� NULL�� ����� ����ꡯ���� ġȯ���� �� HOBBY�� �������
����� ������ �������� ������ �ۼ��Ͻÿ�.

SELECT EMP_NAME, HOBBY
FROM TEMP
WHERE HOBBY = '���'

SELECT EMP_NAME, NVL(HOBBY,'���')
FROM TEMP
WHERE NVL(HOBBY, '���') = '���'

6.TEMP�� �ڷḦ ���� ��(LEV)�� ASCENDING�ϸ鼭 ��������� �ٽ� ��� ������
DESCENDING�ϰ� �ϴ� ORDER BY�ϴ� ������ ����� ���ÿ�.

SELECT EMP_NAME, LEV
  FROM TEMP
  
SELECT EMP_ID, EMP_NAME, LEV
  FROM TEMP
ORDER BY GRAVITY DESC, EMP_ID ASC
---------------------------------------------------------

SELECT * FROM T_LETITBE

SELECT * FROM T_LETITBE
WHERE MOD(SEQ_VC, 2)=0

SELECT ROWNUM RNO, WORDS_VC FROM T_LETITBE
WHERE MOD(SEQ_VC, 2)=1

SELECT RNO, WORDS_VC
FROM ( SELECT ROWNUM RNO, WORDS_VC FROM T_LETITBE)
WHERE RNO = 1

-------------------------------------------

SELECT * FROM T_GIFTPOINT
ORDER BY POINT_NU ASC

SELECT * FROM T_GIFTMEM


SELECT NAME_VC, POINT_NU FROM T_GIFTMEM
WHERE POINT_NU > 15000

Q1. ��ȭ Ƽ���� ���� �� �ִ� ����� ��ܰ� ���� ������ �ִ� ����Ʈ, 
��ȭ Ƽ���� ����Ʈ �׸��� �� Ƽ���� ����� �� ���� ���� ����Ʈ�� ����Ͻÿ�.

--���� �Ѱ�
SELECT NAME_VC, POINT_NU FROM T_GIFTPOINT 
WHERE NAME_VC = '��ȭƼ��'
UNION ALL
SELECT NAME_VC, (POINT_NU - 15000) FROM T_GIFTMEM
WHERE POINT_NU > 15000

--����Ǯ��
SELECT * FROM T_GIFTMEM M
             ,(SELECT POINT_NU FROM T_GIFTPOINT
                 WHERE NAME_VC ='��ȭƼ��') P
WHERE M.POINT_NU >= P.POINT_NU 

1.2
SELECT M.NAME_VC, P.NAME_VC
 FROM T_GIFTMEM M
             ,(SELECT POINT_NU FROM T_GIFTPOINT
                 WHERE NAME_VC ='��ȭƼ��') P
 WHERE M.POINT_NU >= P.POINT_NU

1.3 
SELECT M.NAME_VC, M.POINT_NU-P.POINT_NU AS "�ܿ�����Ʈ"
       ,P.POINT_NU AS "��������Ʈ"
 FROM T_GIFTMEM M
             ,(SELECT POINT_NU FROM T_GIFTPOINT
                 WHERE NAME_VC ='��ȭƼ��') P
 WHERE M.POINT_NU >= P.POINT_NU

Q2. �����ž��� �����ϰ� �ִ� ���ϸ��� ����Ʈ�� ���� �� �ִ� ��ǰ �� 
���� ����Ʈ�� ���� ���� �����ΰ�?

--���� �Ѱ�
SELECT NAME_VC, POINT_NU 
   FROM (SELECT POINT_NU FROM T_GIFTPOINT)
  WHERE   

--����Ǯ��
SELECT MAX(SALARY) FROM TEMP

1.1
SELECT P.POINT_NU
  FRMO T_GIFTMEM M, T_GIFTPOINT P
  WHERE M.POINT_NU >= P.POINT_NU
  
1.2
SELECT MAX(P.POINT_NU)
  FROM (SELECT POINT_NU FROM T_GIFTMEM WHERE NAME_VC = '������') M
        , T_GIFTPOINT P
WHERE M.POINT_NU >= P.POINT_NU

1.3
SELECT NAME_VC, POINT_NU
  FROM T_GIFTPOINT
  WHERE POINT_NU = ( SELECT MAX(P.POINT_NU)
                        FROM (SELECT POINT_NU FROM T_GIFTMEM WHERE NAME_VC = '������') M
                                , T_GIFTPOINT P
                     WHERE M.POINT_NU >= P.POINT_NU)