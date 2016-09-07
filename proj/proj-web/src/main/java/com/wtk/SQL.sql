
DELIMITER $$
create procedure loadAccountRefAndSign()
begin
declare num int;
declare tempNum int;
declare accNum int;
declare sNum int;
declare pName VARCHAR(50);
DECLARE pAdress VARCHAR(100);
DECLARE pIndustry VARCHAR(20);
declare ctime TIMESTAMP;
declare tempUid VARCHAR(40);
declare tempAccUid VARCHAR(40);
-- 修改点
set num=1;

-- 修改点
while num < 2 DO
select aloneProject.accountNum,aloneProject.signNum,aloneProject.createDate,aloneProject.`name`,aloneProject.address,aloneProject.industry  into accNum,sNum,ctime,pName,pAdress,pIndustry  from aloneProject where aloneProject.id = num;
-- 导入商户到企业用户
set tempUid = UUID();
INSERT INTO organize (organize.id,organize.`name`,organize.address,organize.createDate,organize.modifyDate,organize.source) VALUES (tempUid,pName,pAdress,ctime,ctime,'e签宝+');
set tempAccUid = UUID();
INSERT into account(account.id,account.type,account.`status`,account.createDate,account.modifyDate,account.organizeId,account.projectId,account.source,account.industry) VALUES (tempAccUid,2,9,ctime,ctime,tempUid,num,'e签宝+',pIndustry);
INSERT into account1(account1.id,account1.type,account1.`status`,account1.createDate,account1.modifyDate,account1.organizeId,account1.projectId,account1.source,account1.industry) VALUES (tempAccUid,2,9,ctime,ctime,tempUid,num,'e签宝+',pIndustry);
INSERT INTO `user`(`user`.id,`user`.accountId, `user`.createDate,`user`.modifyDate,`user`.industry,`user`.source) VALUES (UUID(),tempAccUid,ctime,ctime,pIndustry,'e签宝+');
-- 给商户配置用户并签署
IF accNum = 0 THEN
BEGIN
-- 自己签署
set tempNum = 1;
while tempNum < sNum + 1 DO
INSERT INTO signlog(signlog.id,signlog.signDate,signlog.projectId,signlog.accountId,signlog.uid,signlog.idNo,signlog.areacode,signlog.source) VALUES( UUID(),RandomDateTime(ctime,'2016-04-11 11:10:13'),NULL,tempAccUid,tempAccUid,NULL,NULL,'云平台');
set tempNum = tempNum + 1;
END while;
END;
ELSE
BEGIN
-- 关联用户
INSERT INTO accountref(accountid, refaccountid,createDate,modifyDate,accountref.source) select tempAccUid,account.id,account.createDate,account.createDate,'云平台' from account order by rand() limit accNum;

-- 创建签署记录
set tempNum = 1;
while tempNum < sNum + 1 DO
INSERT into signlog(signlog.id,signlog.signDate,signlog.projectId,signlog.accountId,signlog.uid,signlog.source) SELECT UUID(),RandomDateTime(account.createDate,'2016-04-11 11:10:13'),NULL,account.id,tempAccUid,'e签宝+' from accountref left join account on account.id = accountref.refaccountid where accountref.accountid = tempAccUid;
set tempNum = tempNum + accNum;
END while;
END;
END IF;
set num = num+1;
END while;
 end$$
DELIMITER ;