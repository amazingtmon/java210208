package book_ch4;

public class SwitchTest {

	public static void main(String[] args) {
		int protocol = 100;//로그인
		protocol = 200;//입장하기
		protocol = 300;//다자간 대화
		protocol = 301;//귓속말 1:1채팅
		String id = "tomato";
		int length = id.length();
		System.out.println("#length"+length);
		String input = "오늘 스터디 할까?";
		String msg = protocol+"#"+id+"#"+input;
		
		//break <-> continue
		//switch - break는 switch문을 탈출.
		//for, while 에서도 break가 사용됨. 무한루프 방지.
		//if - break 대신 return사용. 메소드 탈출.
		switch(id.length()) {//원시형 타입 + String 타입
			case 0:
				//실행문
				System.out.println("200");
				break;
			case 4:
				//실행문
				System.out.println("301");
				break;
			case 6:
				//실행문
				System.out.println("100");
				break;
			default:
				System.out.println("default");
				break;
				
		}//////////end of switch
		System.out.println("여기");
	}

}
