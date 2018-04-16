/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-15 22:49:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL DEFAULT 'img/null.jpg',
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` varchar(11) NOT NULL DEFAULT '1',
  `imgs` varchar(255) DEFAULT 'img/null.jpg',
  `details_img` varchar(255) DEFAULT NULL,
  `add_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/list1.jpg', '荷兰青啤梨', '24.90', '4个', '../img/c1.png', '../img/list1.jpg,../img/list6.jpg', '2018-04-12 20:17:43');
INSERT INTO `goods` VALUES ('2', '../img/list2.jpg', '越南火龙果', '39.90', '2.5kg', '../img/c1.png', '../img/list2.jpg,../img/list6.jpg', '2018-04-12 20:16:56');
INSERT INTO `goods` VALUES ('3', '../img/list3.jpg', '越南火龙果', '19.80', '1kg', '../img/c1.png', '../img/list3.jpg,../img/list8.jpg', '2018-04-12 20:18:03');
INSERT INTO `goods` VALUES ('4', '../img/04.jpg', '深情厚意水果礼篮', '580.00', '1盒', '../img/c1.png', '../img/04.jpg,../img/list6.jpg', '2018-04-14 10:45:41');
INSERT INTO `goods` VALUES ('5', '../img/list5.jpg', '美国华盛顿甜脆红地厘蛇果', '99.00', '20个', '../img/c1.png', '../img/list5.jpg,../img/list6.jpg', '2018-04-14 11:35:05');
INSERT INTO `goods` VALUES ('6', '../img/31.jpg', '越南红心火龙果', '49.90', '1kg', '../img/c1.png', '../img/31.jpg,../img/list9.jpg', '2018-04-14 11:42:09');
INSERT INTO `goods` VALUES ('7', '../img/list7.jpg', '越南红心火龙果', '98.00', '2.5kg', '../img/c1.png', '../img/list7.jpg,../img/list4.jpg', '2018-04-12 20:17:28');
INSERT INTO `goods` VALUES ('8', '../img/41.jpg', '老味香肠双享装', '52.80', '500g', '../img/c1.png', '../img/41,../img/list4.jpg', '2018-04-14 11:23:31');
INSERT INTO `goods` VALUES ('9', '../img/13.jpg', '诚心诚意礼盒提货券', '178.00', '1张', '../img/c1.png', '../img/13.jpg,../img/list4.jpg', '2018-04-14 10:51:31');
INSERT INTO `goods` VALUES ('10', '../img/34.jpg', '进口香蕉', '16.90', '6根', '../img/c1.png', '../img/34.jpg,../img/list1.jpg', '2018-04-14 11:43:12');
INSERT INTO `goods` VALUES ('11', '../img/list11.jpg', '进口帝皇香蕉', '35.80', '1kg', '../img/c1.png', '../img/list11.jpg,../img/list5.jpg', '2018-04-12 20:19:08');
INSERT INTO `goods` VALUES ('12', '../img/16.jpg', '澳大利亚无籽红提', '49.80', '1kg', '../img/c1.png', '../img/16.jpg,../img/list4.jpg', '2018-04-14 11:01:50');
INSERT INTO `goods` VALUES ('13', '../img/list13.jpg', '海南小台农芒果', '29.90', '1kg', '../img/c1.png', '../img/list13.jpg,../img/list4.jpg', '2018-04-12 20:19:19');
INSERT INTO `goods` VALUES ('14', '../img/15.jpg', '静宁富士苹果', '59.80', '2.5kg', '../img/c1.png', '../img/15.jpg,../img/list10.jpg', '2018-04-14 10:56:08');
INSERT INTO `goods` VALUES ('15', '../img/17.jpg', '泰国龙眼', '68.00', '2kg', '../img/c1.png', '../img/17.jpg,../img/list6.jpg', '2018-04-14 10:58:52');
INSERT INTO `goods` VALUES ('16', '../img/list16.jpg', '真心祝福水果礼篮', '358.00', '礼篮', '../img/c1.png', '../img/list16.jpg,../img/list6.jpg', '2018-04-14 11:31:40');
INSERT INTO `goods` VALUES ('17', '../img/43.jpg', '山东黄心大土豆', '3.90', '500g', '../img/c1.png', '../img/43.jpg,../img/list6.jpg', '2018-04-14 11:24:44');
INSERT INTO `goods` VALUES ('18', '../img/list18.jpg', '欢乐时光水果礼篮', '188.00', '1份', '../img/c1.png', '../img/list18.jpg,../img/list6.jpg', '2018-04-12 20:20:56');
INSERT INTO `goods` VALUES ('19', '../img/list19.jpg', '优选美国红玫瑰苹果礼盒', '168.00', '15个', '../img/c1.png', '../img/list19.jpg,../img/list16.jpg', '2018-04-12 20:21:18');
INSERT INTO `goods` VALUES ('20', '../img/list20.jpg', '低糖礼盒', '218.00', '1盒', '../img/c1.png', '../img/list20.jpg,../img/list15.jpg', '2018-04-12 20:21:32');
INSERT INTO `goods` VALUES ('21', '../img/list21.jpg', '关怀备至礼盒', '198.00', '1盒', '../img/c1.png', '../img/list21.jpg,../img/list1.jpg', '2018-04-12 20:21:56');
INSERT INTO `goods` VALUES ('22', '../img/09.jpg', '心悦水果果干礼盒', '188.00', '1盒', '../img/c1.png', '../img/09.jpg,../img/list20.jpg', '2018-04-14 10:51:53');
INSERT INTO `goods` VALUES ('23', '../img/list23.jpg', '万事如意礼盒', '198.00', '1盒', '../img/c1.png', '../img/list23.jpg,../img/list1.jpg', '2018-04-12 20:22:23');
INSERT INTO `goods` VALUES ('24', '../img/list24.jpg', '自然养【沁心】礼盒', '368.00', '1盒', '../img/c1.png', '../img/list24.jpg,../img/list18.jpg', '2018-04-12 20:22:42');
INSERT INTO `goods` VALUES ('25', '../img/list25.jpg', '低糖营养鲜果礼盒', '168.00', '1盒', '../img/c1.png', '../img/list25.jpg,../img/list35.jpg', '2018-04-12 20:23:00');
INSERT INTO `goods` VALUES ('26', '../img/10.jpg', '与众不同礼盒', '288.00', '1盒', '../img/c1.png', '../img10.jpg,../img/list19.jpg', '2018-04-14 11:28:42');
INSERT INTO `goods` VALUES ('27', '../img/40.jpg', '崇明生态鸽', '39.80', '300g', '../img/c1.png', '../img/40.jpg,../img/list20.jpg', '2018-04-14 11:22:12');
INSERT INTO `goods` VALUES ('28', '../img/18.jpg', '四川耙耙柑', '69.00', '2kg', '../img/c1.png', '../img/18.jpg,../img/list23.jpg', '2018-04-14 10:59:42');
INSERT INTO `goods` VALUES ('29', '../img/14.jpg', '爱的回报礼盒提货券', '188.00', '1张', '../img/c1.png', '../img/14.jpg,../img/list21.jpg', '2018-04-14 10:53:58');
INSERT INTO `goods` VALUES ('30', '../img/list30.jpg', '窈窕俏佳人套餐', '99.00', '1份', '../img/c1.png', '../img/list30.jpg,../img/list15.jpg', '2018-04-12 20:24:23');
INSERT INTO `goods` VALUES ('31', '../img/list31.jpg', '新奇士美国美人柑', '69.90', '12个', '../img/c1.png', '../img/list31.jpg,../img/list6.jpg', '2018-04-12 20:24:41');
INSERT INTO `goods` VALUES ('32', '../img/list32.jpg', '新奇士美国美人柑', '39.90', '6个', '../img/c1.png', '../img/list32.jpg,../img/list16.jpg', '2018-04-12 20:24:48');
INSERT INTO `goods` VALUES ('33', '../img/06.jpg', '天天果园100元充值卡', '100.00', '1张', '../img/c1.png', '../img/06.jpg,../img/list12.jpg', '2018-04-14 11:01:19');
INSERT INTO `goods` VALUES ('34', '../img/list34.jpg', '天天果园300元充值卡', '300.00', '1张', '../img/c1.png', '../img/list34.jpg,../img/list19.jpg', '2018-04-12 20:25:37');
INSERT INTO `goods` VALUES ('35', '../img/05.jpg', '天天果园500元充值卡', '500.00', '1张', '../img/c1.png', '../img/05.jpg,../img/list6.jpg', '2018-04-14 11:27:09');
INSERT INTO `goods` VALUES ('36', '../img/20.jpg', '新奇士美国柠檬', '45.80', '8个', '../img/c1.png', '../img/20.jpg,../img/18.jpg', '2018-04-14 11:44:52');
INSERT INTO `goods` VALUES ('37', '../img/22.jpg', '新西兰长寿鱼(冻橙鲷鱼)', '138.00', '700-1000g', '../img/c1.png', '../img/22.jpg,../img/list16.jpg', '2018-04-14 11:44:55');
INSERT INTO `goods` VALUES ('38', '../img/21.jpg', '明治高温杀菌乳', '22.80', '950ml', '../img/c1.png', '../img/21.jpg,../img/6.jpg', '2018-04-14 11:44:56');
INSERT INTO `goods` VALUES ('39', '../img/23.jpg', '厄瓜多尔白虾', '198.00', '2000g', '../img/c1.png', '../img/23.jpg,../img/12.jpg', '2018-04-14 11:45:00');
INSERT INTO `goods` VALUES ('40', '../img/24.jpg', '有机老母鸡', '158.00', '1kg', '../img/c1.png', '../img/24.jpg,../img/16.jpg', '2018-04-14 11:45:05');
INSERT INTO `goods` VALUES ('41', '../img/25.jpg', '美早樱桃（巨无霸）', '138.00', '500g', '../img/c1.png', '../img/25.jpg,../img/9.jpg', '2018-04-14 11:45:12');
INSERT INTO `goods` VALUES ('42', '../img/28.jpg', '秋月梨', '25.90', '1.5kg', '../img/c1.png', '../img/28.jpg,../img/20.jpg', '2018-04-14 11:45:17');
INSERT INTO `goods` VALUES ('43', '../img/30.jpg', '卡萨布兰卡蜜桔', '29.80', '1kg', '../img/c1.png', '../img/30.jpg,../img/39.jpg', '2018-04-14 11:45:25');
INSERT INTO `goods` VALUES ('44', '../img/32.jpg', '四川枇杷', '39.90', '500g', '../img/c1.png', '../img/32.jpg,../img/30.jpg', '2018-04-14 11:45:31');
INSERT INTO `goods` VALUES ('45', '../img/33.jpg', '美国佛罗里达葡萄柚', '39.90', '6个', '../img/c1.png', '../img/33.jpg,../img/36.jpg', '2018-04-14 11:45:39');
INSERT INTO `goods` VALUES ('46', '../img/35.jpg', '金华芋艿', '8.90', '300g', '../img/c1.png', '../img/35.jpg,../img/30.jpg', '2018-04-14 11:45:45');
INSERT INTO `goods` VALUES ('47', '../img/36.jpg', '泰森鸡琵琶腿', '9.90', '220g', '../img/c1.png', '../img/36.jpg,../img/5.jpg', '2018-04-14 11:45:52');
INSERT INTO `goods` VALUES ('48', '../img/37.jpg', '鲜曝大黄鱼（送调料包）', '59.00', '270g', '../img/c1.png', '../img/37.jpg,../img/9.jpg', '2018-04-14 11:46:00');
INSERT INTO `goods` VALUES ('49', '../img/38.jpg', '新西兰进口小南瓜', '29.80', '1.1kg', '../img/c1.png', '../img/38.jpg,../img/10.jpg', '2018-04-14 11:46:13');
INSERT INTO `goods` VALUES ('50', '../img/39.jpg', '湾仔三鲜水饺', '28.80', '720g', '../img/c1.png', '../img/39.jpg,../img/14.jpg', '2018-04-14 11:46:15');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('16', '13812345678', 'e10adc3949ba59abbe56e057f20f883e', null, '2018-04-10 14:00:37');
INSERT INTO `user` VALUES ('15', '13711111111', '96e79218965eb72c92a549dd5a330112', null, '2018-04-10 13:26:25');
INSERT INTO `user` VALUES ('14', '13411111111', '96e79218965eb72c92a549dd5a330112', null, '2018-04-10 13:24:25');
INSERT INTO `user` VALUES ('13', '13511111111', 'b0baee9d279d34fa1dfd71aadb908c3f', null, '2018-04-10 13:23:21');
INSERT INTO `user` VALUES ('17', '13612341234', '25f9e794323b453885f5181f1b624d0b', null, '2018-04-10 14:01:54');
SET FOREIGN_KEY_CHECKS=1;
