---
title: S3 Snowball
---

# はじめに

- エッジでデータを収集・処理し、AWSとの間でデータを移行する高度にセキュアなポータブルデバイス
- ペタバイトのデータへの移行に役立ちます

# エッジコンピューティングで使用

- エッジの位置に作成中にデータを処理する
- 道路上のトラック、海に浮かぶ船、地下の鉱山ステーション...
- これらの場所にはインターネットが限られており、コンピューティングパワーにアクセスできない場合があります
- エッジコンピューティングを行うためにSnowball Edgeデバイスをセットアップします
- Snowball Edge Compute Optimized (そのユースケース専用) & Storage Optimized
- エッジで EC2 インスタンスまたは Lambda 関数を実行する
- 使用事例：データ前処理、機械学習、トランスコーディングメディア

# Snowball Pricing

- デバイスの使用料とAWSからのデータ転送料を支払います
- Amazon S3へのデータ転送は1GBあたり$ 0.00です
- オンデマンド
  - ジョブごとの1回限りのサービス料金が含まれています。
    - Snowball Edgeストレージに10日間の使用が最適化された 80TB
    - Snowballエッジストレージに15日間の使用が最適化されました 210TB
  - 配送日は含まれている10または15日にカウントされません
  - 追加日数を1日あたりに支払う
- 前面コミット済み
  - 月額、I年間、および3年間の利用を前払い(エッジコンピューティング)
  - 最大62%の割引価格
