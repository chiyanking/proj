package com.wtk.enums;

/**
 * Created by kingdom on 2017/5/12.
 */
public enum UserStatusEnum {
    NONACTIVATED(1, "未激活"),
    FREEZE(2, "冻结");

    UserStatusEnum(Integer value, String name) {
        this.value = value;
        this.name = name;
    }

    /**
     * 值
     */
    public Integer value;
    /**
     * 名称
     */
    public String name;

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
