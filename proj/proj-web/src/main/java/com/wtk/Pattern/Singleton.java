package com.wtk.Pattern;

/**
 * Created by Macus on 2017/2/17.
 */
public class Singleton {
    public Singleton() {
        System.out.println("Single constructor init");
    }

    static {
        System.out.println("Singleton Class  static init");
    }

    private static class HolderClass {
        static {
            System.out.println("HolderClass Class static init");
        }

        public HolderClass() {
            System.out.println("HolderClass constructor init");
        }

        private final static Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return HolderClass.instance;
    }

    public static void main(String args[]) {
        Singleton s1, s2;
        System.out.println("main method run !");
        s1 = Singleton.getInstance();
        s2 = Singleton.getInstance();
        System.out.println(s1 == s2);
    }
}