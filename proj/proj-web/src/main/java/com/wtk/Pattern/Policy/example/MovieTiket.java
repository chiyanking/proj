package com.wtk.pattern.policy.example;

/**
 * Created by Macus on 2017/2/21.
 */
//电影票类：环境类
public class MovieTiket {
    private double price;
    private Discount discount;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Discount getDiscount() {
        return discount;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }
}

//折扣类：抽象策略类
interface Discount {
    public double calculate(double price);
}

//学生票折扣类：具体策略类
class StudentDiscount implements Discount {


    public double calculate(double price) {
        System.out.println("学生票：");
        return price * 0.8;
    }
}

class ChildrenDiscount implements Discount {


    public double calculate(double price) {
        System.out.println("儿童票");
        return price - 10;
    }

}

//VIP会员票折扣类：具体策略类
class VIPDiscount implements Discount {

    public double calculate(double price) {
        System.out.println("VIP票：");
        System.out.println("增加几分！");
        return price * 0.5;
    }
}