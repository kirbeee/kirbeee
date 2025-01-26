"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[2555],{4365:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"AWS/EC2/EFS","title":"EFS (Elastic File System)","description":"- Managed NFS (network file system) that can be mounted on 100s of EC2","source":"@site/docs/AWS/EC2/EFS.mdx","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/EFS","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/EFS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EFS (Elastic File System)"},"sidebar":"docs","previous":{"title":"EC2 Image Builder","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/EC2-Image-Builder"},"next":{"title":"FSx","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/FSx"}}');var i=t(4848),c=t(8453);const a={title:"EFS (Elastic File System)"},l=void 0,r={},o=[{value:"EFS vs EBS",id:"efs-vs-ebs",level:2},{value:"EFS-IA(Infrequent access)",id:"efs-iainfrequent-access",level:2}];function d(e){const s={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Managed NFS (network file system) that can be mounted on 100s of EC2"}),"\n",(0,i.jsx)(s.li,{children:"EFS works with Linux EC2 instances in multi-AZ"}),"\n",(0,i.jsxs)(s.li,{children:["Highly available, scalable, expensive (3x gp2), pay per use, no capacity planning\n",(0,i.jsx)(s.img,{alt:"EFS",src:t(2574).A+"",width:"1434",height:"794"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"efs-vs-ebs",children:"EFS vs EBS"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"EFS vs EBS",src:t(4569).A+"",width:"1221",height:"601"})}),"\n",(0,i.jsx)(s.h2,{id:"efs-iainfrequent-access",children:"EFS-IA(Infrequent access)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Storage class that is cost-optimized for files not accessed every day"}),"\n",(0,i.jsx)(s.li,{children:"Up to 92% lower cost compared to EFS Standard"}),"\n",(0,i.jsx)(s.li,{children:"EFS will automatically move your files to EFS-IA based on the last time they were accessed"}),"\n",(0,i.jsx)(s.li,{children:"Enable EFS-IA with a Lifecycle Policy"}),"\n",(0,i.jsx)(s.li,{children:"Example: move files that are not accessed for 60 days to EFS-IA"}),"\n",(0,i.jsxs)(s.li,{children:["Transparent to the applications accessing EFS\n",(0,i.jsx)(s.img,{alt:"EFS-IA",src:t(5439).A+"",width:"908",height:"1284"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4569:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/EFS-EBS-abe97f7c9d5e83b670d2c0f55edf838d.png"},5439:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/EFS-IA-5e5782bce62f612bfbf610cf554744a4.png"},2574:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/EFS-03eebe4a4b6d8b5625c4e1c469c6cb4d.png"},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(6540);const i={},c=n.createContext(i);function a(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);