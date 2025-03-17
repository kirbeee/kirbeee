"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8937],{12855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>P,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"AWS/VPC & VPN/VPC","title":"VPC & VPN (\u865a\u62df\u9690\u79c1\u4e91)","description":"VPC","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/VPC & VPN/VPC.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/VPC","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPC","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/VPC & VPN/VPC.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"VPC & VPN (\u865a\u62df\u9690\u79c1\u4e91)"},"sidebar":"docs","previous":{"title":"VPC & VPN \u6d41\u65e5\u5fd7\u548cVPC & VPN Peering","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPC-flowlog&VPC-peering"},"next":{"title":"VPN","permalink":"/kirbeee/zh-TW/docs/AWS/VPC & VPN/VPN"}}');var i=t(74848),r=t(28453);const c={title:"VPC & VPN (\u865a\u62df\u9690\u79c1\u4e91)"},d="VPC (\u865a\u62df\u9690\u79c1\u4e91)",l={},a=[];function o(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"vpc-\u865a\u62df\u9690\u79c1\u4e91",children:"VPC (\u865a\u62df\u9690\u79c1\u4e91)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VPC",src:t(25191).A+"",width:"904",height:"1268"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VPC - \u865a\u62df\u9690\u79c1\u4e91\uff1a\u90e8\u7f72\u8d44\u6e90\u7684\u79c1\u4eba\u7f51\u7edc (\u533a\u57df\u8d44\u6e90)"}),"\n",(0,i.jsx)(n.li,{children:"\u5b50\u7f51\u5141\u8bb8\u60a8\u5728 VPC \u5185\u5206\u533a\u60a8\u7684\u7f51\u7edc (\u53ef\u7528\u533a\u57df\u8d44\u6e90)"}),"\n",(0,i.jsx)(n.li,{children:"\u516c\u5171\u5b50\u7f51\u662f\u53ef\u4ece\u4e92\u8054\u7f51\u4e0a\u8bbf\u95ee\u7684\u5b50\u7f51"}),"\n",(0,i.jsx)(n.li,{children:"\u79c1\u6709\u5b50\u7f51\u662f\u65e0\u6cd5\u4ece\u4e92\u8054\u7f51\u4e0a\u8bbf\u95ee\u7684\u5b50\u7f51"}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u5b9a\u4e49\u7f51\u7edc\u8fde\u63a5\u548c\u5b50\u7f51\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u6211\u4eec\u4f7f\u7528\u8def\u7531\u8868\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u56fe\u8868",children:"\u56fe\u8868"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VPC",src:t(80811).A+"",width:"1904",height:"1216"})}),"\n",(0,i.jsx)(n.h1,{id:"\u4e92\u8054\u7f51\u7f51\u5173\u548cnat-\u7f51\u5173",children:"\u4e92\u8054\u7f51\u7f51\u5173\u548cNAT \u7f51\u5173"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VPC",src:t(24981).A+"",width:"1034",height:"1214"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e92\u8054\u7f51\u7f51\u5173\u5e2e\u52a9\u6211\u4eec\u7684 VPC \u5b9e\u4f8b\u4e0e\u4e92\u8054\u7f51\u8fde\u63a5"}),"\n",(0,i.jsx)(n.li,{children:"\u516c\u5171\u5b50\u7f51\u6709\u4e00\u6761\u901a\u5f80\u4e92\u8054\u7f51\u7f51\u5173\u7684\u9053\u8def\u3002"}),"\n",(0,i.jsx)(n.li,{children:"NAT \u7f51\u5173(AWS-managed) & NAT \u5b9e\u4f8b(\u81ea\u7ba1\u7406) \u5141\u8bb8\u60a8\u7684\u79c1\u5bc6\u5b50\u7f51\u4e2d\u7684\u5b9e\u4f8b\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u540c\u65f6\u4fdd\u6301\u79c1\u6709\u72b6\u6001"}),"\n"]})]})}function P(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},80811:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/VPC-diagram-a432c52adb1d9083514d279b3edc7ac8.png"},25191:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/VPC-a699902a43dc113d146c989b2e35d52d.png"},24981:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/VPC2-b4c9d42e267816cb5027411ae7eeb31f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);