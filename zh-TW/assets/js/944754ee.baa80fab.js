"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[4082],{9572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"AWS/EC2/EBS","title":"EBS (Blastic Block Store)","description":"- EBS (Elastic Block Store)\u97f3\u91cf\u662f\u4e00\u4e2a\u7f51\u7edc\u9a71\u52a8\u5668\uff0c\u5728\u8fd0\u884c\u5b9e\u4f8b\u65f6\u60a8\u53ef\u4ee5\u9644\u52a0\u5230\u60a8\u7684\u5b9e\u4f8b","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/EC2/EBS.md","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/EBS","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/EBS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EBS (Blastic Block Store)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"AMI","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/AMI"},"next":{"title":"EC2 \u56fe\u50cf\u751f\u6210\u5668","permalink":"/kirbeee/zh-TW/docs/AWS/EC2/EC2-Image-Builder"}}');var t=s(4848),r=s(8453);const l={title:"EBS (Blastic Block Store)",author:"Kirbee"},c="EBS\u7b80\u4ecb",o={},d=[{value:"EBS \u5feb\u7167\u5b58\u6863",id:"ebs-\u5feb\u7167\u5b58\u6863",level:2},{value:"\u7528\u4e8eEBS\u5feb\u7167\u7684\u56de\u6536\u7ad9",id:"\u7528\u4e8eebs\u5feb\u7167\u7684\u56de\u6536\u7ad9",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ebs\u7b80\u4ecb",children:"EBS\u7b80\u4ecb"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"EBS (Elastic Block Store)\u97f3\u91cf\u662f\u4e00\u4e2a\u7f51\u7edc\u9a71\u52a8\u5668\uff0c\u5728\u8fd0\u884c\u5b9e\u4f8b\u65f6\u60a8\u53ef\u4ee5\u9644\u52a0\u5230\u60a8\u7684\u5b9e\u4f8b"}),"\n",(0,t.jsx)(n.li,{children:"\u5b83\u5141\u8bb8\u60a8\u7684\u5b9e\u4f8b\u6301\u7eed\u6570\u636e\uff0c\u5373\u4f7f\u5728\u5b83\u4eec\u7ec8\u6b62\u540e"}),"\n",(0,t.jsx)(n.li,{children:"\u6bcf\u6b21\u53ea\u80fd\u6302\u8f7d\u4e00\u6b21\uff08\u5728CCP\u7ea7\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u5b83\u4eec\u88ab\u7ed1\u5b9a\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u53ef\u7528\u533a"}),"\n",(0,t.jsx)(n.li,{children:"Analogy:\u5c06\u5b83\u4eec\u89c6\u4e3a\u201c\u7f51\u7edc USB \u68d2\u201d"}),"\n",(0,t.jsx)(n.li,{children:"\u514d\u8d39\u7b49\u7ea7\uff1a 30 GB \u514d\u8d39\u7684\u666e\u901a\u7c7b\u6216\u78c1\u529b\u7684 EBS \u5b58\u50a8 (SSD)"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"ebs-snapshots",children:"EBS Snapshots"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u521b\u5efa\u60a8\u7684 EBS \u97f3\u91cf\u7684\u5907\u4efd (\u5feb\u7167)"}),"\n",(0,t.jsx)(n.li,{children:"\u65e0\u9700\u5206\u79bb\u97f3\u91cf\u8fdb\u884c\u5feb\u7167\uff0c\u4f46\u63a8\u8350\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.li,{children:["\u53ef\u4ee5\u5c06\u5feb\u7167\u590d\u5236\u5230 AZ \u6216\u533a\u57df\n",(0,t.jsx)(n.img,{alt:"EBS Snapshots",src:s(2266).A+"",width:"2068",height:"718"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ebs-\u5feb\u7167\u5b58\u6863",children:"EBS \u5feb\u7167\u5b58\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'\u79fb\u52a8\u5feb\u7167\u5230\u66f4\u4fbf\u5b9c\u7684 "\u5f52\u6863\u5c42"'}),"\n",(0,t.jsx)(n.li,{children:"\u572824\u5c0f\u65f6\u81f372\u5c0f\u65f6\u5185\u6062\u590d\u5b58\u6863"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u4e8eebs\u5feb\u7167\u7684\u56de\u6536\u7ad9",children:"\u7528\u4e8eEBS\u5feb\u7167\u7684\u56de\u6536\u7ad9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8bbe\u7f6e\u89c4\u5219\u4ee5\u4fdd\u7559\u5df2\u5220\u9664\u7684\u5feb\u7167\uff0c\u4ee5\u4fbf\u60a8\u80fd\u591f\u5728\u610f\u5916\u5220\u9664\u540e\u6062\u590d"}),"\n",(0,t.jsx)(n.li,{children:"\u6307\u5b9a\u4fdd\u7559\u65f6\u95f4(\u4ece | \u5929 \u5230 | \u5e74\u4efd)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2266:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/EBS-snapshot-cb301001ad2af0ece68e9030ac0fc904.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);