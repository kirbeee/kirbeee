---
title: MQ (メッセージキュー)
---

# MQ (メッセージキュー)

- SQS、SNSはクラウドネイティブサービス:AWS独自のプロトコル
- trom-オンプレミスで動作するIraditionアプリケーションは、MQTT、AMQP、STOMP、Openwire、WSSなどのオープンプロトコルを使用することができます。
- クラウドに移行する場合は、アプリケーションを再設計してSQSやSNSを使用するのではなく、Amazon MQを使用することができます。
- Amazon MQはRabbitMQとActiveMQのマネージドメッセージブローカーサービスです。
- Amazon MQはSOS/SNSほど「スケール」しません
- Amazon MQはサーバ上で動作し、フェイルオーバーでマルチAZで動作します。
- Amazon MQにはキュー機能(~SQS)とトピック機能(~SNS)の両方があります。
