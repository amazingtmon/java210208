package thread.bakery;

public class Baker extends Thread {
	BakerStack bs = null;
	
	public Baker(BakerStack bs) {
		this.bs = bs;
	}
	
	public String getBread() {
		String bread = null;
		switch((int)(Math.random()*3)) {
			case 0:
				bread = "소보로";
				break;
			case 1:
				bread = "샌드위치";
				break;
			case 2:
				bread = "도너츠";
				break;
		}
		return bread;
	}
	
	@Override
	public void run() {
		String bread = null;
		bread = getBread();
		System.out.println("bread : "+bread);
		bs.push(bread);
		
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			System.out.println("누구여?");
		}
	}
}
