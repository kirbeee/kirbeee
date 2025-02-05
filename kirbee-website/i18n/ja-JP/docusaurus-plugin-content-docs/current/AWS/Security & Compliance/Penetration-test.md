---
title: 貫通テスト
---

# 貫通テスト

- AWSのお客様は、8つのサービスの事前承認なしに、AWSインフラストラクチャに対するセキュリティアセスメントや侵入テストを行うことができます。
  - Amazon EC2インスタンス、NATゲートウェイ、弾性ロードバランサー
  - Amazon RDS
  - Amazon CloudFront
  - Amazon Aurora
  - Amazon APIゲートウェイ
  - AWS Lambda と Lambda Edge 関数
  - Amazon Lightseel リソース
  - Amazon Elastic Beanstalk環境

## 禁止された活動

- アマゾンルート53ホストゾーン経由で歩いている DNS ゾーン
- サービス拒否 (DoS), 分散型サービス拒否 (DDoS), シミュレートされたDoS, Simulated DDoS
- 港の洪水
- プロトコルの洪水について
- リクエストの洪水（ログイン要求の洪水、APL要求の洪水）
