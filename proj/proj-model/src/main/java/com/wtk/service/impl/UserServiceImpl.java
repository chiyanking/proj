package com.wtk.service.impl;

import com.wtk.model.PermissionEntity;
import com.wtk.model.RoleEntity;
import com.wtk.model.UserEntity;
import com.wtk.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

/**
 * Created by kingdom on 2017/5/12.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    public UserEntity getUser(String userName) {
        return null;
    }

    public UserEntity selectByLoginName(String username) {
        return null;
    }

    public Set<RoleEntity> getRoles() {
        return null;
    }

    public Set<PermissionEntity> getPermissions() {
        return null;
    }
}
