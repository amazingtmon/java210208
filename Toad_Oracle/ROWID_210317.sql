SELECT ROWID RNO FROM EMP

DBMS가 가지고 있는 모든 데이터의 각각의 고유한 식별자
1)6자리:데이터의 오브젝트 번호
2)3자리:상대적 파일 번호
3)6자리:블록번호
4)3자리:블록 내의 행 번호

블럭 -> 4K, 8K 설정
블럭은 연속되어 있는것이 좋다.
그러나 이러한 블록은 다 채우지 않는다.
왜냐하면 체이닝 현상이 일어나면 조회 속도가 떨어질 수 있기 때문이다.

SELECT * FROM EMP WHERE ROWID = 'AAARE8AAEAAAACTAAA'

물리적인 정보는 아니고 실제로 존재하지는 않지만 index테이블 내에 있는 
rowid는 해당 데이터를 찾기 위한 논리적인 정보일 뿐이다.

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


SELECT dept, a.grade, DECODE(a.grade,1,'1학년')
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
     , DECODE(a.grade,1,'1학년',2,'2학년',3,'3학년',4,'4학년') as "학년"
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
     , DECODE(a.grade,1,'1학년',2,'2학년',3,'3학년',4,'4학년') as "학년"
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
     , DECODE(a.dm,1,'1학년',2,'2학년',3,'3학년',4,'4학년') as "학년"
  FROM test11,(SELECT rownum dm FROM temp WHERE rownum <5) a
ORDER BY dept asc, a.dm asc

SELECT dept
     , DECODE(a.dm,1,'1학년',2,'2학년',3,'3학년',4,'4학년') as "학년"
     , DECODE(a.dm,1,fre,2,sup,3,jun,4,sen)||'명' as "정원수"
  FROM test11,(SELECT rownum dm FROM temp WHERE rownum <5) a
ORDER BY dept asc, a.dm asc

인라인뷰
인라인뷰에서 사용한 컬럼은 메인 쿼리문에서 사용이 가능하다.
실제로 존재하지 않는 컬럽이더라도 인라인뷰에 사용하면 마치 있는 컬럼인 것처럼 사용 가능하다.
테이블 구조 그대로가 아닌 업무 담당자가 원하는 화면으로 출력해줄 때 유용하게 사용 가능하다.