SELECT empno FROM EMP

SCOTT - emp테이블에 대한 소유주

pk_emp - 인덱스 이름 - primary key를 설정했기 때문이다.
자동으로 인덱스가 만들어 진다.

테이블을 엑세스 하지 않고 인덱스만 읽고서 결과를 내보낸다.

primary key 는 테이블을 엑세스하지 않고도 인덱스를 읽어서 출력으로 내보낼 수 있다.


//-------------------------------------------
SELECT empno, ename, sal FROM EMP 

ename 은 primary key가 아니다. -> 인덱스가 업다.

DML구문 - 데이터 조작어.

new int[];       empno number(4) -> 9999까지 담을 수 있음.

new String[14];  ename varchar2(20)

new double[14];  sal   number(7,2) 99999.99 -> 7자리

empno, ename, sal -> EmpVO에 담아야 한다.

EmpVO(); 0, null, 0.0 EmpVO[0]

EmpVO(); 0, null, 0.0 EmpVO[1]

EmpVO(); 0, null, 0.0 EmpVO[2]