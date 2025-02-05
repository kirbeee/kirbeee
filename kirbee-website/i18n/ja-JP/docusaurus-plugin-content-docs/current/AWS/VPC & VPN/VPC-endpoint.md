---
title: VPCとVPNエンドポイント
---

# VPC Endpoint

- エンドポイントを使用すると、パブリックネットワークの代わりにプライベートネットワークを使用して AWS サービスに接続できます
- これにより、AWSサービスにアクセスするためのセキュリティが強化され、レイテンシが低くなります。
- VPC Endpoint Gateway: S3 & DynamoDB
- VPCエンドポイントインターフェース: 残りの
  ![img.png](VPC-endpoint.png)

# プライベートリンク

![img.png](privateLink.png)

- 最も安全でスケーラブルな方法でサービスを数千台のVPCに公開します
- VPCピアリング、インターネットゲートウェイ、NAT、ルートテーブルを必要としません...
- ネットワークロードバランサ(Service VPC)とENI(Customer VPC)が必要です
