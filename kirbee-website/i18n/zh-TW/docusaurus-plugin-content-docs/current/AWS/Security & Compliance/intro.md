---
title: 一. 导言
---

# AWS 共同责任模型

## AWS responsibility - Security of the Cloud

- 保护运行所有AWS服务的基础设施(硬件、软件、设施和网络)
- 已管理的服务，如S3、动态数据库、RDS等。

## 客户责任 - 云端安全

- 就EC2而言，客户负责管理访客操作系统 (包括安全补丁和更新)、防火墙和网络配置，LAM设置
- 加密应用程序数据

## 共享控制：

- 补丁管理、配置管理、提高认识和培训

# root 用户权限

- Root 用户 = 帐户所有者(创建时)
- 拥有完全访问所有AWS服务和资源
- 锁定您的 AWS 帐户根用户访问密钥！
- 不要将根帐户用于日常任务，甚至管理任务
- 只能由根用户执行的动作：
- 更改帐户设置(帐户名称、电子邮件地址、根用户密码、根用户访问密钥)
- 查看某些税务发票
- 关闭您的 AWS 帐户
- 恢复IAM用户权限
- 更改或取消您的 AWS 支持计划
- 注册为保留的实例市场的卖家
- 配置Amazon S3桶以启用 MFA
- 编辑或删除包含无效的 VPC ID 或 VPC 端点ID 的 Amazon S3 桶策略
- 注册 GovCloud

# summary

- AWS上的共同责任
- 护盾：自动DDoS 保护 + 24/7 支持高级版
- WAF：基于规则筛选传入请求的防火墙
- KMS：由AWS管理的加密密钥
- CloudHSM：硬件加密，我们管理加密密钥
- AWS 证书管理器：提供、管理和部署 SSL/TLS 证书
- Artifact: 获取诸如PCI、ISO等合规报告的访问权限...
- 守卫：使用 VPC、DNS 和 CloudTrail 日志查找恶意行为
- 检查员：在EC2、 ECR 图像和 Lambda 函数中发现软件脆弱性
- 网络防火墙：保护VPC 免受网络攻击
- 配置：曲目配置更改和遵守规则
- Macie: 在Amazon S3 bucets查找敏感数据 (例如: PIl 数据)
- 云轨迹：跟踪用户在帐户内进行的 API 呼叫
- AWS Security Hub：从多个AWS账户收集安全结果
- 亚马逊侦测：找出安全问题或可疑活动的根本原因
- AWS Abuse: Report AWS resources used for abuse or illegal purposes
- Root 用户权限：
  - 更改帐户设置
  - 关闭您的 AWS 帐户
  - 更改或取消您的 AWS 支持计划
  - 注册为保留的实例市场的卖家
- IAM 访问分析器：确定外部共享哪些资源
- 防火墙管理器：管理整个组织的安全规则 (WAF，盾牌...)
