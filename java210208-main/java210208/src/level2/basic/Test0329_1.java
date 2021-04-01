package level2.basic;

import java.util.Vector;

public class Test0329_1 {
	
	Vector<String> vc = new Vector<String>();
	Vector<String> result = new Vector<String>();
	String [] end = null;
	public void print() {
		vc.add("apple");
		vc.add("banana");
		vc.add("letuce");
		vc.add("raisin");
		vc.add("lemon");
		
		try {
//			for(int i=0; i<vc.size(); i++) {
//				String fruit = vc.get(i);
//				result.add(fruit);
//			}
//			end = new String[result.size()];
//			result.copyInto(end);
//			System.out.println(end[0]);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public Test0329_1 () {
		print();
	}
	
	public static void main(String[] args) {
		new Test0329_1();
	}
}
