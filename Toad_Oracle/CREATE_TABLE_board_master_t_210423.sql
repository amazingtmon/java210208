-- 마스터 테이블 생성: board_master_t
create table board_master_t(
    bm_no number(5) constraints bm_no_pk primary key
    ,bm_title varchar2(200)
    ,bm_name varchar2(50)
    ,bm_hit number(5) default 0
    ,bm_date varchar2(30)
);

--서브 테이블 생성: board_sub_t
create table board_sub_t(
    bm_no number(5)
    ,bs_seq number(2)
    ,bs_file varchar2(200 byte)
    ,bs_size number(7,2) default 0 --99999.99 정수 5자리, 실수 2자리
);

--복합키 생성.
CREATE UNIQUE INDEX CLIENT.NO_SEQ_PK ON CLIENT.BOARD_SUB_T
(BM_NO, BS_SEQ)
LOGGING
TABLESPACE TS_CLIENT
PCTFREE    10
INITRANS   2
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       UNLIMITED
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
NOPARALLEL;

--FK 생성.
ALTER TABLE CLIENT.BOARD_SUB_T ADD (
  CONSTRAINT FK_BMNO --제약조건.
  FOREIGN KEY (BM_NO) --외래키 대상.
  REFERENCES CLIENT.BOARD_MASTER_T (BM_NO)--참조 테이블.
  ENABLE VALIDATE);

 
ALTER TABLE CLIENT.BOARD_SUB_T ADD (
  CONSTRAINT BOARD_SUB_PK
  PRIMARY KEY
  (BM_NO, BS_SEQ)
  USING INDEX CLIENT.NO_SEQ_PK
  ENABLE VALIDATE);  
