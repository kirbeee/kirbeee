---
title: MQ (Message Queue)
---
# MQ (Message Queue)
- SQS, SNS are "cloud-native" services: proprietary protocols from AWS
- Iraditional applications running trom on-premises may use open protocols such as: MQTT, AMQP, STOMP, Openwire, WSS
- When migrating to the cloud, instead of re-engineering the application to use SQS and SNS, we can use Amazon MQ
- Amazon MQ is a managed message broker service for RabbitMQ and ActiveMQ
- Amazon MQ doesn't "scale" as much as SOS / SNS
- Amazon MQ runs on servers, can run in Multi-AZ with failover
- Amazon MQ has both queue feature (~SQS) and topic features (~SNS)

## High Availability
![img.png](MQ-high-availability.png)