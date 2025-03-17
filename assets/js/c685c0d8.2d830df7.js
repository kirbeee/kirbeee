"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[700],{7306:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"AWS/Global Infrastruture/Global-accelerator","title":"Global Accelerator","description":"Global Accelerator","source":"@site/docs/AWS/Global Infrastruture/Global-accelerator.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/Global-accelerator","permalink":"/kirbeee/docs/AWS/Global Infrastruture/Global-accelerator","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Global Infrastruture/Global-accelerator.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"Global Accelerator"},"sidebar":"docs","previous":{"title":"Edge Location","permalink":"/kirbeee/docs/AWS/Global Infrastruture/EdgeLocation"},"next":{"title":"Local zone","permalink":"/kirbeee/docs/AWS/Global Infrastruture/Local-zone"}}');var l=r(74848),a=r(28453);const i={title:"Global Accelerator"},s="Global Accelerator",o={},c=[{value:"Unicast IP vs Anycast IP",id:"unicast-ip-vs-anycast-ip",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"global-accelerator",children:"Global Accelerator"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Global Accelerator",src:r(78508).A+"",width:"1200",height:"1200"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Improve global application availability and performance using the AWS global network"}),"\n",(0,l.jsx)(n.li,{children:"Leverage the AWS internal network to optimize the route to your application (60% improvement)"}),"\n",(0,l.jsx)(n.li,{children:"2 Anycast IP are created for your application and traffic is sent through Edge Locations"}),"\n",(0,l.jsx)(n.li,{children:"The Edge locations send the traffic to your application"}),"\n",(0,l.jsx)(n.li,{children:"Works with Elastic IP, EC2 instances, ALB, NLB, public or private"}),"\n",(0,l.jsxs)(n.li,{children:["Consistent Performance","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Intelligent routing to lowest latency and fast regional failover"}),"\n",(0,l.jsx)(n.li,{children:"No issue with client cache (because the IP doesn\u2019t change)"}),"\n",(0,l.jsx)(n.li,{children:"Internal AWS network"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Health Checks","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Global Accelerator performs a health check of your applications"}),"\n",(0,l.jsx)(n.li,{children:"Helps make your application global (failover less than 1 minute for unhealthy)"}),"\n",(0,l.jsx)(n.li,{children:"Great for disaster recovery (thanks to the health checks)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Security","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"only 2 external IP need to be whitelisted"}),"\n",(0,l.jsx)(n.li,{children:"DDoS protection thanks to AWS Shield"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"unicast-ip-vs-anycast-ip",children:"Unicast IP vs Anycast IP"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:r(38136).A+"",width:"548",height:"673"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Unicast IP: one server holds one IP address"}),"\n",(0,l.jsx)(n.li,{children:"Anycast IP: all servers hold the same IP address and the client is routed to the nearest one"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"diagram",children:"Diagram"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Global Accelerator Diagram",src:r(95556).A+"",width:"2426",height:"1028"})}),"\n",(0,l.jsx)(n.h1,{id:"global-accelerator-vs-cloudfront",children:"Global Accelerator vs. CloudFront"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"They both use the AWS global network and its edge locations around the world"}),"\n",(0,l.jsx)(n.li,{children:"Both services integrate with AWS Shield for DDoS protection."}),"\n",(0,l.jsxs)(n.li,{children:["CloudFront","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Improves performance for both cacheable content (such as images and videos)"}),"\n",(0,l.jsx)(n.li,{children:"Dynamic content (such as API acceleration and dynamic site delivery)"}),"\n",(0,l.jsx)(n.li,{children:"Content is served at the edge"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Global Accelerator","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Improves performance for a wide range of applications over TCP or UDP"}),"\n",(0,l.jsx)(n.li,{children:"Proxying packets at the edge to applications running in one or more AWS Regions."}),"\n",(0,l.jsx)(n.li,{children:"Good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP"}),"\n",(0,l.jsx)(n.li,{children:"Good for HTTP use cases that require static IP addresses"}),"\n",(0,l.jsx)(n.li,{children:"Good for HTTP use cases that required deterministic, fast regional failover"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},95556:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Global-accelerator-diagram-8d948938e4f51361c4052a30695802ed.png"},78508:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Global-accelerator-622d49ab06d26fc9014869f67b1a6fef.png"},38136:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/IP-dac2fbb7c0dcf9d8f35da32c0f22a759.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const l={},a=t.createContext(l);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);