edit board_master_t
?
edit board_sub_t
?
SELECT 1 as "글번호"
      ,2 as "제목"
      ,3 as "작성자"
      ,4 as "첨부파일"
      ,5 as "조회수"
  FROM dual
  
SELECT 1 as "글번호"
      ,2 as "제목"
      ,3 as "작성자"
      ,4 as "첨부파일"
      ,5 as "조회수"
  FROM board_master_t bm, board_sub_t bs  
  
SELECT 1 as "글번호"
      ,2 as "제목"
      ,3 as "작성자"
      ,4 as "첨부파일"
      ,5 as "조회수"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no   
 
SELECT bm.bm_no as "글번호"
      ,bm.bm_title as "제목"
      ,bm.bm_name as "작성자"
      ,bs.bs_file as "첨부파일"
      ,bm.bm_hit as "조회수"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no   
 
SELECT bm.bm_no as "글번호"
      ,bm.bm_title as "제목"
      ,bm.bm_name as "작성자"
      ,bs.bs_file as "첨부파일"
      ,bm.bm_hit as "조회수"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+)  
 
SELECT bm.bm_no as "글번호"
      ,bm.bm_title as "제목"
      ,bm.bm_name as "작성자"
      ,NVL(bs.bs_file,'해당없음') as "첨부파일"
      ,bm.bm_hit as "조회수"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+) 
 
SELECT bm.bm_no as "글번호"
      ,bm.bm_title as "제목"
      ,bm.bm_name as "작성자"
      ,NVL(bs.bs_file,'해당없음')||'('||bs.bs_size||'MB'||')' as "첨부파일"
      ,bm.bm_hit as "조회수"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+)    
 
SELECT M.BM_NO "글번호", M.BM_TITLE "글제목", M.BM_NAME "작성자"
        , DECODE(NVL(S.BS_FILE,'없음'),'없음','없음',S.BS_FILE||'('||S.BS_SIZE||'MB)' ) "첨부파일"
        , M.BM_HIT "조회수"
    FROM BOARD_MASTER_T M , BOARD_SUB_T S 
    WHERE M.BM_NO = S.BM_NO(+);
