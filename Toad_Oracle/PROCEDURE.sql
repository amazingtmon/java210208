CREATE OR REPLACE PROCEDURE proc_if(p_empno IN number, msg OUT varchar2)
IS
  temp varchar2(10);
BEGIN
  SELECT ename INTO temp FROM emp
  WHERE empno = p_empno;
  msg :='입력하신 사원번호에 대한 사원명은' ||temp|| ' 입니다.';
END;
--> f5 누르기

-- 스토어프로시저(저장프로시저) - 함수, 커밋,, 롤백, SELECT, INSERT, UPDATE

-- 프로시저에는 업무의 로직을 담을 수 있으므로 수정이 가능해야함.

-- 오라클에서는 ' + ' 연산자 대신  ' || '  연산자를 사용한다.

/* 설명) a. CREATE OR REPLACE  PROCEDURE 프로시저를 생성한다.

b. proc_if 는 프로시저명( 마치 자바에서 메소드명과 같은 것)

c. (p_empno IN number, msg OUT varchar2) 괄호는 파라미터를 넣는 통.

p_empno IN number 에서 p_empno는 변수 이름이고, IN는 읽기 전용

number는 데이터타입 즉 정수형

msg OUT varchar2 에서 msg는 변수 이름이고, OUT은 값 변경 전용

varchar2는 문자형

d. IS 프로시저 내에 선언할 변수선언

e. TEMP varchar2(10); TEMP가 변수 이름 varchar2(10)가 타입

(자바와는 다르게 변수명 다음에 타입을 입력)

f. BEGIN 실행문으로 제어문, 반복문, 함수 정의 등 로직 기술의 시작을 알림.

g. SELECT ename INTO temp FROM emp

WHERE empno = p_empno;

emp의 테이블에서 (WHERE은 조건식)empno가 p_empno인 열을 찾는다.

그 열의 ename값을 temp라는 변수에 담는다는 의미이다.

msg :='입력하신 사원번호에 대한 사원명은'temp' 입니다.';

파라미터 msg에 '입력하신 사원번호에 대한 사원명은'temp'입니다.‘

할당한다(:=) 이때 ||는 자바의 print문의 +와 같은 의미

h. END; 는 실행문을 종료한다는 의미 */


CREATE OR REPLACE PROCEDURE proc_hap0218(bound IN number, msg OUT varchar2)
IS
    n number(2):=1;--1로 초기화.
    isum number(5):=0;--5자리까지 담을 수 있다. 다시 0으로 초기화시킴.
BEGIN
    loop
        isum := isum + n;
        n := n + 1;
        if n> bound then
            exit;--java break
        end if;
    end loop;
    msg:='합'||isum;
END;
--> f5 누르기
