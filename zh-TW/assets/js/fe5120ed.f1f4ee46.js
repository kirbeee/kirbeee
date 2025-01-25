"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[895],{8877:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"AWS/iam","title":"IAM","description":"- Global service","source":"@site/docs/AWS/IAM.mdx","sourceDirName":"AWS","slug":"/aws/iam","permalink":"/kirbeee/zh-TW/docs/aws/iam","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"iam","title":"IAM","slug":"/aws/iam"},"sidebar":"docs","previous":{"title":"AWS","permalink":"/kirbeee/zh-TW/docs/aws"},"next":{"title":"Region","permalink":"/kirbeee/zh-TW/docs/aws/region"}}');var r=i(4848),t=i(8453);const o={id:"iam",title:"IAM",slug:"/aws/iam"},l="IAM (identity and access management)",c={},a=[{value:"Permissions",id:"permissions",level:2},{value:"File Structure",id:"file-structure",level:2},{value:"Password Policies",id:"password-policies",level:2},{value:"MFA (Multi-Factor Authentication)",id:"mfa-multi-factor-authentication",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"iam-identity-and-access-management",children:"IAM (identity and access management)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Global service"}),"\n",(0,r.jsx)(n.li,{children:"Root account created by default, shouldn't be used or shared"}),"\n",(0,r.jsx)(n.li,{children:"Users are people within your organization, and can be grouped"}),"\n",(0,r.jsx)(n.li,{children:"Groups only contain users, not other groups"}),"\n",(0,r.jsx)(n.li,{children:"Users don't have to belong to a group, and user can belong to multiple"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Users or Groups can be assigned JSON documents called policies"}),"\n",(0,r.jsx)(n.li,{children:"These policies define the permissions of the users"}),"\n",(0,r.jsx)(n.li,{children:"In AWS you apply the least privilege principle: don't give more permissions than a user needs"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Consists of:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Version: policy language version, always include "20 12-10-17"'}),"\n",(0,r.jsx)(n.li,{children:"Id: an identifier for the policy (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Statement: one or more individual statements (required)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Statements consists of","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sid: an identifier for the statement (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Effect: whether the statement allows or denies access(Allow, Deny)"}),"\n",(0,r.jsx)(n.li,{children:"Principal: account/user/role to which this policy applied to"}),"\n",(0,r.jsx)(n.li,{children:"Action: list of actions this policy allows or denies"}),"\n",(0,r.jsx)(n.li,{children:"Resource: list of resources to which the actions applied to"}),"\n",(0,r.jsx)(n.li,{children:"Condition: conditions for when this policy is in effect (optional)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "id": "iam",\n    "Statement": [\n        {\n            "Sid": "1",\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": "arn:aws:iam::123456789012:root"\n            },\n            "Action": "s3:*",\n            "Resource": "*"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"password-policies",children:"Password Policies"}),"\n",(0,r.jsx)(n.p,{children:"\u2022 Strong passwords = higher security for your account\n\u2022 In AWS, you can setup a password policy:\n\u2022 Set a minimum password length\n\u2022 Require specific character types:\n\u2022 including uppercase letters\n\u2022 lowercase letters\n\u2022 numbers\n\u2022 non-alphanumeric characters\n\u2022 Allow all IAM users to change their own passwords\n\u2022 Require users to change their password after some time (password expiration)\n\u2022 Prevent password re-use"}),"\n",(0,r.jsx)(n.h2,{id:"mfa-multi-factor-authentication",children:"MFA (Multi-Factor Authentication)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Users have access to your account and can possibly change configurations or delete resources in your AWS account"}),"\n",(0,r.jsx)(n.li,{children:"You want to protect your Root Accounts and IAM users"}),"\n",(0,r.jsx)(n.li,{children:"MFA = password you know + security device you own"}),"\n",(0,r.jsxs)(n.li,{children:["MFA can be:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Virtual MFA device"}),"\n",(0,r.jsx)(n.li,{children:"Universal 2nd Factor (U2F) Security Key"}),"\n",(0,r.jsx)(n.li,{children:"Hardware Key Fob MFA Device"}),"\n",(0,r.jsx)(n.li,{children:"Hardware Key Fob MFA Device for AWS GovCloud (US)"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);