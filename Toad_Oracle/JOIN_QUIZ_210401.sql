1.temp에서 사번,성명, 부서코드를 읽어내는데 부서명칭을 함께 보고 싶은 경우에
어떻게 하면 되는가?

select * from temp

select * from tdept

--내가 한거
select e.emp_id, e.emp_name, e.dept_code
       ,d.dept_code, d.dept_name  
  from temp e, tdept d
 where e.dept_code = d.dept_code

--선생님 부분
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

2.tcom의 work_year = '2001'인 자료와 temp를 사번으로 연결해서 join한 후
comm을 받는 직원의 성명, salary + COMM을 조회해 보시오.

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

3.temp와 emp_level을 이용해 emp_level의 과장 직급의 연봉 상한/하한 범위 내에
드는 직원의 사번과, 성명, 직급, salary를 읽어보자.

select lev, salary from temp
 where salary between from_sal and to_sal

select 
       a.emp_id as "사번", a.emp_name as "성명"
      ,a.lev as "직급", a.salary as "연봉"
  from temp a, emp_level b
 where a.salary between from_sal and to_sal
   and b.lev='과장'
   
   
4. self join 문제 
tdept테이블에 자신의 상위 부서 정보를 관리하고 있다.
이 테이블을 이용하여 부서코드, 부서명, 상위부서코드, 상위부서명을 읽어오는 
쿼리를 만들어 보자.

select * from tdept a, tdept b

select  b.dept_code as "부서코드", b.dept_name as "부서명"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept
  
select  b.dept_code as "부서코드", b.dept_name as "부서명"
        , a.dept_name as"상위부서명"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept
  
select  b.dept_code as "부서코드", b.dept_name as "부서명"
        ,a.dept_code as "상위부서코드",  a.dept_name as"상위부서명"
   from tdept a, tdept b
  where a.dept_code = b.parent_dept              