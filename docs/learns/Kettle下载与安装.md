---
title: 📃 Kettle下载与安装教程【保姆版】
date: 2020-02-04 12:19:00
permalink: /pages/114158caa9e96df0
categories:
  - 《Vue》笔记
  - 基础
tags:
  - Vue
  - Vue3
  - 安装
  - 教程
author:
  name: lucky mouse
  link: https://github.com/lucky-mouse-14
---

# Kettle下载与安装教程【保姆版】

## Kettle 简介

- Kettle 最早是一个开源的ETL（Extract-Transform-Load的缩写）工具，全称为KDE Extraction, Transportation, Transformation and Loading Environment。后来Kettle重命名为Pentaho Data Integration 。
- 它由Java开发，支持跨平台运行，其特性包括：支持100%无编码、拖拽方式开发ETL数据管道；可对接包括传统数据库、文件、大数据平台、接口、流数据等数据源；支持ETL数据管道加入机器学习算法。
- Kettle是一个实现ETL开发的一款开发工具，Spoon是Kettle工具提供的图形化界面。



## 主要功能

- Pentaho Data Integration作为一个端对端的数据集成平台，可以对多种数据源进行抽取(Extraction)、加载（Loading）、数据落湖（Data Lake Injection）、对数据进行各种清洗（Cleasing）、转换（Transformation）、混合（Blending），并支持多维联机分析处理（OLAP）和数据挖掘（Data mining）。



## 运行环境

- Pentaho Data Integration服务器端支持：Windows Server, CentOS, RHEL, Ubuntu
- Pentaho Data Integration开发客户端（Spoon）支持：Windows, Ubuntu Desktop, MacOS
- Pentaho User Console（浏览器端）支持：Internet Explorer, Chrome, Firefox, Safari, Edge


## Kettle 下载

### 下载地址

- Kettle是一款免安装软件，下载后即可直接运行。下载地址：[官网](https://sourceforge.net/projects/pentaho/files/)
- 国内节点下载可能会失败，也可以从我分享的百度云下载（版本是9.3）<br>
  链接地址：[百度云](https://pan.baidu.com/s/1KH0zop23slRajkxI9hmstQ) 提取码：qwer
- 下载后解压文件即可

### 运行Kettle

- 因为Kettle是纯java编写，所以启动前要先**预装JDK并配置环境变量**。
- Windows下双击Spoon.bat文件运行Kettle，打开spoon图形工具。
- 在Linux、AppleOSX、Solaris平台上，双击Spoon.sh运行。

<div align="center"><img src="https://pic.rmb.bdstatic.com/bjh/b2ad9702abb9c59752378944e23ea0af.png"></div>

- 当出现下图所示界面，则说明启动成功。

<div align="center"><img src="https://pic.rmb.bdstatic.com/bjh/7ec0c87499985341fc84ef86244eebd8.png"></div>

### 导入数据库驱动 jar 包

看你需要连接说明数据库，就将对应数据库的驱动 jar 包放到 `xxx\pdi-ce-7.1.0.0-12\data-integration\lib` 目录下，然后重启工具即可。

<details>
<summary>Mysql</summary>
<a href="https://dev.mysql.com/downloads/connector/j/">官网下载地址</a>
<img src="https://pic.rmb.bdstatic.com/bjh/6490e8d2be5d3999ef8eef0c8bf98c91.png">
</details>

<details>
<summary>Sql Server</summary>
<a href="https://learn.microsoft.com/en-us/sql/connect/jdbc/release-notes-for-the-jdbc-driver?view=sql-server-ver15#112">官网下载地址</a>
<img src="https://pic.rmb.bdstatic.com/bjh/101f0542bb3dc6ae9d7ac54691ee4cec.png">
</details>