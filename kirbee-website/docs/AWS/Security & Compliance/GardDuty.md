---
title: GuardDuty
---
# GuardDuty
![GuardDuty](./guardDuty.png)
- Intelligent Threat discovery to protect your AWS Account
- Uses Machine Learning algorithms, anomaly detection, 3rd party data
- One click to enable (30 days trial), no need to install software
- Input data includes:
    - CloudTrail Events Logs - unusual APl calls, unauthorized deployments
        - CloudTrail Management Events - create VPC subnet, create trail, ...
        - CloudTrail S3 Data Events - get object, list objects, delete object, ...
    - VPC Flow Logs - unusual internal traffic, unusual IP address
    - DNS Logs - compromised EC2 instances sending encoded data within DNS queries
    - Optional Features - EKS Audit Logs, RDS & Aurora, EBS, Lambda, S3 Data Events...
- Can setup EventBridge rules to be notified in case of findings
- EventBridge rules can target AWS Lambda or SNS
- Can protect against Crypto Currency attacks (has a dedicated "finding" for it)

