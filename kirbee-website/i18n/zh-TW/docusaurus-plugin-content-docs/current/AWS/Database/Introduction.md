---
title: 数据库介绍
---

# AWS数据库和共享责任

- AWS 提供使用来管理不同的数据库
- 福利包括：
- 快速提供、 高可用性、垂直和水平缩放
- 自动备份和还原，操作，升级
- 操作系统修补由AWS处理
- 监测、提醒
- 注意：许多数据库技术可以在 EC2 上运行，但您必须处理自己的复原力、备份、补丁、高度可用性、故障容忍等。

# Summary

- 关系数据库 - OLTP: RDS & Aurora (SQL)
- 多AZ之间的区别，阅读Replicas, Multi-Region
- 内存数据库：ElastiCache
- Key/Value Database：DynamoDB (无服务器)和DAX (动态数据库缓存)
- 仓库-OLAP: Redshift (SQL)
- Hadoop 集群：EMR
- Athena: 查询Amazon S3 (serverless & SQL)
- QuickSight: 您数据上的仪表板 (无服务器)
- DocumentDB: "Aurora for MongoDB" USON - NoSQL database)
- Amazon QLDB: 金融交易分类账(不可变的期刊，可加密)
- 亚马逊管理区块链：管理超量的Fabric & Ethereum 区块链。
- Glue: 管理的 ETL (Extract Transform Load) 和数据目录服务
- 数据库迁移: DMS
- Neptun：图形数据库
- 时间序列数据库
