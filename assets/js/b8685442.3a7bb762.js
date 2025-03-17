"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8230],{67739:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"AWS/S3/Introduction","title":"S3 Introduction","description":"- Backup and storage","source":"@site/docs/AWS/S3/Introduction.md","sourceDirName":"AWS/S3","slug":"/AWS/S3/Introduction","permalink":"/kirbeee/docs/AWS/S3/Introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/S3/Introduction.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"S3 Introduction"},"sidebar":"docs","previous":{"title":"Responsibility","permalink":"/kirbeee/docs/AWS/Responsibility"},"next":{"title":"Storage Gateway","permalink":"/kirbeee/docs/AWS/S3/Storage-Gateway"}}');var l=i(74848),t=i(28453);const r={title:"S3 Introduction"},a="Use Case",c={},o=[{value:"Contain",id:"contain",level:2},{value:"User-Based",id:"user-based",level:2},{value:"Resource-Based",id:"resource-based",level:2},{value:"Note: an IAM principal can access an S3 object if",id:"note-an-iam-principal-can-access-an-s3-object-if",level:2},{value:"Encryption: encrypt objects in Amazon S3 using encryption keys",id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",level:2},{value:"Notes:",id:"notes",level:2},{value:"Amazon S3 Standard - General Purpose",id:"amazon-s3-standard---general-purpose",level:2},{value:"Amazon S3 Standard-Infrequent Access (IA)",id:"amazon-s3-standard-infrequent-access-ia",level:2},{value:"Amazon S3 One Zone-Infrequent Access",id:"amazon-s3-one-zone-infrequent-access",level:2},{value:"Amazon S3 Glacier Instant Retrieval",id:"amazon-s3-glacier-instant-retrieval",level:2},{value:"Amazon S3 Glacier Flexible Retrieval",id:"amazon-s3-glacier-flexible-retrieval",level:2},{value:"Amazon S3 Glacier Deep Archive",id:"amazon-s3-glacier-deep-archive",level:2},{value:"Amazon S3 Intelligent Tiering",id:"amazon-s3-intelligent-tiering",level:2},{value:"Durability:",id:"durability",level:2},{value:"Availability:",id:"availability",level:2},{value:"Server side encryption",id:"server-side-encryption",level:2},{value:"Client side encryption",id:"client-side-encryption",level:2},{value:"AWS responsibility:",id:"aws-responsibility",level:2},{value:"Customer responsibility:",id:"customer-responsibility",level:2},{value:"Moving between Storage Classes",id:"moving-between-storage-classes",level:2},{value:"Lifecycle Rules",id:"lifecycle-rules",level:2},{value:"Scenario 1: Lifecycle Rule",id:"scenario-1-lifecycle-rule",level:3},{value:"Scenario 2: Lifecycle Rule",id:"scenario-2-lifecycle-rule",level:3},{value:"Analytics",id:"analytics",level:2},{value:"S3 Storage Class Analysis",id:"s3-storage-class-analysis",level:3},{value:"Requester Pays",id:"requester-pays",level:2},{value:"S3 Event Notifications",id:"s3-event-notifications",level:2},{value:"IAM Permissions",id:"iam-permissions",level:3},{value:"With Event Bridge",id:"with-event-bridge",level:3},{value:"Baseline Performance",id:"baseline-performance",level:2},{value:"Performance",id:"performance",level:2},{value:"Multi-Part Upload",id:"multi-part-upload",level:3},{value:"S3 Transfer Acceleration",id:"s3-transfer-acceleration",level:3},{value:"S3 Byte-Range Fetches",id:"s3-byte-range-fetches",level:3},{value:"Batch Operations",id:"batch-operations",level:3},{value:"S3 Storage Lens",id:"s3-storage-lens",level:2},{value:"S3 Access Logs",id:"s3-access-logs",level:2},{value:"S3 Pre-signed URLs",id:"s3-pre-signed-urls",level:2},{value:"S3 Glacier Vault Lock",id:"s3-glacier-vault-lock",level:2},{value:"S3 Object Lock (versioning must be enabled)",id:"s3-object-lock-versioning-must-be-enabled",level:3},{value:"S3 access points",id:"s3-access-points",level:2},{value:"Access Points \u2013 VPC Origin",id:"access-points--vpc-origin",level:3},{value:"Object Lambda",id:"object-lambda",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"use-case",children:"Use Case"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Backup and storage"}),"\n",(0,l.jsx)(n.li,{children:"Disaster Recovery"}),"\n",(0,l.jsx)(n.li,{children:"Archive"}),"\n",(0,l.jsx)(n.li,{children:"Hybrid Cloud storage"}),"\n",(0,l.jsx)(n.li,{children:"Application hosting"}),"\n",(0,l.jsx)(n.li,{children:"Media hosting"}),"\n",(0,l.jsx)(n.li,{children:"Data lakes & big data analytics"}),"\n",(0,l.jsx)(n.li,{children:"Software delivery"}),"\n",(0,l.jsx)(n.li,{children:"Static website"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"bucket",children:"Bucket"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Amazon S3 allows people to store objects (files) in "buckets" (directories)'}),"\n",(0,l.jsx)(n.li,{children:"Buckets must have a globally unique name (across all regions all accounts)"}),"\n",(0,l.jsx)(n.li,{children:"Buckets are defined at the region level"}),"\n",(0,l.jsx)(n.li,{children:"S3 looks like a global service but buckets are created in a region"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"objects",children:"Objects"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Objects (files) have a Key"}),"\n",(0,l.jsxs)(n.li,{children:["The key is the FULL path:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_file.txt"}),"\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_folderl/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["The key is composed of prefix + object name","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_folder|/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:'There\'s no concept of "directories" within buckets (although the Ul will trick you to think otherwise)'}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"contain",children:"Contain"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Object values are the content of the body:"}),"\n",(0,l.jsx)(n.li,{children:"Max. Object Size is 5TB (5000GB)"}),"\n",(0,l.jsx)(n.li,{children:'If uploading more than 5GB, must use "multi-part upload"'}),"\n",(0,l.jsx)(n.li,{children:"Metadata (list of text key / value pairs - system or user metadata)"}),"\n",(0,l.jsx)(n.li,{children:"Tags (Unicode key / value pair - up to 10) - useful for security / lifecycle"}),"\n",(0,l.jsx)(n.li,{children:"Version ID (if versioning is enabled)"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"security",children:"Security"}),"\n",(0,l.jsx)(n.h2,{id:"user-based",children:"User-Based"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"IAM Policies - which API calls should be allowed for a specific user from IAM"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"resource-based",children:"Resource-Based"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bucket Policies - bucket wide rules from the S3 console - allows cross account"}),"\n",(0,l.jsx)(n.li,{children:"Object Access Control List (ACL) - finer grain (can be disabled)"}),"\n",(0,l.jsx)(n.li,{children:"Bucket Access Control List (ACL) - less common (can be disabled)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"note-an-iam-principal-can-access-an-s3-object-if",children:"Note: an IAM principal can access an S3 object if"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The user IAM permissions ALLOW it OR the resource policy ALLOWS it"}),"\n",(0,l.jsx)(n.li,{children:"AND there's no explicit DENY"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",children:"Encryption: encrypt objects in Amazon S3 using encryption keys"}),"\n",(0,l.jsx)(n.h1,{id:"s3-bucket-policies",children:"S3 bucket policies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["JSON based policies","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Resources: buckets and objects"}),"\n",(0,l.jsx)(n.li,{children:"Effect: Allow / Deny"}),"\n",(0,l.jsx)(n.li,{children:"Actions: Set of APl to Allow or Deny"}),"\n",(0,l.jsx)(n.li,{children:"Principal: The account or user to apply the policy to"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use S3 bucket for policy to:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Grant public access to the bucket"}),"\n",(0,l.jsx)(n.li,{children:"Force objects to be encrypted at upload"}),"\n",(0,l.jsx)(n.li,{children:"Grant access to another account (Cross Account)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-static-website",children:"S3 Static Website"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You need to make all buket to public so that you can access the website."}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-versioning",children:"S3 Versioning"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You can version your files in Amazon S3"}),"\n",(0,l.jsx)(n.li,{children:"It is enabled at the bucket level"}),"\n",(0,l.jsx)(n.li,{children:'Same key overwrite will change the "version": 1, 2,3....'}),"\n",(0,l.jsx)(n.li,{children:"It is best practice to version your buckets"}),"\n",(0,l.jsx)(n.li,{children:"Protect against unintended deletes (ability to restore a version)"}),"\n",(0,l.jsx)(n.li,{children:"Easy roll back to previous version"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Any file that is not versioned prior to enabling versioning will have version "null"'}),"\n",(0,l.jsxs)(n.li,{children:["Suspending versioning does not delete the previous versions\n",(0,l.jsx)(n.img,{alt:"S3 Versioning",src:i(32276).A+"",width:"796",height:"1202"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-replication-crr--srr",children:"S3 Replication (CRR & SRR)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Must enable Versioning in source and destination buckets"}),"\n",(0,l.jsx)(n.li,{children:"Cross-Region Replication (CRR)"}),"\n",(0,l.jsx)(n.li,{children:"Same-Region Replication (SRR)"}),"\n",(0,l.jsx)(n.li,{children:"Buckets can be in different AWS accounts"}),"\n",(0,l.jsx)(n.li,{children:"Copying is asynchronous"}),"\n",(0,l.jsx)(n.li,{children:"Must give proper IAM permissions to S3 asynchronous replication"}),"\n",(0,l.jsx)(n.li,{children:"Use cases:"}),"\n",(0,l.jsx)(n.li,{children:"CRR - compliance, lower latency access, replication across accounts"}),"\n",(0,l.jsx)(n.li,{children:"SRR - log aggregation, live replication between production and test"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-storage-classes",children:"S3 Storage Classes"}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-standard---general-purpose",children:"Amazon S3 Standard - General Purpose"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"99.99% Availability"}),"\n",(0,l.jsx)(n.li,{children:"Used for frequently accessed data"}),"\n",(0,l.jsx)(n.li,{children:"Low latency and high throughput"}),"\n",(0,l.jsx)(n.li,{children:"Sustain 2 concurrent facility failures"}),"\n",(0,l.jsx)(n.li,{children:"Use Cases: Big Data analytics, mobile & gaming applications, content distribution..."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For data that is less frequently accessed, but requires rapid access when needed"}),"\n",(0,l.jsx)(n.li,{children:"Lower cost than S3 Standard"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-standard-infrequent-access-ia",children:"Amazon S3 Standard-Infrequent Access (IA)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"99.9% Availability"}),"\n",(0,l.jsx)(n.li,{children:"Use cases: Disaster Recovery, backups"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-one-zone-infrequent-access",children:"Amazon S3 One Zone-Infrequent Access"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High durability (99.999999999%) in a single AZ; data lost when AZ is destroyed"}),"\n",(0,l.jsx)(n.li,{children:"99.5% Availability"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Low-cost object storage meant for archiving / backup"}),"\n",(0,l.jsx)(n.li,{children:"Pricing: price for storage + object retrieval cost"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-instant-retrieval",children:"Amazon S3 Glacier Instant Retrieval"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Millisecond retrieval, great for data accessed once a quarter"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-flexible-retrieval",children:"Amazon S3 Glacier Flexible Retrieval"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Expedited (I to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) - free"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-deep-archive",children:"Amazon S3 Glacier Deep Archive"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Standard (12 hours), Bulk (48 hours)"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 180 days"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-intelligent-tiering",children:"Amazon S3 Intelligent Tiering"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Small monthly monitoring and auto-tiering fee"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Moves objects automatically between Access Tiers based on usage"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"There are no retrieval charges in S3 Intelligent-Tiering"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Frequent Access tier (automatic): default tier"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Infrequent Access tier (automatic): objects not accessed for 30 days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Archive Instant Access tier (automatic): objects not accessed for 90 days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Archive Access tier (optional): configurable from 90 days to 700+ days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deep Archive Access tier (optional): config. from 180 days to 700+ days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Can move between classes manually or using S3 Lifecycle configurations"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"durability-and-availability",children:"Durability and Availability"}),"\n",(0,l.jsx)(n.h2,{id:"durability",children:"Durability:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High durability (99.999999999%, 1 | 9's) of objects across multiple AZ"}),"\n",(0,l.jsx)(n.li,{children:"If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years"}),"\n",(0,l.jsx)(n.li,{children:"Same for all storage classes"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"availability",children:"Availability:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Measures how readily available a service is"}),"\n",(0,l.jsx)(n.li,{children:"Varies depending on storage class"}),"\n",(0,l.jsx)(n.li,{children:"Example: S3 standard has 99.99% availability = not available 53 minutes a year"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"encryption",children:"Encryption"}),"\n",(0,l.jsx)(n.h2,{id:"server-side-encryption",children:"Server side encryption"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"serverSideEncryption",src:i(39191).A+"",width:"1224",height:"1190"})}),"\n",(0,l.jsx)(n.h2,{id:"client-side-encryption",children:"Client side encryption"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"clientSideEncryption",src:i(45467).A+"",width:"948",height:"1182"})}),"\n",(0,l.jsx)(n.h1,{id:"iam-access-analyzer-for-s3",children:"IAM access analyzer for S3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ensures that only intended people have access to your S3 buckets"}),"\n",(0,l.jsx)(n.li,{children:"Example: publicly accessible bucket, bucket shared with other AWS account..."}),"\n",(0,l.jsx)(n.li,{children:"Evaluates S3 Bucket Policies, S3 ACLs, S3 Access Point Policies"}),"\n",(0,l.jsx)(n.li,{children:"Powered by IAM Access Analyzer"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"share-responsibility-model-for-s3",children:"Share Responsibility Model for S3"}),"\n",(0,l.jsx)(n.h2,{id:"aws-responsibility",children:"AWS responsibility:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities)"}),"\n",(0,l.jsx)(n.li,{children:"Configuration and vulnerability analysis"}),"\n",(0,l.jsx)(n.li,{children:"Compliance validation"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"customer-responsibility",children:"Customer responsibility:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"S3 Versioning"}),"\n",(0,l.jsx)(n.li,{children:"S3 Bucket Policies"}),"\n",(0,l.jsx)(n.li,{children:"S3 Replication Setup"}),"\n",(0,l.jsx)(n.li,{children:"Logging and Monitoring"}),"\n",(0,l.jsx)(n.li,{children:"S3 Storage Classes"}),"\n",(0,l.jsx)(n.li,{children:"Data encryption at rest and in transit"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"moving-between-storage-classes",children:"Moving between Storage Classes"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(25029).A+"",width:"683",height:"500"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You can transition objects between storage classes"}),"\n",(0,l.jsx)(n.li,{children:"For infrequently accessed object, move them to Standard IA"}),"\n",(0,l.jsx)(n.li,{children:"For archive objects that you don\u2019t need fast access to, move them to Glacier or Glacier Deep Archive"}),"\n",(0,l.jsx)(n.li,{children:"Moving objects can be automated using a Lifecycle Rules"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"lifecycle-rules",children:"Lifecycle Rules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Transition Actions \u2013 configure objects to transition to another storage class","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Move objects to Standard IA class 60 days after creation"}),"\n",(0,l.jsx)(n.li,{children:"Move to Glacier for archiving after 6 months"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Expiration actions \u2013 configure objects to expire (delete) after some time","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Access log files can be set to delete after a 365 days"}),"\n",(0,l.jsx)(n.li,{children:"Can be used to delete old versions of files (if versioning is enabled)"}),"\n",(0,l.jsx)(n.li,{children:"Can be used to delete incomplete Multi-Part uploads"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Rules can be created for a certain prefix (example: s3://mybucket/mp3/*)"}),"\n",(0,l.jsx)(n.li,{children:"Rules can be created for certain objects Tags (example: Department: Finance)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"scenario-1-lifecycle-rule",children:"Scenario 1: Lifecycle Rule"}),"\n",(0,l.jsx)(n.p,{children:"Your application on EC2 creates images thumbnails after profile\nphotos are uploaded to Amazon S3. These thumbnails can be easily\nrecreated, and only need to be kept for 60 days. The source images\nshould be able to be immediately retrieved for these 60 days, and\nafterwards, the user can wait up to 6 hours. How would you design\nthis?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"S3 source images can be on Standard, with a lifecycle configuration to\ntransition them to Glacier after 60 days"}),"\n",(0,l.jsx)(n.li,{children:"S3 thumbnails can be on One-Zone IA, with a lifecycle configuration to\nexpire them (delete them) after 60 days"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"scenario-2-lifecycle-rule",children:"Scenario 2: Lifecycle Rule"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A rule in your company states that you should be able to recover your\ndeleted S3 objects immediately for 30 days, although this may happen\nrarely. After this time, and for up to 365 days, deleted objects should\nbe recoverable within 48 hours."}),"\n",(0,l.jsx)(n.li,{children:"Enable S3 Versioning in order to have object versions, so that \u201cdeleted\nobjects\u201d are in fact hidden by a \u201cdelete marker\u201d and can be recovered"}),"\n",(0,l.jsx)(n.li,{children:"Transition the \u201cnoncurrent versions\u201d of the object to Standard IA"}),"\n",(0,l.jsx)(n.li,{children:"Transition afterwards the \u201cnoncurrent versions\u201d to Glacier Deep Archive"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"analytics",children:"Analytics"}),"\n",(0,l.jsx)(n.h3,{id:"s3-storage-class-analysis",children:"S3 Storage Class Analysis"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(6025).A+"",width:"462",height:"637"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Help you decide when to transition objects to the right storage class"}),"\n",(0,l.jsx)(n.li,{children:"Recommendations for Standard and Standard IA"}),"\n",(0,l.jsx)(n.li,{children:"Does NOT work for One-Zone IA or Glacier"}),"\n",(0,l.jsx)(n.li,{children:"Report is updated daily"}),"\n",(0,l.jsx)(n.li,{children:"24 to 48 hours to start seeing data analysis"}),"\n",(0,l.jsx)(n.li,{children:"Good first step to put together Lifecycle Rules(or improve them)!"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"requester-pays",children:"Requester Pays"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(91050).A+"",width:"716",height:"581"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"In general, bucket owners pay for all Amazon S3 storage and data transfer costs associated with their bucket"}),"\n",(0,l.jsx)(n.li,{children:"With Requester Pays buckets, the requester instead of the bucket owner pays the cost of the request and the data download from the bucket"}),"\n",(0,l.jsx)(n.li,{children:"Helpful when you want to share large datasets with other accounts"}),"\n",(0,l.jsx)(n.li,{children:"The requester must be authenticated in AWS (cannot be anonymous)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-event-notifications",children:"S3 Event Notifications"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(36384).A+"",width:"492",height:"574"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["S3",":ObjectCreated",", S3",":ObjectRemoved",",\nS3",":ObjectRestore",", S3",":Replication","\u2026"]}),"\n",(0,l.jsx)(n.li,{children:"Object name filtering possible (*.jpg)"}),"\n",(0,l.jsx)(n.li,{children:"Use case: generate thumbnails of images uploaded to S3"}),"\n",(0,l.jsx)(n.li,{children:"Can create as many \u201cS3 events\u201d as desired"}),"\n",(0,l.jsx)(n.li,{children:"S3 event notifications typically deliver events in seconds but can sometimes take a minute or longer"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"iam-permissions",children:"IAM Permissions"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(74189).A+"",width:"1332",height:"619"})}),"\n",(0,l.jsx)(n.h3,{id:"with-event-bridge",children:"With Event Bridge"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(34794).A+"",width:"892",height:"236"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Advanced filtering options with JSON rules (metadata, object size, name...)"}),"\n",(0,l.jsx)(n.li,{children:"Multiple Destinations \u2013 ex Step Functions, Kinesis Streams / Firehose\u2026"}),"\n",(0,l.jsx)(n.li,{children:"EventBridge Capabilities \u2013 Archive, Replay Events, Reliable delivery"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"baseline-performance",children:"Baseline Performance"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Amazon S3 automatically scales to high request rates, latency 100-200 ms"}),"\n",(0,l.jsx)(n.li,{children:"Your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per prefix in a bucket."}),"\n",(0,l.jsx)(n.li,{children:"There are no limits to the number of prefixes in a bucket."}),"\n",(0,l.jsxs)(n.li,{children:["Example (object path => prefix):","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"bucket/folder1/sub1/file => /folder1/sub1/"}),"\n",(0,l.jsx)(n.li,{children:"bucket/folder1/sub2/file => /folder1/sub2/"}),"\n",(0,l.jsx)(n.li,{children:"bucket/1/file => /1/"}),"\n",(0,l.jsx)(n.li,{children:"bucket/2/file => /2/"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"If you spread reads across all four prefixes evenly, you can achieve 22,000 requests per second for GET and HEAD"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,l.jsx)(n.h3,{id:"multi-part-upload",children:"Multi-Part Upload"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"recommended for files > 100MB, must use for files > 5GB"}),"\n",(0,l.jsxs)(n.li,{children:["Can help parallelize uploads (speed up transfers)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(74373).A+"",width:"488",height:"291"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"s3-transfer-acceleration",children:"S3 Transfer Acceleration"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Increase transfer speed by transferring file to an AWS edge location which will forward the data to the S3 bucket in the target region"}),"\n",(0,l.jsxs)(n.li,{children:["Compatible with multi-part upload\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(60380).A+"",width:"650",height:"240"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"s3-byte-range-fetches",children:"S3 Byte-Range Fetches"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Parallelize GETs by requesting specific byte ranges"}),"\n",(0,l.jsxs)(n.li,{children:["Better resilience in case of failures\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(20709).A+"",width:"1270",height:"414"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"batch-operations",children:"Batch Operations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Perform bulk operations on existing S3 objects with a single request, example:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Modify object metadata & properties"}),"\n",(0,l.jsx)(n.li,{children:"Copy objects between S3 buckets"}),"\n",(0,l.jsx)(n.li,{children:"Encrypt un-encrypted objects"}),"\n",(0,l.jsx)(n.li,{children:"Modify ACLs, tags"}),"\n",(0,l.jsx)(n.li,{children:"Restore objects from S3 Glacier"}),"\n",(0,l.jsx)(n.li,{children:"Invoke Lambda function to perform custom action on each object"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"A job consists of a list of objects, the action to perform , optional parameters"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-storage-lens",children:"S3 Storage Lens"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Understand, analyze, and optimize storage across entire AWS Organization"}),"\n",(0,l.jsx)(n.li,{children:"Discover anomalies, identify cost efficiencies, and apply data protection best practices across entire AWS Organization (30 days usage & activity metrics)"}),"\n",(0,l.jsx)(n.li,{children:"Aggregate data for Organization, specific accounts, regions, buckets, or prefixes"}),"\n",(0,l.jsx)(n.li,{children:"Default dashboard or create your own dashboards"}),"\n",(0,l.jsxs)(n.li,{children:["Can be configured to export metrics daily to an S3 bucket (CSV, Parquet)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(25460).A+"",width:"1271",height:"306"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-access-logs",children:"S3 Access Logs"}),"\n",(0,l.jsx)(n.p,{children:"S3 Access Logs"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For audit purpose, you may want to log all access to S3 buckets"}),"\n",(0,l.jsx)(n.li,{children:"Any request made to S3, from any account, authorized or denied, will be logged into another S3 bucket"}),"\n",(0,l.jsx)(n.li,{children:"That data can be analyzed using data analysis tools\u2026"}),"\n",(0,l.jsx)(n.li,{children:"The target logging bucket must be in the same AWS region"}),"\n",(0,l.jsxs)(n.li,{children:["The log format is at:\n",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/LogFormat.html",children:"https://docs.aws.amazon.com/AmazonS3/latest/dev/LogFormat.html"}),"\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(74734).A+"",width:"284",height:"680"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-pre-signed-urls",children:"S3 Pre-signed URLs"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generate pre-signed URLs using the S3 Console, AWS CLI or SDK"}),"\n",(0,l.jsx)(n.li,{children:"URL Expiration"}),"\n",(0,l.jsx)(n.li,{children:"S3 Console \u2013 1 min up to 720 mins (12 hours)"}),"\n",(0,l.jsx)(n.li,{children:"AWS CLI \u2013 configure expiration with --expires-in parameter in seconds (default 3600 secs, max. 604800 secs ~ 168 hours)"}),"\n",(0,l.jsx)(n.li,{children:"Users given a pre-signed URL inherit the permissions of the user that generated the URL for GET/ PUT"}),"\n",(0,l.jsx)(n.li,{children:"Examples:"}),"\n",(0,l.jsx)(n.li,{children:"Allow only logged-in users to download a premium video from your S3 bucket"}),"\n",(0,l.jsx)(n.li,{children:"Allow an ever-changing list of users to download files by generating URLs dynamically"}),"\n",(0,l.jsx)(n.li,{children:"Allow temporarily a user to upload a file to a precise location in your S3 bucket"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-glacier-vault-lock",children:"S3 Glacier Vault Lock"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Adopt a WORM (Write Once Read Many) model"}),"\n",(0,l.jsx)(n.li,{children:"Create a Vault Lock Policy"}),"\n",(0,l.jsx)(n.li,{children:"Lock the policy for future edits(can no longer be changed or deleted)"}),"\n",(0,l.jsxs)(n.li,{children:["Helpful for compliance and data retention\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(41577).A+"",width:"487",height:"433"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"s3-object-lock-versioning-must-be-enabled",children:"S3 Object Lock (versioning must be enabled)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Adopt a WORM (Write Once Read Many) model"}),"\n",(0,l.jsx)(n.li,{children:"Block an object version deletion for a specified amount of time"}),"\n",(0,l.jsx)(n.li,{children:"Retention mode - Compliance:"}),"\n",(0,l.jsx)(n.li,{children:"Object versions can't be overwritten or deleted by any user, including the root user"}),"\n",(0,l.jsx)(n.li,{children:"Objects retention modes can't be changed, and retention periods can't be shortened"}),"\n",(0,l.jsx)(n.li,{children:"Retention mode - Governance:"}),"\n",(0,l.jsx)(n.li,{children:"Most users can't overwrite or delete an object version or alter its lock settings"}),"\n",(0,l.jsx)(n.li,{children:"Some users have special permissions to change the retention or delete the object"}),"\n",(0,l.jsx)(n.li,{children:"Retention Period: protect the object for a fixed period, it can be extended"}),"\n",(0,l.jsx)(n.li,{children:"Legal Hold:"}),"\n",(0,l.jsx)(n.li,{children:"protect the object indefinitely, independent from retention period"}),"\n",(0,l.jsxs)(n.li,{children:["can be freely placed and removed using the s3",":PutObjectLegalHold"," IAM permission"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"s3-access-points",children:"S3 access points"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(35659).A+"",width:"1193",height:"329"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Access Points simplify security management for S3 Buckets"}),"\n",(0,l.jsxs)(n.li,{children:["Each Access Point has:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"its own DNS name (Internet Origin or VPC Origin)"}),"\n",(0,l.jsx)(n.li,{children:"an access point policy (similar to bucket policy) \u2013 manage security at scale"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"access-points--vpc-origin",children:"Access Points \u2013 VPC Origin"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(4420).A+"",width:"777",height:"603"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"We can define the access point to be accessible only from within the VPC"}),"\n",(0,l.jsx)(n.li,{children:"You must create a VPC Endpoint to access the Access Point (Gateway or Interface Endpoint)"}),"\n",(0,l.jsx)(n.li,{children:"The VPC Endpoint Policy must allow access to the target bucket and Access Point"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"object-lambda",children:"Object Lambda"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(28329).A+"",width:"794",height:"599"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use AWS Lambda Functions to change the object before it is retrieved by the caller application"}),"\n",(0,l.jsx)(n.li,{children:"Only one S3 bucket is needed, on top. of which we create S3 Access Point and S3 Object Lambda Access Points."}),"\n",(0,l.jsx)(n.li,{children:"Use Cases:"}),"\n",(0,l.jsx)(n.li,{children:"Redacting personally identifiable information for analytics or non-production environments."}),"\n",(0,l.jsx)(n.li,{children:"Converting across data formats, such as converting XML to JSON."}),"\n",(0,l.jsx)(n.li,{children:"Resizing and watermarking images on the fly using caller-specific details, such as the user who requested the object."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},74189:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/IAM-permission-4ae363527846edb2e83682bde15a7c30.png"},74734:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/S3-access-log-d964fe5d18f5660431d109760d0eb4cf.png"},41577:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/S3-glacier-vault-lock-be60eb619c4a86e75ee063a4e59d198d.png"},32276:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Versioning-47bae5d44edc9377c6eed11dfa94183c.png"},35659:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/access-point-e5922226155b0e7f6ac64e359a42aff0.png"},6025:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/analytic-37ff31017bd6a094df5648aa7e48cf57.png"},20709:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/byte-range-fetches-c9f8953d50e392742e1a62478615237f.png"},45467:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/client-side-encryption-64e078910e9bf024706463fd36db6a35.png"},34794:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/event-bridge-4688c21daf402b0a470c929966df41df.png"},36384:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/event-notification-21b5a6333439a9fa38b6291c0455c4a4.png"},25029:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/moving-classes-69776f2c4457ce15694313c14c9b8063.png"},74373:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/multi-part-upload-d73268516e6067f5e660d19e0d98e306.png"},28329:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/object-lambda-9c0021a9de8bd86a7985ffa042292ae2.png"},91050:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/requester-pays-483b8e4389bf2a2567f0d7e6ccc9d035.png"},39191:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/server-side-encryption-80a07b32e93757bd2945e3da63549417.png"},25460:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/storage-lens-8e1b437164b0b0232f85584a9558d1dd.png"},60380:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/transfer-acceleration-5e39d91f1fd8069590566ed01dfd48f4.png"},4420:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/vpc-origin-51a08054767d62b1e0e04beef4d53c3a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);