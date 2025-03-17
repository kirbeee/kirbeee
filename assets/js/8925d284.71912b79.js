"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[5079],{3512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"AWS/VPC & VPN/VPC","title":"VPC & VPN (Virtual Private Cloud)","description":"VPC","source":"@site/docs/AWS/VPC & VPN/VPC.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/VPC","permalink":"/kirbeee/docs/AWS/VPC & VPN/VPC","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/VPC & VPN/VPC.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"VPC & VPN (Virtual Private Cloud)"},"sidebar":"docs","previous":{"title":"VPC & VPN Flow Logs & VPC & VPN Peering","permalink":"/kirbeee/docs/AWS/VPC & VPN/VPC-flowlog&VPC-peering"},"next":{"title":"VPN","permalink":"/kirbeee/docs/AWS/VPC & VPN/VPN"}}');var s=n(74848),r=n(28453);const a={title:"VPC & VPN (Virtual Private Cloud)"},l="VPC (Virtual Private Cloud)",o={},c=[];function d(e){const t={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"vpc-virtual-private-cloud",children:"VPC (Virtual Private Cloud)"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VPC",src:n(74742).A+"",width:"904",height:"1268"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"VPC -Virtual Private Cloud: private network to deploy your resources (regional resource)"}),"\n",(0,s.jsx)(t.li,{children:"Subnets allow you to partition your network inside your VPC (Availability Zone resource)"}),"\n",(0,s.jsx)(t.li,{children:"A public subnet is a subnet that is accessible from the internet"}),"\n",(0,s.jsx)(t.li,{children:"A private subnet is a subnet that is not accessible from the internet"}),"\n",(0,s.jsx)(t.li,{children:"To define access to the internet and between subnets, we use Route Tables."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"diagram",children:"Diagram"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VPC",src:n(21438).A+"",width:"1904",height:"1216"})}),"\n",(0,s.jsx)(t.h1,{id:"internet-gateway-and-nat-gateway",children:"Internet Gateway and NAT Gateway"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"VPC",src:n(77929).A+"",width:"1034",height:"1214"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Internet Gateways helps our VPC instances connect with the internet"}),"\n",(0,s.jsx)(t.li,{children:"Public Subnets have a route to the internet gateway."}),"\n",(0,s.jsx)(t.li,{children:"NAT Gateways (AWS-managed) & NAT Instances (self-managed) allow your instances in your Private Subnets to access the internet while remaining private"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21438:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/VPC-diagram-a432c52adb1d9083514d279b3edc7ac8.png"},74742:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/VPC-a699902a43dc113d146c989b2e35d52d.png"},77929:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/VPC2-b4c9d42e267816cb5027411ae7eeb31f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);