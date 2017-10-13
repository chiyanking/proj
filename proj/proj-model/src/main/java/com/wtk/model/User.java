package com.wtk.model;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableLogic;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by kingdom on 2017/5/12.
 */
@TableName("user")
public class User {

    private static final long serialVersionUID = -7338854570264041015L;
    /**
     * 主键ID
     */
    @TableId("id")
    private Long id;
    /**
     * 工号
     */
    private String staffCode;
    /**
     * 网点ID
     */
    private Long pointId;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 真实姓名
     */
    private String realName;
    /**
     * 登陆密码
     */
    private String password;
    /**
     * 手机号
     */
    private String phone;
    /**
     * 职位ID
     */
    private Long positionId;
    /**
     * 身份证号
     */
    private String idCard;
    /**
     * 地址
     */
    private String address;
    /**
     * 入职时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date entryDate;
    /**
     * 离职时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date quitDate;
    /**
     * 创建时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createDate;
    /**
     * 修改时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date modifyDate;
    /**
     * 用户状态
     *
     * @see
     */
    private Integer userStatus;
    /**
     * 是否有效 0,删除 1,正常
     */
    @TableLogic(value = "1", delval = "0")
    private Integer isValid;
    /**
     * 创建人ID
     */
    private Long creatorId;
    /**
     * 创建人
     */
    private String creator;
    /**
     * 修改人ID
     */
    private Long modifierId;
    /**
     * 修改人
     */
    private String modifier;

    /**
     * price
     */

    private BigDecimal price;


    public Long getId() {
        return id;
    }

    public User setId(Long id) {
        this.id = id;
        return this;
    }

    public String getStaffCode() {
        return staffCode;
    }

    public User setStaffCode(String staffCode) {
        this.staffCode = staffCode;
        return this;
    }

    public Long getPointId() {
        return pointId;
    }

    public User setPointId(Long pointId) {
        this.pointId = pointId;
        return this;
    }

    public String getUserName() {
        return userName;
    }

    public User setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getRealName() {
        return realName;
    }

    public User setRealName(String realName) {
        this.realName = realName;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public User setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public Long getPositionId() {
        return positionId;
    }

    public User setPositionId(Long positionId) {
        this.positionId = positionId;
        return this;
    }

    public String getIdCard() {
        return idCard;
    }

    public User setIdCard(String idCard) {
        this.idCard = idCard;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public User setAddress(String address) {
        this.address = address;
        return this;
    }

    public Date getEntryDate() {
        return entryDate;
    }

    public User setEntryDate(Date entryDate) {
        this.entryDate = entryDate;
        return this;
    }

    public Date getQuitDate() {
        return quitDate;
    }

    public User setQuitDate(Date quitDate) {
        this.quitDate = quitDate;
        return this;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public User setCreateDate(Date createDate) {
        this.createDate = createDate;
        return this;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public User setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
        return this;
    }

    public Integer getUserStatus() {
        return userStatus;
    }

    public User setUserStatus(Integer userStatus) {
        this.userStatus = userStatus;
        return this;
    }

    public Integer getIsValid() {
        return isValid;
    }

    public User setIsValid(Integer isValid) {
        this.isValid = isValid;
        return this;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public User setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
        return this;
    }

    public String getCreator() {
        return creator;
    }

    public User setCreator(String creator) {
        this.creator = creator;
        return this;
    }

    public Long getModifierId() {
        return modifierId;
    }

    public User setModifierId(Long modifierId) {
        this.modifierId = modifierId;
        return this;
    }

    public String getModifier() {
        return modifier;
    }

    public User setModifier(String modifier) {
        this.modifier = modifier;
        return this;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public User setPrice(BigDecimal price) {
        this.price = price;
        return this;
    }
}
