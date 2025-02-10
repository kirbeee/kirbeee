"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[6490],{2024:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"AWS/Database/RDS","title":"RDS (Relational Database Service)","description":"RDS","source":"@site/docs/AWS/Database/RDS.md","sourceDirName":"AWS/Database","slug":"/AWS/Database/RDS","permalink":"/kirbeee/docs/AWS/Database/RDS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RDS (Relational Database Service)"},"sidebar":"docs","previous":{"title":"Amazon QuickSight","permalink":"/kirbeee/docs/AWS/Database/QuickSight"},"next":{"title":"Redshift","permalink":"/kirbeee/docs/AWS/Database/Redshift"}}');var r=n(4848),s=n(8453);const t={title:"RDS (Relational Database Service)"},l="Introduction",o={},c=[{value:"RDS Read Replicas",id:"rds-read-replicas",level:2},{value:"RDS Multi-AZ (Disaster Recovery)",id:"rds-multi-az-disaster-recovery",level:2},{value:"Multi-Region (Read Replicas)",id:"multi-region-read-replicas",level:2}];function d(e){const i={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RDS",src:n(6978).A+"",width:"3160",height:"1608"})}),"\n",(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"RDS stands for Relational Database Service"}),"\n",(0,r.jsx)(i.li,{children:"It's a managed DB service for DB use SQL as a query language."}),"\n",(0,r.jsx)(i.li,{children:"It allows you to create databases in the cloud that are managed by AWS"}),"\n",(0,r.jsx)(i.li,{children:"Postgres"}),"\n",(0,r.jsx)(i.li,{children:"MySQL"}),"\n",(0,r.jsx)(i.li,{children:"MariaDB"}),"\n",(0,r.jsx)(i.li,{children:"Oracle"}),"\n",(0,r.jsx)(i.li,{children:"Microsoft SQL Server"}),"\n",(0,r.jsx)(i.li,{children:"IBM DB2"}),"\n",(0,r.jsx)(i.li,{children:"Aurora (AWS Proprietary database)"}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"benefits",children:"Benefits"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"RDS is a managed service:"}),"\n",(0,r.jsx)(i.li,{children:"Automated provisioning, OS patching"}),"\n",(0,r.jsx)(i.li,{children:"Continuous backups and restore to specific timestamp (Point in Time Restore)!"}),"\n",(0,r.jsx)(i.li,{children:"Monitoring dashboards"}),"\n",(0,r.jsx)(i.li,{children:"Read replicas for improved read performance"}),"\n",(0,r.jsx)(i.li,{children:"Multi AZ setup for DR (Disaster Recovery)"}),"\n",(0,r.jsx)(i.li,{children:"Maintenance windows for upgrades"}),"\n",(0,r.jsx)(i.li,{children:"Scaling capability (vertical and horizontal)"}),"\n",(0,r.jsx)(i.li,{children:"Storage backed by EBS"}),"\n",(0,r.jsx)(i.li,{children:"BUT you can't SSH into your instances"}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"amazon-aurora",children:"Amazon Aurora"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Aurora",src:n(7411).A+"",width:"1562",height:"466"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aurora is a proprietary technology from AWS (not open sourced)"}),"\n",(0,r.jsx)(i.li,{children:"PostgreSQL and MySQL are both supported as Aurora DB"}),"\n",(0,r.jsx)(i.li,{children:'Aurora is "AWS cloud optimized" and claims 5x performance improvement over MySQL on RDS, over 3x the performance of Postgres on RDS'}),"\n",(0,r.jsx)(i.li,{children:"Aurora storage automatically grows in increments of IOGB, up to 128 TB"}),"\n",(0,r.jsx)(i.li,{children:"Aurora costs more than RDS (20% more) - but is more efficient"}),"\n",(0,r.jsx)(i.li,{children:"Not in the free tier"}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"amazon-aurora-serverless",children:"Amazon Aurora Serverless"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"AuroraServerless",src:n(8639).A+"",width:"1810",height:"1562"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Automated database instantiation and auto-scaling based on actual usage"}),"\n",(0,r.jsx)(i.li,{children:"PostgreSQL and MySQL are both supported as Aurora Serverless DB"}),"\n",(0,r.jsx)(i.li,{children:"No capacity planning needed"}),"\n",(0,r.jsx)(i.li,{children:"Least management overhead"}),"\n",(0,r.jsx)(i.li,{children:"Pay per second, can be more cost-effective"}),"\n",(0,r.jsx)(i.li,{children:"Use cases: good for infrequent, intermittent or unpredictable workloads..."}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"rds-deployment",children:"RDS Deployment"}),"\n",(0,r.jsx)(i.h2,{id:"rds-read-replicas",children:"RDS Read Replicas"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RDSReadReplicas",src:n(4668).A+"",width:"1422",height:"882"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Scale the read workload of your DB"}),"\n",(0,r.jsx)(i.li,{children:"Can create up to 15 Read Replicas"}),"\n",(0,r.jsx)(i.li,{children:"Data is only written to the main DB"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"rds-multi-az-disaster-recovery",children:"RDS Multi-AZ (Disaster Recovery)"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RDSMultiAZ",src:n(3798).A+"",width:"1464",height:"912"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Fail over in case of AZ outage (high availability)"}),"\n",(0,r.jsx)(i.li,{children:"Data is only read/written to the main database"}),"\n",(0,r.jsx)(i.li,{children:"Can only have 1 other AZ as failover"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"multi-region-read-replicas",children:"Multi-Region (Read Replicas)"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"MultiRegion",src:n(1291).A+"",width:"3498",height:"1004"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Disaster recovery in case of region issue"}),"\n",(0,r.jsx)(i.li,{children:"Local performance for global reads"}),"\n",(0,r.jsx)(i.li,{children:"Replication cost"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8639:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/Aurora-Serverless-ce4bc35d07850b530a68c06ee2ffacc9.png"},7411:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/Aurora-a7fea94df0d13810985de7c00ede6834.png"},3798:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/Multi-AZ-31f46b2936635100cd481fe29e3eec82.png"},1291:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/Multi-Region-0a0a69a77d2f9ed7a28f61ca3959a3a3.png"},6978:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/RDS-92ef3705cb6629454142beb2398807da.png"},4668:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/Read-Replica-acf8f697a6539a95e1f820021cfe1a5d.png"},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var a=n(6540);const r={},s=a.createContext(r);function t(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);