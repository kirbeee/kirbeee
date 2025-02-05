"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[9480],{7862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"AWS/VPC & VPN/VPC-flowlog&VPC-peering","title":"VPC\u3068VPN\u30d5\u30ed\u30fc\u30ed\u30b0 & VPC\u3068VPN\u30d4\u30a2\u30ea\u30f3\u30b0","description":"- \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u5165\u3063\u3066\u3044\u308b IP \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u307e\u3059\u3002","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/VPC & VPN/VPC-flowlog&VPC-peering.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/VPC-flowlog&VPC-peering","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & VPN/VPC-flowlog&VPC-peering","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VPC\u3068VPN\u30d5\u30ed\u30fc\u30ed\u30b0 & VPC\u3068VPN\u30d4\u30a2\u30ea\u30f3\u30b0"},"sidebar":"docs","previous":{"title":"VPC\u3068VPN\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & VPN/VPC-endpoint"},"next":{"title":"VPC\u3068VPN\uff08\u4eee\u60f3\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30af\u30e9\u30a6\u30c9\uff09","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & VPN/VPC"}}');var s=i(4848),t=i(8453);const l={title:"VPC\u3068VPN\u30d5\u30ed\u30fc\u30ed\u30b0 & VPC\u3068VPN\u30d4\u30a2\u30ea\u30f3\u30b0"},c="VPC\u30d5\u30ed\u30fc\u30ed\u30b0",o={},P=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"vpc\u30d5\u30ed\u30fc\u30ed\u30b0",children:"VPC\u30d5\u30ed\u30fc\u30ed\u30b0"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u5165\u3063\u3066\u3044\u308b IP \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VPC\u30d5\u30ed\u30fc\u30ed\u30b0"}),"\n",(0,s.jsx)(n.li,{children:"\u30b5\u30d6\u30cd\u30c3\u30c8\u30d5\u30ed\u30fc\u30ed\u30b0"}),"\n",(0,s.jsx)(n.li,{children:"Elastic Network Interface Flow Logs"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u7d9a\u306e\u554f\u984c\u306e\u76e3\u8996\u3068\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u4f8b","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3078\u306e\u30b5\u30d6\u30cd\u30c3\u30c8"}),"\n",(0,s.jsx)(n.li,{children:"\u30b5\u30d6\u30cd\u30c3\u30c8\u306b\u30b5\u30d6\u30cd\u30c3\u30c8"}),"\n",(0,s.jsx)(n.li,{children:"\u30b5\u30d6\u30cd\u30c3\u30c8\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"AWS\u7ba1\u7406\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u304b\u3089\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u60c5\u5831\u3082\u53d6\u5f97\u3057\u307e\u3059: Elastic\n\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3001ElastiCache\u3001RDS\u3001Aurora\u306a\u3069..."}),"\n",(0,s.jsx)(n.li,{children:"VPC\u30d5\u30ed\u30fc\u30ed\u30b0\u306e\u30c7\u30fc\u30bf\u306fS3\u3001CloudWatch\u30ed\u30b0\u3001\u304a\u3088\u3073Amazon\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30a2\u30ed\u30fc\u30ba\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"vpc-peering",children:"VPC Peering"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VPC Peering",src:i(1970).A+"",width:"1084",height:"1032"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306b2\u53f0\u306eVPC\u3092\u63a5\u7d9a\u3059\u308b"}),"\n",(0,s.jsx)(n.li,{children:"\u540c\u3058\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u3044\u308b\u304b\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3055\u305b\u307e\u3059"}),"\n",(0,s.jsx)(n.li,{children:"CIDR\uff08IP\u30a2\u30c9\u30ec\u30b9\u7bc4\u56f2\uff09\u3092\u91cd\u8907\u3055\u305b\u3066\u306f\u3044\u3051\u307e\u305b\u3093"}),"\n",(0,s.jsx)(n.li,{children:"VPC\u30d4\u30a2\u30ea\u30f3\u30b0\u63a5\u7d9a\u306f\u30c8\u30e9\u30f3\u30b8\u30c6\u30a3\u30d6\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff08\u76f8\u4e92\u306b\u901a\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308bVPC\u3054\u3068\u306b\u78ba\u7acb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1970:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/VPC-peering-92ca86301d8bce088c21cbe9aa194ada.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);