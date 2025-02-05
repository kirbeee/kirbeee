---
title: MQ (Message 队列)
---

# MQ (Message 队列)

- SQS, SNS 是“云原生”服务: AWS 的专有协议
- 在校内运行trom 的伊拉克应用程序可以使用开放协议，如：MQTT、AMQP、STOMP、Openwire、WSS
- 当迁移到云端时，我们可以使用亚马逊MQ，而不是重新设计使用 SQS 和 SNS的应用程序
- Amazon MQ 是RabbitMQ 和 ActiveMQ 的管理消息经纪服务
- Amazon MQ 不像SOS / SNS 那样“缩放”
- Amazon MQ在服务器上运行，可以在多AZ中运行，失败过
- Amazon MQ 具有队列功能 (~SQS) 和主题功能 (~SNSS)
