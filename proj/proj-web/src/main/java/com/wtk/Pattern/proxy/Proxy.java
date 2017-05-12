package com.wtk.pattern.proxy;

/**
 * Created by Administrator on 2017/2/22.
 */
class Proxy implements Subject {

    private Subject subject;

    public Proxy(Subject subject) {
        this.subject = subject;
    }

    public void request() {
        preRequest();
        subject.request();
        postRequest();
    }

    private void preRequest() {
        System.out.println("代理对象： preRequest");
    }

    private void postRequest() {
        System.out.println("代理对象： postRequest");
    }
}
