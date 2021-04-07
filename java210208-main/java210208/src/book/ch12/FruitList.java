package book.ch12;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class FruitList {
	
	List<String> fruit = new ArrayList<>();
	Map<String, Object> fruit2 = new HashMap<>();
	String[] name = null;
	
	public String[] callName() {
		name = new String[6];
		String[] candi = {"mike", "john", "julie", "moon", "kelly", "shan"};
		for(int i=0;i<candi.length;i++) {
			name[i] = candi[i];
			System.out.println(name[i]);
		}
		return name;
	}
	
	public void addFruit() {
		fruit.add("apple");
		fruit.add("banana");
		fruit.add("peach");
	}
	
	public void putFruit2() {
		Object[] keys = null;
		
		fruit2.put("one", "apple");
		fruit2.put("two", "banana");
		fruit2.put("three", "peach");
		
		Set<String> set = fruit2.keySet();//fruit2의 key의 집합.
		System.out.println("set: "+set);//set: [one, two, three]
		keys = set.toArray();
		System.out.println("keys: "+keys);//@7852e922 주소번지가 나옴.
		
		Object a = fruit2.get("one");
		System.out.println(a);
		
		Collection<Object> collect = fruit2.values();//fruit2의 value들의 집합.
		System.out.println("values: "+ collect);//[apple, banana, peach]
		
		for(String key:fruit2.keySet()) {
			System.out.println("#1: "+key);
		}
		
		
		for(int i=0; i<keys.length ;i++) {
			String key = (String) keys[i];
			System.out.println("keys: "+ keys[i]);
			String value = String.valueOf(fruit2.get(key));
			System.out.println(key+", "+value);
			//one, apple
			//two, banana
			//three, peach
		}
	}
	
	public FruitList() {
		addFruit();
		putFruit2();
	}
	
	public static void main(String[] args) {
		FruitList fruit = new FruitList();
		new FruitList();
		
		fruit.callName();
	}
}
