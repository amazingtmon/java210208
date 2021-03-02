CREATE OR REPLACE PROCEDURE proc_if(p_empno IN number, msg OUT varchar2)
IS
  temp varchar2(10);
BEGIN
  SELECT ename INTO temp FROM emp
  WHERE empno = p_empno;
  msg :='�Է��Ͻ� �����ȣ�� ���� �������' ||temp|| ' �Դϴ�.';
END;
--> f5 ������

-- ��������ν���(�������ν���) - �Լ�, Ŀ��,, �ѹ�, SELECT, INSERT, UPDATE

-- ���ν������� ������ ������ ���� �� �����Ƿ� ������ �����ؾ���.

-- ����Ŭ������ ' + ' ������ ���  ' || '  �����ڸ� ����Ѵ�.

/* ����) a. CREATE OR REPLACE  PROCEDURE ���ν����� �����Ѵ�.

b. proc_if �� ���ν�����( ��ġ �ڹٿ��� �޼ҵ��� ���� ��)

c. (p_empno IN number, msg OUT varchar2) ��ȣ�� �Ķ���͸� �ִ� ��.

p_empno IN number ���� p_empno�� ���� �̸��̰�, IN�� �б� ����

number�� ������Ÿ�� �� ������

msg OUT varchar2 ���� msg�� ���� �̸��̰�, OUT�� �� ���� ����

varchar2�� ������

d. IS ���ν��� ���� ������ ��������

e. TEMP varchar2(10); TEMP�� ���� �̸� varchar2(10)�� Ÿ��

(�ڹٿʹ� �ٸ��� ������ ������ Ÿ���� �Է�)

f. BEGIN ���๮���� ���, �ݺ���, �Լ� ���� �� ���� ����� ������ �˸�.

g. SELECT ename INTO temp FROM emp

WHERE empno = p_empno;

emp�� ���̺��� (WHERE�� ���ǽ�)empno�� p_empno�� ���� ã�´�.

�� ���� ename���� temp��� ������ ��´ٴ� �ǹ��̴�.

msg :='�Է��Ͻ� �����ȣ�� ���� �������'temp' �Դϴ�.';

�Ķ���� msg�� '�Է��Ͻ� �����ȣ�� ���� �������'temp'�Դϴ�.��

�Ҵ��Ѵ�(:=) �̶� ||�� �ڹ��� print���� +�� ���� �ǹ�

h. END; �� ���๮�� �����Ѵٴ� �ǹ� */


CREATE OR REPLACE PROCEDURE proc_hap0218(bound IN number, msg OUT varchar2)
IS
    n number(2):=1;--1�� �ʱ�ȭ.
    isum number(5):=0;--5�ڸ����� ���� �� �ִ�. �ٽ� 0���� �ʱ�ȭ��Ŵ.
BEGIN
    loop
        isum := isum + n;
        n := n + 1;
        if n> bound then
            exit;--java break
        end if;
    end loop;
    msg:='��'||isum;
END;
--> f5 ������
