"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[2421],{8592:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"AWS/ELB & ASG/ASG","title":"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 (ASG)","description":"Auto Scaling Group","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/ELB & ASG/ASG.md","sourceDirName":"AWS/ELB & ASG","slug":"/AWS/ELB & ASG/ASG","permalink":"/kirbeee/ja-JP/docs/AWS/ELB & ASG/ASG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 (ASG)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30b9\u30c8\u30a2","permalink":"/kirbeee/ja-JP/docs/AWS/EC2/Instance-Store"},"next":{"title":"ELB (Elastic Load Balancer)","permalink":"/kirbeee/ja-JP/docs/AWS/ELB & ASG/ELB"}}');var s=i(4848),r=i(8453);const c={title:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 (ASG)",author:"Kirbee"},t="\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u5165\u9580 (ASG)",d={},h=[{value:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 - \u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565",id:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7---\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565",level:2},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0: \u9700\u8981\u306e\u5909\u5316\u306b\u5bfe\u5fdc\u3059\u308b",id:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0-\u9700\u8981\u306e\u5909\u5316\u306b\u5bfe\u5fdc\u3059\u308b",level:2},{value:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30b9\u30b1\u30fc\u30eb",id:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30b9\u30b1\u30fc\u30eb",level:2},{value:"\u4e88\u6e2c\u30b9\u30b1\u30fc\u30eb",id:"\u4e88\u6e2c\u30b9\u30b1\u30fc\u30eb",level:2}];function a(n){const e={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Auto Scaling Group",src:i(622).A+"",width:"3406",height:"1528"})}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u5165\u9580-asg",children:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u5165\u9580 (ASG)"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b9f\u751f\u6d3b\u3067\u306f\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8ca0\u8377\u304c\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u30af\u30e9\u30a6\u30c9\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u3092\u3059\u3070\u3084\u304f\u4f5c\u6210\u3057\u3066\u53d6\u308a\u9664\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 (ASG) \u306e\u76ee\u6a19\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8ca0\u8377\u306e\u5897\u52a0\u306b\u5408\u308f\u305b\u3066\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\uff08EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8ffd\u52a0\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u8ca0\u8377\u306e\u6e1b\u5c11\u306b\u5408\u308f\u305b\u3066\u30b9\u30b1\u30fc\u30eb\u30a4\u30f3\uff08EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u524a\u9664\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u52d5\u4f5c\u3059\u308b\u30de\u30b7\u30f3\u306e\u6700\u5c0f\u6570\u3068\u6700\u5927\u6570\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044"}),"\n",(0,s.jsx)(e.li,{children:"\u65b0\u3057\u3044\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u306b\u81ea\u52d5\u7684\u306b\u767b\u9332\u3059\u308b"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u5065\u5168\u306a\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7f6e\u304d\u63db\u3048"}),"\n",(0,s.jsx)(e.li,{children:"\u30b3\u30b9\u30c8\u524a\u6e1b\uff1a\u6700\u9069\u306a\u5bb9\u91cf\uff08\u30af\u30e9\u30a6\u30c9\u306e\u539f\u5247\uff09\u3067\u306e\u307f\u5b9f\u884c\u3067\u304d\u307e\u3059"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565",children:"\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565"}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7---\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565",children:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 - \u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u6226\u7565"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u624b\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0: ASG \u306e\u30b5\u30a4\u30ba\u3092\u624b\u52d5\u3067\u66f4\u65b0"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0-\u9700\u8981\u306e\u5909\u5316\u306b\u5bfe\u5fdc\u3059\u308b",children:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0: \u9700\u8981\u306e\u5909\u5316\u306b\u5bfe\u5fdc\u3059\u308b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30b7\u30f3\u30d7\u30eb/\u30b9\u30c6\u30c3\u30d7\u30b9\u30b1\u30fc\u30eb"}),"\n",(0,s.jsx)(e.li,{children:"CloudWatch\u30a2\u30e9\u30fc\u30e0\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u5834\u5408\uff08\u4f8b\uff1aCPU\u672a\u6e8070%\uff09\u30012\u5358\u4f4d\u3092\u8ffd\u52a0"}),"\n",(0,s.jsx)(e.li,{children:"CloudWatch\u30a2\u30e9\u30fc\u30e0\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u5834\u5408\uff08CPU\u304c30%\u672a\u6e80\u306e\u5834\u5408\uff09\u3001\u6b21\u306b\u79c1\u3092\u524a\u9664\u3057\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"Target Tracking Scaling"}),"\n",(0,s.jsx)(e.li,{children:"\u4f8b: \u5e73\u5747\u7684\u306aASGCPU\u309240%\u7a0b\u5ea6\u306b\u3068\u3069\u3081\u305f\u3044\u5834\u5408"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30b9\u30b1\u30fc\u30eb",children:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30b9\u30b1\u30fc\u30eb"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u65e2\u77e5\u306e\u4f7f\u7528\u30d1\u30bf\u30fc\u30f3\u306b\u57fa\u3065\u3044\u3066\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3092\u4e88\u6e2c\u3059\u308b"}),"\n",(0,s.jsx)(e.li,{children:"\u4f8b: \u91d1\u66dc\u65e5\u306e\u5348\u5f8c5\u6642\u306b\u6700\u5c0f\u5bb9\u91cf\u309210\u306b\u5897\u3084\u3057\u307e\u3059"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4e88\u6e2c\u30b9\u30b1\u30fc\u30eb",children:"\u4e88\u6e2c\u30b9\u30b1\u30fc\u30eb"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6a5f\u68b0\u5b66\u7fd2\u3092\u4f7f\u7528\u3057\u3066\u3001\u5c06\u6765\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u4e8b\u524d\u306b\u4e88\u6e2c\u3059\u308b"}),"\n",(0,s.jsx)(e.li,{children:"\u81ea\u52d5\u7684\u306b\n\u306f\u4e8b\u524d\u306b EC2\n\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u9069\u5207\u306a\u6570\u3092\u898f\u5b9a\u3057\u307e\u3059"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"elb--asg---summary",children:"ELB & ASG - Summary"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9ad8\u53ef\u7528\u6027\u5bfe\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\uff08\u5782\u76f4\u65b9\u5411\u3068\u6c34\u5e73\u65b9\u5411\uff09\u5bfe\u67d4\u8edf\u6027\u5bfe\u4fca\u654f\u6027"}),"\n",(0,s.jsx)(e.li,{children:"\u5f3e\u6027\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc (ELB)"}),"\n",(0,s.jsx)(e.li,{children:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306eEC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u3067\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5206\u6563\u3057\u3001Multi-AZ\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u3092\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,s.jsx)(e.li,{children:"4 \u7a2e\u985e: Classic (old), Application (HTTP - L7), Network (TCP - L4), Gateway (L3)"}),"\n",(0,s.jsx)(e.li,{children:"\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 (ASG)"}),"\n",(0,s.jsx)(e.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f3e\u529b\u6027\u3092\u8907\u6570\u306eAZ\u3067\u5b9f\u88c5"}),"\n",(0,s.jsx)(e.li,{children:"\u30b7\u30b9\u30c6\u30e0\u306e\u9700\u8981\u306b\u57fa\u3065\u3044\u3066EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u62e1\u5927\u3057\u3001\u4e0d\u5065\u5eb7\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044"}),"\n",(0,s.jsx)(e.li,{children:"ELB\u3068\u7d71\u5408"}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},622:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/ASG-e224d41f396df47e7d75bb5a27ff3fab.png"},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>t});var l=i(6540);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);