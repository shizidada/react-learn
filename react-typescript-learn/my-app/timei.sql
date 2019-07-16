CREATE TABLE IF NOT EXISTS `goods` (
  `g_id` INT NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `g_name` VARCHAR(255) NOT NULL COMMENT '商品名称',
  PRIMARY KEY `pk_id`(`id`)
) ENGINE = InnoDB COMMENT "商品表";

CREATE TABLE IF NOT EXISTS `category` (
  `c_id` INT NOT NULL AUTO_INCREMENT COMMENT '分类ID',
  `c_name` VARCHAR(255) NOT NULL COMMENT '分类名称',
  PRIMARY KEY `pk_id`(`c_id`)
) ENGINE = InnoDB COMMENT "分类表";


CREATE TABLE IF NOT EXISTS `goods_category_rel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `c_id` INT NOT NULL,
  `g_id` INT NOT NULL
  PRIMARY KEY `pk_id`(`id`)
) ENGINE = InnoDB COMMENT "商品分类关系表";


ALTER TABLE `goods_category_rel` ADD CONSTRAINT `FK_GID` 
  FOREIGN KEY (`g_id`)
  REFERENCES `goods` (`g_id`);

ALTER TABLE `goods_category_rel` ADD CONSTRAINT `FK_CID` 
  FOREIGN KEY (`c_id`)
  REFERENCES `category` (`c_id`);





