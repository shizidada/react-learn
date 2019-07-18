CREATE TABLE IF NOT EXISTS `t_account` (
  `u_id` VARCHAR(32) NOT NULL COMMENT "用户ID",
  `username` VARCHAR(50) NOT NULL default "" COMMENT "用户名",
  `phone` VARCHAR(11) NOT NULL default "" COMMENT "手机号码",
  `source` VARCHAR(1) NOT NULL default "" COMMENT "来源",
  `create_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  `update_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  PRIMARY KEY `pk_u_id`(`u_id`)
) ENGINE=InnoDB charset="utf8" COMMENT "用户表";


CREATE TABLE IF NOT EXISTS `t_password` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `u_id` VARCHAR(32) NOT NULL COMMENT "用户ID",
  `password` VARCHAR(50) NOT NULL default "" COMMENT "用户密码",
  `create_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  `update_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  PRIMARY KEY `pk_id`(`id`),
  CONSTRAINT `fk_ap` FOREIGN KEY (`u_id`) REFERENCES `t_account` (`u_id`)
) ENGINE=InnoDB charset="utf8" COMMENT "用户密码表";

CREATE TABLE IF NOT EXISTS `t_goods` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `g_name` VARCHAR(255) NOT NULL COMMENT '商品名称',
  `create_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  `update_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  PRIMARY KEY `pk_id`(`id`)
) ENGINE = InnoDB COMMENT "商品表";

CREATE TABLE IF NOT EXISTS `t_category` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '分类ID',
  `c_name` VARCHAR(255) NOT NULL COMMENT '分类名称',
  `create_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  `update_date` timestamp NOT NULL default "0000-00-00 00:00:00",
  PRIMARY KEY `pk_id`(`id`)
) ENGINE = InnoDB COMMENT "分类表";

CREATE TABLE IF NOT EXISTS `t_goods_category_rel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `c_id` INT NOT NULL,
  `g_id` INT NOT NULL,
  PRIMARY KEY `pk_id`(`id`),
  CONSTRAINT FOREIGN KEY (`g_id`) REFERENCES `t_goods` (`id`),
  CONSTRAINT FOREIGN KEY (`c_id`) REFERENCES `t_category` (`id`)
) ENGINE = InnoDB COMMENT "商品分类关系表";

ALTER TABLE `t_goods_category_rel` ADD CONSTRAINT `FK_GID` FOREIGN KEY (`g_id`) REFERENCES `t_goods` (`id`);

ALTER TABLE `t_goods_category_rel` ADD CONSTRAINT `FK_CID` FOREIGN KEY (`c_id`) REFERENCES `t_category` (`id`);





