SELECT * FROM TEST11

SELECT * FROM TEST11 A, TEST11 B

SELECT DEPT, RNO  
  FROM TEST11
---------------------------------------------------
SELECT * FROM TEST02
  
SELECT CDATE, AMT FROM TEST02

SELECT CDATE, CRATE FROM TEST02

SELECT ROWNUM A1, A.CDATE, A.AMT,
       ROWNUM B1, B.CDATE, B.CRATE, A.AMT*B.CRATE
      FROM (SELECT ROWNUM A1, CDATE, AMT FROM TEST02)A
          ,(SELECT ROWNUM B1, CDATE, CRATE FROM TEST02)B
      WHERE A.A1= B.B1-1
      
SELECT A.CDATE, A.AMT,
      B.CDATE, B.CRATE, 
      A.AMT*B.CRATE
      
  FROM (SELECT CDATE, AMT FROM TEST02)A
     ,(SELECT CDATE, CRATE FROM TEST02)B
  WHERE A.CDATE = B.CDATE
  
SELECT CDATE, AMT, CRATE FROM TEST02
WHERE CDATE <(SELECT MAX(CDATE) FROM TEST02 WHERE CDATE< :X)        
       
          
          
          
--��.
SELECT temp01.cdate ����, temp01.amt �ݾ�, temp02.crate ȯ��
      ,temp01.amt * temp02.crate ȯ��ݾ�
  FROM (
        SELECT rownum main_cnt,cdate,amt
          FROM test02
         WHERE cdate BETWEEN '20010904' AND '20010910'
       )temp01
      ,(
        SELECT rownum sub_cnt,cdate,crate
          FROM test02
         WHERE cdate between '20010904' AND '20010910'
       )temp02       
 WHERE temp02.sub_cnt = temp01.main_cnt-1;
      