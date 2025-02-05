"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[5204],{9878:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"AWS/Global Infrastruture/CloudFront","title":"CloudFront","description":"- \u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af (CDN)","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Global Infrastruture/CloudFront.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/CloudFront","permalink":"/kirbeee/ja-JP/docs/AWS/Global Infrastruture/CloudFront","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CloudFront"},"sidebar":"docs","previous":{"title":"Elastic Load Balancer & Auto Scaling Group","permalink":"/kirbeee/ja-JP/docs/AWS/ELB & ASG/Introduction"},"next":{"title":"\u30a8\u30c3\u30b8\u306e\u4f4d\u7f6e","permalink":"/kirbeee/ja-JP/docs/AWS/Global Infrastruture/EdgeLocation"}}');var i=l(4848),s=l(8453);const t={title:"CloudFront"},o="\u30af\u30e9\u30a6\u30c9\u30d5\u30ed\u30f3\u30c8\u306e\u6982\u8981",c={},d=[{value:"S3 bucket",id:"s3-bucket",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\u30aa\u30ea\u30b8\u30f3\uff08HTTP\uff09",id:"\u30ab\u30b9\u30bf\u30e0\u30aa\u30ea\u30b8\u30f3http",level:2},{value:"CloudFront:",id:"cloudfront",level:2},{value:"S3 Cross Region \u8907\u88fd:",id:"s3-cross-region-\u8907\u88fd",level:2}];function u(n){const e={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u30af\u30e9\u30a6\u30c9\u30d5\u30ed\u30f3\u30c8\u306e\u6982\u8981",children:"\u30af\u30e9\u30a6\u30c9\u30d5\u30ed\u30f3\u30c8\u306e\u6982\u8981"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af (CDN)"}),"\n",(0,i.jsx)(e.li,{children:"\u8aad\u307f\u53d6\u308a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u3001\u30a8\u30c3\u30b8\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u6539\u5584"}),"\n",(0,i.jsx)(e.li,{children:"216\u30dd\u30a4\u30f3\u30c8\u30aa\u30d6\u30d7\u30ec\u30bc\u30f3\u30b9\uff08\u30a8\u30c3\u30b8\u4f4d\u7f6e\uff09"}),"\n",(0,i.jsx)(e.li,{children:"DDoS\u4fdd\u8b77 (\u4e16\u754c\u898f\u6a21\u306e\u305f\u3081)\u3001Shield\u3001AWS Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u3068\u306e\u7d71\u5408"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"\u8d77\u6e90",children:"\u8d77\u6e90"}),"\n",(0,i.jsx)(e.h2,{id:"s3-bucket",children:"S3 bucket"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03\u3057\u3001\u30a8\u30c3\u30b8\u3067\u305d\u308c\u3089\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u306b"}),"\n",(0,i.jsx)(e.li,{children:"CloudFront Origin Access Control (OAC) \u306b\u3088\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316"}),"\n",(0,i.jsx)(e.li,{children:"OAC \u304cOrigin Access Identity (OAl) \u3092\u7f6e\u304d\u63db\u3048\u3066\u3044\u307e\u3059"}),"\n",(0,i.jsx)(e.li,{children:"CloudFront\u306f\u30a4\u30f3\u30b0\u30ec\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (S3\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b)"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u30ab\u30b9\u30bf\u30e0\u30aa\u30ea\u30b8\u30f3http",children:"\u30ab\u30b9\u30bf\u30e0\u30aa\u30ea\u30b8\u30f3\uff08HTTP\uff09"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc"}),"\n",(0,i.jsx)(e.li,{children:"EC2 instance"}),"\n",(0,i.jsx)(e.li,{children:"S3 \u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\uff08\u9759\u7684S3\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u3057\u3066\u30d0\u30b1\u30c3\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u4efb\u610f\u306eHTTP\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"\u9ad8\u30ec\u30d9\u30eb\u306ecloudfront",children:"\u9ad8\u30ec\u30d9\u30eb\u306eCloudfront"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"CloudFront",src:l(6330).A+"",width:"3486",height:"1526"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f8b:\n",(0,i.jsx)(e.img,{alt:"CloudFront",src:l(3945).A+"",width:"3042",height:"1670"})]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"cloudfront-vs-s3-cross-region-replication",children:"Cloudfront vs. S3 Cross Region Replication"}),"\n",(0,i.jsx)(e.h2,{id:"cloudfront",children:"CloudFront:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30c3\u30b8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}),"\n",(0,i.jsx)(e.li,{children:"\u30d5\u30a1\u30a4\u30eb\u306f TTL (\u591a\u52061\u65e5) \u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059"}),"\n",(0,i.jsx)(e.li,{children:"\u3069\u3053\u3067\u3082\u5229\u7528\u53ef\u80fd\u306a\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u6700\u9069\u3067\u3059"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"s3-cross-region-\u8907\u88fd",children:"S3 Cross Region \u8907\u88fd:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30ec\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u305f\u3044\u30ea\u30fc\u30b8\u30e7\u30f3\u3054\u3068\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,i.jsx)(e.li,{children:"\u30d5\u30a1\u30a4\u30eb\u306f\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u66f4\u65b0\u3055\u308c\u307e\u3059"}),"\n",(0,i.jsx)(e.li,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"}),"\n",(0,i.jsx)(e.li,{children:"\u4f4e\u9045\u5ef6\u3067\u5229\u7528\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308b\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u6700\u9069\u3067\u3059"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},3945:(n,e,l)=>{l.d(e,{A:()=>r});const r=l.p+"assets/images/Cloudfront-example-42827c8bef16a125e2e8794cfa94b063.png"},6330:(n,e,l)=>{l.d(e,{A:()=>r});const r=l.p+"assets/images/Cloudfront-high-level-8282512b4979b4dfaddc2dfef6f7e433.png"},8453:(n,e,l)=>{l.d(e,{R:()=>t,x:()=>o});var r=l(6540);const i={},s=r.createContext(i);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);