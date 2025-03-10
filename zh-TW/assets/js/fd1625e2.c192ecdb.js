"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7434],{92015:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"AWS/Deployment & managing/SSM","title":"SSM (\u7cfb\u7edf\u7ba1\u7406\u5458)","description":"- \u5e2e\u52a9\u60a8\u6309\u6bd4\u4f8b\u7ba1\u7406\u60a8\u7684 EC2 \u548c On-Buildes \u7cfb\u7edf","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Deployment & managing/SSM.md","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/SSM","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/SSM","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SSM (\u7cfb\u7edf\u7ba1\u7406\u5458)"},"sidebar":"docs","previous":{"title":"\u5f39\u6027Beanstalk","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/Elastic-Beanstalk"},"next":{"title":"\u6458\u8981","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/Summary"}}');var l=i(74848),t=i(28453);const r={title:"SSM (\u7cfb\u7edf\u7ba1\u7406\u5458)"},c="SSM",d={},a=[];function h(n){const e={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"ssm",children:"SSM"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5e2e\u52a9\u60a8\u6309\u6bd4\u4f8b\u7ba1\u7406\u60a8\u7684 EC2 \u548c On-Buildes \u7cfb\u7edf"}),"\n",(0,l.jsx)(e.li,{children:"\u53e6\u4e00\u4e2a\u6df7\u5408AWS\u670d\u52a1"}),"\n",(0,l.jsx)(e.li,{children:"\u83b7\u53d6\u5173\u4e8e\u60a8\u57fa\u7840\u8bbe\u65bd\u72b6\u6001\u7684\u64cd\u4f5c\u4fe1\u606f"}),"\n",(0,l.jsx)(e.li,{children:"10+\u4ea7\u54c1\u5957\u88c5"}),"\n",(0,l.jsxs)(e.li,{children:["\u6700\u91cd\u8981\u7684\u7279\u70b9\u662f\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6539\u8fdb\u9075\u5b88\u60c5\u51b5\u7684\u4fee\u7406\u81ea\u52a8\u5316"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u6574\u4e2a\u670d\u52a1\u5668\u961f\u8fd0\u884c\u547d\u4ee4"}),"\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 SSM \u53c2\u6570\u5546\u5e97\u4fdd\u5b58\u53c2\u6570\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u7528\u4e8e Linux, Windows, MacOS, and Raspberry Pi OS (Raspbian)"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f",children:"\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"SSM",src:i(11246).A+"",width:"1432",height:"1166"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6211\u4eec\u9700\u8981\u5c06SSM\u4ee3\u7406\u5b89\u88c5\u5230\u6211\u4eec\u63a7\u5236\u7684\u7cfb\u7edf"}),"\n",(0,l.jsx)(e.li,{children:"\u9ed8\u8ba4\u5728Amazon Linux AMl \u548c\u4e00\u4e9bUbuntu AMI \u4e0a\u5b89\u88c5"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u4e00\u4e2a\u5b9e\u4f8b\u4e0d\u80fd\u901a\u8fc7 SSM \u63a7\u5236, \u5b83'. \u53ef\u80fd\u662f\u4e0eSSM\u4ee3\u7406\u4eba\u7684\u4e00\u4e2a\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u611f\u8c22SSM\u4ee3\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u547d\u4ee4\uff0c\u4fee\u8865\u548c\u914d\u7f6e\u6211\u4eec\u7684\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"ssm-\u4f1a\u8bdd\u7ba1\u7406\u5668",children:"SSM \u4f1a\u8bdd\u7ba1\u7406\u5668"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"SSM",src:i(44166).A+"",width:"960",height:"1554"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5141\u8bb8\u60a8\u5728\u60a8\u7684 EC2 \u548c\u524d\u63d0\u670d\u52a1\u5668\u4e0a\u542f\u52a8\u4e00\u4e2a\u5b89\u5168\u7684 shell"}),"\n",(0,l.jsx)(e.li,{children:"\u4e0d\u9700\u8981 SSH \u8bbf\u95ee\u6743\u9650\u3001\u57fa\u7840\u4e3b\u673a\u6216 SSH \u5bc6\u94a5"}),"\n",(0,l.jsx)(e.li,{children:"\u65e0\u9700\u7aef\u53e3 22 (\u66f4\u597d\u7684\u5b89\u5168\u6027)"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301 Linux\u3001macOS \u548c Windows"}),"\n",(0,l.jsx)(e.li,{children:"\u53d1\u9001\u4f1a\u8bdd\u65e5\u5fd7\u6570\u636e\u5230 S3 \u6216 CloudWatch \u65e5\u5fd7"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"\u7cfb\u7edf\u7ba1\u7406\u5668\u53c2\u6570\u5b58\u50a8",children:"\u7cfb\u7edf\u7ba1\u7406\u5668\u53c2\u6570\u5b58\u50a8"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"SSM",src:i(17129).A+"",width:"1198",height:"1566"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u914d\u7f6e\u548c\u79d8\u5bc6\u5b89\u5168\u5b58\u50a8"}),"\n",(0,l.jsx)(e.li,{children:"API \u5bc6\u94a5\uff0c\u5bc6\u7801\uff0c\u914d\u7f6e..."}),"\n",(0,l.jsx)(e.li,{children:"\u65e0\u670d\u52a1\u5668\uff0c\u53ef\u7f29\u653e\uff0c\u8010\u4e45\uff0c\u7b80\u5355\u7684 SDK"}),"\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 IAM \u63a7\u5236\u8bbf\u95ee\u6743\u9650"}),"\n",(0,l.jsx)(e.li,{children:"\u7248\u672c\u8ddf\u8e2a\u548c\u52a0\u5bc6 (\u53ef\u9009)"}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},17129:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/Parameter-store-a4de321437cb40f60d8bc72b90cee9e2.png"},11246:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/SSM-arch-ac03f5073235b28e66621d6b83f9bc80.png"},44166:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/SSM-session-manager-bc11ebdc6411429d31f9c25d5b73c5c6.png"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(96540);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);