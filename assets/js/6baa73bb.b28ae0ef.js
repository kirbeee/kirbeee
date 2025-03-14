"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8615],{73109:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"AWS/EC2/FSx","title":"FSx","description":"- Launch 3rd party high-performance file systems on AWS","source":"@site/docs/AWS/EC2/FSx.md","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/FSx","permalink":"/kirbeee/docs/AWS/EC2/FSx","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FSx","author":"Kirbee"},"sidebar":"docs","previous":{"title":"Elastic IP","permalink":"/kirbeee/docs/AWS/EC2/Elastic-ip"},"next":{"title":"Instance Store","permalink":"/kirbeee/docs/AWS/EC2/Instance-Store"}}');var l=i(74848),r=i(28453);const t={title:"FSx",author:"Kirbee"},o="Introduction",a={},c=[{value:"Amazon FSx for Windows File Server",id:"amazon-fsx-for-windows-file-server",level:2},{value:"Amazon FSx for Lustre",id:"amazon-fsx-for-lustre",level:2},{value:"FSx Lustre - File System Deployment Options",id:"fsx-lustre---file-system-deployment-options",level:3},{value:"Amazon FSx for NetApp ONTAP",id:"amazon-fsx-for-netapp-ontap",level:2},{value:"Amazon FSx for OpenZFS",id:"amazon-fsx-for-openzfs",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Launch 3rd party high-performance file systems on AWS"}),"\n",(0,l.jsxs)(n.li,{children:["Fully managed service\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(76252).A+"",width:"1091",height:"398"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-fsx-for-windows-file-server",children:"Amazon FSx for Windows File Server"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FSx for Windows is a fully managed Windows file system share drive"}),"\n",(0,l.jsx)(n.li,{children:"Supports SMB protocol & Windows NTFS"}),"\n",(0,l.jsx)(n.li,{children:"Microsoft Active Directory integration, ACLs, user quotas"}),"\n",(0,l.jsx)(n.li,{children:"Can be mounted on Linux EC2 instances"}),"\n",(0,l.jsx)(n.li,{children:"Supports Microsoft's Distributed File System (DFS) Namespaces (group files across multiple FS)"}),"\n",(0,l.jsx)(n.li,{children:"Scale up to 10s of GB/s, millions of IOPS, 100s PB of data"}),"\n",(0,l.jsxs)(n.li,{children:["Storage Options:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SSD \u2013 latency sensitive workloads (databases, media processing, data analytics, \u2026)"}),"\n",(0,l.jsx)(n.li,{children:"HDD \u2013 broad spectrum of workloads (home directory, CMS, \u2026)"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Can be accessed from your on-premises infrastructure (VPN or Direct Connect)"}),"\n",(0,l.jsx)(n.li,{children:"Can be configured to be Multi-AZ (high availability)"}),"\n",(0,l.jsx)(n.li,{children:"Data is backed-up daily to S3"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-fsx-for-lustre",children:"Amazon FSx for Lustre"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Lustre is a type of parallel distributed file system, for large-scale computing"}),"\n",(0,l.jsx)(n.li,{children:"The name Lustre is derived from \u201cLinux\u201d and \u201ccluster"}),"\n",(0,l.jsx)(n.li,{children:"Machine Learning, High Performance Computing (HPC)"}),"\n",(0,l.jsx)(n.li,{children:"Video Processing, Financial Modeling, Electronic Design Automation"}),"\n",(0,l.jsx)(n.li,{children:"Scales up to 100s GB/s, millions of IOPS, sub-ms latencies"}),"\n",(0,l.jsxs)(n.li,{children:["Storage Options:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SSD \u2013 low-latency, IOPS intensive workloads, small & random file operations"}),"\n",(0,l.jsx)(n.li,{children:"HDD \u2013 throughput-intensive workloads, large & sequential file operations"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Seamless integration with S3","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Can \u201cread S3\u201d as a file system (through FSx)"}),"\n",(0,l.jsx)(n.li,{children:"Can write the output of the computations back to S3 (through FSx)"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Can be used from on-premises servers (VPN or Direct Connect)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"fsx-lustre---file-system-deployment-options",children:"FSx Lustre - File System Deployment Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Scratch File System","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Temporary storage"}),"\n",(0,l.jsx)(n.li,{children:"Data is not replicated (doesn\u2019t persist if file server fails)"}),"\n",(0,l.jsx)(n.li,{children:"High burst (6x faster, 200MBps per TiB)"}),"\n",(0,l.jsx)(n.li,{children:"Usage: short-term processing, optimize costs"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Persistent File System","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Long-term storage"}),"\n",(0,l.jsx)(n.li,{children:"Data is replicated within same AZ"}),"\n",(0,l.jsx)(n.li,{children:"Replace failed files within minutes"}),"\n",(0,l.jsxs)(n.li,{children:["Usage: long-term processing, sensitive data\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(65015).A+"",width:"602",height:"615"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-fsx-for-netapp-ontap",children:"Amazon FSx for NetApp ONTAP"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Managed NetApp ONTAP on AWS"}),"\n",(0,l.jsx)(n.li,{children:"File System compatible with NFS, SMB, iSCSI protocol"}),"\n",(0,l.jsx)(n.li,{children:"Move workloads running on ONTAP or NAS to AWS"}),"\n",(0,l.jsxs)(n.li,{children:["Works with:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Linux"}),"\n",(0,l.jsx)(n.li,{children:"Windows"}),"\n",(0,l.jsx)(n.li,{children:"MacOS"}),"\n",(0,l.jsx)(n.li,{children:"VMware Cloud on AWS"}),"\n",(0,l.jsx)(n.li,{children:"Amazon Workspaces & AppStream 2.0"}),"\n",(0,l.jsx)(n.li,{children:"Amazon EC2, ECS and EKS"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Storage shrinks or grows automatically"}),"\n",(0,l.jsx)(n.li,{children:"Snapshots, replication, low-cost, compression and data de-duplication"}),"\n",(0,l.jsxs)(n.li,{children:["Point-in-time instantaneous cloning (helpful for testing new workloads)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(16222).A+"",width:"606",height:"565"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"amazon-fsx-for-openzfs",children:"Amazon FSx for OpenZFS"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Managed OpenZFS file system on AWS"}),"\n",(0,l.jsx)(n.li,{children:"File System compatible with NFS (v3, v4, v4.1, v4.2)"}),"\n",(0,l.jsx)(n.li,{children:"Move workloads running on ZFS to AWS"}),"\n",(0,l.jsx)(n.li,{children:"Works with:"}),"\n",(0,l.jsx)(n.li,{children:"Linux"}),"\n",(0,l.jsx)(n.li,{children:"Windows"}),"\n",(0,l.jsx)(n.li,{children:"MacOS"}),"\n",(0,l.jsx)(n.li,{children:"VMware Cloud on AWS"}),"\n",(0,l.jsx)(n.li,{children:"Amazon Workspaces & AppStream 2.0"}),"\n",(0,l.jsx)(n.li,{children:"Amazon EC2, ECS and EKS"}),"\n",(0,l.jsx)(n.li,{children:"Up to 1,000,000 IOPS with < 0.5ms latency"}),"\n",(0,l.jsx)(n.li,{children:"Snapshots, compression and low-cost"}),"\n",(0,l.jsxs)(n.li,{children:["Point-in-time instantaneous cloning (helpful for testing new workloads)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(48912).A+"",width:"599",height:"561"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},65015:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/FSx-Lustre-124228fc7586370b22a04cb3bdc98b8b.png"},76252:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/FSx-intro-34e745f1b10de04dffa4f0b4cfb84c09.png"},16222:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/NetApp-e4221adc783b506bffd861b58125ca73.png"},48912:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/open-ZFS-d4c0ce7aee1fe1f6883ed23c1aa8be60.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);