---
title: EventBridge
---

# EventBridge

- スケジュール: Cron ジョブ (スケジュール済みスクリプト)
  ![EventBridge](./EventBridge1.png)
- Event Pattern:
  ![EventBridge](./EventBridge2.png) を行うサービスに反応するイベントルール
- Lambda関数をトリガーし、SQS/SNSメッセージを送信...

例:
![EventBridge](./EventBridge3.png)
----------------------------------

![EventBridge](./EventBridge4.png)

- スキーマレジストリ: モデルイベントスキーマ
- イベントバスに送信されたイベント(すべて/フィルタ)をアーカイブすることができます(無期限または設定期間)
- アーカイブされたイベントを再生する能力
