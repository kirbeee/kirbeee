---
title: AMI
author: Kirbee
---

# AMI (Amazon Machine Image)

- AMI 是一个 EC2 实例的自定义
  - 您添加了您自己的软件、配置、操作系统、监视...
  - 更快的启动/配置时间，因为您的所有软件都是预先打包的
- AMI 是为特定区域构建的(可以在不同区域复制)
- 您可以启动 EC2 实例：
  - A Public AMI：AWS 提供
  - 你自己的 AMI: 你自己制作和维护自己的
  - AWS Marketplace AMl: AMI 其他人制作(可能出售)

## AMI 进程 (从 EC2 实例)

- 启动 EC2 实例并自定义它
- 停止实例 (数据完整性)
- 生成 AMI - 这也将创建 EBS 快照
- 从其他AMI启动实例
