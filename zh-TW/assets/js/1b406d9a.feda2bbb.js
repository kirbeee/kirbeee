"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[9430],{4185:(n,i,l)=>{l.r(i),l.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>c,metadata:()=>e,toc:()=>x});const e=JSON.parse('{"id":"AWS/iam","title":"IAM\uff08\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406\uff09","description":"\u7d50\u69cb\uff1a\u89d2\u8272 (Role)\u3001\u7fa4\u7d44 (Group)\u3001\u4f7f\u7528\u8005 (User)","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/IAM.mdx","sourceDirName":"AWS","slug":"/aws/iam","permalink":"/kirbeee/zh-TW/docs/aws/iam","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"iam","title":"IAM\uff08\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406\uff09","slug":"/aws/iam"},"sidebar":"docs","previous":{"title":"Elastic Load Balancer & Auto Scaling Group","permalink":"/kirbeee/zh-TW/docs/AWS/ELB & ASG/Introduction"},"next":{"title":"Region","permalink":"/kirbeee/zh-TW/docs/aws/region"}}');var s=l(4848),r=l(8453);const c={id:"iam",title:"IAM\uff08\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406\uff09",slug:"/aws/iam"},d="IAM\uff08\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406\uff09",h={},x=[{value:"\u6b0a\u9650",id:"\u6b0a\u9650",level:2},{value:"\u6587\u4ef6\u7d50\u69cb",id:"\u6587\u4ef6\u7d50\u69cb",level:2},{value:"\u5bc6\u78bc\u7b56\u7565",id:"\u5bc6\u78bc\u7b56\u7565",level:2},{value:"MFA\uff08\u591a\u56e0\u7d20\u8eab\u4efd\u9a57\u8b49\uff09",id:"mfa\u591a\u56e0\u7d20\u8eab\u4efd\u9a57\u8b49",level:2},{value:"\u4f7f\u7528\u8005\u5982\u4f55\u8a2a\u554f AWS\uff1f",id:"\u4f7f\u7528\u8005\u5982\u4f55\u8a2a\u554f-aws",level:2},{value:"\u89d2\u8272",id:"\u89d2\u8272",level:2},{value:"\u5b89\u5168\u5de5\u5177",id:"\u5b89\u5168\u5de5\u5177",level:2},{value:"IAM \u8cac\u4efb\u5206\u64d4",id:"iam-\u8cac\u4efb\u5206\u64d4",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}];function j(n){const i={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"iam\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406",children:"IAM\uff08\u8eab\u4efd\u8207\u8a2a\u554f\u7ba1\u7406\uff09"})}),"\n",(0,s.jsx)(i.p,{children:"\u7d50\u69cb\uff1a\u89d2\u8272 (Role)\u3001\u7fa4\u7d44 (Group)\u3001\u4f7f\u7528\u8005 (User)"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5168\u7403\u6027\u670d\u52d9"}),"\n",(0,s.jsx)(i.li,{children:"\u9810\u8a2d\u6703\u5275\u5efa Root \u5e33\u6236\uff0c\u4e0d\u61c9\u8a72\u4f7f\u7528\u6216\u5206\u4eab"}),"\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528\u8005\u662f\u7d44\u7e54\u5167\u7684\u500b\u4eba\uff0c\u53ef\u4ee5\u5206\u7d44"}),"\n",(0,s.jsx)(i.li,{children:"\u7fa4\u7d44\u53ea\u80fd\u5305\u542b\u4f7f\u7528\u8005\uff0c\u4e0d\u80fd\u5305\u542b\u5176\u4ed6\u7fa4\u7d44"}),"\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528\u8005\u4e0d\u4e00\u5b9a\u8981\u5c6c\u65bc\u67d0\u500b\u7fa4\u7d44\uff0c\u4e5f\u53ef\u4ee5\u540c\u6642\u5c6c\u65bc\u591a\u500b\u7fa4\u7d44"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u6b0a\u9650",children:"\u6b0a\u9650"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528\u8005\u6216\u7fa4\u7d44\u53ef\u4ee5\u5206\u914d\u540d\u70ba\u7b56\u7565 (Policies) \u7684 JSON \u6587\u4ef6"}),"\n",(0,s.jsx)(i.li,{children:"\u9019\u4e9b\u7b56\u7565\u5b9a\u7fa9\u4e86\u4f7f\u7528\u8005\u7684\u6b0a\u9650"}),"\n",(0,s.jsx)(i.li,{children:"\u5728 AWS \u4e2d\uff0c\u8acb\u9075\u5faa\u6700\u5c0f\u6b0a\u9650\u539f\u5247\uff1a\u53ea\u7d66\u4e88\u4f7f\u7528\u8005\u6240\u9700\u7684\u6700\u4f4e\u6b0a\u9650"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u6587\u4ef6\u7d50\u69cb",children:"\u6587\u4ef6\u7d50\u69cb"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u5305\u62ec\u4ee5\u4e0b\u5167\u5bb9\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Version\uff1a\u7b56\u7565\u8a9e\u8a00\u7248\u672c\uff0c\u5fc5\u9808\u5305\u542b ",(0,s.jsx)(i.code,{children:'"2012-10-17"'})]}),"\n",(0,s.jsx)(i.li,{children:"Id\uff1a\u7b56\u7565\u7684\u8b58\u5225\u78bc\uff08\u53ef\u9078\uff09"}),"\n",(0,s.jsx)(i.li,{children:"Statement\uff1a\u4e00\u500b\u6216\u591a\u500b\u7368\u7acb\u8072\u660e\uff08\u5fc5\u586b\uff09"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\u8072\u660e\u5305\u542b\u4ee5\u4e0b\u90e8\u5206\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Sid\uff1a\u8072\u660e\u7684\u8b58\u5225\u78bc\uff08\u53ef\u9078\uff09"}),"\n",(0,s.jsxs)(i.li,{children:["Effect\uff1a\u8072\u660e\u662f\u5426\u5141\u8a31\u6216\u62d2\u7d55\u8a2a\u554f\uff08",(0,s.jsx)(i.code,{children:"Allow"})," \u6216 ",(0,s.jsx)(i.code,{children:"Deny"}),"\uff09"]}),"\n",(0,s.jsx)(i.li,{children:"Principal\uff1a\u6b64\u7b56\u7565\u9069\u7528\u7684\u5e33\u6236/\u4f7f\u7528\u8005/\u89d2\u8272"}),"\n",(0,s.jsx)(i.li,{children:"Action\uff1a\u7b56\u7565\u5141\u8a31\u6216\u62d2\u7d55\u7684\u64cd\u4f5c\u5217\u8868"}),"\n",(0,s.jsx)(i.li,{children:"Resource\uff1a\u64cd\u4f5c\u9069\u7528\u7684\u8cc7\u6e90\u5217\u8868"}),"\n",(0,s.jsx)(i.li,{children:"Condition\uff1a\u7b56\u7565\u751f\u6548\u7684\u689d\u4ef6\uff08\u53ef\u9078\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "id": "iam",\n    "Statement": [\n        {\n            "Sid": "1",\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": "arn:aws:iam::123456789012:root"\n            },\n            "Action": "s3:*",\n            "Resource": "*"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"\u5bc6\u78bc\u7b56\u7565",children:"\u5bc6\u78bc\u7b56\u7565"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5f37\u5bc6\u78bc = \u63d0\u9ad8\u5e33\u6236\u5b89\u5168\u6027"}),"\n",(0,s.jsxs)(i.li,{children:["\u5728 AWS \u4e2d\uff0c\u60a8\u53ef\u4ee5\u8a2d\u7f6e\u5bc6\u78bc\u7b56\u7565\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u8a2d\u7f6e\u5bc6\u78bc\u7684\u6700\u5c0f\u9577\u5ea6"}),"\n",(0,s.jsx)(i.li,{children:"\u8981\u6c42\u5177\u5099\u7279\u5b9a\u5b57\u7b26\u985e\u578b\uff1a"}),"\n",(0,s.jsx)(i.li,{children:"\u5305\u62ec\u5927\u5beb\u5b57\u6bcd"}),"\n",(0,s.jsx)(i.li,{children:"\u5c0f\u5beb\u5b57\u6bcd"}),"\n",(0,s.jsx)(i.li,{children:"\u6578\u5b57"}),"\n",(0,s.jsx)(i.li,{children:"\u975e\u5b57\u6bcd\u6578\u5b57\u5b57\u7b26"}),"\n",(0,s.jsx)(i.li,{children:"\u5141\u8a31\u6240\u6709 IAM \u4f7f\u7528\u8005\u66f4\u6539\u81ea\u5df1\u7684\u5bc6\u78bc"}),"\n",(0,s.jsx)(i.li,{children:"\u8981\u6c42\u4f7f\u7528\u8005\u5b9a\u671f\u66f4\u6539\u5bc6\u78bc\uff08\u5bc6\u78bc\u904e\u671f\uff09"}),"\n",(0,s.jsx)(i.li,{children:"\u9632\u6b62\u5bc6\u78bc\u91cd\u8907\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"mfa\u591a\u56e0\u7d20\u8eab\u4efd\u9a57\u8b49",children:"MFA\uff08\u591a\u56e0\u7d20\u8eab\u4efd\u9a57\u8b49\uff09"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528\u8005\u53ef\u4ee5\u8a2a\u554f\u60a8\u7684\u5e33\u6236\uff0c\u4e26\u53ef\u80fd\u66f4\u6539\u914d\u7f6e\u6216\u522a\u9664 AWS \u8cc7\u6e90"}),"\n",(0,s.jsx)(i.li,{children:"\u60a8\u9700\u8981\u4fdd\u8b77 Root \u5e33\u6236\u548c IAM \u4f7f\u7528\u8005"}),"\n",(0,s.jsx)(i.li,{children:"MFA = \u60a8\u77e5\u9053\u7684\u5bc6\u78bc + \u60a8\u64c1\u6709\u7684\u5b89\u5168\u8a2d\u5099"}),"\n",(0,s.jsxs)(i.li,{children:["MFA \u985e\u578b\u5305\u62ec\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u865b\u64ec MFA \u8a2d\u5099"}),"\n",(0,s.jsx)(i.li,{children:"\u901a\u7528\u7b2c\u4e8c\u56e0\u7d20\uff08U2F\uff09\u5b89\u5168\u5bc6\u9470"}),"\n",(0,s.jsx)(i.li,{children:"\u786c\u9ad4\u9470\u5319\u6263 MFA \u8a2d\u5099"}),"\n",(0,s.jsx)(i.li,{children:"\u9069\u7528\u65bc AWS GovCloud\uff08\u7f8e\u570b\uff09\u7684\u786c\u9ad4\u9470\u5319\u6263 MFA \u8a2d\u5099"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4f7f\u7528\u8005\u5982\u4f55\u8a2a\u554f-aws",children:"\u4f7f\u7528\u8005\u5982\u4f55\u8a2a\u554f AWS\uff1f"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u8a2a\u554f AWS \u6709\u4e09\u7a2e\u65b9\u5f0f\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"AWS \u7ba1\u7406\u63a7\u5236\u53f0\uff08\u53d7\u5bc6\u78bc + MFA \u4fdd\u8b77\uff09"}),"\n",(0,s.jsx)(i.li,{children:"AWS \u547d\u4ee4\u884c\u4ecb\u9762\uff08CLI\uff09\uff1a\u53d7\u8a2a\u554f\u5bc6\u9470\u4fdd\u8b77"}),"\n",(0,s.jsx)(i.li,{children:"AWS \u8edf\u9ad4\u958b\u767c\u5de5\u5177\u5305\uff08SDK\uff09\uff1a\u901a\u904e\u4ee3\u78bc\u8a2a\u554f\uff0c\u53d7\u8a2a\u554f\u5bc6\u9470\u4fdd\u8b77"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u89d2\u8272",children:"\u89d2\u8272"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u67d0\u4e9b AWS \u670d\u52d9\u9700\u8981\u4ee3\u8868\u60a8\u57f7\u884c\u64cd\u4f5c"}),"\n",(0,s.jsx)(i.li,{children:"\u70ba\u6b64\uff0c\u6211\u5011\u5c07\u70ba AWS \u670d\u52d9\u5206\u914d IAM \u89d2\u8272"}),"\n",(0,s.jsxs)(i.li,{children:["\u5e38\u898b\u89d2\u8272\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"EC2 \u5be6\u4f8b\u89d2\u8272"}),"\n",(0,s.jsx)(i.li,{children:"Lambda \u51fd\u6578\u89d2\u8272"}),"\n",(0,s.jsx)(i.li,{children:"CloudFormation \u7684\u89d2\u8272"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u5b89\u5168\u5de5\u5177",children:"\u5b89\u5168\u5de5\u5177"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"IAM \u6191\u8b49\u5831\u544a"}),(0,s.jsx)(i.br,{}),"\n","\u5831\u544a\u5217\u51fa\u5e33\u6236\u4e2d\u6240\u6709\u4f7f\u7528\u8005\u53ca\u5176\u5404\u7a2e\u6191\u8b49\u7684\u72c0\u614b"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"IAM \u8a2a\u554f\u9867\u554f"}),(0,s.jsx)(i.br,{}),"\n","\u8a2a\u554f\u9867\u554f\u986f\u793a\u6388\u4e88\u4f7f\u7528\u8005\u7684\u670d\u52d9\u6b0a\u9650\u53ca\u9019\u4e9b\u670d\u52d9\u7684\u6700\u5f8c\u8a2a\u554f\u6642\u9593\u3002\n\u60a8\u53ef\u4ee5\u6839\u64da\u6b64\u4fe1\u606f\u4fee\u8a02\u7b56\u7565\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"iam-\u8cac\u4efb\u5206\u64d4",children:"IAM \u8cac\u4efb\u5206\u64d4"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"AWS \u7684\u8cac\u4efb\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u57fa\u790e\u8a2d\u65bd\uff08\u5168\u7403\u7db2\u7d61\u5b89\u5168\uff09"}),"\n",(0,s.jsx)(i.li,{children:"\u914d\u7f6e\u548c\u6f0f\u6d1e\u5206\u6790"}),"\n",(0,s.jsx)(i.li,{children:"\u5408\u898f\u6027\u9a57\u8b49"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u60a8\u7684\u8cac\u4efb\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528\u8005\u3001\u7fa4\u7d44\u3001\u89d2\u8272\u3001\u7b56\u7565\u7684\u7ba1\u7406\u8207\u76e3\u63a7"}),"\n",(0,s.jsx)(i.li,{children:"\u70ba\u6240\u6709\u5e33\u6236\u555f\u7528 MFA"}),"\n",(0,s.jsx)(i.li,{children:"\u5b9a\u671f\u66f4\u63db\u5bc6\u9470"}),"\n",(0,s.jsx)(i.li,{children:"\u4f7f\u7528 IAM \u5de5\u5177\u61c9\u7528\u9069\u7576\u7684\u6b0a\u9650"}),"\n",(0,s.jsx)(i.li,{children:"\u5206\u6790\u8a2a\u554f\u6a21\u5f0f\u4e26\u5be9\u6838\u6b0a\u9650"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u4f7f\u7528\u8005"}),"\uff1a\u5c0d\u61c9\u65bc\u5be6\u969b\u4f7f\u7528\u8005\uff0c\u64c1\u6709 AWS \u63a7\u5236\u53f0\u7684\u5bc6\u78bc"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u7fa4\u7d44"}),"\uff1a\u50c5\u5305\u542b\u4f7f\u7528\u8005"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u7b56\u7565"}),"\uff1a\u63cf\u8ff0\u4f7f\u7528\u8005\u6216\u7fa4\u7d44\u6b0a\u9650\u7684 JSON \u6587\u4ef6"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u89d2\u8272"}),"\uff1a\u7528\u65bc EC2 \u5be6\u4f8b\u6216 AWS \u670d\u52d9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u5b89\u5168\u6027"}),"\uff1aMFA + \u5bc6\u78bc\u7b56\u7565"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"AWS CLI"}),"\uff1a\u4f7f\u7528\u547d\u4ee4\u884c\u7ba1\u7406 AWS \u670d\u52d9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"AWS SDK"}),"\uff1a\u901a\u904e\u7de8\u7a0b\u8a9e\u8a00\u7ba1\u7406 AWS \u670d\u52d9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u8a2a\u554f\u5bc6\u9470"}),"\uff1a\u901a\u904e CLI \u6216 SDK \u8a2a\u554f AWS"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u5be9\u6838"}),"\uff1aIAM \u6191\u8b49\u5831\u544a\u548c IAM \u8a2a\u554f\u9867\u554f"]}),"\n"]})]})}function t(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},8453:(n,i,l)=>{l.d(i,{R:()=>c,x:()=>d});var e=l(6540);const s={},r=e.createContext(s);function c(n){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),e.createElement(r.Provider,{value:i},n.children)}}}]);