"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3401],{39876:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"AWS/Global Infrastruture/Global-accelerator","title":"\u5168\u5c40\u52a0\u901f\u5668","description":"\u5168\u5c40\u52a0\u901f\u5668","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Global Infrastruture/Global-accelerator.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/Global-accelerator","permalink":"/zh-TW/docs/AWS/Global Infrastruture/Global-accelerator","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5168\u5c40\u52a0\u901f\u5668"},"sidebar":"docs","previous":{"title":"\u8fb9\u7f18\u4f4d\u7f6e","permalink":"/zh-TW/docs/AWS/Global Infrastruture/EdgeLocation"},"next":{"title":"\u672c\u5730\u533a\u57df","permalink":"/zh-TW/docs/AWS/Global Infrastruture/Local-zone"}}');var l=r(74848),s=r(28453);const i={title:"\u5168\u5c40\u52a0\u901f\u5668"},c="\u5168\u5c40\u52a0\u901f\u5668",a={},o=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u5168\u5c40\u52a0\u901f\u5668",children:"\u5168\u5c40\u52a0\u901f\u5668"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u5168\u5c40\u52a0\u901f\u5668",src:r(97357).A+"",width:"1200",height:"1200"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5229\u7528AWS\u5168\u7403\u7f51\u7edc\u63d0\u9ad8\u5168\u7403\u5e94\u7528\u7a0b\u5e8f\u7684\u53ef\u7528\u6027\u548c\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5229\u7528AWS\u5185\u90e8\u7f51\u7edc\u4f18\u5316\u60a8\u5e94\u7528\u7a0b\u5e8f\u7684\u8def\u5f84 (60% \u6539\u8fdb)"}),"\n",(0,l.jsx)(n.li,{children:"2 AnycastIP\u662f\u4e3a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u7684\uff0c\u6d41\u91cf\u901a\u8fc7\u8fb9\u7f18\u4f4d\u7f6e\u53d1\u9001"}),"\n",(0,l.jsx)(n.li,{children:"\u8fb9\u7f18\u4f4d\u7f6e\u53d1\u9001\u6d41\u91cf\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u56fe\u8868",children:"\u56fe\u8868"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u5168\u5c40\u52a0\u901f\u5668\u56fe",src:r(33449).A+"",width:"2426",height:"1028"})}),"\n",(0,l.jsx)(n.h1,{id:"\u5168\u5c40\u52a0\u901f\u5668\u5bf9\u4e91\u53f0",children:"\u5168\u5c40\u52a0\u901f\u5668\u5bf9\u4e91\u53f0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b83\u4eec\u90fd\u4f7f\u7528AWS\u5168\u7403\u7f51\u7edc\u53ca\u5176\u5728\u4e16\u754c\u5404\u5730\u7684\u8fb9\u7f18\u4f4d\u7f6e"}),"\n",(0,l.jsx)(n.li,{children:"\u8fd9\u4e24\u79cd\u670d\u52a1\u90fd\u4e0eAWS Shield\u76f8\u7ed3\u5408\u4ee5\u4fdd\u62a4DDoS\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["CloudFront - \u5185\u5bb9\u53d1\u9001\u7f51\u7edc","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u63d0\u9ad8\u60a8\u53ef\u7f13\u5b58\u5185\u5bb9\u7684\u6027\u80fd(\u4f8b\u5982\u56fe\u50cf\u548c\u89c6\u9891)"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5bb9\u5728\u8fb9\u7f18\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5168\u5c40\u52a0\u901f\u5668","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u4e00\u4e2a\u6216\u591a\u4e2aAWS\u533a\u57df\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u8fb9\u7f18\u6ca1\u6709\u7f13\u5b58\u3001\u4ee3\u7406\u6570\u636e\u5305\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u901a\u8fc7 TCP \u6216 UDP \u63d0\u9ad8\u5e7f\u6cdb\u5e94\u7528\u7684\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u9002\u5408\u4f7f\u7528 HTTP \u5927\u5c0f\u5199\u9700\u8981\u9759\u6001IP\u5730\u5740"}),"\n",(0,l.jsx)(n.li,{children:"\u9002\u5408\u4f7f\u7528 HTTP \u7684\u6848\u4f8b\u9700\u8981\u786e\u5b9a\u6027\u7684\u3001\u5feb\u901f\u7684\u533a\u57df\u6545\u969c\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},33449:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Global-accelerator-diagram-8d948938e4f51361c4052a30695802ed.png"},97357:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Global-accelerator-622d49ab06d26fc9014869f67b1a6fef.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);