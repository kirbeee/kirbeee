"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[4833],{83674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"AWS/VPC & VPN/introduction","title":"Introduction","description":"- IPv4 - Internet Protocol version 4 (4.3 Billion Addresses)","source":"@site/docs/AWS/VPC & VPN/introduction.md","sourceDirName":"AWS/VPC & VPN","slug":"/AWS/VPC & VPN/introduction","permalink":"/docs/AWS/VPC & VPN/introduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Introduction"},"sidebar":"docs","previous":{"title":"VPN","permalink":"/docs/AWS/VPC & VPN/VPN"},"next":{"title":"cv","permalink":"/docs/cv"}}');var r=t(74848),s=t(28453);const o={title:"Introduction"},l="IP Address in AWS",c={},d=[];function a(e){const n={h1:"h1",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ip-address-in-aws",children:"IP Address in AWS"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["IPv4 - Internet Protocol version 4 (4.3 Billion Addresses)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Public IPv4 - can be used on the Internet"}),"\n",(0,r.jsx)(n.li,{children:"EC2 instance gets a new a public IP address every time you stop then start it (default)"}),"\n",(0,r.jsx)(n.li,{children:"Private IPV4 - can be used on private networks (LAN) such as internal AWS networking (e.g., 192.168.1.1)"}),"\n",(0,r.jsx)(n.li,{children:"Private IPV4 is fixed for EC2 Instances even if you start/stop them"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Elastic IP \u2014 allows you to attach a fixed public IPv4 address to EC2 instance"}),"\n",(0,r.jsxs)(n.li,{children:["Note: all public IPv4 on AWS will be charged $0.005 per hour (including EIP)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Free Tier: 750 hours usage per month"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["IPv6 - Internet Protocol version 6 (3.4 \xd7 1038 Addresses)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Every IP address is public in AWS (no private range)"}),"\n",(0,r.jsxs)(n.li,{children:["Example: 200 l:db8:3333:4444:cccc:dddd:eeee",":ffff"]}),"\n",(0,r.jsx)(n.li,{children:"Free"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VPC: Virtual Private Cloud"}),"\n",(0,r.jsx)(n.li,{children:"Subnets: Tied to an AZ, network partition of the VPC"}),"\n",(0,r.jsx)(n.li,{children:"Internet Gateway: at the VPC level, provide Internet Access"}),"\n",(0,r.jsx)(n.li,{children:"NAT Gateway / Instances: give internet access to private subnets"}),"\n",(0,r.jsx)(n.li,{children:"NACL: Stateless, subnet rules for inbound and outbound"}),"\n",(0,r.jsx)(n.li,{children:"Security Groups: Stateful, operate at the EC2 instance level or ENI"}),"\n",(0,r.jsx)(n.li,{children:"VPC Peering: Connect two VPC with non overlapping IP ranges, nontransitive"}),"\n",(0,r.jsx)(n.li,{children:"Elastic IP -fixed public IPv4, ongoing cost if not in-use"}),"\n",(0,r.jsx)(n.li,{children:"VPC Endpoints: Provide private access to AWS Services within VPC"}),"\n",(0,r.jsx)(n.li,{children:"PrivateLink: Privately connect to a service in a 3rd party VPC"}),"\n",(0,r.jsx)(n.li,{children:"VPC Flow Logs: network traffic logs"}),"\n",(0,r.jsx)(n.li,{children:"Site to Site VPN: VPN over public internet between on-premises DC and AWS"}),"\n",(0,r.jsx)(n.li,{children:"Client VPN: OpenVPN connection from your computer into your VPC"}),"\n",(0,r.jsx)(n.li,{children:"Direct Connect: direct private connection to AWS"}),"\n",(0,r.jsx)(n.li,{children:"Transit Gateway: Connect thousands of VPC and on-premises networks together"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);