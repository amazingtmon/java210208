package com.vo;

public class Member80VO {
	private String mem_id = null;//아이디담기 
	private String mem_pw = null;//비번 담기            
	private boolean gender = false;//성별 담기
	
	/*
	 * 생성자는 반환타입이 없다.
	 * 생성자는 전역변수의 초기화를 담당한다.
	 * 클래스이름과 동일헤야 한다.
	 * 전역변수의 초기화를 담당한다.
	 * static블럭에서 하는일을 맡겨도 괜찮다.
	 * 만일 소켓통신을 통해서 서버사이드와 클라이트 사이트 구현 (구축)
	 * 
	 *  메소드 오버로딩
	 *  전제조건 - 모두 같은 이름이다. 다른이름이라면 해당 없다.
	 *  접근제한자 유무에 영향이 없다.
	 *  리턴타입이 유무에 영향이 없다. - 생성자는 해당 없음.
	 *  예외를 던지고 그렇지 않고는 영향이 없다.
	 *   - void go() throws Exception{}
	 * */
	
	public Member80VO() {}//디폴트 생성자.
	public Member80VO(String mem_id) {//파라미터가 있는 생성자
		this.mem_id = mem_id;
	}
	public Member80VO(String mem_id, String mem_pw) {//파라미터가 있는 생성자
		this.mem_id = mem_id;
		this.mem_pw = mem_pw;
	}
	public Member80VO(String mem_id, String mem_pw, boolean gender) {//파라미터가 있는 생성자
		this.mem_id = mem_id;
		this.mem_pw = mem_pw;
		this.gender = gender;
	}
	
	public String getMem_id() {
		return mem_id;
	}
	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}
	public String getMem_pw() {
		return mem_pw;
	}
	public void setMem_pw(String mem_pw) {
		this.mem_pw = mem_pw;
	}
	
	
	public boolean isGender() {//is 는 boolean을 나타냄.
		return gender;
	}
	
//	public boolean getGender() { getGender도 가능. 권장사항은 is를 사용.
//		return gender;
//	}
	
	public void setGender(boolean gender) {
		this.gender = gender;
	}
}
