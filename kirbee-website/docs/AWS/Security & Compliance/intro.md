---
title: introduction
---
# AWS Shared Responsibility Model
## AWS responsibility - Security of the Cloud
- Protecting infrastructure (hardware, software, facilities, and networking) that runs all the AWS services
- Managed services like S3, DynamoDB, RDS, etc.
## Customer responsibility - Security in the Cloud
- For EC2 instance, customer is responsible for management of the guest OS (including security patches and updates), firewall & network configuration, lAM
- Encrypting application data
## Shared controls:
- Patch Management, Configuration Management, Awareness & Training

# root user Privileges
- Root user = Account Owner (created when the account is created)
- Has complete access to all AWS services and resources
- Lock away your AWS account root user access keys!
- Do not use the root account for everyday tasks, even administrative tasks
- Actions that can be performed only by the root user:
- Change account settings (account name, email address, root user password, root user access keys)
- View certain tax invoices
- Close your AWS account
- Restore IAM user permissions
- Change or cancel your AWS Support plan
- Register as a seller in the Reserved Instance Marketplace
- Configure an Amazon S3 bucket to enable MFA
- Edit or delete an Amazon S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID
- Sign up for GovCloud

# summary
- Shared Responsibility on AWS
- Shield: Automatic DDoS Protection + 24/7 support for advanced
- WAF: Firewall to filter incoming requests based on rules
- KMS: Encryption keys managed by AWS
- CloudHSM: Hardware encryption, we manage encryption keys
- AWS Certificate Manager: provision, manage, and deploy SSL/TLS Certificates
- Artifact: Get access to compliance reports such as PCI, ISO, etc...
- GuardDuty: Find malicious behavior with VPC, DNS & CloudTrail Logs
- Inspector: find software vulnerabilities in EC2, ECR Images, and Lambda functions
- Network Firewall: Protect VPC against network attacks
- Config: Track config changes and compliance against rules
- Macie: Find sensitive data (ex: PIl data) in Amazon S3 buckets
- Cloud Trail: Track API calls made by users within account
- AWS Security Hub: gather security findings from multiple AWS accounts
- Amazon Detective: find the root cause of security issues or suspicious activities
- AWS Abuse: Report AWS resources used for abusive or illegal purposes
- Root user privileges:
    - Change account settings
    - Close your AWS account
    - Change or cancel your AWS Support plan
    - Register as a seller in the Reserved Instance Marketplace
- IAM Access Analyzer: identify which resources are shared externally
- Firewall Manager: manage security rules across an Organization (WAF, Shield...)