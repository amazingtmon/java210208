CREATE TABLE member80(
    mem_id varchar2(10) constraints member80_id_pk primary key
   ,mem_pw varchar2(10) not null
   ,gender varchar2(1) default'1' --1:���� 0:����
);

SELECT mem_id, mem_pw, gender FROM member80

SELECT mem_id, mem_pw, DECODE(gender,1,'����', 0,'����') FROM member80

--default���� �ۼ����� �ʾƵ� �����ϴ�.
INSERT INTO member80(mem_id, mem_pw) VALUES('apple', '123');

INSERT INTO member80(mem_id, mem_pw, gender) VALUES('tomato', '123', 0);

--INSERT �Ŀ� ���� �������� ���̺� �ݿ��Ϸ��� Ŀ���ؾ���.
--�������� �ǵ����� ������ rollback;
--Ŀ���� ���� ���¿����� rollback; ����.
--Ŀ���� ���� ���� �� ����.
commit;

edit member80

--���� �̸��� ���̵�� �Ұ����ϴ�.-> ���̵� �ߺ��˻�




member80 = Value Object �����̴�.

�ڹ�                   ����Ŭ
--------------------------------------------
String               varchar2(4000)            long 2GB

int                  number(2):99 number4(5): 99999

double               number(7, 2):99999.99--��ü�� 7 �ڸ��̴�.


--pk = primary key
--��������
--�����ؾ��Ѵ�. null���� ������� �ʴ´�. not null.
--�ε����� ����� �ش�. -�˻��ӵ��� ������. -��Ʈ�� ������� �ʰ� �����ͺ��̽� ��ǰ�� �����Ѵ�.