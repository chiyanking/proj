package com.wtk;

import java.io.*;

/**
 * Created by Macus on 2016/8/1.
 */
public class DeepClone {

    public static void main(String[] args) throws CloneNotSupportedException {
        Person person1 = new Person();
        Person person = (Person) person1.clone();
        System.out.println(person.name.hashCode());
        System.out.println(person1.name.hashCode());
    }
}

class Person implements Cloneable, Serializable {
    public String name = "„Ó‘B";
    public int age;

    public Person clone() {
        try {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(bos);
            ByteArrayInputStream bai = new ByteArrayInputStream(bos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bai);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

}
