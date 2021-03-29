package level2.basic;

import java.util.Vector;

public class Test0329_1 {
	
	Vector<String> vc = new Vector<String>();
	
	public void print() {
		vc.add("apple");
		vc.add("banana");
		vc.add("letuce");
		vc.add("raisin");
		vc.add("lemon");
		
		if(vc != null) {
			String a = null;
			String[] msg = null;
			for(int i=0; i<vc.size(); i++) {
				a = vc.get(i);
				
				System.out.println(msg);
			}
			System.out.println(msg);
		}	
	}
	
	public Test0329_1 () {
		print();
	}
	
	public static void main(String[] args) {
		new Test0329_1();
	}
}
