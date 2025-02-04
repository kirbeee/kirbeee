"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[1436],{6120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"AWS/VPC & network/VPN","title":"VPN","description":"img.png","source":"@site/docs/AWS/VPC & network/VPN.md","sourceDirName":"AWS/VPC & network","slug":"/AWS/VPC & network/VPN","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & network/VPN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VPN"},"sidebar":"docs","previous":{"title":"VPC (Virtual Private Cloud)","permalink":"/kirbeee/ja-JP/docs/AWS/VPC & network/VPC"},"next":{"title":"About Me","permalink":"/kirbeee/ja-JP/docs/cv"}}');var s=t(4848),r=t(8453);const c={title:"VPN"},o="Site-to-Site VPN vs. Direct Connect",a={},l=[{value:"Site-to-Site VPN",id:"site-to-site-vpn",level:2},{value:"Direct Connect",id:"direct-connect",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"site-to-site-vpn-vs-direct-connect",children:"Site-to-Site VPN vs. Direct Connect"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:t(4285).A+"",width:"542",height:"447"})}),"\n",(0,s.jsx)(n.h2,{id:"site-to-site-vpn",children:"Site-to-Site VPN"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On-premises: must use a Customer Gateway (CGW)"}),"\n",(0,s.jsxs)(n.li,{children:["AWS: must use a Virtual Private Gateway\nVGW\n",(0,s.jsx)(n.img,{alt:"img.png",src:t(5165).A+"",width:"1323",height:"277"})]}),"\n",(0,s.jsx)(n.li,{children:"Connect an on-premises VPN to AWS Public www"}),"\n",(0,s.jsx)(n.li,{children:"The connection is automatically encrypted"}),"\n",(0,s.jsx)(n.li,{children:"Goes over the public internet"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"direct-connect",children:"Direct Connect"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Establish a physical connection between on-premises and AWS"}),"\n",(0,s.jsx)(n.li,{children:"The connection is private, secure and fast"}),"\n",(0,s.jsx)(n.li,{children:"Goes over a private network"}),"\n",(0,s.jsx)(n.li,{children:"Takes at least a month to establish"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"client-vpn",children:"Client VPN"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:t(2190).A+"",width:"1029",height:"287"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect from your computer using OpenVPN to your private network in AWS and on-premises"}),"\n",(0,s.jsx)(n.li,{children:"Allow you to connect to your EC2 instances over a private IP (just as if you were in the private VPC network)"}),"\n",(0,s.jsx)(n.li,{children:"Goes over public Internet"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"transit-gateway",children:"Transit Gateway"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:t(2313).A+"",width:"557",height:"558"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For having transitive peering between thousands ofVPC and on-premises, hub-and-spoke (star) connection"}),"\n",(0,s.jsx)(n.li,{children:"One single Gateway to provide this functionality"}),"\n",(0,s.jsx)(n.li,{children:"Works with Direct Connect Gateway, VPN connections"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2313:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Transit-gateway-a62021c889388e91c329012da8279a5d.png"},4285:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/VPN-fc63e25b71baa607b9b5bd83fee099c3.png"},2190:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/clientVPN-557e939bf031955020c30e8282e0e7ee.png"},5165:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/side-to-side-VPN-7f1ec09aefcbf8573dbd15cc400702a4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);