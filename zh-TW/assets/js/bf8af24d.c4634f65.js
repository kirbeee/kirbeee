"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8850],{83659:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"AWS/Cloud Monitoring/CodeGuru","title":"CodeGuru","description":"- \u7528\u4e8e\u81ea\u52a8\u5316\u4ee3\u7801\u5ba1\u67e5\u548c\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u5efa\u8bae\u7684 ML\u9a71\u52a8\u670d\u52a1","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Cloud Monitoring/CodeGuru.md","sourceDirName":"AWS/Cloud Monitoring","slug":"/AWS/Cloud Monitoring/CodeGuru","permalink":"/zh-TW/docs/AWS/Cloud Monitoring/CodeGuru","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CodeGuru"},"sidebar":"docs","previous":{"title":"\u4e91\u76d1\u89c6\u65e5\u5fd7","permalink":"/zh-TW/docs/AWS/Cloud Monitoring/CloudWatch-log"},"next":{"title":"EventBridge","permalink":"/zh-TW/docs/AWS/Cloud Monitoring/EventBridge"}}');var o=i(74848),t=i(28453);const d={title:"CodeGuru"},l="CodeGuru",s={},u=[];function c(n){const e={h1:"h1",header:"header",img:"img",li:"li",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"codeguru",children:"CodeGuru"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7528\u4e8e\u81ea\u52a8\u5316\u4ee3\u7801\u5ba1\u67e5\u548c\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u5efa\u8bae\u7684 ML\u9a71\u52a8\u670d\u52a1"}),"\n",(0,o.jsx)(e.li,{children:"\u63d0\u4f9b\u4e24\u4e2a\u529f\u80fd"}),"\n",(0,o.jsx)(e.li,{children:"CodeGuru\u8bc4\u8bba\u5458\uff1a\u7528\u4e8e\u9759\u6001\u4ee3\u7801\u5206\u6790\u7684\u81ea\u52a8\u4ee3\u7801\u8bc4\u8bba(\u5f00\u53d1)"}),"\n",(0,o.jsxs)(e.li,{children:["CodeGuru Profiler: visibility/recommendations about application performance during runtime (production)\n",(0,o.jsx)(e.img,{alt:"CodeGuru",src:i(22602).A+"",width:"2600",height:"628"})]}),"\n"]}),"\n",(0,o.jsx)(e.h1,{id:"codeguru-\u5ba1\u6838\u8005",children:"CodeGuru \u5ba1\u6838\u8005"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u8bc6\u522b\u5173\u952e\u95ee\u9898\u3001\u5b89\u5168\u8584\u5f31\u73af\u8282\u548c\u96be\u4ee5\u627e\u5230\u7684\u9519\u8bef"}),"\n",(0,o.jsx)(e.li,{children:"\u793a\u4f8b\uff1a\u901a\u7528\u7f16\u7801\u6700\u4f73\u505a\u6cd5\u3001\u8d44\u6e90\u6cc4\u6f0f\u3001\u5b89\u5168\u68c0\u6d4b\u3001\u8f93\u5165\u9a8c\u8bc1"}),"\n",(0,o.jsx)(e.li,{children:"\u4f7f\u7528\u673a\u5668\u5b66\u4e60\u548c\u81ea\u52a8\u7406\u7531"}),"\n",(0,o.jsx)(e.li,{children:"\u5343\u767e\u4e07\u6761\u4ee3\u7801\u8bc4\u8bba\u4e0a\u7684\u60e8\u906d\u5438\u53d6\u7684\u5173\u4e8e\u5f00\u653e\u6e90\u7801\u548c\u4e9a\u9a6c\u900a\u4ed3\u5e93\u7684\u7ecf\u9a8c\u6559\u8bad"}),"\n",(0,o.jsx)(e.li,{children:"\u652f\u6301 Java \u548c Python"}),"\n",(0,o.jsx)(e.li,{children:"\u4e0e GitHub, CodeCommit, Bitbucket \u548c AWS CodeBuilding \u96c6\u6210\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.h1,{id:"codeguru-\u914d\u7f6e\u6587\u4ef6",children:"CodeGuru \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5e2e\u52a9\u7406\u89e3\u60a8\u5e94\u7528\u7a0b\u5e8f\u7684\u8fd0\u884c\u65f6\u884c\u4e3a"}),"\n",(0,o.jsx)(e.li,{children:"\u793a\u4f8b\uff1a\u8bc6\u522b\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u5728\u65e5\u5fd7\u8bb0\u5f55\u4e2d\u6d88\u8017\u8fc7\u5927\u7684 CPU \u80fd\u529b"}),"\n",(0,o.jsxs)(e.li,{children:["\u529f\u80fd\uff1a","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u8bc6\u522b\u548c\u5220\u9664\u4ee3\u7801\u6548\u7387\u4f4e\u4e0b\u7684\u4ee3\u7801"}),"\n",(0,o.jsx)(e.li,{children:"\u6539\u8fdb\u5e94\u7528\u7a0b\u5e8fpermance(\u4f8b\u5982\u964d\u4f4eCPU\u5229\u7528\u7387)"}),"\n",(0,o.jsx)(e.li,{children:"\u51cf\u5c11\u8ba1\u7b97\u8d39\u7528"}),"\n",(0,o.jsx)(e.li,{children:"\u63d0\u4f9b\u5806\u6458\u8981\u6807\u8bc6\uff0c\u4f7f\u7528\u5185\u5b58\u7684\u5bf9\u8c61)"}),"\n",(0,o.jsx)(e.li,{children:"\u5f02\u5e38\u68c0\u6d4b"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:"\u5728 AWS \u4e0a\u6216\u5728\u524d\u63d0\u4e0a\u8fd0\u884c\u7684\u652f\u6301\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,o.jsx)(e.li,{children:"\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u5c0f\u5f00\u9500\u91cf"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},22602:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/CodeGuru-0f18a993feb916d45d9a033454d46288.png"},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>l});var r=i(96540);const o={},t=r.createContext(o);function d(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);