---
title: ラムダ
author: kirbee
---

# Lambda vs EC2

Lambda:

- 仮想機能 - 管理するサーバーがありません!
- 時間ごとに制限されている - 短い実行
- オンデマンドで実行
- スケーリングが自動化されました！

---

EC2:

- クラウド上の仮想サーバー
- RAMとCPUによって制限
- 連続実行
- スケーリングとは、サーバーを追加/削除するための介入を意味します

# ラムダの利点

- 簡単な価格:
  - リクエストと計算時間ごとに支払う
  - 1,000,000 AWS Lambda リクエストと 400,000 GBの無料Tier
- AWSサービススイート全体と統合
- イベント駆動: 必要に応じて関数がAWSによって呼び出されます
- 多くのプログラミング言語と統合
- AWS Cloud Watch で簡単に監視
- 1つの機能につき、より多くのリソースを簡単に取得できます(最大I0GBのRAM!)
- RAMを増やすことでCPUとネットワークも改善されます！

# AWS Lambda がサポートしている言語

- Node.js (JavaScript)
- Python
- Java
- C# (NET Core) / Powershell
- ルビー（ルビー）
- Custom Runtime API (community supported, example Rust or Golang)
- Lambda Container Image
- コンテナイメージはLambda Runtime APIを実装する必要があります
- ECS / Fargate は、任意の Docker イメージを実行するのに適しています。

# AWS Lambda Pricing

- 通話ごとに支払う：
  - 最初の1,000,000リクエストは無料です
  - $0.20/| その後100万件のリクエストがあります(リクエストごとに0.0000002ドル)
- 期間ごとの支払い: (1 ミリ秒単位で)
  - 無料であれば月額400,000GB秒の計算時間
  - \== 400,000 秒の場合、関数が IGB RAM
    -== 3,200,000 秒の場合、関数が 128 MB RAM
  - その後、600,000GB秒間$1.00
- AWS Lambda を実行するのは通常非常に安いのでとても人気があります。
