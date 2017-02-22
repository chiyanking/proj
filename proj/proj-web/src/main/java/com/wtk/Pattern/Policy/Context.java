package com.wtk.Pattern.policy;

/**
 * Created by Macus on 2017/2/21.
 */
public class Context {
    private AbstractStrategy strategy;

    public Context(AbstractStrategy strategy) {
        this.strategy = strategy;
    }

    public void algrithm() {
        strategy.algorithm();
    }

    public static void main(String[] args) {
        Context context = new Context(new ConcreteStrategyA());
        context.algrithm();
    }
}
