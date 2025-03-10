"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[1135],{74349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"AWS/Deployment & managing/CloudFormation","title":"CloudFormation","description":"- CloudFormation is a declarative way of outlining your AWS Infrastructure, for any resources (most of them are supported).","source":"@site/docs/AWS/Deployment & managing/CloudFormation.md","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/CloudFormation","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/CloudFormation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CloudFormation"},"sidebar":"docs","previous":{"title":"Cloud Development Kit (CDK)","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/CloudDevelopmentKit"},"next":{"title":"code deployment","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/Code-Deployment"}}');var r=t(74848),i=t(28453);const s={title:"CloudFormation"},l="CloudFormation",a={},c=[{value:"Infrastructure as code",id:"infrastructure-as-code",level:2},{value:"Cost",id:"cost",level:2},{value:"Productivity",id:"productivity",level:2},{value:"Don&#39;t re-invent the wheel",id:"dont-re-invent-the-wheel",level:2},{value:"Supports (almost) all AWS resources:",id:"supports-almost-all-aws-resources",level:2}];function u(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cloudformation",children:"CloudFormation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CloudFormation is a declarative way of outlining your AWS Infrastructure, for any resources (most of them are supported)."}),"\n",(0,r.jsxs)(n.li,{children:["For example, within a CloudFormation template, you say:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I want a security group"}),"\n",(0,r.jsx)(n.li,{children:"I want two EC2 instances using this security group"}),"\n",(0,r.jsx)(n.li,{children:"I want an S3 bucket"}),"\n",(0,r.jsx)(n.li,{children:"I want a load balancer (ELB) in front of these machines"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Then CloudFormation creates those for you, in the right order, with the exact configuration that you specify"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"benefits",children:"Benefits"}),"\n",(0,r.jsx)(n.h2,{id:"infrastructure-as-code",children:"Infrastructure as code"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No resources are manually created, which is excellent for control"}),"\n",(0,r.jsx)(n.li,{children:"Changes to the infrastructure are reviewed through code"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cost",children:"Cost"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Each resources within the stack is tagged with an identifier so you can easily see how much a stack costs you"}),"\n",(0,r.jsx)(n.li,{children:"You can estimate the costs of your resources using the CloudFormation template"}),"\n",(0,r.jsx)(n.li,{children:"Savings strategy: In Dev, you could automation deletion of templates at 5 PM and recreated at 8 AM, safely"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"productivity",children:"Productivity"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ability to destroy and re-create an infrastructure on the cloud on the fly"}),"\n",(0,r.jsx)(n.li,{children:"Automated generation of Diagram for your templates!"}),"\n",(0,r.jsx)(n.li,{children:"Declarative programming (no need to figure out ordering and orchestration)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dont-re-invent-the-wheel",children:"Don't re-invent the wheel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Leverage existing templates on the web!"}),"\n",(0,r.jsx)(n.li,{children:"Leverage the documentation"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supports-almost-all-aws-resources",children:"Supports (almost) all AWS resources:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Everything we'll see in this course is supported"}),"\n",(0,r.jsx)(n.li,{children:'You can use "custom resources" for resources that are not supported'}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"cloudformation--infrastructure-composer",children:"CloudFormation + Infrastructure Composer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example",":WordPress"," CloudFormation Stack"]}),"\n",(0,r.jsx)(n.li,{children:"We can see all the resources"}),"\n",(0,r.jsxs)(n.li,{children:["We can see the relations between the components\n",(0,r.jsx)(n.img,{alt:"CloudFormation",src:t(73381).A+"",width:"2082",height:"592"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},73381:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cloudFormation-870987550933a1d52b0d8927a22bd7aa.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);