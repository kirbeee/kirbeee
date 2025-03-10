"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[6383],{98148:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>V,frontMatter:()=>l,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"AWS/VPC & VPN/VPC-flowlog&VPC-peering","title":"VPC & VPN \u6d41\u65e5\u5fd7\u548cVPC & VPN Peering","description":"- \u6355\u83b7\u5230\u60a8\u7684\u63a5\u53e3\u4e2d\u7684 IP \u6d41\u91cf\u4fe1\u606f\uff1a","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/VPC & VPN/VPC-flowlog&VPC-peering.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/VPC-flowlog&VPC-peering","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPC-flowlog&VPC-peering","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VPC & VPN \u6d41\u65e5\u5fd7\u548cVPC & VPN Peering"},"sidebar":"docs","previous":{"title":"VPC \u548c VPN \u7aef\u70b9","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPC-endpoint"},"next":{"title":"VPC & VPN (\u865a\u62df\u9690\u79c1\u4e91)","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPC"}}');var s=i(74848),t=i(28453);const l={title:"VPC & VPN \u6d41\u65e5\u5fd7\u548cVPC & VPN Peering"},c="VPC \u6d41\u65e5\u5fd7",o={},P=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"vpc-\u6d41\u65e5\u5fd7",children:"VPC \u6d41\u65e5\u5fd7"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6355\u83b7\u5230\u60a8\u7684\u63a5\u53e3\u4e2d\u7684 IP \u6d41\u91cf\u4fe1\u606f\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VPC \u6d41\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.li,{children:"\u5b50\u7f51\u6d41\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.li,{children:"\u5f39\u6027\u7f51\u7edc\u754c\u9762\u6d41\u65e5\u5fd7"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5e2e\u52a9\u76d1\u89c6\u548c\u6545\u969c\u6392\u9664\u8fde\u63a5\u95ee\u9898\u3002 \u793a\u4f8b\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f51\u7edc\u5b50\u7f51"}),"\n",(0,s.jsx)(n.li,{children:"\u5b50\u7f51\u5230\u5b50\u7f51"}),"\n",(0,s.jsx)(n.li,{children:"\u5b50\u7f51\u7684\u7f51\u7edc"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u4ece AWS \u7ba1\u7406\u63a5\u53e3\u83b7\u53d6\u7f51\u7edc\u4fe1\u606f\uff1aElastic\n\u8d1f\u8f7d\u5747\u8861\u5668\u3001ElastiCache\u3001RDS\u3001Aurora \u7b49..."}),"\n",(0,s.jsx)(n.li,{children:"VPC \u6d41\u65e5\u5fd7\u6570\u636e\u53ef\u4ee5\u5230 S3, CloudWatch \u65e5\u5fd7\u548c Amazon \u6570\u636e\u70df\u82b1\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"vpc-peering",children:"VPC Peering"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VPC Peering",src:i(83636).A+"",width:"1084",height:"1032"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528AWS\u7f51\u7edc\u79c1\u4e0b\u8fde\u63a5\u4e24\u4e2a\u865a\u62df\u673a"}),"\n",(0,s.jsx)(n.li,{children:"\u8ba9\u4ed6\u4eec\u7684\u884c\u4e3a\u4eff\u4f5b\u662f\u5728\u540c\u4e00\u4e2a\u7f51\u7edc"}),"\n",(0,s.jsx)(n.li,{children:"\u5fc5\u987b\u6ca1\u6709\u91cd\u53e0\u7684 CIDR (IP \u5730\u5740\u8303\u56f4)"}),"\n",(0,s.jsx)(n.li,{children:"VPC Peering \u8fde\u63a5\u4e0d\u662f\u4e34\u65f6\u6027\u7684(\u5fc5\u987b\u4e3a\u6bcf\u4e2aVPC \u5efa\u7acb\uff0c\u9700\u8981\u5f7c\u6b64\u901a\u4fe1)"}),"\n"]})]})}function V(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},83636:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/VPC-peering-92ca86301d8bce088c21cbe9aa194ada.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);