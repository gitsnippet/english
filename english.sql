CREATE database `english`;
USE  `english`;
CREATE TABLE `english` (
      `id` INT(6) UNSIGNED  NOT NULL AUTO_INCREMENT,
      `date` DATE NOT NULL COMMENT '日期',
      `type` VARCHAR(8) NOT NULL COMMENT 'word or phrase or sentence or grammar or reading material',
      `content` VARCHAR(50) NOT NULL COMMENT '内容或标题',
      `meaning` VARCHAR(500) NOT NULL COMMENT '含义或全文',
      `source` VARCHAR(500) NOT NULL DEFAULT "dictionary" COMMENT '来源或url',
      UNIQUE KEY  (`content`,`type`),
      PRIMARY KEY (`id`)) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
