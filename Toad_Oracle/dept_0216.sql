SELECT * FROM dept

�츮ȸ���� �μ������� �����ϴ� �����̴�.
�Ӽ� - �κ�����
�μ���ȣ, �μ���, ���� -> ���������� �����ؾ� �Ѵ�. - Data�� ��Եȴ�. - if, for�� �̿��Ͽ� ����ȭ ���Ѽ� ����Ѵ�.
System.out.println() -> �������� ��� -> ������ Ȯ�ΰ���.

�÷� + �ο� = ���̺�� �����ȴ�.

Ŭ���� = ���� + �޼ҵ�� �����ȴ�.

dept : ������ �𵨸��ܰ� - ����.(Entity) -> �߻����̴�. �������� �ʾҴ�. ���� �����̴�.
       �������� �𵨸��ܰ� - ���̺�.(Table) -> ��ü���̴�. �����Ǿ���. - DeptVO.java
       
       �ڹٿ� ����Ŭ�� ���� -> �ݶ󺸰� �̷�����.
       
======================================================================

SELECT * FROM dept

SELECT deptno,(SELECT dname FROM dept WHERE deptno=30) FROM emp
WHERE empno=:x

�μ���ȣ�� �μ���. ���ϰ��̴�.
SELECT deptno,(SELECT dname FROM dept WHERE deptno=
        (SELECT deptno FROM emp WHERE empno=:x))
        FROM emp
WHERE empno=:x --> �Ķ�����ڸ�. ����ڰ��Է���. 