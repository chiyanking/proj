package com.wtk.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.wtk.mapper.UserMapper;
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
        User user = userService.selectById(1l);
        Map map = new HashMap<>();
        map.put("point_id", "1");
        List list = userService.selectByMap(map);
        Page page = new Page();
        page.setSize(10);
        System.out.println("");
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