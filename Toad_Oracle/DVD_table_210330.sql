create table dvd
(
dvd_cd number(5) constraints dvd_cd_pk primary key
, dvd_date varchar2(30) not null
, dvd_price number(10) default 0
)