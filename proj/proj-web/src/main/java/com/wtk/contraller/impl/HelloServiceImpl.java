package com.wtk.contraller.impl;

import com.wtk.contraller.HelloService;

/**
 * Created by Macus on 2016/9/6.
 */

public class HelloServiceImpl implements HelloService {
    public String hello(String name) {
        return "hello!"+name;
    }
}
