"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[83],{92461:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"AWS/ELB & ASG/ASG","title":"Auto Scaling Group (ASG)","description":"Auto Scaling Group","source":"@site/docs/AWS/ELB & ASG/ASG.md","sourceDirName":"AWS/ELB & ASG","slug":"/AWS/ELB & ASG/ASG","permalink":"/kirbeee/docs/AWS/ELB & ASG/ASG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Auto Scaling Group (ASG)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"Instance Store","permalink":"/kirbeee/docs/AWS/EC2/Instance-Store"},"next":{"title":"ELB (Elastic Load Balancer)","permalink":"/kirbeee/docs/AWS/ELB & ASG/ELB"}}');var l=i(74848),t=i(28453);const s={title:"Auto Scaling Group (ASG)",author:"Kirbee"},c="Introduction to Auto Scaling Group (ASG)",r={},o=[{value:"Auto Scaling Group Attributes",id:"auto-scaling-group-attributes",level:2},{value:"A Launch Template (older \u201cLaunch Configurations\u201d are deprecated)",id:"a-launch-template-older-launch-configurations-are-deprecated",level:2},{value:"Auto Scaling Groups - Scaling Strategies",id:"auto-scaling-groups---scaling-strategies",level:2},{value:"Dynamic Scaling: Respond to changing demand",id:"dynamic-scaling-respond-to-changing-demand",level:2},{value:"Simple Step Scaling",id:"simple-step-scaling",level:3},{value:"Target Tracking Scaling",id:"target-tracking-scaling",level:3},{value:"Scheduled Scaling",id:"scheduled-scaling",level:2},{value:"Predictive Scaling",id:"predictive-scaling",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"introduction-to-auto-scaling-group-asg",children:"Introduction to Auto Scaling Group (ASG)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Auto Scaling Group",src:i(27233).A+"",width:"3406",height:"1528"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"In real-life, the load on your websites and application can change"}),"\n",(0,l.jsx)(n.li,{children:"In the cloud, you can create and get rid of servers very quickly"}),"\n",(0,l.jsx)(n.li,{children:"The goal of an Auto Scaling Group (ASG) is to:"}),"\n",(0,l.jsx)(n.li,{children:"Scale out (add EC2 instances) to match an increased load"}),"\n",(0,l.jsx)(n.li,{children:"Scale in (remove EC2 instances) to match a decreased load"}),"\n",(0,l.jsx)(n.li,{children:"Ensure we have a minimum and a maximum number of machines running"}),"\n",(0,l.jsx)(n.li,{children:"Automatically register new instances to a load balancer"}),"\n",(0,l.jsx)(n.li,{children:"Replace unhealthy instances"}),"\n",(0,l.jsx)(n.li,{children:"Cost Savings: only run at an optimal capacity (principle of the cloud)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"auto-scaling-group-attributes",children:"Auto Scaling Group Attributes"}),"\n",(0,l.jsx)(n.h2,{id:"a-launch-template-older-launch-configurations-are-deprecated",children:"A Launch Template (older \u201cLaunch Configurations\u201d are deprecated)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(91918).A+"",width:"476",height:"525"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AMI + Instance Type"}),"\n",(0,l.jsx)(n.li,{children:"EC2 User Data"}),"\n",(0,l.jsx)(n.li,{children:"EBS Volumes"}),"\n",(0,l.jsx)(n.li,{children:"Security Groups"}),"\n",(0,l.jsx)(n.li,{children:"SSH Key Pair"}),"\n",(0,l.jsx)(n.li,{children:"IAM Roles for your EC2 Instances"}),"\n",(0,l.jsx)(n.li,{children:"Network + Subnets Information"}),"\n",(0,l.jsx)(n.li,{children:"Load Balancer Information"}),"\n",(0,l.jsx)(n.li,{children:"Min Size / Max Size / Initial Capacity"}),"\n",(0,l.jsx)(n.li,{children:"Scaling Policies"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"scaling-strategies",children:"Scaling Strategies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"It is possible to scale an ASG based on CloudWatch alarms"}),"\n",(0,l.jsx)(n.li,{children:"An alarm monitors a metric (such as Average CPU, or a custom metric)"}),"\n",(0,l.jsx)(n.li,{children:"Metrics such as Average CPU are computed for the overall ASG instances"}),"\n",(0,l.jsxs)(n.li,{children:["Based on the alarm:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"We can create scale-out policies (increase the number of instances)"}),"\n",(0,l.jsxs)(n.li,{children:["We can create scale-in policies (decrease the number of instances)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(35320).A+"",width:"1183",height:"274"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"auto-scaling-groups---scaling-strategies",children:"Auto Scaling Groups - Scaling Strategies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Manual Scaling: Update the size of an ASG manually"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"dynamic-scaling-respond-to-changing-demand",children:"Dynamic Scaling: Respond to changing demand"}),"\n",(0,l.jsx)(n.h3,{id:"simple-step-scaling",children:"Simple Step Scaling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"When a CloudWatch alarm is triggered (example CPU > 70%), then add 2 units"}),"\n",(0,l.jsx)(n.li,{children:"When a CloudWatch alarm is triggered (example CPU < 30%), then remove I"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"target-tracking-scaling",children:"Target Tracking Scaling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Simple to set up"}),"\n",(0,l.jsx)(n.li,{children:"Example: I want the average ASG CPU to stay at around 40%"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"scheduled-scaling",children:"Scheduled Scaling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Anticipate a scaling based on known usage patterns"}),"\n",(0,l.jsx)(n.li,{children:"Example: increase the min. capacity to 10 at 5 pm on Fridays"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"predictive-scaling",children:"Predictive Scaling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Uses Machine Learning to predict future traffic ahead of time"}),"\n",(0,l.jsxs)(n.li,{children:["Automatically provisions the right number of EC2 instances in advance\n",(0,l.jsx)(n.img,{alt:"img_1.png",src:i(3515).A+"",width:"1001",height:"354"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"good-metrics-to-scale-on",children:"Good metrics to scale on"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CPUUtilization: Average CPU utilization across your instances"}),"\n",(0,l.jsx)(n.li,{children:"RequestCountPerTarget: to make sure the number of requests per EC2 instances is stable"}),"\n",(0,l.jsx)(n.li,{children:"Average Network In / Out (if you\u2019re application is network bound)"}),"\n",(0,l.jsx)(n.li,{children:"Any custom metric (that you push using CloudWatch)"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"asg---scaling-cooldowns",children:"ASG - Scaling Cooldowns"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"After a scaling activity happens, you are in the cooldown period (default 300 seconds)"}),"\n",(0,l.jsx)(n.li,{children:"During the cooldown period, the ASG will not launch or terminate additional instances (to allow for metrics to stabilize)"}),"\n",(0,l.jsx)(n.li,{children:"Advice: Use a ready-to-use AMI to reduce configuration time in order to be serving request faster and reduce the cooldown period"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"elb--asg---summary",children:"ELB & ASG - Summary"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High Availability vs Scalability (vertical and horizontal) vs Elasticity vs Agility in the Cloud"}),"\n",(0,l.jsx)(n.li,{children:"Elastic Load Balancers (ELB)"}),"\n",(0,l.jsx)(n.li,{children:"Distribute traffic across backend EC2 instances, can be Multi-AZ"}),"\n",(0,l.jsx)(n.li,{children:"Supports health checks"}),"\n",(0,l.jsx)(n.li,{children:"4 types: Classic (old), Application (HTTP - L7), Network (TCP - L4), Gateway (L3)"}),"\n",(0,l.jsx)(n.li,{children:"Auto Scaling Groups (ASG)"}),"\n",(0,l.jsx)(n.li,{children:"Implement Elasticity for your application, across multiple AZ"}),"\n",(0,l.jsx)(n.li,{children:"Scale EC2 instances based on the demand on your system, replace unhealthy"}),"\n",(0,l.jsx)(n.li,{children:"Integrated with the ELB"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},35320:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/ASG-cloudwatch-acf144bdbc8b6a9c79084563d7eb9b4a.png"},27233:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/ASG-e224d41f396df47e7d75bb5a27ff3fab.png"},91918:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/launch-template-9025f544c82ccd072bae07437bcbcece.png"},3515:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/predictive-scaling-7ad61027f9c23af92932f4bb0853d6a6.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var a=i(96540);const l={},t=a.createContext(l);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);