package book.ch12;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class FruitList {
	List<String> fruit = new ArrayList<>();
	
	Map<String, Object> fruit2 = new HashMap<>();
	
	public void addFruit() {
		fruit.add("apple");
		fruit.add("banana");
		fruit.add("peach");
		
		for(String fr:fruit) {
			System.out.println(fr);
		}
		
	}
	
	public void putFruit2() {
		Object[] keys = null;
		
		fruit2.put("one", "apple");
		fruit2.put("two", "banana");
		fruit2.put("three", "peach");
		
		Set<String> set = fruit2.keySet();
		keys = set.toArray();
		
		for(int i=0; i<keys.length ;i++) {
			String key = (String) keys[i];
			String value = String.valueOf(fruit2.get(key));
			System.out.println(key+", "+value);
		}
	}
	
	public FruitList() {
		addFruit();
		putFruit2();
	}
	
	public static void main(String[] args) {
		new FruitList();
	}
}
