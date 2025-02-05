---
title: 兰巴达
author: kirbee
---

# Lambda诉EC2

兰巴达：

- 虚拟函数 - 没有服务器管理！
- 受时间限制――短期执行
- 按需运行
- 自动缩放！

---

EC2:

- 云端虚拟服务器
- 有限的 RAM 和 CPU
- 持续运行
- 缩放意味着干预添加/移除服务器

# 兰巴达的福利

- 轻松定价：
  - 支付每个请求和计算时间
  - 1 000 000 AWS Lambda免费请求和 400 000英镑计算时间
- 与整个AWS服务套件集成
- 事件驱动：在需要时被AWS调用的函数
- 与许多编程语言集成
- 通过AWS 云监视进行轻松监测
- 每个函数轻松获取更多资源 (最多 I0GB 的 RAM !)
- 增加内存也会改进 CPU 和网络！

# 支持AWS Lambda语言

- Node.js (JavaScript)
- Python
- Java
- C# (NET Core) / Powershell
- 鲁比文
- 自定义 Runtime API (支持社区，例如Rust 或 Golang)
- Lambda Container 图像
- 容器图像必须实现 Lambda Runtime API
- ECS / Fargate更喜欢运行任意Docker图像

# AWS Lambda Pricing

- 每次通话支付费用：
  - 前 1 000 000个请求是免费的
  - 其后每100万美元的申请0.20美元（每项请求0.00002美元）
- 每持续时间：(增加1毫秒)
  - 每月400 000英镑的计算时间（如果免费）
  - \== 400,000 seconds if function is IGB RAM
    -== 3,200,000 seconds if function is 128 MB RAM
  - 此后每600 000英镑秒1美元后
- 运行AWS Lambda通常非常便宜，所以很受青睐。
