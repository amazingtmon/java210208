package book.ch7;

import com.vo.DeptVO;
//전제 조건은 반드시 메소드이름이 같을때만 고려한다.
public class MethodOverloading {
	void go() {
		
	}
//	int go() {//리턴타입이 있고없고는 영향을 미치지 않는다.
//		return 0;
//	}
//	public void go() {} -> 접근제한자는 영향이 없다.
//	public void go(int a[]) {} 이건 메소드 오버로딩이다. 파라미터의 갯수가 달라졌기 때문이다.		
//	public void go(int b[]) {} 메소드 오버로딩 안됨. 파라미터 타입이 같기때문이다.
		
	public void go(DeptVO dvo) {} //메소드 오버로딩을 만족함.
		
	
	public static void main(String[] args) {
		

	}

}
