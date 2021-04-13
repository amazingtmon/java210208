package book.ch14;

public class UserExceptionTest {
	
	public void test(String[] a) throws UserException{
		System.out.println("test 호출 성공");
		if(a.length < 1) {
			throw new UserException("아무것도 없어요.");
		}else {
			throw new UserException("else 파트", 7000);
		}
	}
	
	public static void main(String[] args) {
		UserExceptionTest uet = new UserExceptionTest();
		try {
			uet.test(args);
		} catch (UserException ue) {
			ue.printStackTrace();//에러메시지가 더 상세히 나온다.
			//System.out.println("[[ UserException ]]");
		} catch (Exception e) {
			e.toString();
			e.getMessage();
			e.printStackTrace();
		} finally {
			System.out.println("finally 실행됨.");
		}

	}

}
