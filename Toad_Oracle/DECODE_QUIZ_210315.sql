SELECT * FROM LECTURE

SELECT
    LEC_ID AS "일반과목"
FROM LECTURE
WHERE LEC_TIME = LEC_POINT

1.주당 강의 시간과 학점이 같으면  '일반과목' 을 돌려 
받으려고 한다. 어떻게 하면되는가?

SELECT
    LEC_ID
    , DECODE(LEC_TIME, LEC_POINT, '일반과목', '기타과목')
FROM LECTURE
ORDER BY
 DECODE(LEC_TIME, LEC_POINT, '일반과목', '기타과목')
ASC  

2.주당 강의 시간과 학점이 같은 강좌의 수를 알고 싶다. 어떻게 할까요?

SELECT
    COUNT(1)
  FROM LECTURE
 WHERE LEC_TIME = LEC_POINT
 
SELECT
    COUNT(DECODE(LEC_TIME, LEC_POINT, 1))
 FROM LECTURE
 
3.lec_time이 크면 '실험과목', lec_point가 크면 '기타 과목'
둘이 같으면 '일반과목' 으로 값을 돌려 받고자 한다.
어떻게 해야 하는가?

SELECT 
    LEC_ID, LEC_TIME, LEC_POINT
    ,DECODE(SIGN(LEC_TIME-LEC_POINT), 0, '일반과목'
                                  , 1, '실험과목'
                                  , -1, '기타과목')
    FROM LECTURE
    
    
실습문제
문제: 월요일엔 해당일자에 01을 붙여서 4자리 암호를 만들고,
화요일엔 11, 수요일엔 21, 목요일엔, 31, 금요일엔 41, 토요일엔 51,
일요일엔 61을 붙여서 4자리 암호를 만든다고 할 때
암호를 SELECT하는 SQL을 만들어 보시오.

SELECT TO_CHAR(SYSDATE, 'YYYY')
      ,TO_CHAR(SYSDATE, 'DD')
      ,TO_CHAR(SYSDATE, 'DAY')
  FROM DUAL

실전문제
문제 : 사원테이블에서 job이 clerk인 사람의 급여 합,  salesman인 사람의
급여의 합을 구하고 나머지 job에 대해서는 기타 합으로 구하시오.