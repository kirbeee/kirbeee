"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3521],{547:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"AWS/S3/Introduction","title":"S3 Introduction","description":"- Backup and storage","source":"@site/docs/AWS/S3/Introduction.mdx","sourceDirName":"AWS/S3","slug":"/AWS/S3/Introduction","permalink":"/kirbeee/ja-JP/docs/AWS/S3/Introduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"S3 Introduction"},"sidebar":"docs","previous":{"title":"Responsibility","permalink":"/kirbeee/ja-JP/docs/AWS/Responsibility"},"next":{"title":"Storage Gateway","permalink":"/kirbeee/ja-JP/docs/AWS/S3/Storage-Gateway"}}');var l=i(4848),r=i(8453);const c={title:"S3 Introduction"},t="Use Case",a={},o=[{value:"Contain",id:"contain",level:2},{value:"User-Based",id:"user-based",level:2},{value:"Resource-Based",id:"resource-based",level:2},{value:"Note: an IAM principal can access an S3 object if",id:"note-an-iam-principal-can-access-an-s3-object-if",level:2},{value:"Encryption: encrypt objects in Amazon S3 using encryption keys",id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",level:2},{value:"Notes:",id:"notes",level:2},{value:"Amazon S3 Standard - General Purpose",id:"amazon-s3-standard---general-purpose",level:2},{value:"Amazon S3 Standard-Infrequent Access (IA)",id:"amazon-s3-standard-infrequent-access-ia",level:2},{value:"Amazon S3 One Zone-Infrequent Access",id:"amazon-s3-one-zone-infrequent-access",level:2},{value:"Amazon S3 Glacier Instant Retrieval",id:"amazon-s3-glacier-instant-retrieval",level:2},{value:"Amazon S3 Glacier Flexible Retrieval",id:"amazon-s3-glacier-flexible-retrieval",level:2},{value:"Amazon S3 Glacier Deep Archive",id:"amazon-s3-glacier-deep-archive",level:2},{value:"Amazon S3 Intelligent Tiering",id:"amazon-s3-intelligent-tiering",level:2},{value:"Durability:",id:"durability",level:2},{value:"Availability:",id:"availability",level:2},{value:"Server side encryption",id:"server-side-encryption",level:2},{value:"Client side encryption",id:"client-side-encryption",level:2},{value:"AWS responsibility:",id:"aws-responsibility",level:2},{value:"Customer responsibility:",id:"customer-responsibility",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"use-case",children:"Use Case"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Backup and storage"}),"\n",(0,l.jsx)(n.li,{children:"Disaster Recovery"}),"\n",(0,l.jsx)(n.li,{children:"Archive"}),"\n",(0,l.jsx)(n.li,{children:"Hybrid Cloud storage"}),"\n",(0,l.jsx)(n.li,{children:"Application hosting"}),"\n",(0,l.jsx)(n.li,{children:"Media hosting"}),"\n",(0,l.jsx)(n.li,{children:"Data lakes & big data analytics"}),"\n",(0,l.jsx)(n.li,{children:"Software delivery"}),"\n",(0,l.jsx)(n.li,{children:"Static website"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"bucket",children:"Bucket"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Amazon S3 allows people to store objects (files) in "buckets" (directories)'}),"\n",(0,l.jsx)(n.li,{children:"Buckets must have a globally unique name (across all regions all accounts)"}),"\n",(0,l.jsx)(n.li,{children:"Buckets are defined at the region level"}),"\n",(0,l.jsx)(n.li,{children:"S3 looks like a global service but buckets are created in a region"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"objects",children:"Objects"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Objects (files) have a Key"}),"\n",(0,l.jsxs)(n.li,{children:["The key is the FULL path:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_file.txt"}),"\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_folderl/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["The key is composed of prefix + object name","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"s3://my-bucket/my_folder|/another_folder/my_file.txt"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:'There\'s no concept of "directories" within buckets (although the Ul will trick you to think otherwise)'}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"contain",children:"Contain"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Object values are the content of the body:"}),"\n",(0,l.jsx)(n.li,{children:"Max. Object Size is 5TB (5000GB)"}),"\n",(0,l.jsx)(n.li,{children:'If uploading more than 5GB, must use "multi-part upload"'}),"\n",(0,l.jsx)(n.li,{children:"Metadata (list of text key / value pairs - system or user metadata)"}),"\n",(0,l.jsx)(n.li,{children:"Tags (Unicode key / value pair - up to 10) - useful for security / lifecycle"}),"\n",(0,l.jsx)(n.li,{children:"Version ID (if versioning is enabled)"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"security",children:"Security"}),"\n",(0,l.jsx)(n.h2,{id:"user-based",children:"User-Based"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"IAM Policies - which API calls should be allowed for a specific user from IAM"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"resource-based",children:"Resource-Based"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bucket Policies - bucket wide rules from the S3 console - allows cross account"}),"\n",(0,l.jsx)(n.li,{children:"Object Access Control List (ACL) - finer grain (can be disabled)"}),"\n",(0,l.jsx)(n.li,{children:"Bucket Access Control List (ACL) - less common (can be disabled)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"note-an-iam-principal-can-access-an-s3-object-if",children:"Note: an IAM principal can access an S3 object if"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The user IAM permissions ALLOW it OR the resource policy ALLOWS it"}),"\n",(0,l.jsx)(n.li,{children:"AND there's no explicit DENY"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"encryption-encrypt-objects-in-amazon-s3-using-encryption-keys",children:"Encryption: encrypt objects in Amazon S3 using encryption keys"}),"\n",(0,l.jsx)(n.h1,{id:"s3-bucket-policies",children:"S3 bucket policies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["JSON based policies","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Resources: buckets and objects"}),"\n",(0,l.jsx)(n.li,{children:"Effect: Allow / Deny"}),"\n",(0,l.jsx)(n.li,{children:"Actions: Set of APl to Allow or Deny"}),"\n",(0,l.jsx)(n.li,{children:"Principal: The account or user to apply the policy to"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use S3 bucket for policy to:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Grant public access to the bucket"}),"\n",(0,l.jsx)(n.li,{children:"Force objects to be encrypted at upload"}),"\n",(0,l.jsx)(n.li,{children:"Grant access to another account (Cross Account)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-static-website",children:"S3 Static Website"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You need to make all buket to public so that you can access the website."}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-versioning",children:"S3 Versioning"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You can version your files in Amazon S3"}),"\n",(0,l.jsx)(n.li,{children:"It is enabled at the bucket level"}),"\n",(0,l.jsx)(n.li,{children:'Same key overwrite will change the "version": 1, 2,3....'}),"\n",(0,l.jsx)(n.li,{children:"It is best practice to version your buckets"}),"\n",(0,l.jsx)(n.li,{children:"Protect against unintended deletes (ability to restore a version)"}),"\n",(0,l.jsx)(n.li,{children:"Easy roll back to previous version"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Any file that is not versioned prior to enabling versioning will have version "null"'}),"\n",(0,l.jsxs)(n.li,{children:["Suspending versioning does not delete the previous versions\n",(0,l.jsx)(n.img,{alt:"S3 Versioning",src:i(2276).A+"",width:"796",height:"1202"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-replication-crr--srr",children:"S3 Replication (CRR & SRR)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Must enable Versioning in source and destination buckets"}),"\n",(0,l.jsx)(n.li,{children:"Cross-Region Replication (CRR)"}),"\n",(0,l.jsx)(n.li,{children:"Same-Region Replication (SRR)"}),"\n",(0,l.jsx)(n.li,{children:"Buckets can be in different AWS accounts"}),"\n",(0,l.jsx)(n.li,{children:"Copying is asynchronous"}),"\n",(0,l.jsx)(n.li,{children:"Must give proper IAM permissions to S3 asynchronous replication"}),"\n",(0,l.jsx)(n.li,{children:"Use cases:"}),"\n",(0,l.jsx)(n.li,{children:"CRR - compliance, lower latency access, replication across accounts"}),"\n",(0,l.jsx)(n.li,{children:"SRR - log aggregation, live replication between production and test"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"s3-storage-classes",children:"S3 Storage Classes"}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-standard---general-purpose",children:"Amazon S3 Standard - General Purpose"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"99.99% Availability"}),"\n",(0,l.jsx)(n.li,{children:"Used for frequently accessed data"}),"\n",(0,l.jsx)(n.li,{children:"Low latency and high throughput"}),"\n",(0,l.jsx)(n.li,{children:"Sustain 2 concurrent facility failures"}),"\n",(0,l.jsx)(n.li,{children:"Use Cases: Big Data analytics, mobile & gaming applications, content distribution..."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For data that is less frequently accessed, but requires rapid access when needed"}),"\n",(0,l.jsx)(n.li,{children:"Lower cost than S3 Standard"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-standard-infrequent-access-ia",children:"Amazon S3 Standard-Infrequent Access (IA)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"99.9% Availability"}),"\n",(0,l.jsx)(n.li,{children:"Use cases: Disaster Recovery, backups"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-one-zone-infrequent-access",children:"Amazon S3 One Zone-Infrequent Access"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High durability (99.999999999%) in a single AZ; data lost when AZ is destroyed"}),"\n",(0,l.jsx)(n.li,{children:"99.5% Availability"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Low-cost object storage meant for archiving / backup"}),"\n",(0,l.jsx)(n.li,{children:"Pricing: price for storage + object retrieval cost"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-instant-retrieval",children:"Amazon S3 Glacier Instant Retrieval"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Millisecond retrieval, great for data accessed once a quarter"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-flexible-retrieval",children:"Amazon S3 Glacier Flexible Retrieval"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Expedited (I to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) - free"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 90 days"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-glacier-deep-archive",children:"Amazon S3 Glacier Deep Archive"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Standard (12 hours), Bulk (48 hours)"}),"\n",(0,l.jsx)(n.li,{children:"Minimum storage duration of 180 days"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"amazon-s3-intelligent-tiering",children:"Amazon S3 Intelligent Tiering"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Small monthly monitoring and auto-tiering fee"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Moves objects automatically between Access Tiers based on usage"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"There are no retrieval charges in S3 Intelligent-Tiering"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Frequent Access tier (automatic): default tier"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Infrequent Access tier (automatic): objects not accessed for 30 days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Archive Instant Access tier (automatic): objects not accessed for 90 days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Archive Access tier (optional): configurable from 90 days to 700+ days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deep Archive Access tier (optional): config. from 180 days to 700+ days"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Can move between classes manually or using S3 Lifecycle configurations"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"durability-and-availability",children:"Durability and Availability"}),"\n",(0,l.jsx)(n.h2,{id:"durability",children:"Durability:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High durability (99.999999999%, 1 | 9's) of objects across multiple AZ"}),"\n",(0,l.jsx)(n.li,{children:"If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years"}),"\n",(0,l.jsx)(n.li,{children:"Same for all storage classes"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"availability",children:"Availability:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Measures how readily available a service is"}),"\n",(0,l.jsx)(n.li,{children:"Varies depending on storage class"}),"\n",(0,l.jsx)(n.li,{children:"Example: S3 standard has 99.99% availability = not available 53 minutes a year"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"encryption",children:"Encryption"}),"\n",(0,l.jsx)(n.h2,{id:"server-side-encryption",children:"Server side encryption"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"serverSideEncryption",src:i(9191).A+"",width:"1224",height:"1190"})}),"\n",(0,l.jsx)(n.h2,{id:"client-side-encryption",children:"Client side encryption"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"clientSideEncryption",src:i(5467).A+"",width:"948",height:"1182"})}),"\n",(0,l.jsx)(n.h1,{id:"iam-access-analyzer-for-s3",children:"IAM access analyzer for S3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ensures that only intended people have access to your S3 buckets"}),"\n",(0,l.jsx)(n.li,{children:"Example: publicly accessible bucket, bucket shared with other AWS account..."}),"\n",(0,l.jsx)(n.li,{children:"Evaluates S3 Bucket Policies, S3 ACLs, S3 Access Point Policies"}),"\n",(0,l.jsx)(n.li,{children:"Powered by IAM Access Analyzer"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"share-responsibility-model-for-s3",children:"Share Responsibility Model for S3"}),"\n",(0,l.jsx)(n.h2,{id:"aws-responsibility",children:"AWS responsibility:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities)"}),"\n",(0,l.jsx)(n.li,{children:"Configuration and vulnerability analysis"}),"\n",(0,l.jsx)(n.li,{children:"Compliance validation"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"customer-responsibility",children:"Customer responsibility:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"S3 Versioning"}),"\n",(0,l.jsx)(n.li,{children:"S3 Bucket Policies"}),"\n",(0,l.jsx)(n.li,{children:"S3 Replication Setup"}),"\n",(0,l.jsx)(n.li,{children:"Logging and Monitoring"}),"\n",(0,l.jsx)(n.li,{children:"S3 Storage Classes"}),"\n",(0,l.jsx)(n.li,{children:"Data encryption at rest and in transit"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},2276:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Versioning-47bae5d44edc9377c6eed11dfa94183c.png"},5467:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/client-side-encryption-64e078910e9bf024706463fd36db6a35.png"},9191:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/server-side-encryption-80a07b32e93757bd2945e3da63549417.png"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(6540);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);