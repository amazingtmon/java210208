SELECT seq_book_no.nextval FROM dual

SELECT seq_book_no.currval FROM dual

dual: 오라클에서 제공하는 로우 하나에 컬럼 하나짜리 가상 테이블이다.

테이블을 드라이브 하지 않는다. - 장점

SELECT zipcode, address FROM zipcode_t
    WHERE dong LIKE '가산'||'%' 