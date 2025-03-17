"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[5176],{16227:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"AWS/Security & Compliance/Encryption","title":"\u52a0\u5bc6","description":"Encryption","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Security & Compliance/Encryption.md","sourceDirName":"AWS/Security & Compliance","slug":"/AWS/Security & Compliance/Encryption","permalink":"/kirbeee/zh-TW/docs/AWS/Security & Compliance/Encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Security & Compliance/Encryption.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"\u52a0\u5bc6"},"sidebar":"docs","previous":{"title":"\u68c0\u6d4b","permalink":"/kirbeee/zh-TW/docs/AWS/Security & Compliance/Detective"},"next":{"title":"\u9632\u706b\u5899\u7ba1\u7406\u5668","permalink":"/kirbeee/zh-TW/docs/AWS/Security & Compliance/Firewall-manger"}}');var s=i(74848),r=i(28453);const c={title:"\u52a0\u5bc6"},d="\u4f11\u606f\u65f6\u95f4\u6570\u636e\u4e0e\u8fc7\u5883\u6570\u636e",t={},h=[{value:"\u5ba2\u6237\u7ba1\u7406\u5bc6\u94a5\uff1a",id:"\u5ba2\u6237\u7ba1\u7406\u5bc6\u94a5",level:2},{value:"AWS \u7ba1\u7406\u5bc6\u94a5\uff1a",id:"aws-\u7ba1\u7406\u5bc6\u94a5",level:2},{value:"AWS \u62e5\u6709\u5bc6\u94a5\uff1a",id:"aws-\u62e5\u6709\u5bc6\u94a5",level:2},{value:"CloudHSM \u5bc6\u94a5(\u81ea\u5b9a\u4e49\u5bc6\u94a5\u5b58\u50a8)\uff1a",id:"cloudhsm-\u5bc6\u94a5\u81ea\u5b9a\u4e49\u5bc6\u94a5\u5b58\u50a8",level:2}];function o(n){const e={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u4f11\u606f\u65f6\u95f4\u6570\u636e\u4e0e\u8fc7\u5883\u6570\u636e",children:"\u4f11\u606f\u65f6\u95f4\u6570\u636e\u4e0e\u8fc7\u5883\u6570\u636e"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Encryption",src:i(22205).A+"",width:"917",height:"220"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b9e\u65f6\uff1a\u5b58\u50a8\u6216\u5b58\u6863\u5728\u8bbe\u5907\u4e0a\u7684\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u786c\u76d8\u4e0a\uff0c\u5728RDS\u5b9e\u4f8b\u4e0a\uff0c\u5728S3\u51b0\u5ddd\u6df1\u5c42\u6863\u6848\u4e2d\u7b49\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8fc7\u5883\uff08\u52a8\u8bae\uff09\uff1a\u6570\u636e\u4ece\u4e00\u4e2a\u5730\u70b9\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u5730\u70b9"}),"\n",(0,s.jsx)(e.li,{children:"\u4ece\u623f\u95f4\u4f20\u8f93\u5230 AWS, EC2 \u4f20\u8f93\u5230 DynamoDB \u7b49"}),"\n",(0,s.jsx)(e.li,{children:"\u6307\u7f51\u7edc\u4e0a\u4f20\u8f93\u7684\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"\u6211\u4eec\u60f3\u8981\u5728\u4e24\u4e2a\u5dde\u52a0\u5bc6\u6570\u636e\u4ee5\u4fdd\u62a4\u5b83\uff01"}),"\n",(0,s.jsx)(e.li,{children:"\u4e3a\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u52a0\u5bc6\u5bc6\u94a5"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"kms-\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1",children:"KMS (\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'\u968f\u65f6\u60a8\u542c\u5230AWS\u670d\u52a1\u7684"\u52a0\u5bc6"\uff0c\u5b83\u6700\u6709\u53ef\u80fd\u7684 KMS'}),"\n",(0,s.jsx)(e.li,{children:"KMS = AWS \u7ba1\u7406\u6211\u4eec\u7684\u52a0\u5bc6\u5bc6\u94a5"}),"\n",(0,s.jsxs)(e.li,{children:["\u52a0\u5bc6\u9009\u9879\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EBS\u5377\uff1a\u52a0\u5bc6\u5377"}),"\n",(0,s.jsx)(e.li,{children:"S3 buckets: \u670d\u52a1\u5668\u7aef\u7684\u5bf9\u8c61\u52a0\u5bc6 (SSE-S3 \u9ed8\u8ba4\u542f\u7528, SSE-KMS \u9009\u62e9in)"}),"\n",(0,s.jsx)(e.li,{children:"Redshifting \u6570\u636e\u5e93\uff1a\u6570\u636e\u52a0\u5bc6"}),"\n",(0,s.jsx)(e.li,{children:"RDS\u6570\u636e\u5e93\uff1a\u6570\u636e\u52a0\u5bc6"}),"\n",(0,s.jsx)(e.li,{children:"EFS \u9a71\u52a8\u5668\uff1a\u6570\u636e\u52a0\u5bc6"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u81ea\u52a8\u52a0\u5bc6\u542f\u7528\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e91\u8f68\u8ff9\u65e5\u5fd7"}),"\n",(0,s.jsx)(e.li,{children:"S3 \u51b0\u5ddd\uff1a"}),"\n",(0,s.jsx)(e.li,{children:"\u5b58\u50a8\u7f51\u5173"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"cloudhsm-\u786c\u4ef6\u5b89\u5168\u6a21\u5757",children:"CloudHSM (\u786c\u4ef6\u5b89\u5168\u6a21\u5757)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"KMS => AWS \u7ba1\u7406\u52a0\u5bc6\u8f6f\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"CloudHSM => AWS \u89c4\u5b9a\u52a0\u5bc6\u786c\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"\u4e13\u7528\u786c\u4ef6(HSM = \u786c\u4ef6\u5b89\u5168\u6a21\u5757)"}),"\n",(0,s.jsx)(e.li,{children:"\u60a8\u5b8c\u5168\u7ba1\u7406\u60a8\u81ea\u5df1\u7684\u52a0\u5bc6\u5bc6\u94a5(\u4e0d\u662f AWS)"}),"\n",(0,s.jsx)(e.li,{children:"HSM \u8bbe\u5907\u6297\u6027\u5f3a\uff0cFIPS 140-2"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"kms-\u5bc6\u94a5\u7c7b\u578b",children:"KMS \u5bc6\u94a5\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h2,{id:"\u5ba2\u6237\u7ba1\u7406\u5bc6\u94a5",children:"\u5ba2\u6237\u7ba1\u7406\u5bc6\u94a5\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa\u3001\u7ba1\u7406\u548c\u4f7f\u7528\u5ba2\u6237\uff0c\u53ef\u4ee5\u542f\u7528\u6216\u7981\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u65cb\u8f6c\u653f\u7b56\u7684\u53ef\u80fd\u6027(\u6bcf\u5e74\u751f\u6210\u7684\u65b0\u5bc6\u94a5\uff0c\u65e7\u5bc6\u94a5\u4fdd\u5168)"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u60a8\u81ea\u5df1\u7684\u5bc6\u94a5\u7684\u53ef\u80fd\u6027"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"aws-\u7ba1\u7406\u5bc6\u94a5",children:"AWS \u7ba1\u7406\u5bc6\u94a5\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS\u4ee3\u8868\u5ba2\u6237\u521b\u5efa\u3001\u7ba1\u7406\u548c\u4f7f\u7528"}),"\n",(0,s.jsx)(e.li,{children:"AWS \u670d\u52a1 (aws/s3, aws/ebs, aws/redshift)"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"aws-\u62e5\u6709\u5bc6\u94a5",children:"AWS \u62e5\u6709\u5bc6\u94a5\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS\u670d\u52a1\u6240\u62e5\u6709\u7684 CMK \u96c6\u5408\u5e76\u8bbe\u6cd5\u5728\u591a\u4e2a\u5e10\u6237\u4e2d\u4f7f\u7528"}),"\n",(0,s.jsx)(e.li,{children:"AWS \u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6765\u4fdd\u62a4\u60a8\u5e10\u6237\u4e2d\u7684\u8d44\u6e90 (\u4f46\u60a8\u4e0d\u80fd\u67e5\u770b\u5bc6\u94a5)"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cloudhsm-\u5bc6\u94a5\u81ea\u5b9a\u4e49\u5bc6\u94a5\u5b58\u50a8",children:"CloudHSM \u5bc6\u94a5(\u81ea\u5b9a\u4e49\u5bc6\u94a5\u5b58\u50a8)\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4ece\u60a8\u81ea\u5df1\u7684 CloudHSM \u786c\u4ef6\u8bbe\u5907\u751f\u6210\u7684\u5bc6\u94a5"}),"\n",(0,s.jsx)(e.li,{children:"\u52a0\u5bc6\u64cd\u4f5c\u662f\u5728\u4e91\u7aefHSM\u96c6\u7fa4\u5185\u6267\u884c"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},22205:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/Encryption-2f5db4dfbc93a44b540ed1d13385b859.png"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var l=i(96540);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);