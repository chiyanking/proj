package com.wtk.service;

import com.wtk.model.PermissionEntity;
import com.wtk.model.RoleEntity;
import com.wtk.model.UserEntity;

import java.util.Set;

/**
 * Created by kingdom on 2017/5/12.
 */
public interface UserService {
    UserEntity getUser(String userName);

    UserEntity selectByLoginName(String username);

    Set<RoleEntity> getRoles();

    Set<PermissionEntity> getPermissions();
}
