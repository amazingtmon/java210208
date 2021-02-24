package prac.quiz;
import com.google.gson.Gson;
import com.vo.Member80VO;
public class MemberList {

	public static void main(String[] args) {
		Member80VO mvo = new Member80VO();
		mvo.setMem_id("apple");
		mvo.setMem_pw("123");
		mvo.setGender(true);
		
		
		Gson gson = new Gson();
		String imsi = gson.toJson(mvo);//JSon 파일로 변경.
		System.out.println("#1 "+imsi);
		
		mvo = new Member80VO("tmato", "123", true);
		String imsi2 = gson.toJson(mvo);//JSon 파일로 변경.
		System.out.println("#2 "+imsi2);
		
		//=======================================================================
		
		Member80VO[] mvoar = new Member80VO[3];
		
		Member80VO mvoar1 = new Member80VO("mango","123",false);
		mvoar[0] = mvoar1;
		System.out.println("@ " + mvoar1);//@15db9742
		System.out.println(mvoar1.getMem_id()+","+mvoar1.getMem_pw()+","+mvoar1.isGender());
		String mvoarJ1 = gson.toJson(mvoar1);
		System.out.println("J1: "+mvoarJ1);
		
		mvoar1 = new Member80VO("mango","123",false);
		mvoar[1] = mvoar1;
		System.out.println("@ " + mvoar1);//@6d06d69c
		System.out.println(mvoar1.getMem_id()+","+mvoar1.getMem_pw()+","+mvoar1.isGender());
		String mvoarJ2 = gson.toJson(mvoar1);
		System.out.println("J2: "+mvoarJ2);
	}

}
