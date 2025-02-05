"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7452],{2508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"AWS/Cloud Monitoring/CloudWatch-log","title":"CloudWatch\u30ed\u30b0","description":"- CloudWatch Logs \u306f\u4ee5\u4e0b\u304b\u3089\u30ed\u30b0\u3092\u53ce\u96c6\u3067\u304d\u307e\u3059:","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Cloud Monitoring/CloudWatch-log.md","sourceDirName":"AWS/Cloud Monitoring","slug":"/AWS/Cloud Monitoring/CloudWatch-log","permalink":"/kirbeee/ja-JP/docs/AWS/Cloud Monitoring/CloudWatch-log","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CloudWatch\u30ed\u30b0"},"sidebar":"docs","previous":{"title":"CloudWatch\u30a2\u30e9\u30fc\u30e0","permalink":"/kirbeee/ja-JP/docs/AWS/Cloud Monitoring/CloudWatch-alarm"},"next":{"title":"CodeGuru","permalink":"/kirbeee/ja-JP/docs/AWS/Cloud Monitoring/CodeGuru"}}');var l=t(4848),i=t(8453);const c={title:"CloudWatch\u30ed\u30b0"},r="CloudWatch\u30ed\u30b0",d={},s=[];function u(e){const n={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"cloudwatch\u30ed\u30b0",children:"CloudWatch\u30ed\u30b0"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["CloudWatch Logs \u306f\u4ee5\u4e0b\u304b\u3089\u30ed\u30b0\u3092\u53ce\u96c6\u3067\u304d\u307e\u3059:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Elastic Beanstalk: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306e\u30ed\u30b0\u306e\u53ce\u96c6"}),"\n",(0,l.jsx)(n.li,{children:"ECS: \u30b3\u30f3\u30c6\u30ca\u304b\u3089\u306e\u53ce\u96c6"}),"\n",(0,l.jsx)(n.li,{children:"AWS Lambda: \u95a2\u6570\u30ed\u30b0\u304b\u3089\u306e\u53ce\u96c6"}),"\n",(0,l.jsx)(n.li,{children:"\u30d5\u30a3\u30eb\u30bf\u30fc\u306b\u57fa\u3065\u304fCloudTrail"}),"\n",(0,l.jsx)(n.li,{children:"CloudWatch\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8: EC2\u30de\u30b7\u30f3\u307e\u305f\u306f\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30b5\u30fc\u30d0\u30fc\u3067\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Route53: \u30ed\u30b0\u306e DNS \u30af\u30a8\u30ea"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u30ed\u30b0\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u76e3\u8996\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,l.jsx)(n.li,{children:"\u8abf\u6574\u53ef\u80fd\u306aCloudWatch\u30ed\u30b0\u306e\u4fdd\u6301"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"ec2\u306ecloudwatch\u30ed\u30b0",children:"EC2\u306eCloudWatch\u30ed\u30b0"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"CloudWatch Log on EC2",src:t(1505).A+"",width:"1132",height:"1178"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089CloudWatch\u3078\u306e\u30ed\u30b0\u306f\u3042\u308a\u307e\u305b\u3093"}),"\n",(0,l.jsx)(n.li,{children:"\u5fc5\u8981\u306a\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u306b\u306f\u3001EC2\u3067CloudWatch\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"IAM \u306e\u6a29\u9650\u304c\u6b63\u3057\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044"}),"\n",(0,l.jsx)(n.li,{children:"CloudWatch\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3082\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u307e\u3059"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},1505:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/CloudWatch-log-306d292ae5348beb386de5095cfbcec8.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const l={},i=o.createContext(l);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);