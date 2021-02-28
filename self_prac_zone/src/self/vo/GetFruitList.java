package self.vo;

public class GetFruitList {

	public static void main(String[] args) {
		Store st = new Store("walmart", "LOS", "palmtree ave, LOS", 10000);
		
		Fruit fr = new Fruit("melon", "USA", "kg", 100, 5000, st);
		
		System.out.println("#1 "+fr.getSt().s_loc);
		

	}

}
