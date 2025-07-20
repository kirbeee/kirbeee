---
title: Intro to Cloud Monitoring
---
# Cloud Watch matic Overview
- CloudWatch provides metrics for every services in AWS
- Metric is a variable to monitor (CPUUtilization, Networkln...)
- Metrics have timestamps
- Can create CloudWatch dashboards of metrics

# Important Metrics
- EC2 instances: CPU Utilization, Status Checks, Network (not RAM)
    - Default metrics every 5 minutes
    - Option for Detailed Monitoring ($$$): metrics every | minute
- EBS volumes: Disk Read/Writes
- S3 buckets: BucketSizeBytes, NumberOfObjects, AllRequests
- Billing: Total Estimated Charge (only in us-east-I)
- Service Limits: how much you've been using a service API
- Custom metrics: push your own metrics

# Summary
- CloudWatch:
    - Metrics: monitor the performance of AWS services and billing metrics
    - Alarms: automate notification, perform EC2 action, notify to SNS based on metric
    - Logs: collect log files from EC2 instances, servers, Lambda functions...
    - Events (or EventBridge): react to events in AWS, or trigger a rule on a schedule
- CloudTrail: audit API calls made within your AWS account
- CloudTrail Insights: automated analysis of your CloudTrail Events
- X-Ray: trace requests made through your distributed applications
- AWS Health Dashboard: status of all AWS services across all regions
- AWS Account Health Dashboard: AWS events that impact your infrastructure
- Amazon CodeGuru: automated code reviews and application performance recommendations