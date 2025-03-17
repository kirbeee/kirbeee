"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8785],{23587:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>S,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"AWS/S3/tranfer-family","title":"tanfer-family","description":"Introduction","source":"@site/docs/AWS/S3/tranfer-family.md","sourceDirName":"AWS/S3","slug":"/AWS/S3/tranfer-family","permalink":"/kirbeee/docs/AWS/S3/tranfer-family","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/S3/tranfer-family.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"tanfer-family"},"sidebar":"docs","previous":{"title":"S3 Snowball","permalink":"/kirbeee/docs/AWS/S3/snowball"},"next":{"title":"Introduction","permalink":"/kirbeee/docs/AWS/SAA-Architecture/"}}');var i=s(74848),r=s(28453);const a={title:"tanfer-family"},l="Transfer Family",c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"AWS DataSync",id:"aws-datasync",level:2},{value:"AWS DataSync NFS / SMB to AWS (S3, EFS, FSx\u2026)",id:"aws-datasync-nfs--smb-to-aws-s3-efs-fsx",level:2},{value:"AWS DataSync Transfer between AWS storage services",id:"aws-datasync-transfer-between-aws-storage-services",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"transfer-family",children:"Transfer Family"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Amazon EFS using the FTP protocol"}),"\n",(0,i.jsxs)(n.li,{children:["Supported Protocols","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS Transfer for FTP (File Transfer Protocol (FTP))"}),"\n",(0,i.jsx)(n.li,{children:"AWS Transfer for FTPS (File Transfer Protocol over SSL (FTPS))"}),"\n",(0,i.jsx)(n.li,{children:"AWS Transfer for SFTP (Secure File Transfer Protocol (SFTP))"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Managed infrastructure, Scalable, Reliable, Highly Available (multi-AZ)"}),"\n",(0,i.jsx)(n.li,{children:"Pay per provisioned endpoint per hour + data transfers in GB"}),"\n",(0,i.jsx)(n.li,{children:"Store and manage users\u2019 credentials within the service"}),"\n",(0,i.jsx)(n.li,{children:"Integrate with existing authentication systems (Microsoft Active Directory, LDAP, Okta, Amazon Cognito, custom)"}),"\n",(0,i.jsxs)(n.li,{children:["Usage: sharing files, public datasets, CRM, ERP, ...\n",(0,i.jsx)(n.img,{alt:"img.png",src:s(49184).A+"",width:"1240",height:"553"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-datasync",children:"AWS DataSync"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Move large amount of data to and from"}),"\n",(0,i.jsx)(n.li,{children:"On-premises / other cloud to AWS (NFS, SMB, HDFS, S3 API\u2026) \u2013 needs agent"}),"\n",(0,i.jsx)(n.li,{children:"AWS to AWS (different storage services) \u2013 no agent needed"}),"\n",(0,i.jsx)(n.li,{children:"Can synchronize to:"}),"\n",(0,i.jsx)(n.li,{children:"Amazon S3 (any storage classes \u2013 including Glacier)"}),"\n",(0,i.jsx)(n.li,{children:"Amazon EFS"}),"\n",(0,i.jsx)(n.li,{children:"Amazon FSx (Windows, Lustre, NetApp, OpenZFS...)"}),"\n",(0,i.jsx)(n.li,{children:"Replication tasks can be scheduled hourly, daily, weekly"}),"\n",(0,i.jsx)(n.li,{children:"File permissions and metadata are preserved (NFS POSIX, SMB\u2026)"}),"\n",(0,i.jsx)(n.li,{children:"One agent task can use 10 Gbps, can setup a bandwidth limit"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-datasync-nfs--smb-to-aws-s3-efs-fsx",children:"AWS DataSync NFS / SMB to AWS (S3, EFS, FSx\u2026)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(87625).A+"",width:"1266",height:"569"})}),"\n",(0,i.jsx)(n.h2,{id:"aws-datasync-transfer-between-aws-storage-services",children:"AWS DataSync Transfer between AWS storage services"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(91736).A+"",width:"1103",height:"563"})})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},91736:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/DataSync-2-eeb4002939f160c3849d699d49bceec3.png"},87625:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/DataSync-4d9f709f255414a9c4f90e7b4d6a4373.png"},49184:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/transfer-family-46bbb06e9f5368b11ce321e878e06d00.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);