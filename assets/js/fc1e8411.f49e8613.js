"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3814],{37537:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"AWS/EC2/EFS","title":"EFS (Elastic File System)","description":"- Managed NFS (network file system) that can be mounted on 100s of EC2","source":"@site/docs/AWS/EC2/EFS.md","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/EFS","permalink":"/docs/AWS/EC2/EFS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EFS (Elastic File System)"},"sidebar":"docs","previous":{"title":"EC2 Image Builder","permalink":"/docs/AWS/EC2/EC2-Image-Builder"},"next":{"title":"Elastic IP","permalink":"/docs/AWS/EC2/Elastic-ip"}}');var t=i(74848),l=i(28453);const a={title:"EFS (Elastic File System)"},r="EFS (Elastic File System)",c={},o=[{value:"EFS Performance classes",id:"efs-performance-classes",level:2},{value:"EFS Scale",id:"efs-scale",level:3},{value:"Performance Mode (set at EFS creation time)",id:"performance-mode-set-at-efs-creation-time",level:3},{value:"Throughput Mode",id:"throughput-mode",level:3},{value:"EFS Storage classes",id:"efs-storage-classes",level:2},{value:"Storage Tiers (lifecycle management feature \u2013 move file after N days)",id:"storage-tiers-lifecycle-management-feature--move-file-after-n-days",level:3},{value:"Availability and durability",id:"availability-and-durability",level:3},{value:"EFS-IA(Infrequent access)",id:"efs-iainfrequent-access",level:3},{value:"EFS vs EBS",id:"efs-vs-ebs",level:2}];function d(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"efs-elastic-file-system",children:"EFS (Elastic File System)"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Managed NFS (network file system) that can be mounted on 100s of EC2"}),"\n",(0,t.jsx)(s.li,{children:"EFS works with Linux EC2 instances in multi-AZ"}),"\n",(0,t.jsx)(s.li,{children:"Highly available, scalable, expensive (3x gp2), pay per use, no capacity planning"}),"\n",(0,t.jsx)(s.li,{children:"Use cases: content management, web serving, data sharing, Wordpress"}),"\n",(0,t.jsx)(s.li,{children:"Uses NFSv4.1 protocol"}),"\n",(0,t.jsx)(s.li,{children:"Uses security group to control access to EFS"}),"\n",(0,t.jsx)(s.li,{children:"Compatible with Linux based AMI (not Windows)"}),"\n",(0,t.jsx)(s.li,{children:"Encryption at rest using KMS"}),"\n",(0,t.jsx)(s.li,{children:"POSIX file system (~Linux) that has a standard file API"}),"\n",(0,t.jsxs)(s.li,{children:["File system scales automatically, pay-per-use, no capacity planning!\n",(0,t.jsx)(s.img,{alt:"EFS",src:i(92574).A+"",width:"1434",height:"794"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"efs-performance-classes",children:"EFS Performance classes"}),"\n",(0,t.jsx)(s.h3,{id:"efs-scale",children:"EFS Scale"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"1000s of concurrent NFS clients, 10 GB+ /s throughput"}),"\n",(0,t.jsx)(s.li,{children:"Grow to Petabyte-scale network file system, automatically"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"performance-mode-set-at-efs-creation-time",children:"Performance Mode (set at EFS creation time)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"General Purpose (default) \u2013 latency-sensitive use cases (web server, CMS, etc\u2026)"}),"\n",(0,t.jsx)(s.li,{children:"Max I/O \u2013 higher latency, throughput, highly parallel (big data, media processing)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"throughput-mode",children:"Throughput Mode"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Bursting \u2013 1 TB = 50MiB/s + burst of up to 100MiB/s"}),"\n",(0,t.jsx)(s.li,{children:"Provisioned \u2013 set your throughput regardless of storage size, ex: 1 GiB/s for 1 TB storage"}),"\n",(0,t.jsx)(s.li,{children:"Elastic \u2013 automatically scales throughput up or down based on your workloads"}),"\n",(0,t.jsx)(s.li,{children:"Up to 3GiB/s for reads and 1GiB/s for writes"}),"\n",(0,t.jsx)(s.li,{children:"Used for unpredictable workloads"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"efs-storage-classes",children:"EFS Storage classes"}),"\n",(0,t.jsx)(s.h3,{id:"storage-tiers-lifecycle-management-feature--move-file-after-n-days",children:"Storage Tiers (lifecycle management feature \u2013 move file after N days)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:i(7639).A+"",width:"205",height:"302"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Standard: for frequently accessed files"}),"\n",(0,t.jsx)(s.li,{children:"Infrequent access (EFS-IA): cost to retrieve files, lower price to store."}),"\n",(0,t.jsx)(s.li,{children:"Archive: rarely accessed data (few times each year), 50% cheaper"}),"\n",(0,t.jsx)(s.li,{children:"Implement lifecycle policies to move files between storage tiers"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"availability-and-durability",children:"Availability and durability"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Standard: Multi-AZ, great for prod"}),"\n",(0,t.jsx)(s.li,{children:"One Zone: One AZ, great for dev, backup enabled by"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"efs-iainfrequent-access",children:"EFS-IA(Infrequent access)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Storage class that is cost-optimized for files not accessed every day"}),"\n",(0,t.jsx)(s.li,{children:"Up to 92% lower cost compared to EFS Standard"}),"\n",(0,t.jsx)(s.li,{children:"EFS will automatically move your files to EFS-IA based on the last time they were accessed"}),"\n",(0,t.jsx)(s.li,{children:"Enable EFS-IA with a Lifecycle Policy"}),"\n",(0,t.jsx)(s.li,{children:"Example: move files that are not accessed for 60 days to EFS-IA"}),"\n",(0,t.jsxs)(s.li,{children:["Transparent to the applications accessing EFS\n",(0,t.jsx)(s.img,{alt:"EFS-IA",src:i(45439).A+"",width:"908",height:"1284"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"efs-vs-ebs",children:"EFS vs EBS"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"EFS vs EBS",src:i(94569).A+"",width:"1221",height:"601"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},94569:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/EFS-EBS-abe97f7c9d5e83b670d2c0f55edf838d.png"},45439:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/EFS-IA-5e5782bce62f612bfbf610cf554744a4.png"},7639:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/EFS-life-6b1e2244b9e68ed52a23718822c3471b.png"},92574:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/EFS-03eebe4a4b6d8b5625c4e1c469c6cb4d.png"},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>r});var n=i(96540);const t={},l=n.createContext(t);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);