테이블 구조를 활용하여 고객이 원하는 출력 결과물을 얻기 위한 패턴학습.

테이블 본래의 구조가 아닌 업무담당자가 원하는 형태로 가공, 변환

<<인라인뷰 연습 - 가공>>

FROM절 아래 SELECT문이 있는 경우.
JOIN시에 경우의 수를 줄여서 일량을 줄인다.
테이블에는 없는 컬럼이지만 개발자가 필요하여 추가한 컬럼을
조건절이나 AND 절에 사용할 때.
인라인뷰에서 사용된 컬럼은 주 쿼리에서 사용할 수 있다.

<<WHERE절 아래 (AND절 OR절 포함) - 서브쿼리>>
간접조건을 활용해서 원하는 결과를 찾을 때.
  
SELECT
    ROWNUM RNO 
    ,DECODE(EMP_ID, EMP_ID, 'YES')
  FROM TEMP
 WHERE RNO < 5 --ROWNUM 은 물리적으로 존재하지 않는 컬럼이기에 실행되지 않는다. 
  
 
SELECT RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )
 WHERE RNO < 5 --ROWNUM 을 인라인 집합으로 만들어서 조회될 수 있도록 만든다.         


SELECT CEIL(RNO/4) CNO, RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )
       
SELECT CEIL(RNO/4) CNO, MOD(RNO,4) MNO, RNO, EMP_ID
  FROM(
        SELECT ROWNUM RNO, EMP_ID FROM TEMP
       )       




---------------------------------------------------------------
1. TEMP의 자료를 이용해 한 행에 5명의 사번과 성명을 보여주는 쿼리문을 작성하시오.

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



--답.
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