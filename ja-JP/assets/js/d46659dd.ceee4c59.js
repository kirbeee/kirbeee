"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[4281],{8688:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"AWS/Deployment & managing/SSM","title":"SSM (\u30b7\u30b9\u30c6\u30e0\u30de\u30cd\u30fc\u30b8\u30e3)","description":"- \u5927\u898f\u6a21\u306a EC2 \u30b7\u30b9\u30c6\u30e0\u304a\u3088\u3073\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30b7\u30b9\u30c6\u30e0\u306e\u7ba1\u7406\u3092\u652f\u63f4\u3057\u307e\u3059\u3002","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Deployment & managing/SSM.md","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/SSM","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/SSM","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SSM (\u30b7\u30b9\u30c6\u30e0\u30de\u30cd\u30fc\u30b8\u30e3)"},"sidebar":"docs","previous":{"title":"\u5f3e\u6027\u30d3\u30fc\u30f3\u30b9\u30c8\u30fc\u30af","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/Elastic-Beanstalk"},"next":{"title":"Sumry","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/Summary"}}');var t=i(4848),l=i(8453);const r={title:"SSM (\u30b7\u30b9\u30c6\u30e0\u30de\u30cd\u30fc\u30b8\u30e3)"},c="SSM",d={},a=[];function o(n){const e={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"ssm",children:"SSM"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5927\u898f\u6a21\u306a EC2 \u30b7\u30b9\u30c6\u30e0\u304a\u3088\u3073\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30b7\u30b9\u30c6\u30e0\u306e\u7ba1\u7406\u3092\u652f\u63f4\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5225\u306e\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9AWS\u30b5\u30fc\u30d3\u30b9"}),"\n",(0,t.jsx)(e.li,{children:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u72b6\u614b\u306b\u3064\u3044\u3066\u306e\u904b\u7528\u306b\u95a2\u3059\u308b\u6d1e\u5bdf\u3092\u53d6\u5f97"}),"\n",(0,t.jsx)(e.li,{children:"Suite of 10+ products"}),"\n",(0,t.jsxs)(e.li,{children:["\u6700\u3082\u91cd\u8981\u306a\u6a5f\u80fd\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u3092\u5f37\u5316\u3059\u308b\u30d1\u30c3\u30c1\u81ea\u52d5\u5316"}),"\n",(0,t.jsx)(e.li,{children:"\u30b5\u30fc\u30d0\u30fc\u306e\u8266\u968a\u5168\u4f53\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,t.jsx)(e.li,{children:"SSM\u30d1\u30e9\u30e1\u30fc\u30bf\u30b9\u30c8\u30a2\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u8a2d\u5b9a\u3092\u4fdd\u5b58"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Linux\u3001Windows\u3001MacOS\u3001Raspberry Pi OS (Raspbian) \u3067\u52d5\u4f5c\u3057\u307e\u3059"}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"\u4ed5\u7d44\u307f",children:"\u4ed5\u7d44\u307f"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"SSM",src:i(9348).A+"",width:"1432",height:"1166"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"SSM\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u5236\u5fa1\u3059\u308b\u30b7\u30b9\u30c6\u30e0\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,t.jsx)(e.li,{children:"Amazon Linux AML\u3068\u3044\u304f\u3064\u304b\u306eUbuntu AMI\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059"}),"\n",(0,t.jsx)(e.li,{children:"SSM\u3067\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5236\u5fa1\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u306a\u308a\u307e\u3059\u3002 \u304a\u305d\u3089\u304fSSM\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u554f\u984c\u3060"}),"\n",(0,t.jsx)(e.li,{children:"SSM\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u304a\u304b\u3052\u3067\u3001\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u3092\u69cb\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"ssm-\u30bb\u30c3\u30b7\u30e7\u30f3-\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",children:"SSM \u30bb\u30c3\u30b7\u30e7\u30f3 \u30de\u30cd\u30fc\u30b8\u30e3\u30fc"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"SSM",src:i(7736).A+"",width:"960",height:"1554"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"EC2\u30b5\u30fc\u30d0\u30fc\u3068\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30b5\u30fc\u30d0\u30fc\u3067\u5b89\u5168\u306a\u30b7\u30a7\u30eb\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"}),"\n",(0,t.jsx)(e.li,{children:"SSH\u30a2\u30af\u30bb\u30b9\u3001\u8981\u585e\u30db\u30b9\u30c8\u3001\u307e\u305f\u306fSSH\u30ad\u30fc\u304c\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093"}),"\n",(0,t.jsx)(e.li,{children:"22\u756a\u30dd\u30fc\u30c8\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\uff08\u3088\u308a\u826f\u3044\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\uff09"}),"\n",(0,t.jsx)(e.li,{children:"Linux\u3001macOS\u3001Windows\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059"}),"\n",(0,t.jsx)(e.li,{children:"\u30bb\u30c3\u30b7\u30e7\u30f3\u30ed\u30b0\u30c7\u30fc\u30bf\u3092S3\u307e\u305f\u306fCloudWatch\u30ed\u30b0\u306b\u9001\u4fe1\u3059\u308b"}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"\u30b7\u30b9\u30c6\u30e0\u30de\u30cd\u30fc\u30b8\u30e3\u30d1\u30e9\u30e1\u30fc\u30bf\u30b9\u30c8\u30a2",children:"\u30b7\u30b9\u30c6\u30e0\u30de\u30cd\u30fc\u30b8\u30e3\u30d1\u30e9\u30e1\u30fc\u30bf\u30b9\u30c8\u30a2"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"SSM",src:i(367).A+"",width:"1198",height:"1566"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u8a2d\u5b9a\u3068\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u7528\u306e\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8"}),"\n",(0,t.jsx)(e.li,{children:"API \u30ad\u30fc\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u8a2d\u5b9a..."}),"\n",(0,t.jsx)(e.li,{children:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3001\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u3001\u8010\u4e45\u6027\u3001\u7c21\u5358\u306aSDK"}),"\n",(0,t.jsx)(e.li,{children:"IAM \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u3092\u5236\u5fa1\u3059\u308b"}),"\n",(0,t.jsx)(e.li,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u8ffd\u8de1\uff06\u6697\u53f7\u5316 (\u30aa\u30d7\u30b7\u30e7\u30f3)"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},367:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/Parameter-store-a4de321437cb40f60d8bc72b90cee9e2.png"},9348:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/SSM-arch-ac03f5073235b28e66621d6b83f9bc80.png"},7736:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/SSM-session-manager-bc11ebdc6411429d31f9c25d5b73c5c6.png"},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(6540);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);