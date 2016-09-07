package Proxy;

public class RealSubject implements Subject {


	public void Request() {
		System.out.println("发送请求");
	}
}
