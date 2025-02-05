---
id: iam
title: IAM
slug: /aws/iam
---

# IAM（身份和准入管理）

结构：角色、组、用户

- 全局服务
- 默认情况下创建的根帐户不应被使用或共享
- 用户是您组织内的人，可以分组
- 群组只包含用户，不包含其他组
- 用户不必属于一个组，用户可以属于多个组

## 权限

- 用户或组可以被分配的 JSON 文档，称为策略
- 这些策略定义用户的权限
- 在 AWS 中，您应用的是最少的特权原则：不给予用户更多的权限

## 文件结构

- 由下列人员组成：
  - 版本：策略语言版本，总是包含 "20 12-10-17"
  - ID：策略的标识符 (可选)
  - 声明：一项或多项单独声明（要求）
- 发言内容包括：
  - Sid：语句的标识符(可选)
  - 效果：声明是否允许或否认访问(Allow, Deny)
  - 主要：此政策适用于的帐户/用户/角色
  - 行动：该政策允许或否认的行动清单
  - 资源：行动所针对的资源列表
  - 条件：此策略生效的条件(可选)

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

## 密码策略

• 强密密码 = 您的帐户
• 在 AWS 中 您可以设置密码策略：
• 设置最低密码长度
• 需要具体的字符类型：
• 包括大写字母
• 小写字母
• 数字
• 非字母数字字符
• 允许所有IAM 用户更改自己的密码。
• 要求用户在一段时间后修改密码(密码过期)
• 防止密码再使用

## MFA (多重身份验证)

- 用户可以访问您的帐户，并且可能更改配置或删除您的AWS帐户中的资源
- 您想要保护您的根账号和 IAM用户
- MFA = 您知道的密码 + 安全设备
- MFA 可以是：
  - 虚拟MFA 设备
  - 通用第二因素(U2F) 安全密钥
  - 硬件密钥Fob MFA 设备
  - AWS GovCloud的硬件密钥Fob MFA 设备 (美国)

## 用户如何访问AWS？

- 要访问AWS，您有三个选项：
  - AWS 管理控制台(受密码保护 + MFA)
  - AWS 命令行接口(CLI)：受访问密钥保护
  - AWS 软件开发者套件(SDK) - 代码：受访问保护

## 角色

• Some AWS service will need to perform actions on your behalf
• To do so, we will assign permissions to AWS services with IAM Roles
• Common roles:
• EC2 Instance Roles
• Lambda Function Roles
• Roles for CloudFormation

## 安全工具

- IAM 凭证报告
  是一个列出您所有帐户用户及其不同凭证状态的报告
- IAM 访问咨询师
  访问咨询师显示授予用户的服务权限以及上次访问这些服务的时间。
  您可以使用此信息修改您的政策。

## 分享 IAM 责任

- • 基础设施(全球网络安全)
  • 配置和脆弱性分析
  • 合规验证

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
