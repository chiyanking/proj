package com.wtk.service;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.wtk.model.User;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by kingdom on 2017/5/16.
 */
public class UserServiceTest extends TestBase {

    @Resource
    UserService userService;

    @Test
    public void getUser() throws Exception {
        logger.debug("打印启动");
//        boolean delete = userService.delete(new EntityWrapper<User>(new User().setId(7l)));
//        System.out.println(delete);

        User user = userService.selectById(8l);
        User user1 = user.setId(null);
        user1.setUserName("1231231234");
        boolean insert = userService.insert(user1);
        System.out.println(user);
    }

    @Test
    public void selectByLoginName() throws Exception {
    }

    @Test
    public void getRoles() throws Exception {
    }

    @Test
    public void getPermissions() throws Exception {
    }

}