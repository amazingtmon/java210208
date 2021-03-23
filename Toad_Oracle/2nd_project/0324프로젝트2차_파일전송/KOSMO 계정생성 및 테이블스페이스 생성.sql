CREATE TABLESPACE FILETRANSFER DATAFILE 'E:\app\webtr\oradata\orcl11\FILETRANSFER.dbf' SIZE 100M
AUTOEXTEND ON NEXT 10M;

CREATE USER kosmo IDENTIFIED BY tiger DEFAULT TABLESPACE FILETRANSFER;

--�α���, ���̺� ����, ���̺� �������
GRANT create session, create table, create view TO kosmo;

--������ ����, Ʈ���� ��������
GRANT create sequence, create trigger TO kosmo;
--�����ͺ��̽� ����, ���̺� ����
GRANT connect, resource, dba TO kosmo;
--���̺����̽� �Ҵ緮  �𸮹�Ʈ
ALTER user kosmo quota unlimited ON FILETRANSFER;
