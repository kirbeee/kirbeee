---
title: CloudWatchアラーム
---

# CloudWatchアラーム

- アラームは、任意のメトリックの通知をトリガーするために使用されます
- アラームアクション...
  - 自動スケーリング: EC2 インスタンスの「望ましい」カウントを増減する
  - EC2アクション：EC2インスタンスの停止、終了、再起動、回復
  - SNS通知：SNSトピックに通知を送る
- さまざまなオプション (サンプリング、%、Max、minなど)
- アラームを評価する期間を選択できます。
- 例: CloudWatch Billing metric に請求アラームを作成する
- Alarm States: OK. INSUFFICENT_DATA, ALARM
