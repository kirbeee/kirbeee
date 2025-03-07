"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[8934],{48088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"AWS/Security & Compliance/intro","title":"introduction","description":"AWS responsibility - Security of the Cloud","source":"@site/docs/AWS/Security & Compliance/intro.md","sourceDirName":"AWS/Security & Compliance","slug":"/AWS/Security & Compliance/intro","permalink":"/docs/AWS/Security & Compliance/intro","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"introduction"},"sidebar":"docs","previous":{"title":"Inspector.png","permalink":"/docs/AWS/Security & Compliance/inspector"},"next":{"title":"Network ACL (NACL) & Security Groups","permalink":"/docs/AWS/VPC & VPN/NACL&security-group"}}');var s=i(74848),t=i(28453);const l={title:"introduction"},c="AWS Shared Responsibility Model",o={},a=[{value:"AWS responsibility - Security of the Cloud",id:"aws-responsibility---security-of-the-cloud",level:2},{value:"Customer responsibility - Security in the Cloud",id:"customer-responsibility---security-in-the-cloud",level:2},{value:"Shared controls:",id:"shared-controls",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aws-shared-responsibility-model",children:"AWS Shared Responsibility Model"})}),"\n",(0,s.jsx)(n.h2,{id:"aws-responsibility---security-of-the-cloud",children:"AWS responsibility - Security of the Cloud"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Protecting infrastructure (hardware, software, facilities, and networking) that runs all the AWS services"}),"\n",(0,s.jsx)(n.li,{children:"Managed services like S3, DynamoDB, RDS, etc."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customer-responsibility---security-in-the-cloud",children:"Customer responsibility - Security in the Cloud"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For EC2 instance, customer is responsible for management of the guest OS (including security patches and updates), firewall & network configuration, lAM"}),"\n",(0,s.jsx)(n.li,{children:"Encrypting application data"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"shared-controls",children:"Shared controls:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Patch Management, Configuration Management, Awareness & Training"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"root-user-privileges",children:"root user Privileges"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Root user = Account Owner (created when the account is created)"}),"\n",(0,s.jsx)(n.li,{children:"Has complete access to all AWS services and resources"}),"\n",(0,s.jsx)(n.li,{children:"Lock away your AWS account root user access keys!"}),"\n",(0,s.jsx)(n.li,{children:"Do not use the root account for everyday tasks, even administrative tasks"}),"\n",(0,s.jsx)(n.li,{children:"Actions that can be performed only by the root user:"}),"\n",(0,s.jsx)(n.li,{children:"Change account settings (account name, email address, root user password, root user access keys)"}),"\n",(0,s.jsx)(n.li,{children:"View certain tax invoices"}),"\n",(0,s.jsx)(n.li,{children:"Close your AWS account"}),"\n",(0,s.jsx)(n.li,{children:"Restore IAM user permissions"}),"\n",(0,s.jsx)(n.li,{children:"Change or cancel your AWS Support plan"}),"\n",(0,s.jsx)(n.li,{children:"Register as a seller in the Reserved Instance Marketplace"}),"\n",(0,s.jsx)(n.li,{children:"Configure an Amazon S3 bucket to enable MFA"}),"\n",(0,s.jsx)(n.li,{children:"Edit or delete an Amazon S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID"}),"\n",(0,s.jsx)(n.li,{children:"Sign up for GovCloud"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"summary",children:"summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shared Responsibility on AWS"}),"\n",(0,s.jsx)(n.li,{children:"Shield: Automatic DDoS Protection + 24/7 support for advanced"}),"\n",(0,s.jsx)(n.li,{children:"WAF: Firewall to filter incoming requests based on rules"}),"\n",(0,s.jsx)(n.li,{children:"KMS: Encryption keys managed by AWS"}),"\n",(0,s.jsx)(n.li,{children:"CloudHSM: Hardware encryption, we manage encryption keys"}),"\n",(0,s.jsx)(n.li,{children:"AWS Certificate Manager: provision, manage, and deploy SSL/TLS Certificates"}),"\n",(0,s.jsx)(n.li,{children:"Artifact: Get access to compliance reports such as PCI, ISO, etc..."}),"\n",(0,s.jsx)(n.li,{children:"GuardDuty: Find malicious behavior with VPC, DNS & CloudTrail Logs"}),"\n",(0,s.jsx)(n.li,{children:"Inspector: find software vulnerabilities in EC2, ECR Images, and Lambda functions"}),"\n",(0,s.jsx)(n.li,{children:"Network Firewall: Protect VPC against network attacks"}),"\n",(0,s.jsx)(n.li,{children:"Config: Track config changes and compliance against rules"}),"\n",(0,s.jsx)(n.li,{children:"Macie: Find sensitive data (ex: PIl data) in Amazon S3 buckets"}),"\n",(0,s.jsx)(n.li,{children:"Cloud Trail: Track API calls made by users within account"}),"\n",(0,s.jsx)(n.li,{children:"AWS Security Hub: gather security findings from multiple AWS accounts"}),"\n",(0,s.jsx)(n.li,{children:"Amazon Detective: find the root cause of security issues or suspicious activities"}),"\n",(0,s.jsx)(n.li,{children:"AWS Abuse: Report AWS resources used for abusive or illegal purposes"}),"\n",(0,s.jsxs)(n.li,{children:["Root user privileges:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change account settings"}),"\n",(0,s.jsx)(n.li,{children:"Close your AWS account"}),"\n",(0,s.jsx)(n.li,{children:"Change or cancel your AWS Support plan"}),"\n",(0,s.jsx)(n.li,{children:"Register as a seller in the Reserved Instance Marketplace"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"IAM Access Analyzer: identify which resources are shared externally"}),"\n",(0,s.jsx)(n.li,{children:"Firewall Manager: manage security rules across an Organization (WAF, Shield...)"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);