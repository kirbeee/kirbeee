---
id: iam
title: IAM
slug: /aws/iam
---
# IAM (identity and access management)
Structure: Role, Group, User
- Global service
- Root account created by default, shouldn't be used or shared
- Users are people within your organization, and can be grouped
- Groups only contain users, not other groups
- Users don't have to belong to a group, and user can belong to multiple

## Permissions
- Users or Groups can be assigned JSON documents called policies
- These policies define the permissions of the users
- In AWS you apply the least privilege principle: don't give more permissions than a user needs

## File Structure
- Consists of:
    - Version: policy language version, always include "20 12-10-17"
    - Id: an identifier for the policy (optional)
    - Statement: one or more individual statements (required)
- Statements consists of
    - Sid: an identifier for the statement (optional)
    - Effect: whether the statement allows or denies access(Allow, Deny)
    - Principal: account/user/role to which this policy applied to
    - Action: list of actions this policy allows or denies
    - Resource: list of resources to which the actions applied to
    - Condition: conditions for when this policy is in effect (optional)
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

## Password Policies
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
- Users have access to your account and can possibly change configurations or delete resources in your AWS account
- You want to protect your Root Accounts and IAM users
- MFA = password you know + security device you own
- MFA can be:
    - Virtual MFA device
    - Universal 2nd Factor (U2F) Security Key
    - Hardware Key Fob MFA Device
    - Hardware Key Fob MFA Device for AWS GovCloud (US)

## How can users access AWS?
- To access AWS, you have three options:
    - AWS Management Console (protected by password + MFA)
    - AWS Command Line Interface (CLI): protected by access keys
    - AWS Software Developer Kit (SDK) - for code: protected by access

## Roles
• Some AWS service will need to perform actions on your behalf
• To do so, we will assign permissions to AWS services with IAM Roles
• Common roles:
    • EC2 Instance Roles
    • Lambda Function Roles
    • Roles for CloudFormation

## Security Tool
- IAM Credentials Report
a report that lists all your account's users and the status of their various credentials
- IAM Access Advisor
Access advisor shows the service permissions granted to a user and when those services were last accessed.
 You can use this information to revise your policies.

## Share IAM Responsibilities

- AWS is responsible for:
• Infrastructure (global network security)
• Configuration and vulnerability analysis
• Compliance validation

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