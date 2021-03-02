SELECT * FROM dept

우리회사의 부서정보를 관리하는 집합이다.
속성 - 부분집합
부서번호, 부서명, 지역 -> 전역변수로 정의해야 한다. - Data를 담게된다. - if, for를 이용하여 정보화 시켜서 출력한다.
System.out.println() -> 브라우저에 출력 -> 웹에서 확인가능.

컬럼 + 로우 = 테이블로 구성된다.

클래스 = 변수 + 메소드로 구성된다.

dept : 논리적인 모델링단계 - 집합.(Entity) -> 추상적이다. 결정되지 않았다. 아직 미정이다.
       물리적인 모델링단계 - 테이블.(Table) -> 구체적이다. 결정되었다. - DeptVO.java
       
       자바와 오라클이 만남 -> 콜라보가 이뤄진다.
       
======================================================================

SELECT * FROM dept

SELECT deptno,(SELECT dname FROM dept WHERE deptno=30) FROM emp
WHERE empno=:x

부서번호와 부서명. 리턴값이다.
SELECT deptno,(SELECT dname FROM dept WHERE deptno=
        (SELECT deptno FROM emp WHERE empno=:x))
        FROM emp
WHERE empno=:x --> 파라미터자리. 사용자가입력함. 