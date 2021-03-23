CREATE OR REPLACE PROCEDURE proc_login(p_id IN varchar2, p_pw IN varchar2, msg OUT varchar2)
IS
r_status varchar2(10);
BEGIN
SELECT NVL((SELECT fid 
            FROM filemem 
            WHERE fid = p_id), -1)
             INTO r_status
FROM dual;

IF r_status = p_id
THEN
SELECT NVL((SELECT fid 
            FROM filemem 
            WHERE fid = p_id AND fpw = p_pw), 'difpw') INTO msg
FROM dual;

ELSIF r_status = '-1' THEN
msg:='difid';

END IF;
END;