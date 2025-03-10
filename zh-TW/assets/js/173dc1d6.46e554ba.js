"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[1836],{2645:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"AWS/Deployment & managing/Elastic-Beanstalk","title":"\u5f39\u6027Beanstalk","description":"- Elastic Beanstalk\u662f\u5f00\u53d1\u8005\u5728AWS\u4e0a\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u4e2d\u5fc3\u89c6\u56fe","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Deployment & managing/Elastic-Beanstalk.md","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/Elastic-Beanstalk","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/Elastic-Beanstalk","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5f39\u6027Beanstalk"},"sidebar":"docs","previous":{"title":"\u4ee3\u7801\u7ba1\u9053\u7ebf","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/CodePipeline"},"next":{"title":"SSM (\u7cfb\u7edf\u7ba1\u7406\u5458)","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/SSM"}}');var t=l(74848),s=l(28453);const a={title:"\u5f39\u6027Beanstalk"},r="\u5f39\u6027Beanstalk",c={},d=[{value:"\u7ba1\u7406\u670d\u52a1",id:"\u7ba1\u7406\u670d\u52a1",level:2},{value:"\u8d23\u4efb",id:"\u8d23\u4efb",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2}];function o(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5f39\u6027beanstalk",children:"\u5f39\u6027Beanstalk"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Elastic Beanstalk\u662f\u5f00\u53d1\u8005\u5728AWS\u4e0a\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u4e2d\u5fc3\u89c6\u56fe"}),"\n",(0,t.jsx)(n.li,{children:"\u5b83\u4f7f\u7528\u4e86\u6211\u4eec\u4ee5\u524d\u770b\u5230\u7684\u6240\u6709\u7ec4\u4ef6\uff1aEC2, ASG, ELB, RDS\u7b49..."}),"\n",(0,t.jsx)(n.li,{children:"\u4f46\u4ece\u4e00\u79cd\u89c2\u70b9\u6765\u770b\uff0c\u8fd9\u662f\u5f88\u5bb9\u6613\u7406\u89e3\u7684\uff01"}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u914d\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"Beanstalk = \u5e73\u53f0\u4e3a\u670d\u52a1 (PaaS)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7ba1\u7406\u670d\u52a1",children:"\u7ba1\u7406\u670d\u52a1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5b9e\u4f8b\u914d\u7f6e / OS \u7531 Beanstalk \u5904\u7406"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u7b56\u7565\u662f\u53ef\u914d\u7f6e\u7684\uff0c\u4f46\u7531Elastic Beanstalk\u6267\u884c"}),"\n",(0,t.jsx)(n.li,{children:"\u80fd\u529b\u5efa\u8bbe"}),"\n",(0,t.jsx)(n.li,{children:"\u8d1f\u8f7d\u5747\u8861\u548c\u81ea\u52a8\u7f29\u653e"}),"\n",(0,t.jsx)(n.li,{children:"\u5e94\u7528\u5065\u5eb7\u76d1\u6d4b\u548c\u5e94\u5bf9\u80fd\u529b"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8d23\u4efb",children:"\u8d23\u4efb"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4ec5\u4ec5\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u662f\u5f00\u53d1\u8005\u7684\u8d23\u4efb"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e09\u4e2a\u67b6\u6784\u6a21\u578b\uff1a"}),"\n",(0,t.jsx)(n.li,{children:"\u5355\u5b9e\u4f8b\u90e8\u7f72\uff1a\u9002\u5408\u5f00\u53d1\u7248"}),"\n",(0,t.jsx)(n.li,{children:"LB + ASG\uff1a\u5bf9\u751f\u4ea7\u6216\u751f\u4ea7\u524d\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u975e\u5e38\u597d"}),"\n",(0,t.jsx)(n.li,{children:"\u4ec5ASG\uff1a\u5bf9\u4e8e\u751f\u4ea7\u4e2d\u7684\u975e\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u975e\u5e38\u68d2(\u5458\u5de5\u7b49...)"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"beanstalk",children:"Beanstalk"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5065\u5eb7\u4ee3\u7406\u4eba\u5c06\u8ba1\u91cf\u63a8\u5230\u4e91\u53f0\u89c2\u5bdf"}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u67e5\u5e94\u7528\u5065\u5eb7\uff0c\u53d1\u5e03\u5065\u5eb7\u4e8b\u4ef6"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>r});var i=l(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);