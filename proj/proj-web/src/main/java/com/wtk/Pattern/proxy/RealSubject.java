package com.wtk.pattern.proxy;

/**
 * Created by Administrator on 2017/2/22.
 */
public class RealSubject implements Subject {
    public void request() {
        System.out.println("真实对象的真正的方法");
    }
}
