---
title: Inspector.png
---

# Inspector

![Inspector](./Inspector.png)

- 自動セキュリティテスト
- EC2 インスタンス用
  - AWS System Manager (SSM) エージェントを活用する
  - 意図しないネットワークのアクセシビリティを分析する
  - 既知の脆弱性に対して実行中のOSを分析する
- Amazon ECRにプッシュするコンテナーイメージの場合
  - コンテナーイメージのプッシュ時の評価
- Lambda 関数用
  - 関数コードとパッケージの依存関係でソフトウェアの脆弱性を特定します
  - 配備中の機能の評価
- AWS Security Hubとのレポートと統合
- Amazon Event Bridgeに結果を送信

# Inspectorとは

- 覚えておいてください: EC2 インスタンス、コンテナーイメージと Lambda 関数のみ
- インフラストラクチャを継続的にスキャンする必要がある場合のみ
- パッケージの脆弱性 (EC2, ECR, Lambda) - CVEのデータベース
- ネットワーク到達性(EC2)
- 優先順位付けのためのすべての脆弱性に関連付けられているリスク スコア。
