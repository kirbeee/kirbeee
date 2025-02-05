"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[2952],{4311:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"AWS/Cloud Monitoring/intro","title":"\u30af\u30e9\u30a6\u30c9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u7d39\u4ecb","description":"- CloudWatch\u306fAWS\u306e\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u307e\u3059","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Cloud Monitoring/intro.md","sourceDirName":"AWS/Cloud Monitoring","slug":"/AWS/Cloud Monitoring/intro","permalink":"/kirbeee/ja-JP/docs/AWS/Cloud Monitoring/intro","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u30af\u30e9\u30a6\u30c9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u7d39\u4ecb"},"sidebar":"docs","previous":{"title":"X-X-X","permalink":"/kirbeee/ja-JP/docs/AWS/Cloud Monitoring/X-ray"},"next":{"title":"Api Gateway","permalink":"/kirbeee/ja-JP/docs/AWS/Compute Service/ApiGateway"}}');var l=i(4848),t=i(8453);const s={title:"\u30af\u30e9\u30a6\u30c9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u7d39\u4ecb"},o="\u30af\u30e9\u30a6\u30c9\u30a6\u30a9\u30c3\u30c1\u306e\u6982\u8981",c={},d=[];function u(n){const e={h1:"h1",header:"header",li:"li",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u30af\u30e9\u30a6\u30c9\u30a6\u30a9\u30c3\u30c1\u306e\u6982\u8981",children:"\u30af\u30e9\u30a6\u30c9\u30a6\u30a9\u30c3\u30c1\u306e\u6982\u8981"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"CloudWatch\u306fAWS\u306e\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u307e\u3059"}),"\n",(0,l.jsx)(e.li,{children:"\u30e1\u30c8\u30ea\u30c3\u30af\u306f\u76e3\u8996\u3059\u308b\u5909\u6570(CPU\u5229\u7528\u7387\u3001Networkln...)\u3067\u3059\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30e1\u30c8\u30ea\u30c3\u30af\u306b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,l.jsx)(e.li,{children:"\u30e1\u30c8\u30ea\u30af\u30b9\u306e CloudWatch \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"\u91cd\u8981\u306a\u30e1\u30c8\u30ea\u30c3\u30af",children:"\u91cd\u8981\u306a\u30e1\u30c8\u30ea\u30c3\u30af"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\uff1aCPU\u4f7f\u7528\u7387\u3001\u30b9\u30c6\u30fc\u30bf\u30b9\u30c1\u30a7\u30c3\u30af\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af (RAM\u306a\u3057)","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"5 \u5206\u3054\u3068\u306b\u65e2\u5b9a\u306e\u30e1\u30c8\u30ea\u30c3\u30af"}),"\n",(0,l.jsx)(e.li,{children:"\u8a73\u7d30\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30aa\u30d7\u30b7\u30e7\u30f3 ($$$$): \u30e1\u30c8\u30ea\u30af\u30b9\u6bce|\u5206"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"EBS\u30dc\u30ea\u30e5\u30fc\u30e0: \u30c7\u30a3\u30b9\u30af\u306e\u8aad\u307f\u53d6\u308a/\u66f8\u304d\u8fbc\u307f"}),"\n",(0,l.jsx)(e.li,{children:"S3 \u30d0\u30b1\u30c3\u30c8: BucketSizeBytes, NumberOfObjects, AllRequests"}),"\n",(0,l.jsx)(e.li,{children:"\u8acb\u6c42\u984d: \u898b\u7a4d\u6599\u91d1\u5408\u8a08\uff08us-east-I\u306e\u307f\uff09"}),"\n",(0,l.jsx)(e.li,{children:"Service Limits: \u30b5\u30fc\u30d3\u30b9API\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u671f\u9593"}),"\n",(0,l.jsx)(e.li,{children:"\u30ab\u30b9\u30bf\u30e0\u30e1\u30c8\u30ea\u30c3\u30af\uff1a\u72ec\u81ea\u306e\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"summary",children:"Summary"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u30af\u30e9\u30a6\u30c9\u30a6\u30a9\u30c3\u30c1:","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30e1\u30c8\u30ea\u30af\u30b9: AWS \u30b5\u30fc\u30d3\u30b9\u3068\u8ab2\u91d1\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u76e3\u8996\u3059\u308b"}),"\n",(0,l.jsx)(e.li,{children:"\u30a2\u30e9\u30fc\u30e0\uff1a\u901a\u77e5\u306e\u81ea\u52d5\u5316\u3001EC2\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u3001\u30e1\u30c8\u30ea\u30c3\u30af\u306b\u57fa\u3065\u3044\u3066SNS\u306b\u901a\u77e5"}),"\n",(0,l.jsx)(e.li,{children:"\u30ed\u30b0: EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u30b5\u30fc\u30d0\u30fc\u3001Lambda \u95a2\u6570\u304b\u3089\u30ed\u30b0 \u30d5\u30a1\u30a4\u30eb\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u30a4\u30d9\u30f3\u30c8 (\u307e\u305f\u306fEventBridge) ",":AWS","\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u53cd\u5fdc\u3059\u308b\u304b\u3001\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3067\u30eb\u30fc\u30eb\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u307e\u3059"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"CloudTrail: AWS\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u3067\u884c\u308f\u308c\u305f\u76e3\u67fbAPI\u901a\u8a71"}),"\n",(0,l.jsxs)(e.li,{children:["CloudTrail Insights",":CloudTrail","\u30a4\u30d9\u30f3\u30c8\u306e\u81ea\u52d5\u5206\u6790"]}),"\n",(0,l.jsx)(e.li,{children:"X-Ray: \u5206\u6563\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u901a\u3058\u3066\u884c\u308f\u308c\u305f\u30c8\u30ec\u30fc\u30b9\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,l.jsx)(e.li,{children:"AWS Health Dashboard: \u3059\u3079\u3066\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u308f\u305f\u308b\u3059\u3079\u3066\u306eAWS\u30b5\u30fc\u30d3\u30b9\u306e\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\n",(0,l.jsx)(e.li,{children:"AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u30d8\u30eb\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9: \u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308bAWS\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,l.jsx)(e.li,{children:"Amazon CodeGuru: \u81ea\u52d5\u5316\u3055\u308c\u305f\u30b3\u30fc\u30c9\u30ec\u30d3\u30e5\u30fc\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u63a8\u5968\u4e8b\u9805"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var r=i(6540);const l={},t=r.createContext(l);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);