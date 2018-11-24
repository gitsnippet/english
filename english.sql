CREATE database `english`;
use  `english`;
CREATE TABLE `english` (
      `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
      `date` date NOT NULL COMMENT '日期',
      `content` varchar(50) NOT NULL COMMENT '内容或标题',
      `type` varchar(8) NOT NULL COMMENT 'word or phrase or sentence or grammar or reading',
      `meaning` varchar(500) NOT NULL COMMENT '含义或全文',
      `source` varchar(500) NOT NULL COMMENT '来源或url',
      UNIQUE KEY  (`content`,`type`),
      PRIMARY KEY (`id`)) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
