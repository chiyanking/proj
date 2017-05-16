package com.wtk.model;

/**
 * Created by kingdom on 2017/5/12.
 */
public class UserEntity {

    Integer id;

    String code;


    String name;


    String password;
    /**
     * 用户状态
     */
    Integer status;

    /**
     * 加密密码的盐
     */
    private String salt;

    String email;

    String phone;


    public Integer getEmailIsActive() {
        return status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * 证书凭证
     */
    public String getCredentialsSalt() {
        if (code != null && salt != null) {
            return code + salt;
        }
        return null;
    }
}
