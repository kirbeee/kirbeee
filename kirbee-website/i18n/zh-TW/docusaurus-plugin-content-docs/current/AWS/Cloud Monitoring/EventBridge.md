---
title: EventBridge
---

# EventBridge

- Schedule: Cron jobs (scheduled scripts)
  ![EventBridge](./EventBridge1.png)
- Event Pattern: Event rules to react to a service doing something
  ![EventBridge](./EventBridge2.png)
- 触发 Lambda 函数，发送 SQS/SNS 消息...

Example:
![EventBridge](./EventBridge3.png)
----------------------------------

![EventBridge](./EventBridge4.png)

- Schema 注册表：模型事件schema
- 您可以存档发送到事件总线的事件 (all/filter) (无限期或设置周期)
- 重新播放存档事件的能力
