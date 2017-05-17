package com.wtk.service.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.wtk.mapper.UserMapper;
import com.wtk.model.User;
import com.wtk.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by kingdom on 2017/5/12.
 */
@Service
@Transactional
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
}
