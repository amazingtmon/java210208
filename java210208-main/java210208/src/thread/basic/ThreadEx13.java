package thread.basic;

import oracle.security.o3logon.a;

class A extends Thread {
	@Override
	public void run() {
		for(int i=0; i<300; i++) {
			System.out.print("-");
		}
		System.out.println("[[ A thread run ]]");
	}
}

class B implements Runnable {
	public void run() {
		for(int i=0; i<300; i++) {
			System.out.print("|");
		}
		System.out.println("[[ B thread run ]]");
	}		
}


//=====================================================================================

public class ThreadEx13 {
	
	static long startTime = 0;
	/*
	 * main(); -> main thread 시작. -> # A th1 = new A(); : 스레드 로딩. -> th1.start(); 대기중.
	 * 
	 * 
	 * */
	
	//main
	public static void main(String[] args) {
		A th1 = new A();
		B th = new B();
		Thread th2 = new Thread(th);
		th1.start();//콜백 메소드인 run 호출.
		th2.start();
		
		startTime = System.currentTimeMillis();
		
//		try {
//			th1.join();//th1의 작업이 끝날 때까지 기다린다.
//			th2.join();//ht2의 작업이 끝날 때까지 기다린다.
//		} catch(InterruptedException e) {
//			
//		}
		
		System.out.println("소요시간: " + (System.currentTimeMillis() - ThreadEx13.startTime));
	}
}
