package thread.main;

public class ATM extends Thread {
	private int depositMoney = 10000;
	
	public void run() {
		synchronized(this) {//run 메소드 입장까진 가능하게 해줌.
			for(int i=0; i<10 ; i++) {
				try {
					Thread.sleep(3000);
					
				} catch(InterruptedException ie) {
					ie.printStackTrace();
				}
				withdraw(1000);
			}
		}/////////end of synchronized
	}/////////////end of run

	private void withdraw(int howMuch) {
		if(depositMoney > 0) {
			depositMoney -= howMuch;
			System.out.print(Thread.currentThread().getName()+" , ");
			System.out.printf("잔액: %,d 원 %n", depositMoney);
		} else {
			System.out.print(Thread.currentThread().getName()+" , ");
			System.out.println("잔액이 부족합니다.");
		}
	}////////////end of withdraw
}
