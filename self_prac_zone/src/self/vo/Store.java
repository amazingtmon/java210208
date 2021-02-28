package self.vo;

public class Store {
	//선언부
	String s_name = null;
	String s_loc = null;
	String s_address = null;
	int    s_sales = 0;
	
	//생서자 part=============================================================
	public Store() {}
	public Store(String s_name, String s_loc, String s_adderss, int s_sales) {
		this.s_name = s_name;
		this.s_loc = s_loc;
		this.s_address = s_address;
		this.s_sales = s_sales;
	}
	
	//get, set part==========================================================
	public String getStore_name() {
		return s_name;
	}
	public void setStore_name(String store_name) {
		this.s_name = store_name;
	}
	public String getStore_loc() {
		return s_loc;
	}
	public void setStore_loc(String store_loc) {
		this.s_loc = store_loc;
	}
	public String getStore_address() {
		return s_address;
	}
	public void setStore_address(String store_address) {
		this.s_address = store_address;
	}
	public int getStore_sales() {
		return s_sales;
	}
	public void setStore_sales(int store_sales) {
		this.s_sales = store_sales;
	}
}
