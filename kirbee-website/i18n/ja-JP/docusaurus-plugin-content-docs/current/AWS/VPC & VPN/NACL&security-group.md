---
title: ネットワーク ACL (NACL) & セキュリティ グループ
---

![Network ACL (NACL) & Security Groups](./NACL.png)

# ネットワーク ACL (NACL)

- ファイアウォールでトラフィックを制御する
- 許可ルールとDENYルールを持つことができます。
- サブネットレベルにアタッチされています
- ルールはIPアドレスのみを含みます

# セキュリティグループ

- EC2インスタンスとの間のトラフィックを制御するファイアウォール
- 許可ルールのみを持つことができます
- 規則にはIPアドレスやその他のセキュリティグループが含まれます

# ネットワーク ACL (NACL) vs セキュリティ グループ

![Network ACL (NACL) vs Security Groups](./NACL-compare.png)
