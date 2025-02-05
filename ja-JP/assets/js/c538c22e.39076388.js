"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[2498],{7042:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"AWS/Security & Compliance/Encryption","title":"\u6697\u53f7\u5316","description":"Encryption","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Security & Compliance/Encryption.md","sourceDirName":"AWS/Security & Compliance","slug":"/AWS/Security & Compliance/Encryption","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/Encryption","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6697\u53f7\u5316"},"sidebar":"docs","previous":{"title":"Detective","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/Detective"},"next":{"title":"\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/Firewall-manger"}}');var s=i(4848),r=i(8453);const c={title:"\u6697\u53f7\u5316"},d="\u6b8b\u308a\u306e\u30c7\u30fc\u30bf\u3068\u8f38\u9001\u4e2d\u306e\u30c7\u30fc\u30bf",t={},h=[{value:"\u9867\u5ba2\u7ba1\u7406\u30ad\u30fc:",id:"\u9867\u5ba2\u7ba1\u7406\u30ad\u30fc",level:2},{value:"AWS Managed Key:",id:"aws-managed-key",level:2},{value:"AWS\u304c\u6240\u6709\u3059\u308b\u30ad\u30fc:",id:"aws\u304c\u6240\u6709\u3059\u308b\u30ad\u30fc",level:2},{value:"CloudHSM\u30ad\u30fc (\u30ab\u30b9\u30bf\u30e0\u30ad\u30fc\u30b9\u30c8\u30a2):",id:"cloudhsm\u30ad\u30fc-\u30ab\u30b9\u30bf\u30e0\u30ad\u30fc\u30b9\u30c8\u30a2",level:2}];function o(n){const e={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u6b8b\u308a\u306e\u30c7\u30fc\u30bf\u3068\u8f38\u9001\u4e2d\u306e\u30c7\u30fc\u30bf",children:"\u6b8b\u308a\u306e\u30c7\u30fc\u30bf\u3068\u8f38\u9001\u4e2d\u306e\u30c7\u30fc\u30bf"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Encryption",src:i(259).A+"",width:"917",height:"220"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6b8b\u308a: \u30c7\u30d0\u30a4\u30b9\u306b\u4fdd\u5b58\u307e\u305f\u306f\u30a2\u30fc\u30ab\u30a4\u30d6\u3055\u308c\u305f\u30c7\u30fc\u30bf"}),"\n",(0,s.jsx)(e.li,{children:"\u30cf\u30fc\u30c9\u30c7\u30a3\u30b9\u30af\u3001RDS\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001S3\u6c37\u6cb3\u30c7\u30a3\u30fc\u30d7\u30a2\u30fc\u30ab\u30a4\u30d6\u306a\u3069\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u79fb\u52d5\u4e2d\uff08\u79fb\u52d5\u4e2d\uff09\uff1a\u3042\u308b\u5834\u6240\u304b\u3089\u5225\u306e\u5834\u6240\u306b\u30c7\u30fc\u30bf\u3092\u79fb\u52d5\u3059\u308b"}),"\n",(0,s.jsx)(e.li,{children:"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u304b\u3089AWS\u3001EC2\u304b\u3089DynamoDB\u306a\u3069\u3078\u306e\u8ee2\u9001"}),"\n",(0,s.jsx)(e.li,{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u3067\u8ee2\u9001\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3092\u610f\u5473"}),"\n",(0,s.jsx)(e.li,{children:"\u4e21\u65b9\u306e\u5dde\u306e\u30c7\u30fc\u30bf\u3092\u6697\u53f7\u5316\u3057\u3066\u4fdd\u8b77\u3057\u307e\u3059\uff01"}),"\n",(0,s.jsx)(e.li,{children:"\u3053\u306e\u305f\u3081\u3001\u6697\u53f7\u5316\u30ad\u30fc\u3092\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"kms-\u30ad\u30fc\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u30b5\u30fc\u30d3\u30b9",children:"KMS (\u30ad\u30fc\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u30b5\u30fc\u30d3\u30b9)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS\u30b5\u30fc\u30d3\u30b9\u306e\u300c\u6697\u53f7\u5316\u300d\u3092\u3044\u3064\u3067\u3082\u805e\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u304a\u305d\u3089\u304fKMS\u3067\u3059"}),"\n",(0,s.jsx)(e.li,{children:"KMS = AWS\u304c\u6697\u53f7\u5316\u30ad\u30fc\u3092\u7ba1\u7406\u3057\u307e\u3059"}),"\n",(0,s.jsxs)(e.li,{children:["\u6697\u53f7\u5316\u30aa\u30d7\u30c8\u30a4\u30f3:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EBS\u30dc\u30ea\u30e5\u30fc\u30e0: \u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u6697\u53f7\u5316"}),"\n",(0,s.jsx)(e.li,{children:"S3 \u30d0\u30b1\u30c3\u30c8: \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b5\u30fc\u30d0\u30fc\u5074\u6697\u53f7\u5316 (\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001SSE-KMS \u30aa\u30d7\u30c8\u30a4\u30f3)"}),"\n",(0,s.jsx)(e.li,{children:"Redshift \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9: encryption of data"}),"\n",(0,s.jsx)(e.li,{children:"RDS\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9: \u30c7\u30fc\u30bf\u306e\u6697\u53f7\u5316"}),"\n",(0,s.jsx)(e.li,{children:"EFS \u30c9\u30e9\u30a4\u30d6: \u30c7\u30fc\u30bf\u306e\u6697\u53f7\u5316"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u81ea\u52d5\u7684\u306b\u6697\u53f7\u5316\u304c\u6709\u52b9\u5316\u3055\u308c\u307e\u3057\u305f:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u96f2\u306e\u8ecc\u8de1\u30ed\u30b0"}),"\n",(0,s.jsx)(e.li,{children:"S3 Glacier"}),"\n",(0,s.jsx)(e.li,{children:"\u30b9\u30c8\u30ec\u30fc\u30b8\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"cloudhsm\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30e2\u30b8\u30e5\u30fc\u30eb",children:"CloudHSM\uff08\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30e2\u30b8\u30e5\u30fc\u30eb\uff09"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"KMS == AWS\u306f\u6697\u53f7\u5316\u7528\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"CloudHSM == AWS\u306f\u6697\u53f7\u5316\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u898f\u5b9a\u3057\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u5c02\u7528\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2 (HSM = \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30e2\u30b8\u30e5\u30fc\u30eb)"}),"\n",(0,s.jsx)(e.li,{children:"\u72ec\u81ea\u306e\u6697\u53f7\u5316\u30ad\u30fc\u3092\u5b8c\u5168\u306b\u7ba1\u7406\u3057\u307e\u3059 (AWS\u3067\u306f\u3042\u308a\u307e\u305b\u3093)"}),"\n",(0,s.jsx)(e.li,{children:"HSM\u30c7\u30d0\u30a4\u30b9\u306f\u6539\u3056\u3093\u8010\u6027FIPS 140-2\u30ec\u30d9\u30eb3\u6e96\u62e0\u3067\u3059"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"kms\u30ad\u30fc\u306e\u7a2e\u985e",children:"KMS\u30ad\u30fc\u306e\u7a2e\u985e"}),"\n",(0,s.jsx)(e.h2,{id:"\u9867\u5ba2\u7ba1\u7406\u30ad\u30fc",children:"\u9867\u5ba2\u7ba1\u7406\u30ad\u30fc:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9867\u5ba2\u304c\u4f5c\u6210\u3001\u7ba1\u7406\u3001\u4f7f\u7528\u3001\u6709\u52b9\u307e\u305f\u306f\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u56de\u8ee2\u30dd\u30ea\u30b7\u30fc\u306e\u53ef\u80fd\u6027 (\u6bce\u5e74\u751f\u6210\u3055\u308c\u308b\u65b0\u3057\u3044\u30ad\u30fc\u3001\u53e4\u3044\u30ad\u30fc\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059)"}),"\n",(0,s.jsx)(e.li,{children:"\u3042\u306a\u305f\u81ea\u8eab\u306e\u30ad\u30fc\u3092\u6301\u53c2\u3059\u308b\u53ef\u80fd\u6027"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"aws-managed-key",children:"AWS Managed Key:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS\u304c\u9867\u5ba2\u306b\u4ee3\u308f\u3063\u3066\u4f5c\u6210\u3001\u7ba1\u7406\u3001\u4f7f\u7528"}),"\n",(0,s.jsx)(e.li,{children:"AWS\u30b5\u30fc\u30d3\u30b9\u3067\u4f7f\u7528\uff08aws/s3, aws/ebs, aws/redshift\uff09"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"aws\u304c\u6240\u6709\u3059\u308b\u30ad\u30fc",children:"AWS\u304c\u6240\u6709\u3059\u308b\u30ad\u30fc:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS\u30b5\u30fc\u30d3\u30b9\u304c\u6240\u6709\u3057\u3001\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u308bCMK\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"}),"\n",(0,s.jsx)(e.li,{children:"AWS\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u3053\u308c\u3089\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\uff08\u305f\u3060\u3057\u3001\u30ad\u30fc\u306f\u8868\u793a\u3067\u304d\u307e\u305b\u3093\uff09"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cloudhsm\u30ad\u30fc-\u30ab\u30b9\u30bf\u30e0\u30ad\u30fc\u30b9\u30c8\u30a2",children:"CloudHSM\u30ad\u30fc (\u30ab\u30b9\u30bf\u30e0\u30ad\u30fc\u30b9\u30c8\u30a2):"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"CloudHSM\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30c7\u30d0\u30a4\u30b9\u304b\u3089\u751f\u6210\u3055\u308c\u305f\u30ad\u30fc"}),"\n",(0,s.jsx)(e.li,{children:"\u6697\u53f7\u5316\u64cd\u4f5c\u306fCloudHSM\u30af\u30e9\u30b9\u30bf\u5185\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},259:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/Encryption-2f5db4dfbc93a44b540ed1d13385b859.png"},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var l=i(6540);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);