1.temp���� ���,����, �μ��ڵ带 �о�µ� �μ���Ī�� �Բ� ���� ���� ��쿡
��� �ϸ� �Ǵ°�?

select * from temp

select * from tdept

--���� �Ѱ�
select e.emp_id, e.emp_name, e.dept_code
       ,d.dept_code, d.dept_name  
  from temp e, tdept d
 where e.dept_code = d.dept_code

--������ �κ�
select
      a.emp_id, a.emp_name, a.dept_code, b.dept_name
  from temp a natural join tdept b
  
select
      a.emp_id, a.emp_name, a.dept_code, b.dept_name
  from temp a, tdept b
 where a.dept_code = b.dept_code

--best answer 
select
      a.emp_id, a.emp_name, a.dept_code, b.dept_name
  from temp a join tdept b
    on a.dept_code = b.dept_code   

2.tcom�� work_year = '2001'�� �ڷ�� temp�� ������� �����ؼ� join�� ��
comm�� �޴� ������ ����, salary + COMM�� ��ȸ�� ���ÿ�.

select * from tdept

select * from temp

select
        decode(e.emp_id,'2001',y)
  from temp e
  
select 
      a.emp_id, a.emp_name, a.salary + b.comm
  from temp a, tcom b
 where a.emp_id = b.emp_id
   and b.work_year = '2001'  

3.temp�� emp_level�� �̿��� emp_level�� ���� ������ ���� ����/���� ���� ����
��� ������ �����, ����, ����, salary�� �о��.

select lev, salary from temp
 where salary between from_sal and to_sal

select 
       a.emp_id as "���", a.emp_name as "����"
      ,a.lev as "����", a.salary as "����"
  from temp a, emp_level b
 where a.salary between from_sal and to_sal
   and b.lev='����'
   
   
4. self join ���� 
tdept���̺� �ڽ��� ���� �μ� ������ �����ϰ� �ִ�.
�� ���̺��� �̿��Ͽ� �μ��ڵ�, �μ���, �����μ��ڵ�, �����μ����� �о���� 
������ ����� ����.

select * from tdept a, tdept b

select  b.dept_code as "�μ��ڵ�", b.dept_name as "�μ���"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept
  
select  b.dept_code as "�μ��ڵ�", b.dept_name as "�μ���"
        , a.dept_name as"�����μ���"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept
  
select  b.dept_code as "�μ��ڵ�", b.dept_name as "�μ���"
        ,a.dept_code as "�����μ��ڵ�",  a.dept_name as"�����μ���"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept              