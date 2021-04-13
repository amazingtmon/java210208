package book.ch14;

public class UserException extends Exception {
	private int port = 7000;
	
	public UserException() {}
	
	public UserException(String msg) {
		super(msg);//super는 Exception 을 말한다.
	}
	
	public UserException(String msg, int port) {
		super(msg);//super는 Exception 을 말한다.
		//부모클래스에는 생성자 파라미터에 두번째 자리에 int 인 생성자가 없다.
		//super(msg, port);
	}
	
	
	public static void main(String[] args) {
		

	}

	public int getPort() {
		return port;
	}

}
