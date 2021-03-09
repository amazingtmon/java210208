package self.vo;

public class GetFruitList {
	
	
	
	public static void main(String[] args) {
		Store st = new Store("walmart", "LOS", "palmtree ave, LOS", 10000);
		
		Fruit fr = new Fruit("melon", "USA", "kg", 100, 5000, st);
		
		//System.out.println("#1 "+fr.getSt());
//===================================================================================
		Fruit[] frArray = new Fruit[3];
		
		frArray[0] = new Fruit("apple", "KR", "kg", 500, 7000, st);
		
		System.out.println(frArray[0].getName());
		
		
		

	}

}
