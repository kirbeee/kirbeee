---
title: 一括処理
---

# AWS Batch

- 任意の規模で完全管理されたバッチ処理
- AWS上で10万個のバッチジョブを効率的に実行する
- 「バッチ」ジョブは開始と終了を伴うジョブです (継続的とは対照的に)
- バッチはEC2インスタンスまたはスポットインスタンスを動的に起動します
- AWS Batch provises the right amount of compute / memory
- あなたはバッチジョブを送信またはスケジュールし、AWS Batch は残りを行います!
- バッチジョブはDockerイメージとして定義され、ECSで実行されます
- コスト最適化に役立ち、インフラに焦点を当てません

# 例: バッチジョブの実行

![Batch](./Batch-example.png)

# AWS Batch vs Lambda

## AWS Batch

- 時間制限なし
- Docker イメージとしてパッケージされている限り、ランタイムはすべて
- EBS / instance store for disk space
- EC2上のRelies（AWSで管理可能）

## ラムダ

- 15分制限時間
- ランタイム制限
- ディスク容量制限
- サーバーレス
