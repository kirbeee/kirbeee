"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8728],{46184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"AWS/Database/Introduction","title":"\u6570\u636e\u5e93\u4ecb\u7ecd","description":"- AWS \u63d0\u4f9b\u4f7f\u7528\u6765\u7ba1\u7406\u4e0d\u540c\u7684\u6570\u636e\u5e93","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Database/Introduction.md","sourceDirName":"AWS/Database","slug":"/AWS/Database/Introduction","permalink":"/kirbeee/zh-TW/docs/AWS/Database/Introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Database/Introduction.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"\u6570\u636e\u5e93\u4ecb\u7ecd"},"sidebar":"docs","previous":{"title":"Amazon Glue","permalink":"/kirbeee/zh-TW/docs/AWS/Database/Glue"},"next":{"title":"\u5df2\u7ecf\u7ba1\u7406\u7684 Blockchain","permalink":"/kirbeee/zh-TW/docs/AWS/Database/Managed-Blockchain"}}');var r=t(74848),s=t(28453);const l={title:"\u6570\u636e\u5e93\u4ecb\u7ecd"},a="AWS\u6570\u636e\u5e93\u548c\u5171\u4eab\u8d23\u4efb",c={},o=[];function d(e){const n={h1:"h1",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aws\u6570\u636e\u5e93\u548c\u5171\u4eab\u8d23\u4efb",children:"AWS\u6570\u636e\u5e93\u548c\u5171\u4eab\u8d23\u4efb"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AWS \u63d0\u4f9b\u4f7f\u7528\u6765\u7ba1\u7406\u4e0d\u540c\u7684\u6570\u636e\u5e93"}),"\n",(0,r.jsx)(n.li,{children:"\u798f\u5229\u5305\u62ec\uff1a"}),"\n",(0,r.jsx)(n.li,{children:"\u5feb\u901f\u63d0\u4f9b\u3001 \u9ad8\u53ef\u7528\u6027\u3001\u5782\u76f4\u548c\u6c34\u5e73\u7f29\u653e"}),"\n",(0,r.jsx)(n.li,{children:"\u81ea\u52a8\u5907\u4efd\u548c\u8fd8\u539f\uff0c\u64cd\u4f5c\uff0c\u5347\u7ea7"}),"\n",(0,r.jsx)(n.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\u4fee\u8865\u7531AWS\u5904\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u76d1\u6d4b\u3001\u63d0\u9192"}),"\n",(0,r.jsx)(n.li,{children:"\u6ce8\u610f\uff1a\u8bb8\u591a\u6570\u636e\u5e93\u6280\u672f\u53ef\u4ee5\u5728 EC2 \u4e0a\u8fd0\u884c\uff0c\u4f46\u60a8\u5fc5\u987b\u5904\u7406\u81ea\u5df1\u7684\u590d\u539f\u529b\u3001\u5907\u4efd\u3001\u8865\u4e01\u3001\u9ad8\u5ea6\u53ef\u7528\u6027\u3001\u6545\u969c\u5bb9\u5fcd\u7b49\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5173\u7cfb\u6570\u636e\u5e93 - OLTP: RDS & Aurora (SQL)"}),"\n",(0,r.jsx)(n.li,{children:"\u591aAZ\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u9605\u8bfbReplicas, Multi-Region"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6570\u636e\u5e93\uff1aElastiCache"}),"\n",(0,r.jsx)(n.li,{children:"Key/Value Database\uff1aDynamoDB (\u65e0\u670d\u52a1\u5668)\u548cDAX (\u52a8\u6001\u6570\u636e\u5e93\u7f13\u5b58)"}),"\n",(0,r.jsx)(n.li,{children:"\u4ed3\u5e93-OLAP: Redshift (SQL)"}),"\n",(0,r.jsx)(n.li,{children:"Hadoop \u96c6\u7fa4\uff1aEMR"}),"\n",(0,r.jsx)(n.li,{children:"Athena: \u67e5\u8be2Amazon S3 (serverless & SQL)"}),"\n",(0,r.jsx)(n.li,{children:"QuickSight: \u60a8\u6570\u636e\u4e0a\u7684\u4eea\u8868\u677f (\u65e0\u670d\u52a1\u5668)"}),"\n",(0,r.jsx)(n.li,{children:'DocumentDB: "Aurora for MongoDB" USON - NoSQL database)'}),"\n",(0,r.jsx)(n.li,{children:"Amazon QLDB: \u91d1\u878d\u4ea4\u6613\u5206\u7c7b\u8d26(\u4e0d\u53ef\u53d8\u7684\u671f\u520a\uff0c\u53ef\u52a0\u5bc6)"}),"\n",(0,r.jsx)(n.li,{children:"\u4e9a\u9a6c\u900a\u7ba1\u7406\u533a\u5757\u94fe\uff1a\u7ba1\u7406\u8d85\u91cf\u7684Fabric & Ethereum \u533a\u5757\u94fe\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Glue: \u7ba1\u7406\u7684 ETL (Extract Transform Load) \u548c\u6570\u636e\u76ee\u5f55\u670d\u52a1"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u5e93\u8fc1\u79fb: DMS"}),"\n",(0,r.jsx)(n.li,{children:"Neptun\uff1a\u56fe\u5f62\u6570\u636e\u5e93"}),"\n",(0,r.jsx)(n.li,{children:"\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);