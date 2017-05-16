package com.wtk.security;

import com.wtk.enums.UserStatusEnum;
import com.wtk.model.PermissionEntity;
import com.wtk.model.RoleEntity;
import com.wtk.model.UserEntity;
import com.wtk.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by kingdom on 2017/5/12.
 */
@Component("DefaultRealm")
public class DefaultRealm extends AuthorizingRealm {

    @Resource
    UserService userService;

    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        String username = (String) principalCollection.getPrimaryPrincipal();
        UserEntity admin = userService.getUser(username);
        Set<RoleEntity> roleSet = userService.getRoles();
        if (roleSet != null) {
            //获取角色权限
            Set<String> roles = new HashSet<>();
            Set<String> permissionList = new HashSet<>();
            for (RoleEntity role : roleSet) {
                roles.add(role.getName());

                //封装到验证信息
                Set<PermissionEntity> permissions = userService.getPermissions();
                for (PermissionEntity permission : permissions) {
                    permissionList.add(permission.getName());
                }
            }

            SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
            authorizationInfo.setRoles(roles);
            authorizationInfo.setStringPermissions(permissionList);
            return authorizationInfo;
        }
        return null;
    }

    /**
     * 用户登录使用
     *
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        // 获取基于用户名和密码的令牌：实际上这个authcToken是从LoginController里面currentUser.login(token)传过来的
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        UserEntity user = userService.selectByLoginName(token.getUsername());

        if (user == null || user.getEmailIsActive().equals(UserStatusEnum.NONACTIVATED.getValue())) {
            throw new UnknownAccountException();// 没找到帐号或者邮箱未被激活
        }

        if (UserStatusEnum.FREEZE.getValue().equals(user.getStatus())) {
            throw new DisabledAccountException();// 校验用户状态
        }
        // 认证缓存信息
        return new SimpleAuthenticationInfo(user,
                user.getPassword(),
                ByteSource.Util.bytes(user.getCredentialsSalt()),
                getName());
    }
}
