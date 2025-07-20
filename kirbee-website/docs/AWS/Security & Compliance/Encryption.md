---
title: Encryption
---
# Data at rest vs. Data in transit
![Encryption](./Encryption.png)
- At rest: data stored or archived on a device
- On a hard disk, on a RDS instance, in S3 Glacier Deep Archive, etc.
- In transit (in motion): data being moved from one location to another
- Transfer from on-premises to AWS, EC2 to DynamoDB, etc
- Means data transferred on the network
- We want to encrypt data in both states to protect it!
- For this we leverage encryption keys

# KMS (Key Management Service)
- Anytime you hear "encryption" for an AWS service, it's most likely KMS
- KMS = AWS manages the encryption keys for us
- Encryption Opt-in:
    - EBS volumes: encrypt volumes
    - S3 buckets: Server-side encryption of objects (SSE-S3 enabled by default, SSE-KMS opt in)
    - Redshift database: encryption of data
    - RDS database: encryption of data
    - EFS drives: encryption of data
- Encryption Automatically enabled:
    - Cloud Trail Logs
    - S3 Glacier
    - Storage Gateway

# CloudHSM (Hardware Security Module)
- KMS => AWS manages the software for encryption
- CloudHSM => AWS provisions encryption hardware
- Dedicated Hardware (HSM = Hardware Security Module)
- You manage your own encryption keys entirely (not AWS)
- HSM device is tamper resistant, FIPS 140-2 Level 3 compliance

# Type of KMS Keys
## Customer Managed Key:
- Create, manage and used by the customer, can enable or disable
- Possibility of rotation policy (new key generated every year, old key preserved)
- Possibility to bring-your-own-key
## AWS Managed Key:
- Created, managed and used on the customer's behalf by AWS
- Used by AWS services (aws/s3, aws/ebs, aws/redshift)
## AWS Owned Key:
- Collection of CMKs that an AWS service owns and manages to use in multiple accounts
- AWS can use those to protect resources in your account (but you can't view the keys)
## CloudHSM Keys (custom keystore):
- Keys generated from your own CloudHSM hardware device
- Cryptographic operations are performed within the CloudHSM cluster