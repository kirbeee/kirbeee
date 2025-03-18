"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7402],{92930:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"AWS/Database/DynamoDB","title":"DynamoDB (NoSQL Database)","description":"- Fully Managed Highly available with replication across 3 AZ","source":"@site/docs/AWS/Database/DynamoDB.md","sourceDirName":"AWS/Database","slug":"/AWS/Database/DynamoDB","permalink":"/kirbeee/ja-JP/docs/AWS/Database/DynamoDB","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Database/DynamoDB.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742289518000,"frontMatter":{"title":"DynamoDB (NoSQL Database)"},"sidebar":"docs","previous":{"title":"DocumentDB","permalink":"/kirbeee/ja-JP/docs/AWS/Database/DocumentDB"},"next":{"title":"EMR","permalink":"/kirbeee/ja-JP/docs/AWS/Database/EMR"}}');var s=a(74848),l=a(28453);const t={title:"DynamoDB (NoSQL Database)"},r="overview",o={},d=[{value:"DynamoDB - Basics",id:"dynamodb---basics",level:2},{value:"DynamoDB \u2013 Read/Write Capacity Modes",id:"dynamodb--readwrite-capacity-modes",level:2},{value:"Provisioned Mode (default)",id:"provisioned-mode-default",level:3},{value:"On-Demand Mode",id:"on-demand-mode",level:3},{value:"DynamoDB Accelerator - DAX",id:"dynamodb-accelerator---dax",level:2},{value:"DynamoDB Accelerator (DAX) vs. ElastiCache",id:"dynamodb-accelerator-dax-vs-elasticache",level:3},{value:"DynamoDB \u2013 Stream Processing",id:"dynamodb--stream-processing",level:2},{value:"DynamoDB Streams",id:"dynamodb-streams",level:3},{value:"Kinesis Data Streams (newer)",id:"kinesis-data-streams-newer",level:3},{value:"DynamoDB Streams",id:"dynamodb-streams-1",level:2},{value:"DynamoDB Global Tables",id:"dynamodb-global-tables",level:2},{value:"DynamoDB \u2013 Time To Live (TTL)",id:"dynamodb--time-to-live-ttl",level:2},{value:"DynamoDB \u2013 Backups for disaster recovery",id:"dynamodb--backups-for-disaster-recovery",level:2},{value:"DynamoDB \u2013 Integration with Amazon S3",id:"dynamodb--integration-with-amazon-s3",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"overview",children:"overview"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fully Managed Highly available with replication across 3 AZ"}),"\n",(0,s.jsx)(n.li,{children:"NoSQL database - not a relational database"}),"\n",(0,s.jsx)(n.li,{children:'Scales to massive workloads, distributed "serverless" database'}),"\n",(0,s.jsx)(n.li,{children:"Millions of requests per seconds, trillions of row, 100s of TB of storage"}),"\n",(0,s.jsx)(n.li,{children:"Fast and consistent in performance"}),"\n",(0,s.jsx)(n.li,{children:"Single-digit millisecond latency - low latency retrieval"}),"\n",(0,s.jsx)(n.li,{children:"Integrated with IAM for security, authorization and administration"}),"\n",(0,s.jsx)(n.li,{children:"Low cost and auto scaling capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Standard & Infrequent Access (IA) Table Class"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb---basics",children:"DynamoDB - Basics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DynamoDB is made of Tables"}),"\n",(0,s.jsx)(n.li,{children:"Each table has a Primary Key (must be decided at creation time)"}),"\n",(0,s.jsx)(n.li,{children:"Each table can have an infinite number of items (= rows)"}),"\n",(0,s.jsx)(n.li,{children:"Each item has attributes (can be added over time \u2013 can be null)"}),"\n",(0,s.jsx)(n.li,{children:"Maximum size of an item is 400KB"}),"\n",(0,s.jsxs)(n.li,{children:["Data types supported are:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scalar Types \u2013 String, Number, Binary, Boolean, Null"}),"\n",(0,s.jsx)(n.li,{children:"Document Types \u2013 List, Map"}),"\n",(0,s.jsx)(n.li,{children:"Set Types \u2013 String Set, Number Set, Binary Set"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Therefore, in DynamoDB you can rapidly evolve schemas\n",(0,s.jsx)(n.img,{alt:"img.png",src:a(85166).A+"",width:"867",height:"368"}),"\n",(0,s.jsx)(n.img,{alt:"DynamicDBDataTypes",src:a(37586).A+"",width:"1650",height:"956"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb--readwrite-capacity-modes",children:"DynamoDB \u2013 Read/Write Capacity Modes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Control how you manage your table\u2019s capacity (read/write throughput)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"provisioned-mode-default",children:"Provisioned Mode (default)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You specify the number of reads/writes per second"}),"\n",(0,s.jsx)(n.li,{children:"You need to plan capacity beforehand"}),"\n",(0,s.jsx)(n.li,{children:"Pay for provisioned Read Capacity Units (RCU) & Write Capacity Units (WCU)"}),"\n",(0,s.jsx)(n.li,{children:"Possibility to add auto-scaling mode for RCU & WCU"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"on-demand-mode",children:"On-Demand Mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Read/writes automatically scale up/down with your workloads"}),"\n",(0,s.jsx)(n.li,{children:"No capacity planning needed"}),"\n",(0,s.jsx)(n.li,{children:"Pay for what you use, more expensive ($$$)"}),"\n",(0,s.jsx)(n.li,{children:"Great for unpredictable workloads, steep sudden spikes"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb-accelerator---dax",children:"DynamoDB Accelerator - DAX"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DynamoDB-Accelerator",src:a(87325).A+"",width:"459",height:"654"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fully-managed, highly available, seamless in- memory cache for DynamoDB"}),"\n",(0,s.jsx)(n.li,{children:"Help solve read congestion by caching"}),"\n",(0,s.jsx)(n.li,{children:"Microseconds latency for cached data"}),"\n",(0,s.jsx)(n.li,{children:"Doesn\u2019t require application logic modification(compatible with existing DynamoDB APIs)"}),"\n",(0,s.jsx)(n.li,{children:"5 minutes TTL for cache (default)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dynamodb-accelerator-dax-vs-elasticache",children:"DynamoDB Accelerator (DAX) vs. ElastiCache"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:a(90847).A+"",width:"1051",height:"491"})}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb--stream-processing",children:"DynamoDB \u2013 Stream Processing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ordered stream of item-level modifications (create/update/delete) in a table"}),"\n",(0,s.jsxs)(n.li,{children:["Use cases:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React to changes in real-time (welcome email to users)"}),"\n",(0,s.jsx)(n.li,{children:"Real-time usage analytics"}),"\n",(0,s.jsx)(n.li,{children:"Insert into derivative tables"}),"\n",(0,s.jsx)(n.li,{children:"Implement cross-region replication"}),"\n",(0,s.jsx)(n.li,{children:"Invoke AWS Lambda on changes to your DynamoDB table"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dynamodb-streams",children:"DynamoDB Streams"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"24 hours retention"}),"\n",(0,s.jsx)(n.li,{children:"Limited # of consumers"}),"\n",(0,s.jsx)(n.li,{children:"Process using AWS Lambda Triggers, or DynamoDB Stream Kinesis adapter"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"kinesis-data-streams-newer",children:"Kinesis Data Streams (newer)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"I year retention"}),"\n",(0,s.jsx)(n.li,{children:"High # of consumers"}),"\n",(0,s.jsx)(n.li,{children:"Process using AWS Lambda, Kinesis Data Analytics, Kineis Data Firehose, AWS Glue Streaming ETL..."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb-streams-1",children:"DynamoDB Streams"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:a(65810).A+"",width:"1355",height:"644"})}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb-global-tables",children:"DynamoDB Global Tables"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DynamoDB-global",src:a(26243).A+"",width:"2338",height:"866"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make a DynamoDB table accessible with low latency in multiple-regions"}),"\n",(0,s.jsx)(n.li,{children:"Active-Active replication"}),"\n",(0,s.jsx)(n.li,{children:"Applications can READ and WRITE to the table in any region"}),"\n",(0,s.jsx)(n.li,{children:"Must enable DynamoDB Streams as a pre-requisite"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb--time-to-live-ttl",children:"DynamoDB \u2013 Time To Live (TTL)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatically delete items after an expiry timestamp"}),"\n",(0,s.jsxs)(n.li,{children:["Use cases: reduce stored data by keeping only current items, adhere to regulatory obligations, web session handling\u2026\n",(0,s.jsx)(n.img,{alt:"img.png",src:a(28667).A+"",width:"509",height:"686"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb--backups-for-disaster-recovery",children:"DynamoDB \u2013 Backups for disaster recovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Continuous backups using point-in-time recovery (PITR)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optionally enabled for the last 35 days"}),"\n",(0,s.jsx)(n.li,{children:"Point-in-time recovery to any time within the backup window"}),"\n",(0,s.jsx)(n.li,{children:"The recovery process creates a new table"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["On-demand backups","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full backups for long-term retention, until explicitely deleted"}),"\n",(0,s.jsx)(n.li,{children:"Doesn\u2019t affect performance or latency"}),"\n",(0,s.jsx)(n.li,{children:"Can be configured and managed in AWS Backup (enables cross-region copy)"}),"\n",(0,s.jsx)(n.li,{children:"The recovery process creates a new table"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamodb--integration-with-amazon-s3",children:"DynamoDB \u2013 Integration with Amazon S3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Export to S3 (must enable PITR)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Works for any point of time in the last 35 days"}),"\n",(0,s.jsx)(n.li,{children:"Doesn\u2019t affect the read capacity of your table"}),"\n",(0,s.jsx)(n.li,{children:"Perform data analysis on top of DynamoDB"}),"\n",(0,s.jsx)(n.li,{children:"Retain snapshots for auditing"}),"\n",(0,s.jsx)(n.li,{children:"ETL on top of S3 data before importing back into DynamoDB"}),"\n",(0,s.jsxs)(n.li,{children:["Export in DynamoDB JSON or ION format\n",(0,s.jsx)(n.img,{alt:"img.png",src:a(9554).A+"",width:"563",height:"167"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Import from S3","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Import CSV, DynamoDB JSON or ION format"}),"\n",(0,s.jsx)(n.li,{children:"Doesn\u2019t consume any write capacity"}),"\n",(0,s.jsx)(n.li,{children:"Creates a new table"}),"\n",(0,s.jsxs)(n.li,{children:["Import errors are logged in CloudWatch Logs\n",(0,s.jsx)(n.img,{alt:"img.png",src:a(64165).A+"",width:"508",height:"242"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},90847:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/DAX-ElastiCache-227f54eae61c83e1351d2ccb8efa9cb5.png"},87325:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/DynamoDB-Accelerator-dc5bdb5ea30bf7fa04e7c3a168737983.png"},37586:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/DynamoDB-datatype-87290b0534b823ddb2a21562d5967ff1.png"},26243:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/DynamoDB-global-a1836874ddb6ffd491ed7b58fb28c192.png"},65810:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/DynamoDB-stream-9cff77b622daf8f9074dc87879697015.png"},28667:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/TTL-4d524d9fb4a5104486307a5d3bb01fa3.png"},9554:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/export-S3-703fe7a4af4d2dbd4932507d20535b8e.png"},64165:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/import-S3-7eb6258fa2723c929edf76a83956cd58.png"},85166:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/table-example-de5bd9d252c2e71ea5ad5339829e2640.png"},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var i=a(96540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);