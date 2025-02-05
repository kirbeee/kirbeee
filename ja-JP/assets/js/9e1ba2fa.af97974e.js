"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7130],{887:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"AWS/EC2/AMI","title":"AMI","description":"- AMI \u306fEC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u3059","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/EC2/AMI.md","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/AMI","permalink":"/kirbeee/ja-JP/docs/AWS/EC2/AMI","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"AMI","author":"Kirbee"},"sidebar":"docs","previous":{"title":"EC2 (Elastic Compute Cloud)","permalink":"/kirbeee/ja-JP/docs/AWS/EC2/"},"next":{"title":"EBS\uff08Elastic Block Store\uff09","permalink":"/kirbeee/ja-JP/docs/AWS/EC2/EBS"}}');var r=i(4848),s=i(8453);const l={title:"AMI",author:"Kirbee"},c="AMI (Amazon Machine Image)",o={},a=[{value:"AMI \u30d7\u30ed\u30bb\u30b9 (EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089)",id:"ami-\u30d7\u30ed\u30bb\u30b9-ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ami-amazon-machine-image",children:"AMI (Amazon Machine Image)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["AMI \u306fEC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u3059","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u72ec\u81ea\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u8ffd\u52a0\u3057\u307e\u3059, \u69cb\u6210, \u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0, \u30e2\u30cb\u30bf\u30ea\u30f3\u30b0..."}),"\n",(0,r.jsx)(n.li,{children:"\u3059\u3079\u3066\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u4e8b\u524d\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8d77\u52d5/\u8a2d\u5b9a\u6642\u9593\u304c\u77ed\u7e2e\u3055\u308c\u307e\u3059"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"AMI \u306f\u7279\u5b9a\u306e\u5730\u57df\u306e\u305f\u3081\u306b\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\uff08\u5730\u57df\u9593\u3067\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff09"}),"\n",(0,r.jsxs)(n.li,{children:["\u4ee5\u4e0b\u304b\u3089EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30d1\u30d6\u30ea\u30c3\u30afAMI",":AWS","\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3057\u305f"]}),"\n",(0,r.jsx)(n.li,{children:"\u3042\u306a\u305f\u81ea\u8eab\u306eAMI:\u3042\u306a\u305f\u81ea\u8eab\u304c\u305d\u308c\u3089\u3092\u4f5c\u308a\u3001\u7dad\u6301\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["AWS\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u306eAML",":AMI","\u306e\u4ed6\u306e\u8ab0\u304b\u304c\u4f5c\u3063\u305f(\u305d\u3057\u3066\u6f5c\u5728\u7684\u306b\u58f2\u308c\u308b)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ami-\u30d7\u30ed\u30bb\u30b9-ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089",children:"AMI \u30d7\u30ed\u30bb\u30b9 (EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\u3057\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u505c\u6b62\uff08\u30c7\u30fc\u30bf\u6574\u5408\u6027\u306e\u305f\u3081\uff09"}),"\n",(0,r.jsx)(n.li,{children:"AMI \u3092\u4f5c\u6210\u3059\u308b - EBS\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3082\u4f5c\u6210\u3055\u308c\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u4ed6\u306eAMI\u304b\u3089\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);