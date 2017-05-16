package com.wtk.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
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
        Subject subject = SecurityUtils.getSubject();
        return "";
    }
}
