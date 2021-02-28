package self.vo;

public class Fruit {
	public Store getSt() {
		return st;
	}
	public void setSt(Store st) {
		this.st = st;
	}
	
	String name = null;
	String loc = null;
	String unit = null; 
	int ea = 0;
	int price = 0;
	Store st = null;
	
	//생성자 part========================================================
	public Fruit() {}
	public Fruit(String name, String loc, String unit, int ea, int price, Store st) {
		this.name = name;
		this.loc = loc;
		this.unit = unit;
		this.ea = ea;
		this.price = price;
		this.st = st;
	}
	
	//get, set part========================================================
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public int getEa() {
		return ea;
	}
	public void setEa(int ea) {
		this.ea = ea;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
}
