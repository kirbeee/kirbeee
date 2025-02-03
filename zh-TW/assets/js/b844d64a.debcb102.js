"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7066],{7396:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"AWS/Deployment & managing/Elastic-Beanstalk","title":"Elastic Beanstalk","description":"- Elastic Beanstalk is a developer centric view of deploying an application on AWS","source":"@site/docs/AWS/Deployment & managing/Elastic-Beanstalk.mdx","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/Elastic-Beanstalk","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/Elastic-Beanstalk","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Elastic Beanstalk"},"sidebar":"docs","previous":{"title":"CodePipeline","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/CodePipeline"},"next":{"title":"SSM (Systems Manager)","permalink":"/kirbeee/zh-TW/docs/AWS/Deployment & managing/SSM"}}');var l=i(4848),s=i(8453);const a={title:"Elastic Beanstalk"},r="Elastic Beanstalk",c={},o=[{value:"Managed service",id:"managed-service",level:2},{value:"Responsibility",id:"responsibility",level:2},{value:"Architecture",id:"architecture",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elastic-beanstalk",children:"Elastic Beanstalk"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Elastic Beanstalk is a developer centric view of deploying an application on AWS"}),"\n",(0,l.jsx)(n.li,{children:"It uses all the component's we've seen before: EC2, ASG, ELB, RDS, etc..."}),"\n",(0,l.jsx)(n.li,{children:"But it's all in one view that's easy to make sense of!"}),"\n",(0,l.jsx)(n.li,{children:"We still have full control over the configuration"}),"\n",(0,l.jsx)(n.li,{children:"Beanstalk = Platform as a Service (PaaS)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"managed-service",children:"Managed service"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Instance configuration / OS is handled by Beanstalk"}),"\n",(0,l.jsx)(n.li,{children:"Deployment strategy is configurable but performed by Elastic Beanstalk"}),"\n",(0,l.jsx)(n.li,{children:"Capacity provisioning"}),"\n",(0,l.jsx)(n.li,{children:"Load balancing & auto-scaling"}),"\n",(0,l.jsx)(n.li,{children:"Application health-monitoring & responsiveness"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"responsibility",children:"Responsibility"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Just the application code is the responsibility of the developer"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Three architecture models:"}),"\n",(0,l.jsx)(n.li,{children:"Single Instance deployment: good for dev"}),"\n",(0,l.jsx)(n.li,{children:"LB + ASG: great for production or pre-production web applications"}),"\n",(0,l.jsx)(n.li,{children:"ASG only: great for non-web apps in production (workers, etc..)"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"beanstalk",children:"Beanstalk"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Health agent pushes metrics to CloudWatch"}),"\n",(0,l.jsx)(n.li,{children:"Checks for app health, publishes health events"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);