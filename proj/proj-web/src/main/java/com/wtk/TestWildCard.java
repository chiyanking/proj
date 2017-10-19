package com.wtk;

import java.util.ArrayList;
import java.util.List;

public class TestWildCard {
    public static void main(String[] args) {
        /**
         *
         * PECS
         *  集合当作主体
         *      向外面拿(get)元素  所以是producer  pe
         *      向里面放(put)元素  所以是consumer cs
         *
         *
         *  通配符 主要是用来限定 容器的类型（容器所能盛放的类型)
         *
         *  List<？ extends Fruit>是List<Fruit>以及List<Apple>的基类，直接的好处就是，我们可以用“苹果盘子”给“水果盘子”赋值了
         *
         * List<? super Fruit> list2 = new ArrayList<Food>();
         * 因为下界规定了元素的最小粒度的下限，实际上是放宽了容器元素的类型控制。既然元素是Fruit的基类，那往里存粒度比Fruit小的都可以
         *
         *
         */

        List<? extends Fruit> list1 = new ArrayList<Apple>();

//        list1.add(new Apple());
        Fruit fruit1 = list1.get(0);


        List<? super Fruit> list2 = new ArrayList<Food>();

        list2.add(new Apple());
        list2.add(new RedApple());
//        list2.add(new Food());  //不允许

        //放进去的元素的所有特性都消失
        Object object = list2.get(0);
    }
}

//Level 1
class Food {
}

//Level 2
class Fruit extends Food {
}

class Meat extends Food {
}

//Level 3
class Apple extends Fruit {

}

class Banana extends Fruit {

}

class Pork extends Meat {

}

class Beef extends Meat {

}

//level 4
class RedApple extends Apple {

}

class GreenApple extends Apple {

}
