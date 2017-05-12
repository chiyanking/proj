package com.wtk.pattern.policy;

/**
 * Created by Macus on 2017/2/21.
 */
public class ConcreteStrategyA implements AbstractStrategy {
    //具体的算法的实现
    public void algorithm() {
        //算法A
        System.out.println("ConcreteStrategyA algorithm");
    }

}
