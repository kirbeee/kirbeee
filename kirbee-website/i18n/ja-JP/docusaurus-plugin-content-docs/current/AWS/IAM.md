---
id: iam
title: IAM
slug: /aws/iam
---

# IAM (アイデンティティとアクセス管理)

構造: 役割、グループ、ユーザー

- グローバルサービス
- デフォルトで作成されたルートアカウントは、使用または共有されるべきではありません
- ユーザーは組織内の人物であり、グループ化することができます
- グループにはユーザーのみが含まれており、他のグループは含まれていません
- ユーザーはグループに所属する必要はありません。ユーザーは複数に所属することができます

## アクセス許可

- ユーザーまたはグループはポリシーと呼ばれるJSONドキュメントを割り当てることができます
- これらのポリシーは、ユーザーの権限を定義します
- AWSでは最低権限の原則を適用します。ユーザーが必要とする権限より多くの権限を与えないでください

## ファイル構造

- 構成:
  - バージョン: ポリシー言語のバージョンは、常に "20 12-10-17" を含みます
  - Id: ポリシーの識別子 (オプション)
  - ステートメント：1つ以上の個別のステートメント（必須）
- ステートメントは次のもので構成されています
  - サイド: 文の識別子 (オプション)
  - エフェクト: 文がアクセスを許可または拒否するかどうか (Allow, Deny)
  - 原則: このポリシーが適用されるアカウント/ユーザー/ロール
  - アクション: このポリシーが許可または拒否するアクションのリスト
  - リソース: アクションが適用されるリソースのリスト
  - 条件: このポリシーが有効な場合の条件 (オプション)

```json
{
    "Version": "2012-10-17",
    "id": "iam",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::123456789012:root"
            },
            "Action": "s3:*",
            "Resource": "*"
        }
    ]
}
```

## パスワードポリシー

• Strong passwords = higher security for your account
• In AWS, you can setup a password policy:
• Set a minimum password length
• Require specific character types:
• including uppercase letters
• lowercase letters
• numbers
• non-alphanumeric characters
• Allow all IAM users to change their own passwords
• Require users to change their password after some time (password expiration)
• Prevent password re-use

## MFA (Multi-Factor Authentication)

- ユーザーはアカウントにアクセスでき、設定を変更したり、AWSアカウントのリソースを削除したりすることができます。
- ルートアカウントとIAMユーザーを保護したい
- MFA = あなたが知っているパスワード + あなたが所有するセキュリティデバイス
- MFAは次のようになります:
  - 仮想MFAデバイス
  - ユニバーサル第2ファクター(U2F)セキュリティキー
  - ハードウェアキーFob MFAデバイス
  - AWS GovCloud用ハードウェアキーFob MFAデバイス (US)

## ユーザーはどのようにAWSにアクセスできますか?

- AWSにアクセスするには、次の3つの方法があります。
  - AWS管理コンソール (パスワード + MFAで保護)
  - AWSコマンドラインインターフェース(CLI):アクセスキーで保護
  - AWS Software Developer Kit (SDK) - コード: アクセスで保護

## ロール

• Some AWS service will need to perform actions on your behalf
• To do so, we will assign permissions to AWS services with IAM Roles
• Common roles:
• EC2 Instance Roles
• Lambda Function Roles
• Roles for CloudFormation

## セキュリティツール

- IAM 資格情報レポート
  あなたのアカウントのすべてのユーザーと彼らのさまざまな資格情報のステータスをリストするレポート
- IAM アクセスアドバイザー
  アクセスアドバイザーには、ユーザーに与えられたサービス権限と、それらのサービスが最後にアクセスされた時点が表示されます。
  この情報を使用してポリシーを修正できます。

## IAMの責任を共有

- AWSは
  • インフラストラクチャ (グローバル ネットワーク セキュリティ)
  • 設定と脆弱性分析
  • コンプライアンス検証

- You are responsible for:
  • Users, Groups, Roles, Policies management and monitoring
  • Enable MFA on all accounts
  • Rotate all your keys often
  • Use IAM tools to apply appropriate permissions
  • Analyze access patterns & review permissions

## Summary

• Users: mapped to a physical user, has a password for AWS Console
• Groups: contains users only
• Policies: JSON document that outlines permissions for users or groups
• Roles: for EC2 instances or AWS services
• Security: MFA + Password Policy
• AWS CLI: manage your AWS services using the command-line
• AWS SDK: manage your AWS services using a programming language
• Access Keys: access AWS using the CLI or SDK
• Audit: IAM Credential Reports & IAM Access Advisor
