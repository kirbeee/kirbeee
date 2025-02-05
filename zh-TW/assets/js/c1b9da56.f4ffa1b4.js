"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3656],{680:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"AWS/Database/DynamoDB","title":"\u52a8\u6001DB (NoSQL \u6570\u636e\u5e93)","description":"- \u9ad8\u8d28\u91cf\u7ba1\u7406\u5e76\u590d\u5236\u52303\u4e2aAZ\u533a\u57df","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Database/DynamoDB.md","sourceDirName":"AWS/Database","slug":"/AWS/Database/DynamoDB","permalink":"/kirbeee/zh-TW/docs/AWS/Database/DynamoDB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u52a8\u6001DB (NoSQL \u6570\u636e\u5e93)"},"sidebar":"docs","previous":{"title":"\u6587\u6863DB","permalink":"/kirbeee/zh-TW/docs/AWS/Database/DocumentDB"},"next":{"title":"EMR","permalink":"/kirbeee/zh-TW/docs/AWS/Database/EMR"}}');var i=s(4848),a=s(8453);const r={title:"\u52a8\u6001DB (NoSQL \u6570\u636e\u5e93)"},l="\u6982\u89c8",c={},o=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u6982\u89c8",children:"\u6982\u89c8"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9ad8\u8d28\u91cf\u7ba1\u7406\u5e76\u590d\u5236\u52303\u4e2aAZ\u533a\u57df"}),"\n",(0,i.jsx)(n.li,{children:"NoSQL \u6570\u636e\u5e93 - \u4e0d\u662f\u5173\u7cfb\u6570\u636e\u5e93"}),"\n",(0,i.jsx)(n.li,{children:"\u7f29\u653e\u5230\u5927\u91cf\u5de5\u4f5c\u91cf\uff0c\u5206\u5e03\u201c\u65e0\u670d\u52a1\u5668\u201d\u6570\u636e\u5e93"}),"\n",(0,i.jsx)(n.li,{children:"\u6bcf\u79d2\u6570\u4ee5\u767e\u4e07\u8ba1\u7684\u8981\u6c42\u3001\u6570\u4e07\u5217\u3001100\u5428\u50a8\u5b58\u91cf"}),"\n",(0,i.jsx)(n.li,{children:"\u5feb\u901f\u548c\u4e00\u8d2f\u7684\u4e1a\u7ee9"}),"\n",(0,i.jsx)(n.li,{children:"\u5355\u4f4d\u6570\u6beb\u79d2\u5ef6\u8fdf-\u4f4e\u5ef6\u8fdf\u68c0\u7d22\u7387"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3a\u5b89\u5168\u3001\u6388\u6743\u548c\u7ba1\u7406\u800c\u4e0e\u5185\u90e8\u884c\u653f\u7ba1\u7406\u673a\u5236\u6574\u5408"}),"\n",(0,i.jsx)(n.li,{children:"\u4f4e\u6210\u672c\u548c\u81ea\u52a8\u7f29\u653e\u80fd\u529b"}),"\n",(0,i.jsx)(n.li,{children:"\u6807\u51c6\u548c\u4e0d\u7ecf\u5e38\u8bbf\u95ee (IA) \u8868 \u7c7b"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u52a8\u6001db-\u6570\u636e\u7c7b\u578b",children:"\u52a8\u6001DB \u6570\u636e\u7c7b\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DynamoDB is a key/value database\n",(0,i.jsx)(n.img,{alt:"DynamicDBDataTypes",src:s(2825).A+"",width:"1650",height:"956"})]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"dynamodb-accelerator---dax",children:"DynamoDB Accelerator - DAX"}),"\n",(0,i.jsx)(n.p,{children:"!(DynamoDB-Accelerator)[./DynamoDB-Accelerator.png]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DynamoDB \u5b8c\u5168\u7ba1\u7406\u5185\u5b58\u7f13\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"10x \u6027\u80fd\u6539\u8fdb - \u5f53\u8bbf\u95ee\u60a8\u7684 DynamoDB \u8868\u65f6\uff0c\u5355\u4f4d\u6beb\u79d2\u5ef6\u8fdf\u5230\u5fae\u79d2\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.li,{children:"\u5b89\u5168\u6027\u3001\u9ad8\u5ea6\u53ef\u6269\u5c55\u6027\u548c\u9ad8\u5ea6\u53ef\u7528"}),"\n",(0,i.jsx)(n.li,{children:"CCP \u5c42\u9762\u4e0e ElastiCache \u7684\u5dee\u5f02\uff1aDAX \u4ec5\u7528\u4e8e\u52a8\u6001\u6570\u636e\u5e93\u5e76\u4e0e\u52a8\u6001\u6570\u636e\u5e93\u96c6\u6210\uff0c\u800cElastiCache \u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u52a8\u6001\u6570\u636e\u5e93\u5168\u5c40\u8868",children:"\u52a8\u6001\u6570\u636e\u5e93\u5168\u5c40\u8868"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DynamoDB-global",src:s(2936).A+"",width:"2338",height:"866"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8ba9\u4e00\u4e2a\u4f4e\u5ef6\u8fdf\u7684\u52a8\u6001\u6570\u636e\u5e93\u8868\u53ef\u4ee5\u5728\u591a\u4e2a\u533a\u57df\u8bbf\u95ee"}),"\n",(0,i.jsx)(n.li,{children:"\u6d3b\u52a8\u590d\u5236(\u8bfb\u53d6/\u5199\u5165\u4efb\u4f55AWS\u533a\u57df)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2825:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/DynamoDB-datatype-87290b0534b823ddb2a21562d5967ff1.png"},2936:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/DynamoDB-global-a1836874ddb6ffd491ed7b58fb28c192.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);