---
title: 云监控简介
---

# 云监视图示概述

- CloudWatch 为AWS中的每个服务提供指标
- Metric 是一个可监视变量(CPUUUUtilization, Networkn...)
- 计量有时间戳
- 可以创建 CloudWatch 仪表板

# 重要指标

- EC2 实例： CPU 利用、状态检查、 网络 (而不是内存)
  - 每5分钟的默认指标
  - 详细监控选项($)：每隔一个 | 分钟
- EBS 卷：Disk Read/Writes
- S3 buckets: BucketSizeBytes, NumberOfObjects, AllRequest
- 计费：估计总费用 (仅在我们东部地区)
- 服务限制：您使用了多少服务 API
- 自定义度量表：推送您自己的度量

# Summary

- 云监视：
  - 衡量尺度：监测AWS服务的业绩和计费指标
  - 警告：自动发出通知，执行 EC2 操作，基于度量通知到SNS
  - 日志：从 EC2 实例、服务器、 Lambda 函数收集日志文件...
  - 事件 (or EventBridge)：对AWS中的事件作出反应，或在计划表上触发规则
- CloudTrail: 审核您的 AWS 帐户内的 API 来电
- CloudTrail Insights：云跟踪事件自动分析
- X-Ray：跟踪通过您分布的应用程序提出的请求
- AWS 健康仪表板：所有地区AWS 服务的现状
- AWS 帐户健康控制台：AWS 事件影响您的基础结构
- Amazon CodeGuru：自动化代码审查和应用程序性能建议
