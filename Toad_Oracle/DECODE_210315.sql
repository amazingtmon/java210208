DECODE - 조건문 역할

일반적인 프로그래밍 언어의 IF문을 SQL문장 또는 PL/SQL안으로 끌어들여
사용하기 위해 만들어진 함수이다.

SELECT시의 DECODE사용은 FROM절만 빼고는 어디서나 사용할 수 있다.
FROM절에서 사용할 수 없다는 것은 SELECT시 테이블을 DECODE를 사용하여
동적으로 변경할 수 없다는 뜻이기도 하다.

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

그룹함수라고 한다.
그룹함수는 반드시 전체 범위 처리이다.

부분범위 처리가 불가하다.


IF A = B THEN
    RETURN 'T';
ELSE
    RETURN 'F';
END IF;

DECODE(5,15,'T','F')

일반컬럼과 그룹함수가 들어간 컬럼은 같이 사용 불가

SELECT ENAME, MAX(SAL) FROM EMP

다른 컬럼에도 그룹함수를 씌워서 문제를 해결함.
하지만 

SELECT ENAME, SAL
 FROM EMP
 WHERE SAL = (SELECT MAX(SAL) FROM EMP)
 --어떤 경우도 테이블 구조 그대로 출력되는 경우는 없다.
 --직접조건이 아닌 간접조건으로 검색을 해야하는 경우도 많다.
 
SELECT 
        DECODE(COMM,500,1,0)
    FROM EMP
    
SELECT DECODE(COMM,500,1,0


SELECT SIGN(500-50), SIGN(1-500), SIGN(100-100)
FROM DUAL

DECODE는 크다 작다는 비교할 수 없다.
앞에 있는 숫자에서 뒤에 숫자를 뺀 값이 0보다 크면 <<크다>>
적으면 <<작다>>
같으면 <<같다>> 라고 할 수 있다.