---
title: 云监视报警
---

# 云监视报警

- 警报用于触发任何度量的通知
- 闹钟动作...
  - 自动缩放：增加或减少 EC2 实例“需要”计数
  - EC2 操作：停止、终止、重启或恢复 EC2 实例
  - SNS 通知：发送通知到 SNS 主题
- 各种选项 (采样, %, 最大, 最小, 等...)
- 可以选择对报警进行评估的时间段
- 示例：在 CloudWatch 计费公式上创建计费提醒
- Alarm States: OK. INSUFFICIENT_DATA, ALARM
