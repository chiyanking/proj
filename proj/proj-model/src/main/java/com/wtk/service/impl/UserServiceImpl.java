package com.wtk.service.impl;

import com.wtk.model.UserEntity;
import com.wtk.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by kingdom on 2017/5/12.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    public UserEntity getUser(String userName) {
        return null;
    }
}
