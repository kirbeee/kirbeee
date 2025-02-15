---
title: SQS（シンプルなキューサービス）
---

# SQS（シンプルなキューサービス）

![SQS](./SQS.png)

- 最も古いAWSオファリング（10歳以上）
- アプリケーションを分離するために使用される完全に管理されたサービス (~serverless)
- 1 秒あたりのメッセージから 10,000 秒あたりのスケール数
- メッセージのデフォルトの保存期間：4日間、最大14日間。
- キュー内のメッセージ数に制限はありません
- メッセージは、消費者が読み取った後に削除されます
- 低レイテンシ（公開と受信時に&lt;10ミリ秒）
- 消費者は、メッセージとスケールを水平方向に読むために仕事を共有します

# デカップリングアプリケーション

![decoupling](./decoupling-example.png)

# FIFOキュー

![FIFO](./FIFO-queue.png)
