package main.java.com.wtk.Proxy;

public class Proxy implements Subject {

	RealSubject real;
	

	public void Request() {
		if(real==null){
			real=new RealSubject();
		}
		real.Request();
	}
}
