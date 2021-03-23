CREATE TABLE filemem
(
    fid       varchar2(20) CONSTRAINT fid_pk PRIMARY KEY NOT NULL
    ,fpw      varchar2(20)
    ,fname    varchar2(100)
    ,fdate   date default sysdate
    );
