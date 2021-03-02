CREATE OR REPLACE PROCEDURE proc_corona_insert(
        P_NUM IN number, 
        P_CONFIRM_DAY IN varchar2, 
        P_LOC IN varchar2, 
        P_INFECT_LOC IN varchar2 
        )
IS

BEGIN

    INSERT INTO CORONA VALUES(
                        P_NUM, 
                        P_CONFIRM_DAY, 
                        P_LOC, 
                        P_INFECT_LOC);    
  
END;

COMMIT;

EXEC proc_corona_insert(31001, '2021-03-02', '중랑구', '중랑구청사거리 버거킹');

COMMIT;


