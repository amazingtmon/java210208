CREATE OR REPLACE PROCEDURE proc_loop(u_num number, 
                                      msg OUT varchar2)
IS
  
  cnt number(5);
  hap number(5);
  
BEGIN
    cnt := 1;
    hap := 0;
    
    LOOP
        
        hap := hap + cnt;
        cnt := cnt+1;
        
        EXIT WHEN cnt = 11;
        
    END LOOP;
    
    msg := '합은 '||hap||'입니다.';

END;