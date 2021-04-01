select * from DEPARTMENTS 

select
       e.empoyee_id, d.department_name
  from employees e, departments d
 where e.department_id = d.dpartment_id
 
select
       e.empoyee_id, d.department_name
  from employees e, departments d, jobs j
 where e.department_id = d.dpartment_id
   and e.job_id = j.job_id

select
       e.empoyee_id, d.department_name, j.job_title
  from employees e join departments d
    on e.department_id = d.dpartment_id
  join jobs j
    on e.job_id = j.job_id
   
   