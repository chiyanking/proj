package com.wtk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by kingdom on 2017/5/12.
 */
@Controller
public class UserController {


    @ResponseBody
    @RequestMapping(value = "/userLogin", method = RequestMethod.GET)
    public String userLogin() {
        return "";
    }
}
