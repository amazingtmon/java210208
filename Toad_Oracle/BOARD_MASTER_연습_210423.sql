edit board_master_t
?
edit board_sub_t
?
SELECT 1 as "�۹�ȣ"
      ,2 as "����"
      ,3 as "�ۼ���"
      ,4 as "÷������"
      ,5 as "��ȸ��"
  FROM dual
  
SELECT 1 as "�۹�ȣ"
      ,2 as "����"
      ,3 as "�ۼ���"
      ,4 as "÷������"
      ,5 as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
  
SELECT 1 as "�۹�ȣ"
      ,2 as "����"
      ,3 as "�ۼ���"
      ,4 as "÷������"
      ,5 as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no   
 
SELECT bm.bm_no as "�۹�ȣ"
      ,bm.bm_title as "����"
      ,bm.bm_name as "�ۼ���"
      ,bs.bs_file as "÷������"
      ,bm.bm_hit as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no   
 
SELECT bm.bm_no as "�۹�ȣ"
      ,bm.bm_title as "����"
      ,bm.bm_name as "�ۼ���"
      ,bs.bs_file as "÷������"
      ,bm.bm_hit as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+)  
 
SELECT bm.bm_no as "�۹�ȣ"
      ,bm.bm_title as "����"
      ,bm.bm_name as "�ۼ���"
      ,NVL(bs.bs_file,'�ش����') as "÷������"
      ,bm.bm_hit as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+) 
 
SELECT bm.bm_no as "�۹�ȣ"
      ,bm.bm_title as "����"
      ,bm.bm_name as "�ۼ���"
      ,NVL(bs.bs_file,'�ش����')||'('||bs.bs_size||'MB'||')' as "÷������"
      ,bm.bm_hit as "��ȸ��"
  FROM board_master_t bm, board_sub_t bs  
 WHERE bm.bm_no = bs.bm_no(+)    
 
SELECT M.BM_NO "�۹�ȣ", M.BM_TITLE "������", M.BM_NAME "�ۼ���"
        , DECODE(NVL(S.BS_FILE,'����'),'����','����',S.BS_FILE||'('||S.BS_SIZE||'MB)' ) "÷������"
        , M.BM_HIT "��ȸ��"
    FROM BOARD_MASTER_T M , BOARD_SUB_T S 
    WHERE M.BM_NO = S.BM_NO(+);
