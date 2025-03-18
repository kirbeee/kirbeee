"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[6490],{2886:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"AWS/Database/RDS","title":"RDS (Relational Database Service)","description":"- RDS stands for Relational Database Service","source":"@site/docs/AWS/Database/RDS.md","sourceDirName":"AWS/Database","slug":"/AWS/Database/RDS","permalink":"/kirbeee/ja-JP/docs/AWS/Database/RDS","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Database/RDS.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742289518000,"frontMatter":{"title":"RDS (Relational Database Service)"},"sidebar":"docs","previous":{"title":"Amazon QuickSight","permalink":"/kirbeee/ja-JP/docs/AWS/Database/QuickSight"},"next":{"title":"Redshift","permalink":"/kirbeee/ja-JP/docs/AWS/Database/Redshift"}}');var a=i(74848),t=i(28453);const r={title:"RDS (Relational Database Service)"},l="Introduction",o={},c=[{value:"RDS Read Replicas",id:"rds-read-replicas",level:2},{value:"Use cases:",id:"use-cases",level:3},{value:"Network cost:",id:"network-cost",level:3},{value:"RDS Multi-AZ (Disaster Recovery)",id:"rds-multi-az-disaster-recovery",level:2},{value:"Multi-Region (Read Replicas)",id:"multi-region-read-replicas",level:2},{value:"RDS From Single AZ to Multi-AZ",id:"rds-from-single-az-to-multi-az",level:3},{value:"RDS Event Notifications",id:"rds-event-notifications",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"RDS stands for Relational Database Service"}),"\n",(0,a.jsx)(n.li,{children:"It's a managed DB service for DB use SQL as a query language."}),"\n",(0,a.jsx)(n.li,{children:"It allows you to create databases in the cloud that are managed by AWS"}),"\n",(0,a.jsx)(n.li,{children:"Postgres"}),"\n",(0,a.jsx)(n.li,{children:"MySQL"}),"\n",(0,a.jsx)(n.li,{children:"MariaDB"}),"\n",(0,a.jsx)(n.li,{children:"Oracle"}),"\n",(0,a.jsx)(n.li,{children:"Microsoft SQL Server"}),"\n",(0,a.jsx)(n.li,{children:"IBM DB2"}),"\n",(0,a.jsxs)(n.li,{children:["Aurora (AWS Proprietary database)\n",(0,a.jsx)(n.img,{alt:"RDS",src:i(6978).A+"",width:"3160",height:"1608"})]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"benefits",children:"Benefits"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["RDS is a managed service:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Automated provisioning, OS patching"}),"\n",(0,a.jsx)(n.li,{children:"Continuous backups and restore to specific timestamp (Point in Time Restore)!"}),"\n",(0,a.jsx)(n.li,{children:"Monitoring dashboards"}),"\n",(0,a.jsx)(n.li,{children:"Read replicas for improved read performance"}),"\n",(0,a.jsx)(n.li,{children:"Multi AZ setup for DR (Disaster Recovery)"}),"\n",(0,a.jsx)(n.li,{children:"Maintenance windows for upgrades"}),"\n",(0,a.jsx)(n.li,{children:"Scaling capability (vertical and horizontal)"}),"\n",(0,a.jsx)(n.li,{children:"Storage backed by EBS"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"BUT you can't SSH into your instances"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-storage-auto-scaling--",children:"RDS Storage Auto Scaling -"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Helps you increase storage on your RDS DB instance dynamically"}),"\n",(0,a.jsx)(n.li,{children:"When RDS detects you are ru"}),"\n",(0,a.jsx)(n.li,{children:"Avoid manually scaling your database storage"}),"\n",(0,a.jsx)(n.li,{children:"You have to set Maximum Storage Threshold (maximum limit for DB storage)"}),"\n",(0,a.jsx)(n.li,{children:"Automatically modify storage if:"}),"\n",(0,a.jsx)(n.li,{children:"Free storage is less than 10% of allocated storage"}),"\n",(0,a.jsx)(n.li,{children:"Low-storage lasts at least 5 minutes"}),"\n",(0,a.jsx)(n.li,{children:"6 hours have passed since last modification"}),"\n",(0,a.jsx)(n.li,{children:"Useful for applications with unpredictable workloads"}),"\n",(0,a.jsxs)(n.li,{children:["Supports all RDS database engines\n",(0,a.jsx)(n.img,{alt:"img.png",src:i(20092).A+"",width:"423",height:"627"})]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-deployment",children:"RDS Deployment"}),"\n",(0,a.jsx)(n.h2,{id:"rds-read-replicas",children:"RDS Read Replicas"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"RDSReadReplicas",src:i(54668).A+"",width:"1422",height:"882"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Up to 15 Read Replicas"}),"\n",(0,a.jsx)(n.li,{children:"Within AZ, Cross AZ or Cross Region"}),"\n",(0,a.jsx)(n.li,{children:"Replication is ASYNC, so reads are eventually consistent"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"use-cases",children:"Use cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You have a production database that is taking on normal load"}),"\n",(0,a.jsx)(n.li,{children:"You want to run a reporting application to run some analytics"}),"\n",(0,a.jsx)(n.li,{children:"You create a Read Replica to run the new workload there"}),"\n",(0,a.jsx)(n.li,{children:"The production application is unaffected"}),"\n",(0,a.jsxs)(n.li,{children:["Read replicas are used for SELECT(=read) only kind of statements(not INSERT, UPDATE, DELETE)\n",(0,a.jsx)(n.img,{alt:"img.png",src:i(12173).A+"",width:"585",height:"621"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"network-cost",children:"Network cost:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In AWS there\u2019s a network cost when data goes from one AZ to another"}),"\n",(0,a.jsxs)(n.li,{children:["For RDS Read Replicas within the same region, you don\u2019t pay that fee\n",(0,a.jsx)(n.img,{alt:"img.png",src:i(65043).A+"",width:"1220",height:"424"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rds-multi-az-disaster-recovery",children:"RDS Multi-AZ (Disaster Recovery)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"RDSMultiAZ",src:i(3798).A+"",width:"1464",height:"912"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fail over in case of AZ outage (high availability)"}),"\n",(0,a.jsx)(n.li,{children:"Data is only read/written to the main database"}),"\n",(0,a.jsx)(n.li,{children:"Can only have 1 other AZ as failover"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"multi-region-read-replicas",children:"Multi-Region (Read Replicas)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"MultiRegion",src:i(71291).A+"",width:"3498",height:"1004"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Disaster recovery in case of region issue"}),"\n",(0,a.jsx)(n.li,{children:"Local performance for global reads"}),"\n",(0,a.jsx)(n.li,{children:"Replication cost"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"rds-from-single-az-to-multi-az",children:"RDS From Single AZ to Multi-AZ"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img.png",src:i(13226).A+"",width:"542",height:"569"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Zero downtime operation (no need to stop the DB)"}),"\n",(0,a.jsx)(n.li,{children:"Just click on \u201cmodify\u201d for the database"}),"\n",(0,a.jsxs)(n.li,{children:["The following happens internally:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A snapshot is taken"}),"\n",(0,a.jsx)(n.li,{children:"A new DB is restored from the snapshot in a new AZ"}),"\n",(0,a.jsx)(n.li,{children:"Synchronization is established between the two databases"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-custom",children:"RDS Custom"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img.png",src:i(52392).A+"",width:"275",height:"398"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Managed Oracle and Microsoft SQL Server Database with OS and database customization"}),"\n",(0,a.jsx)(n.li,{children:"RDS: Automates setup, operation, and scaling of database in AWS"}),"\n",(0,a.jsxs)(n.li,{children:["Custom: access to the underlying database and OS so you can","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Configure settings"}),"\n",(0,a.jsx)(n.li,{children:"Install patches"}),"\n",(0,a.jsx)(n.li,{children:"Enable native features"}),"\n",(0,a.jsx)(n.li,{children:"Access the underlying EC2 Instance using SSH or SSM Session Manager"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"De-activate Automation Mode to perform your customization, better to take a DB snapshot before"}),"\n",(0,a.jsx)(n.li,{children:"RDS vs. RDS Custom"}),"\n",(0,a.jsx)(n.li,{children:"RDS: entire database and the OS to be managed by AWS"}),"\n",(0,a.jsx)(n.li,{children:"RDS Custom: full admin access to the underlying OS and the database"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-backup",children:"RDS Backup"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Automated backups:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Daily full backup of the database (during the backup window)"}),"\n",(0,a.jsx)(n.li,{children:"Transaction logs are backed-up by RDS every 5 minutes"}),"\n",(0,a.jsx)(n.li,{children:"=> ability to restore to any point in time (from oldest backup to 5 minutes ago)"}),"\n",(0,a.jsx)(n.li,{children:"1 to 35 days of retention, set 0 to disable automated backups"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Manual DB Snapshots","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Manually triggered by the user"}),"\n",(0,a.jsx)(n.li,{children:"Retention of backup for as long as you want"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Trick: in a stopped RDS database, you will still pay for storage. If you plan on stopping it for a long time, you should snapshot & restore instead"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-and-aurora-restore-options",children:"RDS and Aurora Restore Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Restoring a RDS / Aurora backup or a snapshot creates a new database"}),"\n",(0,a.jsxs)(n.li,{children:["Restoring MySQL RDS database from S3","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a backup of your on-premises database"}),"\n",(0,a.jsx)(n.li,{children:"Store it on Amazon S3 (object storage)"}),"\n",(0,a.jsx)(n.li,{children:"Restore the backup file onto a new RDS instance running MySQL"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Restoring MySQL Aurora cluster from S3","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a backup of your on-premises database using Percona XtraBackup"}),"\n",(0,a.jsx)(n.li,{children:"Store the backup file on Amazon S3"}),"\n",(0,a.jsx)(n.li,{children:"Restore the backup file onto a new Aurora cluster running MySQL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-and-aurora-security",children:"RDS and Aurora Security"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["At-rest encryption:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Database master & replicas encryption using AWS KMS \u2013 must be defined as launch time"}),"\n",(0,a.jsx)(n.li,{children:"If the master is not encrypted, the read replicas cannot be encrypted"}),"\n",(0,a.jsx)(n.li,{children:"To encrypt an un-encrypted database, go through a DB snapshot & restore as encrypted"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"In-flight encryption: TLS-ready by default, use the AWS TLS root certificates client-side"}),"\n",(0,a.jsx)(n.li,{children:"IAM Authentication: IAM roles to connect to your database (instead of username/pw)"}),"\n",(0,a.jsx)(n.li,{children:"Security Groups: Control Network access to your RDS / Aurora DB"}),"\n",(0,a.jsx)(n.li,{children:"No SSH available except on RDS Custom"}),"\n",(0,a.jsx)(n.li,{children:"Audit Logs can be enabled and sent to CloudWatch Logs for longer retention"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"rds-proxy",children:"RDS proxy"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fully managed database proxy for RDS"}),"\n",(0,a.jsx)(n.li,{children:"Allows apps to pool and share DB connections established with the database"}),"\n",(0,a.jsx)(n.li,{children:"Improving database efficiency by reducing the stress on database resources (e.g., CPU, RAM) and minimize open connections (and timeouts)"}),"\n",(0,a.jsx)(n.li,{children:"Serverless, autoscaling, highly available (multi-AZ)"}),"\n",(0,a.jsx)(n.li,{children:"Reduced RDS & Aurora failover time by up 66%"}),"\n",(0,a.jsx)(n.li,{children:"Supports RDS (MySQL, PostgreSQL, MariaDB, MS SQL Server) and Aurora (MySQL, PostgreSQL)"}),"\n",(0,a.jsx)(n.li,{children:"No code changes required for most apps"}),"\n",(0,a.jsx)(n.li,{children:"Enforce IAM Authentication for DB, and securely store credentials in AWS Secrets Manager"}),"\n",(0,a.jsxs)(n.li,{children:["RDS Proxy is never publicly accessible (must be access from VPC)\n",(0,a.jsx)(n.img,{alt:"img.png",src:i(46937).A+"",width:"512",height:"512"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rds-event-notifications",children:"RDS Event Notifications"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Notifications that tells information about the DB instance itself (created, stopped, start, \u2026)"}),"\n",(0,a.jsx)(n.li,{children:"You don\u2019t have any information about the data itself"}),"\n",(0,a.jsx)(n.li,{children:"Subscribe to the following event categories: DB instance, DB snapshot, DB Parameter Group, DB Security Group, RDS Proxy, Custom Engine Version"}),"\n",(0,a.jsx)(n.li,{children:"Near real-time events (up to 5 minutes)"}),"\n",(0,a.jsxs)(n.li,{children:["Send notifications to SNS or subscribe to events using EventBridge\n",(0,a.jsx)(n.img,{alt:"img.png",src:i(2168).A+"",width:"437",height:"681"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3798:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Multi-AZ-31f46b2936635100cd481fe29e3eec82.png"},71291:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Multi-Region-0a0a69a77d2f9ed7a28f61ca3959a3a3.png"},65043:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Network-cost-9cf091ca0b836ddee573b07e38516daa.png"},20092:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-auto-scaling-ffc8353df3841b2b22f7e7ea4ebc6095.png"},52392:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-custom-e0e9417ce62534a85e64589992ec7648.png"},13226:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-detail-f7f745ec0e2e4e0a39a44e36e178199a.png"},2168:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-notification-df20801b24b33b875e74d776b9771199.png"},46937:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-proxy-064f051e99bc0a81d89b3548386e7eff.png"},6978:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/RDS-92ef3705cb6629454142beb2398807da.png"},54668:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Read-Replica-acf8f697a6539a95e1f820021cfe1a5d.png"},12173:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/read-replicas-21d7f49e4eaf84359dcd88c3cc3b861b.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);