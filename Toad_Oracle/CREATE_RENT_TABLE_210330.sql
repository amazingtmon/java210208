create table rent
(
    rent_no number(5)
    ,rent_date varchar2(50)
    ,mem_id varchar2(10)
    ,dvd_cd number(5)
    ,constraint rent_pk primary key(mem_id, dvd_cd)
    ,constraint rent_member_fk foreign key(mem_id) references member(mem_id)
    ,constraint rent_dvd_fk foreign key (dvd_cd) references dvd(dvd_cd)
)