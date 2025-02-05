---
title: データベースの紹介
---

# データベースとAWS共有責任

- AWSは異なるデータベースを管理するために使用します
- 利点は次のとおりです。
- クイックプロビジョニング、高可用性、垂直方向、水平方向のスケール
- 自動バックアップと復元、操作、アップグレード
- オペレーティングシステムのパッチ処理はAWSによって処理されます
- 監視、アラート
- 注:多くのデータベース技術はEC2上で動作する可能性がありますが、回復力、バックアップ、パッチ適用、高可用性、障害許容誤差などを自分で処理する必要があります。

# Summary

- リレーショナルデータベース - OLTP: RDS & Aurora (SQL)
- Multi-AZ, Read Replicas, Multi-Region の違い
- メモリ内データベース: ElastiCache
- Key/Value Database: DynamoDB (serverless) & DAX (DynamoDBのキャッシュ)
- 倉庫 - OLAP: Redshift (SQL)
- Hadoop クラスタ: EMR
- Athena: Amazon S3 (serverless & SQL)のクエリデータ
- QuickSight: データ上のダッシュボード（サーバーレス）
- DocumentDB: "Aurora for MongoDB" USON - NoSQLデータベース)
- Amazon QLDB: 金融取引 Ledger (不変の雑誌、暗号的に検証可能)
- Amazon Managed Blockchain: managed Hyperledger Fabric & Ethereum blockchains
- Glue: Managed ETL (Extract Transform Load) and Data Catalog service
- データベースの移行: DMS
- 海王星: グラフデータベース
- タイムストリーム: 時系列データベース
