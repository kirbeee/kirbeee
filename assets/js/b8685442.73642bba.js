"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8230],{67739:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"AWS/S3/Introduction","title":"S3 Introduction","description":"- Backup and storage","source":"@site/docs/AWS/S3/Introduction.md","sourceDirName":"AWS/S3","slug":"/AWS/S3/Introduction","permalink":"/kirbeee/docs/AWS/S3/Introduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"S3 Introduction"},"sidebar":"docs","previous":{"title":"Responsibility","permalink":"/kirbeee/docs/AWS/Responsibility"},"next":{"title":"Storage Gateway","permalink":"/kirbeee/docs/AWS/S3/Storage-Gateway"}}');var t=i(74848),a=i(28453);const l={title:"S3 Introduction"},r="Use Case",c={},o=[{value:"Contain",id:"contain",level:2},{value:"User-Based",id:"user-based",level:2},{value:"Resource-Based",id:"resource-based",level:2},{value:"Note: an IAM principal can access an S3 object if",id:"note-an-iam-principal-can-access-an-s3-object-if",level:2},{value:"Encryption: encrypt objects in Amazon S3 using encryption keys",id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",level:2},{value:"Notes:",id:"notes",level:2},{value:"Amazon S3 Standard - General Purpose",id:"amazon-s3-standard---general-purpose",level:2},{value:"Amazon S3 Standard-Infrequent Access (IA)",id:"amazon-s3-standard-infrequent-access-ia",level:2},{value:"Amazon S3 One Zone-Infrequent Access",id:"amazon-s3-one-zone-infrequent-access",level:2},{value:"Amazon S3 Glacier Instant Retrieval",id:"amazon-s3-glacier-instant-retrieval",level:2},{value:"Amazon S3 Glacier Flexible Retrieval",id:"amazon-s3-glacier-flexible-retrieval",level:2},{value:"Amazon S3 Glacier Deep Archive",id:"amazon-s3-glacier-deep-archive",level:2},{value:"Amazon S3 Intelligent Tiering",id:"amazon-s3-intelligent-tiering",level:2},{value:"Durability:",id:"durability",level:2},{value:"Availability:",id:"availability",level:2},{value:"Server side encryption",id:"server-side-encryption",level:2},{value:"Client side encryption",id:"client-side-encryption",level:2},{value:"AWS responsibility:",id:"aws-responsibility",level:2},{value:"Customer responsibility:",id:"customer-responsibility",level:2},{value:"Moving between Storage Classes",id:"moving-between-storage-classes",level:2},{value:"Lifecycle Rules",id:"lifecycle-rules",level:2},{value:"Scenario 1: Lifecycle Rule",id:"scenario-1-lifecycle-rule",level:3},{value:"Scenario 2: Lifecycle Rule",id:"scenario-2-lifecycle-rule",level:3},{value:"Analytics",id:"analytics",level:2},{value:"S3 Storage Class Analysis",id:"s3-storage-class-analysis",level:3},{value:"Requester Pays",id:"requester-pays",level:2},{value:"S3 Event Notifications",id:"s3-event-notifications",level:2},{value:"IAM Permissions",id:"iam-permissions",level:3},{value:"With Event Bridge",id:"with-event-bridge",level:3},{value:"Baseline Performance",id:"baseline-performance",level:2},{value:"Performance",id:"performance",level:2},{value:"Multi-Part Upload",id:"multi-part-upload",level:3},{value:"S3 Transfer Acceleration",id:"s3-transfer-acceleration",level:3},{value:"S3 Byte-Range Fetches",id:"s3-byte-range-fetches",level:3},{value:"Batch Operations",id:"batch-operations",level:3},{value:"S3 Storage Lens",id:"s3-storage-lens",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"use-case",children:"Use Case"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Backup and storage"}),"\n",(0,t.jsx)(n.li,{children:"Disaster Recovery"}),"\n",(0,t.jsx)(n.li,{children:"Archive"}),"\n",(0,t.jsx)(n.li,{children:"Hybrid Cloud storage"}),"\n",(0,t.jsx)(n.li,{children:"Application hosting"}),"\n",(0,t.jsx)(n.li,{children:"Media hosting"}),"\n",(0,t.jsx)(n.li,{children:"Data lakes & big data analytics"}),"\n",(0,t.jsx)(n.li,{children:"Software delivery"}),"\n",(0,t.jsx)(n.li,{children:"Static website"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"bucket",children:"Bucket"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Amazon S3 allows people to store objects (files) in "buckets" (directories)'}),"\n",(0,t.jsx)(n.li,{children:"Buckets must have a globally unique name (across all regions all accounts)"}),"\n",(0,t.jsx)(n.li,{children:"Buckets are defined at the region level"}),"\n",(0,t.jsx)(n.li,{children:"S3 looks like a global service but buckets are created in a region"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"objects",children:"Objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Objects (files) have a Key"}),"\n",(0,t.jsxs)(n.li,{children:["The key is the FULL path:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"s3://my-bucket/my_file.txt"}),"\n",(0,t.jsx)(n.li,{children:"s3://my-bucket/my_folderl/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The key is composed of prefix + object name","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"s3://my-bucket/my_folder|/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'There\'s no concept of "directories" within buckets (although the Ul will trick you to think otherwise)'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contain",children:"Contain"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Object values are the content of the body:"}),"\n",(0,t.jsx)(n.li,{children:"Max. Object Size is 5TB (5000GB)"}),"\n",(0,t.jsx)(n.li,{children:'If uploading more than 5GB, must use "multi-part upload"'}),"\n",(0,t.jsx)(n.li,{children:"Metadata (list of text key / value pairs - system or user metadata)"}),"\n",(0,t.jsx)(n.li,{children:"Tags (Unicode key / value pair - up to 10) - useful for security / lifecycle"}),"\n",(0,t.jsx)(n.li,{children:"Version ID (if versioning is enabled)"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"security",children:"Security"}),"\n",(0,t.jsx)(n.h2,{id:"user-based",children:"User-Based"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IAM Policies - which API calls should be allowed for a specific user from IAM"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resource-based",children:"Resource-Based"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bucket Policies - bucket wide rules from the S3 console - allows cross account"}),"\n",(0,t.jsx)(n.li,{children:"Object Access Control List (ACL) - finer grain (can be disabled)"}),"\n",(0,t.jsx)(n.li,{children:"Bucket Access Control List (ACL) - less common (can be disabled)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"note-an-iam-principal-can-access-an-s3-object-if",children:"Note: an IAM principal can access an S3 object if"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The user IAM permissions ALLOW it OR the resource policy ALLOWS it"}),"\n",(0,t.jsx)(n.li,{children:"AND there's no explicit DENY"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",children:"Encryption: encrypt objects in Amazon S3 using encryption keys"}),"\n",(0,t.jsx)(n.h1,{id:"s3-bucket-policies",children:"S3 bucket policies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["JSON based policies","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Resources: buckets and objects"}),"\n",(0,t.jsx)(n.li,{children:"Effect: Allow / Deny"}),"\n",(0,t.jsx)(n.li,{children:"Actions: Set of APl to Allow or Deny"}),"\n",(0,t.jsx)(n.li,{children:"Principal: The account or user to apply the policy to"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use S3 bucket for policy to:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Grant public access to the bucket"}),"\n",(0,t.jsx)(n.li,{children:"Force objects to be encrypted at upload"}),"\n",(0,t.jsx)(n.li,{children:"Grant access to another account (Cross Account)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"s3-static-website",children:"S3 Static Website"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You need to make all buket to public so that you can access the website."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"s3-versioning",children:"S3 Versioning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can version your files in Amazon S3"}),"\n",(0,t.jsx)(n.li,{children:"It is enabled at the bucket level"}),"\n",(0,t.jsx)(n.li,{children:'Same key overwrite will change the "version": 1, 2,3....'}),"\n",(0,t.jsx)(n.li,{children:"It is best practice to version your buckets"}),"\n",(0,t.jsx)(n.li,{children:"Protect against unintended deletes (ability to restore a version)"}),"\n",(0,t.jsx)(n.li,{children:"Easy roll back to previous version"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Any file that is not versioned prior to enabling versioning will have version "null"'}),"\n",(0,t.jsxs)(n.li,{children:["Suspending versioning does not delete the previous versions\n",(0,t.jsx)(n.img,{alt:"S3 Versioning",src:i(32276).A+"",width:"796",height:"1202"})]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"s3-replication-crr--srr",children:"S3 Replication (CRR & SRR)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Must enable Versioning in source and destination buckets"}),"\n",(0,t.jsx)(n.li,{children:"Cross-Region Replication (CRR)"}),"\n",(0,t.jsx)(n.li,{children:"Same-Region Replication (SRR)"}),"\n",(0,t.jsx)(n.li,{children:"Buckets can be in different AWS accounts"}),"\n",(0,t.jsx)(n.li,{children:"Copying is asynchronous"}),"\n",(0,t.jsx)(n.li,{children:"Must give proper IAM permissions to S3 asynchronous replication"}),"\n",(0,t.jsx)(n.li,{children:"Use cases:"}),"\n",(0,t.jsx)(n.li,{children:"CRR - compliance, lower latency access, replication across accounts"}),"\n",(0,t.jsx)(n.li,{children:"SRR - log aggregation, live replication between production and test"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"s3-storage-classes",children:"S3 Storage Classes"}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-standard---general-purpose",children:"Amazon S3 Standard - General Purpose"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"99.99% Availability"}),"\n",(0,t.jsx)(n.li,{children:"Used for frequently accessed data"}),"\n",(0,t.jsx)(n.li,{children:"Low latency and high throughput"}),"\n",(0,t.jsx)(n.li,{children:"Sustain 2 concurrent facility failures"}),"\n",(0,t.jsx)(n.li,{children:"Use Cases: Big Data analytics, mobile & gaming applications, content distribution..."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For data that is less frequently accessed, but requires rapid access when needed"}),"\n",(0,t.jsx)(n.li,{children:"Lower cost than S3 Standard"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-standard-infrequent-access-ia",children:"Amazon S3 Standard-Infrequent Access (IA)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"99.9% Availability"}),"\n",(0,t.jsx)(n.li,{children:"Use cases: Disaster Recovery, backups"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-one-zone-infrequent-access",children:"Amazon S3 One Zone-Infrequent Access"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"High durability (99.999999999%) in a single AZ; data lost when AZ is destroyed"}),"\n",(0,t.jsx)(n.li,{children:"99.5% Availability"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Low-cost object storage meant for archiving / backup"}),"\n",(0,t.jsx)(n.li,{children:"Pricing: price for storage + object retrieval cost"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-glacier-instant-retrieval",children:"Amazon S3 Glacier Instant Retrieval"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Millisecond retrieval, great for data accessed once a quarter"}),"\n",(0,t.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-glacier-flexible-retrieval",children:"Amazon S3 Glacier Flexible Retrieval"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Expedited (I to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) - free"}),"\n",(0,t.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-glacier-deep-archive",children:"Amazon S3 Glacier Deep Archive"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Standard (12 hours), Bulk (48 hours)"}),"\n",(0,t.jsx)(n.li,{children:"Minimum storage duration of 180 days"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"amazon-s3-intelligent-tiering",children:"Amazon S3 Intelligent Tiering"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Small monthly monitoring and auto-tiering fee"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Moves objects automatically between Access Tiers based on usage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"There are no retrieval charges in S3 Intelligent-Tiering"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Frequent Access tier (automatic): default tier"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Infrequent Access tier (automatic): objects not accessed for 30 days"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Archive Instant Access tier (automatic): objects not accessed for 90 days"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Archive Access tier (optional): configurable from 90 days to 700+ days"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deep Archive Access tier (optional): config. from 180 days to 700+ days"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Can move between classes manually or using S3 Lifecycle configurations"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"durability-and-availability",children:"Durability and Availability"}),"\n",(0,t.jsx)(n.h2,{id:"durability",children:"Durability:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"High durability (99.999999999%, 1 | 9's) of objects across multiple AZ"}),"\n",(0,t.jsx)(n.li,{children:"If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years"}),"\n",(0,t.jsx)(n.li,{children:"Same for all storage classes"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"availability",children:"Availability:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Measures how readily available a service is"}),"\n",(0,t.jsx)(n.li,{children:"Varies depending on storage class"}),"\n",(0,t.jsx)(n.li,{children:"Example: S3 standard has 99.99% availability = not available 53 minutes a year"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"encryption",children:"Encryption"}),"\n",(0,t.jsx)(n.h2,{id:"server-side-encryption",children:"Server side encryption"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"serverSideEncryption",src:i(39191).A+"",width:"1224",height:"1190"})}),"\n",(0,t.jsx)(n.h2,{id:"client-side-encryption",children:"Client side encryption"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"clientSideEncryption",src:i(45467).A+"",width:"948",height:"1182"})}),"\n",(0,t.jsx)(n.h1,{id:"iam-access-analyzer-for-s3",children:"IAM access analyzer for S3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures that only intended people have access to your S3 buckets"}),"\n",(0,t.jsx)(n.li,{children:"Example: publicly accessible bucket, bucket shared with other AWS account..."}),"\n",(0,t.jsx)(n.li,{children:"Evaluates S3 Bucket Policies, S3 ACLs, S3 Access Point Policies"}),"\n",(0,t.jsx)(n.li,{children:"Powered by IAM Access Analyzer"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"share-responsibility-model-for-s3",children:"Share Responsibility Model for S3"}),"\n",(0,t.jsx)(n.h2,{id:"aws-responsibility",children:"AWS responsibility:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities)"}),"\n",(0,t.jsx)(n.li,{children:"Configuration and vulnerability analysis"}),"\n",(0,t.jsx)(n.li,{children:"Compliance validation"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"customer-responsibility",children:"Customer responsibility:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"S3 Versioning"}),"\n",(0,t.jsx)(n.li,{children:"S3 Bucket Policies"}),"\n",(0,t.jsx)(n.li,{children:"S3 Replication Setup"}),"\n",(0,t.jsx)(n.li,{children:"Logging and Monitoring"}),"\n",(0,t.jsx)(n.li,{children:"S3 Storage Classes"}),"\n",(0,t.jsx)(n.li,{children:"Data encryption at rest and in transit"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"moving-between-storage-classes",children:"Moving between Storage Classes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:i(25029).A+"",width:"683",height:"500"}),"\n\u2022 You can transition objects between storage classes\n\u2022 For infrequently accessed object, move them to Standard IA\n\u2022 For archive objects that you don\u2019t need fast access to, move them to Glacier or Glacier Deep Archive\n\u2022 Moving objects can be automated using a Lifecycle Rules"]}),"\n",(0,t.jsx)(n.h2,{id:"lifecycle-rules",children:"Lifecycle Rules"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Transition Actions \u2013 configure objects to transition to another storage class\n\u2022 Move objects to Standard IA class 60 days after creation\n\u2022 Move to Glacier for archiving after 6 months\n\u2022 Expiration actions \u2013 configure objects to expire (delete) after some time\n\u2022 Access log files can be set to delete after a 365 days\n\u2022 Can be used to delete old versions of files (if versioning is enabled)\n\u2022 Can be used to delete incomplete Multi-Part uploads\n\u2022 Rules can be created for a certain prefix (example: s3://mybucket/mp3/*)\n\u2022 Rules can be created for certain objects Tags (example: Department: Finance)"}),"\n",(0,t.jsx)(n.h3,{id:"scenario-1-lifecycle-rule",children:"Scenario 1: Lifecycle Rule"}),"\n",(0,t.jsx)(n.p,{children:"Your application on EC2 creates images thumbnails after profile\nphotos are uploaded to Amazon S3. These thumbnails can be easily\nrecreated, and only need to be kept for 60 days. The source images\nshould be able to be immediately retrieved for these 60 days, and\nafterwards, the user can wait up to 6 hours. How would you design\nthis?\n\u2022 S3 source images can be on Standard, with a lifecycle configuration to\ntransition them to Glacier after 60 days\n\u2022 S3 thumbnails can be on One-Zone IA, with a lifecycle configuration to\nexpire them (delete them) after 60 days"}),"\n",(0,t.jsx)(n.h3,{id:"scenario-2-lifecycle-rule",children:"Scenario 2: Lifecycle Rule"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 A rule in your company states that you should be able to recover your\ndeleted S3 objects immediately for 30 days, although this may happen\nrarely. After this time, and for up to 365 days, deleted objects should\nbe recoverable within 48 hours.\n\u2022 Enable S3 Versioning in order to have object versions, so that \u201cdeleted\nobjects\u201d are in fact hidden by a \u201cdelete marker\u201d and can be recovered\n\u2022 Transition the \u201cnoncurrent versions\u201d of the object to Standard IA\n\u2022 Transition afterwards the \u201cnoncurrent versions\u201d to Glacier Deep Archive"}),"\n",(0,t.jsx)(n.h2,{id:"analytics",children:"Analytics"}),"\n",(0,t.jsx)(n.h3,{id:"s3-storage-class-analysis",children:"S3 Storage Class Analysis"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:i(6025).A+"",width:"462",height:"637"}),"\n\u2022 Help you decide when to transition objects to the right storage class\n\u2022 Recommendations for Standard and Standard IA\n\u2022 Does NOT work for One-Zone IA or Glacier\n\u2022 Report is updated daily\n\u2022 24 to 48 hours to start seeing data analysis\n\u2022 Good first step to put together Lifecycle Rules(or improve them)!"]}),"\n",(0,t.jsx)(n.h2,{id:"requester-pays",children:"Requester Pays"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:i(91050).A+"",width:"716",height:"581"}),"\n\u2022 In general, bucket owners pay for all Amazon S3 storage and data transfer costs associated with their bucket\n\u2022 With Requester Pays buckets, the requester instead of the bucket owner pays the cost of the request and the data download from the bucket\n\u2022 Helpful when you want to share large datasets with other accounts\n\u2022 The requester must be authenticated in AWS (cannot be anonymous)"]}),"\n",(0,t.jsx)(n.h2,{id:"s3-event-notifications",children:"S3 Event Notifications"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:i(36384).A+"",width:"492",height:"574"}),"\n\u2022 S3",":ObjectCreated",", S3",":ObjectRemoved",",\nS3",":ObjectRestore",", S3",":Replication","\u2026\n\u2022 Object name filtering possible (*.jpg)\n\u2022 Use case: generate thumbnails of images uploaded to S3\n\u2022 Can create as many \u201cS3 events\u201d as desired\n\u2022 S3 event notifications typically deliver events in seconds but can sometimes take a minute or longer"]}),"\n",(0,t.jsx)(n.h3,{id:"iam-permissions",children:"IAM Permissions"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img.png",src:i(74189).A+"",width:"1332",height:"619"})}),"\n",(0,t.jsx)(n.h3,{id:"with-event-bridge",children:"With Event Bridge"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:i(34794).A+"",width:"892",height:"236"}),"\n\u2022 Advanced filtering options with JSON rules (metadata, object size, name...)\n\u2022 Multiple Destinations \u2013 ex Step Functions, Kinesis Streams / Firehose\u2026\n\u2022 EventBridge Capabilities \u2013 Archive, Replay Events, Reliable delivery"]}),"\n",(0,t.jsx)(n.h2,{id:"baseline-performance",children:"Baseline Performance"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Amazon S3 automatically scales to high request rates, latency 100-200 ms\n\u2022 Your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per prefix in a bucket.\n\u2022 There are no limits to the number of prefixes in a bucket.\n\u2022 Example (object path => prefix):\n\u2022 bucket/folder1/sub1/file => /folder1/sub1/\n\u2022 bucket/folder1/sub2/file => /folder1/sub2/\n\u2022 bucket/1/file => /1/\n\u2022 bucket/2/file => /2/\n\u2022 If you spread reads across all four prefixes evenly, you can achieve 22,000 requests per second for GET and HEAD"}),"\n",(0,t.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,t.jsx)(n.h3,{id:"multi-part-upload",children:"Multi-Part Upload"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 recommended for files > 100MB, must use for files > 5GB\n\u2022 Can help parallelize uploads (speed up transfers)\n",(0,t.jsx)(n.img,{alt:"img.png",src:i(74373).A+"",width:"488",height:"291"})]}),"\n",(0,t.jsx)(n.h3,{id:"s3-transfer-acceleration",children:"S3 Transfer Acceleration"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 Increase transfer speed by transferring file to an AWS edge location which will forward the data to the S3 bucket in the target region\n\u2022 Compatible with multi-part upload\n",(0,t.jsx)(n.img,{alt:"img.png",src:i(60380).A+"",width:"650",height:"240"})]}),"\n",(0,t.jsx)(n.h3,{id:"s3-byte-range-fetches",children:"S3 Byte-Range Fetches"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parallelize GETs by requesting specific byte ranges"}),"\n",(0,t.jsxs)(n.li,{children:["Better resilience in case of failures\n",(0,t.jsx)(n.img,{alt:"img.png",src:i(20709).A+"",width:"1270",height:"414"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"batch-operations",children:"Batch Operations"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Perform bulk operations on existing S3 objects with a single request, example:\n\u2022 Modify object metadata & properties\n\u2022 Copy objects between S3 buckets\n\u2022 Encrypt un-encrypted objects\n\u2022 Modify ACLs, tags\n\u2022 Restore objects from S3 Glacier\n\u2022 Invoke Lambda function to perform custom action on each object\n\u2022 A job consists of a list of objects, the action to perform , optional parameters"}),"\n",(0,t.jsx)(n.h2,{id:"s3-storage-lens",children:"S3 Storage Lens"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Understand, analyze, and optimize storage across entire AWS Organization\n\u2022 Discover anomalies, identify cost efficiencies, and apply data protection best practices across entire AWS Organization (30 days usage & activity metrics)\n\u2022 Aggregate data for Organization, specific accounts, regions, buckets, or prefixes\n\u2022 Default dashboard or create your own dashboards\n\u2022 Can be configured to export metrics daily to an S3 bucket (CSV, Parquet)\n",(0,t.jsx)(n.img,{alt:"img.png",src:i(25460).A+"",width:"1271",height:"306"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},74189:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/IAM-permission-4ae363527846edb2e83682bde15a7c30.png"},32276:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Versioning-47bae5d44edc9377c6eed11dfa94183c.png"},6025:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/analytic-37ff31017bd6a094df5648aa7e48cf57.png"},20709:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/byte-range-fetches-c9f8953d50e392742e1a62478615237f.png"},45467:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/client-side-encryption-64e078910e9bf024706463fd36db6a35.png"},34794:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/event-bridge-4688c21daf402b0a470c929966df41df.png"},36384:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/event-notification-21b5a6333439a9fa38b6291c0455c4a4.png"},25029:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/moving-classes-69776f2c4457ce15694313c14c9b8063.png"},74373:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/multi-part-upload-d73268516e6067f5e660d19e0d98e306.png"},91050:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/requester-pays-483b8e4389bf2a2567f0d7e6ccc9d035.png"},39191:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/server-side-encryption-80a07b32e93757bd2945e3da63549417.png"},25460:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/storage-lens-8e1b437164b0b0232f85584a9558d1dd.png"},60380:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/transfer-acceleration-5e39d91f1fd8069590566ed01dfd48f4.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);