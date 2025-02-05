---
title: CloudFront
---

# クラウドフロントの概要

- コンテンツ配信ネットワーク (CDN)
- 読み取りパフォーマンスを向上させ、エッジでコンテンツがキャッシュされます。
- ユーザーエクスペリエンスを改善
- 216ポイントオブプレゼンス（エッジ位置）
- DDoS保護 (世界規模のため)、Shield、AWS Webアプリケーションファイアウォールとの統合

# 起源

## S3 bucket

- ファイルを配布し、エッジでそれらをキャッシュするために
- CloudFront Origin Access Control (OAC) によるセキュリティ強化
- OAC がOrigin Access Identity (OAl) を置き換えています
- CloudFrontはイングレスとして使用することができます (S3にファイルをアップロードする)

## カスタムオリジン（HTTP）

- アプリケーションロードバランサー
- EC2 instance
- S3 ウェブサイト（静的S3ウェブサイトとしてバケットを有効にする必要があります）
- 任意のHTTPバックエンドを使用する

# 高レベルのCloudfront

![CloudFront](./Cloudfront-high-level.png)

- 例:
  ![CloudFront](./Cloudfront-example.png)

# Cloudfront vs. S3 Cross Region Replication

## CloudFront:

- グローバルエッジネットワーク
- ファイルは TTL (多分1日) のキャッシュされます
- どこでも利用可能な静的コンテンツに最適です

## S3 Cross Region 複製:

- レプリケーションを実行したいリージョンごとに設定する必要があります
- ファイルはほぼリアルタイムで更新されます
- 読み取り専用
- 低遅延で利用できる必要がある動的なコンテンツに最適です
