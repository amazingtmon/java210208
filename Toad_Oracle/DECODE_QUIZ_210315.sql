SELECT * FROM LECTURE

SELECT
    LEC_ID AS "�Ϲݰ���"
FROM LECTURE
WHERE LEC_TIME = LEC_POINT

1.�ִ� ���� �ð��� ������ ������  '�Ϲݰ���' �� ���� 
�������� �Ѵ�. ��� �ϸ�Ǵ°�?

SELECT
    LEC_ID
    , DECODE(LEC_TIME, LEC_POINT, '�Ϲݰ���', '��Ÿ����')
FROM LECTURE
ORDER BY
 DECODE(LEC_TIME, LEC_POINT, '�Ϲݰ���', '��Ÿ����')
ASC  

2.�ִ� ���� �ð��� ������ ���� ������ ���� �˰� �ʹ�. ��� �ұ��?

SELECT
    COUNT(1)
  FROM LECTURE
 WHERE LEC_TIME = LEC_POINT
 
SELECT
    COUNT(DECODE(LEC_TIME, LEC_POINT, 1))
 FROM LECTURE
 
3.lec_time�� ũ�� '�������', lec_point�� ũ�� '��Ÿ ����'
���� ������ '�Ϲݰ���' ���� ���� ���� �ް��� �Ѵ�.
��� �ؾ� �ϴ°�?

SELECT 
    LEC_ID, LEC_TIME, LEC_POINT
    ,DECODE(SIGN(LEC_TIME-LEC_POINT), 0, '�Ϲݰ���'
                                  , 1, '�������'
                                  , -1, '��Ÿ����')
    FROM LECTURE
    
    
�ǽ�����
����: �����Ͽ� �ش����ڿ� 01�� �ٿ��� 4�ڸ� ��ȣ�� �����,
ȭ���Ͽ� 11, �����Ͽ� 21, ����Ͽ�, 31, �ݿ��Ͽ� 41, ����Ͽ� 51,
�Ͽ��Ͽ� 61�� �ٿ��� 4�ڸ� ��ȣ�� ����ٰ� �� ��
��ȣ�� SELECT�ϴ� SQL�� ����� ���ÿ�.

SELECT TO_CHAR(SYSDATE, 'YYYY')
      ,TO_CHAR(SYSDATE, 'DD')
      ,TO_CHAR(SYSDATE, 'DAY')
  FROM DUAL

��������
���� : ������̺��� job�� clerk�� ����� �޿� ��,  salesman�� �����
�޿��� ���� ���ϰ� ������ job�� ���ؼ��� ��Ÿ ������ ���Ͻÿ�.