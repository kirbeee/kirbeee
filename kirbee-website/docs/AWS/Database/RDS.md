---
title: RDS (Relational Database Service)
---

# Introduction
- RDS stands for Relational Database Service
- It's a managed DB service for DB use SQL as a query language.
- It allows you to create databases in the cloud that are managed by AWS
- Postgres
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server
- IBM DB2
- Aurora (AWS Proprietary database)
![RDS](./RDS.png)

# Benefits
- RDS is a managed service:
  - Automated provisioning, OS patching
  - Continuous backups and restore to specific timestamp (Point in Time Restore)!
  - Monitoring dashboards
  - Read replicas for improved read performance
  - Multi AZ setup for DR (Disaster Recovery)
  - Maintenance windows for upgrades
  - Scaling capability (vertical and horizontal)
  - Storage backed by EBS
- BUT you can't SSH into your instances

# RDS Storage Auto Scaling - 
- Helps you increase storage on your RDS DB instance dynamically
- When RDS detects you are ru
- Avoid manually scaling your database storage
- You have to set Maximum Storage Threshold (maximum limit for DB storage)
- Automatically modify storage if:
- Free storage is less than 10% of allocated storage
- Low-storage lasts at least 5 minutes
- 6 hours have passed since last modification
- Useful for applications with unpredictable workloads
- Supports all RDS database engines
![img.png](RDS-auto-scaling.png)

# RDS Deployment
## RDS Read Replicas
![RDSReadReplicas](./Read-Replica.png)
- Up to 15 Read Replicas
- Within AZ, Cross AZ or Cross Region
- Replication is ASYNC, so reads are eventually consistent
### Use cases:
- You have a production database that is taking on normal load
- You want to run a reporting application to run some analytics
- You create a Read Replica to run the new workload there
- The production application is unaffected
- Read replicas are used for SELECT(=read) only kind of statements(not INSERT, UPDATE, DELETE)
![img.png](read-replicas.png)
### Network cost:
- In AWS there’s a network cost when data goes from one AZ to another
- For RDS Read Replicas within the same region, you don’t pay that fee
![img.png](Network-cost.png)

## RDS Multi-AZ (Disaster Recovery)
![RDSMultiAZ](./Multi-AZ.png)
- Fail over in case of AZ outage (high availability)
- Data is only read/written to the main database
- Can only have 1 other AZ as failover

## Multi-Region (Read Replicas)
![MultiRegion](./Multi-Region.png)
- Disaster recovery in case of region issue
- Local performance for global reads
- Replication cost

### RDS From Single AZ to Multi-AZ
![img.png](RDS-detail.png)
- Zero downtime operation (no need to stop the DB)
- Just click on “modify” for the database
- The following happens internally:
  - A snapshot is taken
  - A new DB is restored from the snapshot in a new AZ
  - Synchronization is established between the two databases