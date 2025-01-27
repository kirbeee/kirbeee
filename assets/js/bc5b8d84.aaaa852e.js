"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3215],{9600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"AWS/EC2/EBS","title":"EBS (Elastic Block Store)","description":"- An EBS (Elastic Block Store) Volume is a network drive you can attach to your instances while they run","source":"@site/docs/AWS/EC2/EBS.mdx","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/EBS","permalink":"/kirbeee/docs/AWS/EC2/EBS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EBS (Elastic Block Store)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"AMI","permalink":"/kirbeee/docs/AWS/EC2/AMI"},"next":{"title":"EC2 Image Builder","permalink":"/kirbeee/docs/AWS/EC2/EC2-Image-Builder"}}');var i=t(4848),o=t(8453);const r={title:"EBS (Elastic Block Store)",author:"Kirbee"},a="Introduction to EBS",c={},l=[{value:"EBS Snapshot Archive",id:"ebs-snapshot-archive",level:2},{value:"Recycle Bin for EBS Snapshots",id:"recycle-bin-for-ebs-snapshots",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction-to-ebs",children:"Introduction to EBS"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An EBS (Elastic Block Store) Volume is a network drive you can attach to your instances while they run"}),"\n",(0,i.jsx)(n.li,{children:"It allows your instances to persist data, even after their termination"}),"\n",(0,i.jsx)(n.li,{children:"They can only be mounted to one instance at a time (at the CCP level)"}),"\n",(0,i.jsx)(n.li,{children:"They are bound to a specific availability zone"}),"\n",(0,i.jsxs)(n.li,{children:["Analogy",":Think",' of them as a "network USB stick"']}),"\n",(0,i.jsx)(n.li,{children:"Free tier: 30 GB of free EBS storage of type General Purpose (SSD) or Magnetic per month"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"ebs-snapshots",children:"EBS Snapshots"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make a backup (snapshot) of your EBS volume at a point in time"}),"\n",(0,i.jsx)(n.li,{children:"Not necessary to detach volume to do snapshot, but recommended"}),"\n",(0,i.jsxs)(n.li,{children:["Can copy snapshots across AZ or regions\n",(0,i.jsx)(n.img,{alt:"EBS Snapshots",src:t(6041).A+"",width:"2068",height:"718"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ebs-snapshot-archive",children:"EBS Snapshot Archive"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Move a Snapshot to an "archive tier" that is 75% cheaper'}),"\n",(0,i.jsx)(n.li,{children:"Takes within 24 to 72 hours for restoring the archive"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"recycle-bin-for-ebs-snapshots",children:"Recycle Bin for EBS Snapshots"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setup rules to retain deleted snapshots so you can recover them after an accidental deletion"}),"\n",(0,i.jsx)(n.li,{children:"Specify retention (from | day to | year)"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6041:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/EBS-snapshot-cb301001ad2af0ece68e9030ac0fc904.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);