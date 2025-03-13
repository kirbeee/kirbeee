"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[6795],{41381:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>P,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"AWS/VPC & VPN/introduction","title":"\u4e00. \u5bfc\u8a00","description":"- IPv4 - \u4e92\u8054\u7f51\u534f\u8bae\u7248\u672c 4 (4.3 billion Addresses)","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/VPC & VPN/introduction.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/introduction","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/introduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4e00. \u5bfc\u8a00"},"sidebar":"docs","previous":{"title":"VPN","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPN"},"next":{"title":"About me","permalink":"/kirbeee/zh-TW/docs/cv"}}');var l=i(74848),r=i(28453);const t={title:"\u4e00. \u5bfc\u8a00"},c="AWS \u4e2d\u7684 IP \u5730\u5740",d={},o=[];function h(n){const e={h1:"h1",header:"header",li:"li",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"aws-\u4e2d\u7684-ip-\u5730\u5740",children:"AWS \u4e2d\u7684 IP \u5730\u5740"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["IPv4 - \u4e92\u8054\u7f51\u534f\u8bae\u7248\u672c 4 (4.3 billion Addresses)","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u516c\u5171IPv4 - \u53ef\u4ee5\u5728\u4e92\u8054\u7f51\u4e0a\u4f7f\u7528"}),"\n",(0,l.jsx)(e.li,{children:"\u6bcf\u5f53\u60a8\u505c\u6b62\u65f6\u90fd\u4f1a\u6709\u4e00\u4e2a\u65b0\u7684\u516c\u5171IP\u5730\u5740(\u9ed8\u8ba4)"}),"\n",(0,l.jsx)(e.li,{children:"\u79c1\u4ebaIPV4\u2015\u2015\u53ef\u7528\u4e8e\u79c1\u4eba\u7f51\u7edc\uff0c\u5982\u5185\u90e8AWS\u7f51\u7edc(\u5982192.168.1.1)"}),"\n",(0,l.jsx)(e.li,{children:"\u79c1\u5bc6IPV4\u88ab\u56fa\u5b9a\u4e3a EC2 \u5b9e\u4f8b\uff0c\u5373\u4f7f\u60a8\u5f00\u59cb/\u505c\u6b62"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"Elastic IP - \u5141\u8bb8\u60a8\u5c06\u56fa\u5b9a\u7684\u516c\u5171IPv4\u5730\u5740\u9644\u52a0\u5230 EC2 \u5b9e\u4f8b"}),"\n",(0,l.jsxs)(e.li,{children:["\u6ce8\u610f\uff1a\u6240\u6709AWS\u4e0a\u7684\u516c\u5171IPv4\u5c06\u6bcf\u5c0f\u65f6\u6536\u8d390.005\u7f8e\u5143(\u5305\u62ecEIP)","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u514d\u8d39\u5c42\uff1a\u6bcf\u6708750\u5c0f\u65f6\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["IPv6 - \u4e92\u8054\u7f51\u534f\u8bae\u7248\u672c 6 (3.4 \xd7 1038 \u5730\u5740)","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"AWS \u4e2d\u7684\u6bcf\u4e2aIP\u5730\u5740\u90fd\u662f\u516c\u5f00\u7684 (\u6ca1\u6709\u79c1\u6709\u8303\u56f4)"}),"\n",(0,l.jsxs)(e.li,{children:["\u4f8b\u5982\uff1a200 l:db8:3333:4444:cccc:ddd:eeee",":ffff"]}),"\n",(0,l.jsx)(e.li,{children:"\u514d\u8d39\u7684"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"summary",children:"Summary"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"VPC\uff1a\u865a\u62df\u9690\u79c1\u4e91"}),"\n",(0,l.jsx)(e.li,{children:"\u5b50\u7f51\uff1a\u8fde\u63a5\u5230 AZ\uff0cVPC \u7684\u7f51\u7edc\u5206\u533a"}),"\n",(0,l.jsx)(e.li,{children:"\u4e92\u8054\u7f51\u7f51\u5173\uff1a\u5728VPC\u4e00\u7ea7\uff0c\u63d0\u4f9b\u4e92\u8054\u7f51\u8bbf\u95ee"}),"\n",(0,l.jsx)(e.li,{children:"NAT\u7f51\u5173/\u5b9e\u4f8b\uff1a\u8ba9\u4e92\u8054\u7f51\u8bbf\u95ee\u79c1\u6709\u5b50\u7f51"}),"\n",(0,l.jsx)(e.li,{children:"NACL\uff1a\u65e0\u56fd\u7c4d\u7684\u8fdb\u51fa\u5b50\u7f51\u89c4\u5219"}),"\n",(0,l.jsx)(e.li,{children:"\u5b89\u5168\u5c0f\u7ec4\uff1a\u56fd\u5bb6\u5b89\u5168\uff0c\u5728EC2\u5b9e\u4f8b\u4e00\u7ea7\u6216ENI\u4e00\u7ea7\u5de5\u4f5c"}),"\n",(0,l.jsx)(e.li,{children:"VPC Peering: \u8fde\u63a5\u4e24\u4e2aVPC \u4e0e\u975e\u91cd\u53e0\u7684 IP \u8303\u56f4, \u975e\u4e34\u65f6\u6027\u7684"}),"\n",(0,l.jsx)(e.li,{children:"Elastic IP - \u56fa\u5b9a\u7684\u516c\u5171IPv4\uff0c\u5982\u679c\u4e0d\u5728\u4f7f\u7528\u4e2d\u5219\u6301\u7eed\u6210\u672c"}),"\n",(0,l.jsx)(e.li,{children:"VPC \u7aef\u70b9\uff1a\u63d0\u4f9b\u4e2a\u4eba\u8bbf\u95eeVPC \u5185AWS \u670d\u52a1\u7684\u6743\u9650"}),"\n",(0,l.jsx)(e.li,{children:"PrivateLink: \u79c1\u4eba\u8fde\u63a5\u5230\u7b2c\u4e09\u65b9VPC\u4e2d\u7684\u670d\u52a1"}),"\n",(0,l.jsx)(e.li,{children:"VPC \u6d41\u65e5\u5fd7\uff1a\u7f51\u7edc\u6d41\u65e5\u5fd7"}),"\n",(0,l.jsx)(e.li,{children:"\u7ad9\u70b9VPN\u7ad9\u70b9\uff1a\u4f4d\u4e8eDC\u548cAWS\u4e2d\u5fc3\u7684\u516c\u5171\u4e92\u8054\u7f51\u4e0a\u7684 VPN"}),"\n",(0,l.jsx)(e.li,{children:"\u5ba2\u6237\u7aef VPN \u8fde\u63a5\u60a8\u7684\u8ba1\u7b97\u673a\u5230 VPC"}),"\n",(0,l.jsx)(e.li,{children:"\u76f4\u63a5\u8fde\u63a5\uff1a\u76f4\u63a5\u8fde\u63a5\u5230 AWS \u7684\u79c1\u4eba\u8fde\u63a5"}),"\n",(0,l.jsx)(e.li,{children:"\u8fc7\u5883\u7f51\u5173\uff1a\u8fde\u63a5\u6570\u5343\u53f0VPC\u548c\u623f\u5730\u5185\u7f51\u7edc"}),"\n"]})]})}function P(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(96540);const l={},r=s.createContext(l);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);