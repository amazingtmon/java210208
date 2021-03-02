CREATE TABLE member80(
    mem_id varchar2(10) constraints member80_id_pk primary key
   ,mem_pw varchar2(10) not null
   ,gender varchar2(1) default'1' --1:남자 0:여자
);

SELECT mem_id, mem_pw, gender FROM member80

SELECT mem_id, mem_pw, DECODE(gender,1,'남자', 0,'여자') FROM member80

--default값은 작성하지 않아도 가능하다.
INSERT INTO member80(mem_id, mem_pw) VALUES('apple', '123');

INSERT INTO member80(mem_id, mem_pw, gender) VALUES('tomato', '123', 0);

--INSERT 후에 실제 물리적인 테이블에 반영하려면 커밋해야함.
--이전으로 되돌리고 싶을때 rollback;
--커밋을 안한 상태에서만 rollback; 가능.
--커밋한 것은 돌릴 수 없음.
commit;

edit member80

--같은 이름의 아이디는 불가능하다.-> 아이디 중복검사




member80 = Value Object 패턴이다.

자바                   오라클
--------------------------------------------
String               varchar2(4000)            long 2GB

int                  number(2):99 number4(5): 99999

double               number(7, 2):99999.99--전체가 7 자리이다.


--pk = primary key
--제약조건
--유일해야한다. null값은 허용하지 않는다. not null.
--인덱스를 만들어 준다. -검색속도가 빠르다. -노트를 사용하지 않고 데이터베이스 제품을 구매한다.