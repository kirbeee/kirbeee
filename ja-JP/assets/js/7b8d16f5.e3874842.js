"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8934],{13968:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"AWS/Security & Compliance/intro","title":"introduction","description":"AWS responsibility - Security of the Cloud","source":"@site/docs/AWS/Security & Compliance/intro.md","sourceDirName":"AWS/Security & Compliance","slug":"/AWS/Security & Compliance/intro","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Security & Compliance/intro.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"introduction"},"sidebar":"docs","previous":{"title":"Inspector.png","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/inspector"},"next":{"title":"Network ACL (NACL) & Security Groups","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & VPN/NACL&security-group"}}');var s=n(74848),t=n(28453);const l={title:"introduction"},c="AWS Shared Responsibility Model",o={},a=[{value:"AWS responsibility - Security of the Cloud",id:"aws-responsibility---security-of-the-cloud",level:2},{value:"Customer responsibility - Security in the Cloud",id:"customer-responsibility---security-in-the-cloud",level:2},{value:"Shared controls:",id:"shared-controls",level:2}];function d(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"aws-shared-responsibility-model",children:"AWS Shared Responsibility Model"})}),"\n",(0,s.jsx)(i.h2,{id:"aws-responsibility---security-of-the-cloud",children:"AWS responsibility - Security of the Cloud"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Protecting infrastructure (hardware, software, facilities, and networking) that runs all the AWS services"}),"\n",(0,s.jsx)(i.li,{children:"Managed services like S3, DynamoDB, RDS, etc."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"customer-responsibility---security-in-the-cloud",children:"Customer responsibility - Security in the Cloud"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"For EC2 instance, customer is responsible for management of the guest OS (including security patches and updates), firewall & network configuration, lAM"}),"\n",(0,s.jsx)(i.li,{children:"Encrypting application data"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"shared-controls",children:"Shared controls:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Patch Management, Configuration Management, Awareness & Training"}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"root-user-privileges",children:"root user Privileges"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Root user = Account Owner (created when the account is created)"}),"\n",(0,s.jsx)(i.li,{children:"Has complete access to all AWS services and resources"}),"\n",(0,s.jsx)(i.li,{children:"Lock away your AWS account root user access keys!"}),"\n",(0,s.jsx)(i.li,{children:"Do not use the root account for everyday tasks, even administrative tasks"}),"\n",(0,s.jsx)(i.li,{children:"Actions that can be performed only by the root user:"}),"\n",(0,s.jsx)(i.li,{children:"Change account settings (account name, email address, root user password, root user access keys)"}),"\n",(0,s.jsx)(i.li,{children:"View certain tax invoices"}),"\n",(0,s.jsx)(i.li,{children:"Close your AWS account"}),"\n",(0,s.jsx)(i.li,{children:"Restore IAM user permissions"}),"\n",(0,s.jsx)(i.li,{children:"Change or cancel your AWS Support plan"}),"\n",(0,s.jsx)(i.li,{children:"Register as a seller in the Reserved Instance Marketplace"}),"\n",(0,s.jsx)(i.li,{children:"Configure an Amazon S3 bucket to enable MFA"}),"\n",(0,s.jsx)(i.li,{children:"Edit or delete an Amazon S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID"}),"\n",(0,s.jsx)(i.li,{children:"Sign up for GovCloud"}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"summary",children:"summary"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Shared Responsibility on AWS"}),"\n",(0,s.jsx)(i.li,{children:"Shield: Automatic DDoS Protection + 24/7 support for advanced"}),"\n",(0,s.jsx)(i.li,{children:"WAF: Firewall to filter incoming requests based on rules"}),"\n",(0,s.jsx)(i.li,{children:"KMS: Encryption keys managed by AWS"}),"\n",(0,s.jsx)(i.li,{children:"CloudHSM: Hardware encryption, we manage encryption keys"}),"\n",(0,s.jsx)(i.li,{children:"AWS Certificate Manager: provision, manage, and deploy SSL/TLS Certificates"}),"\n",(0,s.jsx)(i.li,{children:"Artifact: Get access to compliance reports such as PCI, ISO, etc..."}),"\n",(0,s.jsx)(i.li,{children:"GuardDuty: Find malicious behavior with VPC, DNS & CloudTrail Logs"}),"\n",(0,s.jsx)(i.li,{children:"Inspector: find software vulnerabilities in EC2, ECR Images, and Lambda functions"}),"\n",(0,s.jsx)(i.li,{children:"Network Firewall: Protect VPC against network attacks"}),"\n",(0,s.jsx)(i.li,{children:"Config: Track config changes and compliance against rules"}),"\n",(0,s.jsx)(i.li,{children:"Macie: Find sensitive data (ex: PIl data) in Amazon S3 buckets"}),"\n",(0,s.jsx)(i.li,{children:"Cloud Trail: Track API calls made by users within account"}),"\n",(0,s.jsx)(i.li,{children:"AWS Security Hub: gather security findings from multiple AWS accounts"}),"\n",(0,s.jsx)(i.li,{children:"Amazon Detective: find the root cause of security issues or suspicious activities"}),"\n",(0,s.jsx)(i.li,{children:"AWS Abuse: Report AWS resources used for abusive or illegal purposes"}),"\n",(0,s.jsxs)(i.li,{children:["Root user privileges:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Change account settings"}),"\n",(0,s.jsx)(i.li,{children:"Close your AWS account"}),"\n",(0,s.jsx)(i.li,{children:"Change or cancel your AWS Support plan"}),"\n",(0,s.jsx)(i.li,{children:"Register as a seller in the Reserved Instance Marketplace"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"IAM Access Analyzer: identify which resources are shared externally"}),"\n",(0,s.jsx)(i.li,{children:"Firewall Manager: manage security rules across an Organization (WAF, Shield...)"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var r=n(96540);const s={},t=r.createContext(s);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);