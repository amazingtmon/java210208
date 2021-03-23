CREATE TABLESPACE FILETRANSFER DATAFILE 'E:\app\webtr\oradata\orcl11\FILETRANSFER.dbf' SIZE 100M
AUTOEXTEND ON NEXT 10M;

CREATE USER kosmo IDENTIFIED BY tiger DEFAULT TABLESPACE FILETRANSFER;

--로그인, 테이블 생성, 테이블 보기권한
GRANT create session, create table, create view TO kosmo;

--시퀸스 생성, 트리거 생성권한
GRANT create sequence, create trigger TO kosmo;
--데이터베이스 접속, 테이블 권한
GRANT connect, resource, dba TO kosmo;
--테이블스페이스 할당량  언리미트
ALTER user kosmo quota unlimited ON FILETRANSFER;
