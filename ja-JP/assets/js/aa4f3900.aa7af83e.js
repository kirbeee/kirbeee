"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7827],{1499:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"AWS/ELB & ASG/ELB","title":"ELB (Elastic Load Balancer)","description":"Elastic Load Balancer","source":"@site/docs/AWS/ELB & ASG/ELB.md","sourceDirName":"AWS/ELB & ASG","slug":"/AWS/ELB & ASG/ELB","permalink":"/ja-JP/docs/AWS/ELB & ASG/ELB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ELB (Elastic Load Balancer)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"Auto Scaling Group (ASG)","permalink":"/ja-JP/docs/AWS/ELB & ASG/ASG"},"next":{"title":"Elastic Load Balancer & Auto Scaling Group","permalink":"/ja-JP/docs/AWS/ELB & ASG/Introduction"}}');var l=i(74848),a=i(28453);const r={title:"ELB (Elastic Load Balancer)",author:"Kirbee"},t="Introduction to Elastic Load Balancer",c={},o=[{value:"Health Checks",id:"health-checks",level:2},{value:"Security Groups",id:"security-groups",level:2},{value:"Target Groups",id:"target-groups",level:2},{value:"Good to know",id:"good-to-know",level:2},{value:"Target Groups",id:"target-groups-1",level:2},{value:"Target Groups",id:"target-groups-2",level:2},{value:"Cookie Names",id:"cookie-names",level:2},{value:"Basics",id:"basics",level:2},{value:"Load balancer - SSL Certificates",id:"load-balancer---ssl-certificates",level:2},{value:"SSL - Server Name Indication (SNI)",id:"ssl---server-name-indication-sni",level:2},{value:"ELB - SSL Certificates",id:"elb---ssl-certificates",level:2},{value:"Connection Draining",id:"connection-draining",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"introduction-to-elastic-load-balancer",children:"Introduction to Elastic Load Balancer"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Elastic Load Balancer",src:i(56285).A+"",width:"2844",height:"1076"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Spread load across multiple downstream instances"}),"\n",(0,l.jsx)(n.li,{children:"Expose a single point of access (DNS) to your application"}),"\n",(0,l.jsx)(n.li,{children:"Seamlessly handle failures of downstream instances"}),"\n",(0,l.jsx)(n.li,{children:"Do regular health checks to your instances"}),"\n",(0,l.jsx)(n.li,{children:"Provide SSL termination (HTTPS) for your websites"}),"\n",(0,l.jsx)(n.li,{children:"High availability across zones"}),"\n",(0,l.jsx)(n.li,{children:"An ELB (Elastic Load Balancer) is a managed load balancer"}),"\n",(0,l.jsx)(n.li,{children:"AWS guarantees that it will be working"}),"\n",(0,l.jsx)(n.li,{children:"AWS takes care of upgrades, maintenance, high availability"}),"\n",(0,l.jsx)(n.li,{children:"AWS provides only a few configuration knobs"}),"\n",(0,l.jsx)(n.li,{children:"It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"why-use-an-elb",children:"Why use an ELB?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Spread load across multiple downstream instances"}),"\n",(0,l.jsx)(n.li,{children:"Expose a single point of access (DNS) to your application"}),"\n",(0,l.jsx)(n.li,{children:"Seamlessly handle failures of downstream instances"}),"\n",(0,l.jsx)(n.li,{children:"Do regular health checks to your instances"}),"\n",(0,l.jsx)(n.li,{children:"Provide SSL termination (HTTPS) for your websites"}),"\n",(0,l.jsx)(n.li,{children:"Enforce stickiness with cookies"}),"\n",(0,l.jsx)(n.li,{children:"High availability across zones"}),"\n",(0,l.jsx)(n.li,{children:"Separate public traffic from private traffic"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"health-checks",children:"Health Checks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Health Checks are crucial for Load Balancers"}),"\n",(0,l.jsx)(n.li,{children:"They enable the load balancer to know if instances it forwards traffic to are available to reply to requests"}),"\n",(0,l.jsx)(n.li,{children:"The health check is done on a port and a route (/health is common)"}),"\n",(0,l.jsxs)(n.li,{children:["If the response is not 200 (OK), then the instance is unhealthy\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(40417).A+"",width:"417",height:"118"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"4-kinds-of-load-balancers-offered-by-aws",children:"4 kinds of load balancers offered by AWS:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Classic Load Balancer (v| - old generation) - 2009 - CLB\n-\u041d\u0422\u0422\u0420, HTTPS, TCP, SSL (secure TCP)"}),"\n",(0,l.jsxs)(n.li,{children:["Application Load Balancer (v2 - new generation) - 2016 - ALB","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u041d\u0422\u0422\u0420, HTTPS, WebSocket"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Network Load Balancer (v2 - new generation) - 2017 - NLB","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"TCP, TLS (secure TCP), UDP"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Gateway Load Balancer - 2020 - GWLB","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Operates at layer 3 (Network layer) - IP Protocol"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"security-groups",children:"Security Groups"}),"\n",(0,l.jsx)(n.p,{children:"![img.png](ELB-security-group .png)"}),"\n",(0,l.jsx)(n.h1,{id:"application-load-balancer-alb",children:"Application Load Balancer (ALB)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Application load balancers is Layer 7 (HTTP)"}),"\n",(0,l.jsx)(n.li,{children:"Load balancing to multiple HTTP applications across machines\n(target groups)"}),"\n",(0,l.jsx)(n.li,{children:"Load balancing to multiple applications on the same machine\n(ex: containers)"}),"\n",(0,l.jsx)(n.li,{children:"Support for HTTP/2 and WebSocket"}),"\n",(0,l.jsx)(n.li,{children:"Support redirects (from HTTP to HTTPS for example)"}),"\n",(0,l.jsx)(n.li,{children:"Routing tables to different target groups:"}),"\n",(0,l.jsx)(n.li,{children:"Routing based on path in URL (example.com/users & example.com/posts)"}),"\n",(0,l.jsx)(n.li,{children:"Routing based on hostname in URL (one.example.com & other.example.com)"}),"\n",(0,l.jsx)(n.li,{children:"Routing based on Query String, Headers\n(example.com/users?id=123&order=false)"}),"\n",(0,l.jsx)(n.li,{children:"ALB are a great fit for micro services & container-based application\n(example: Docker & Amazon ECS)"}),"\n",(0,l.jsx)(n.li,{children:"Has a port mapping feature to redirect to a dynamic port in ECS"}),"\n",(0,l.jsxs)(n.li,{children:["In comparison, we\u2019d need multiple Classic Load Balancer per application\n",(0,l.jsx)(n.img,{alt:"ALB",src:i(27801).A+"",width:"641",height:"276"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"target-groups",children:"Target Groups"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(20424).A+"",width:"627",height:"257"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"EC2 instances (can be managed by an Auto Scaling Group) \u2013 HTTP"}),"\n",(0,l.jsx)(n.li,{children:"ECS tasks (managed by ECS itself) \u2013 HTTP"}),"\n",(0,l.jsx)(n.li,{children:"Lambda functions \u2013 HTTP request is translated into a JSON event"}),"\n",(0,l.jsx)(n.li,{children:"IP Addresses \u2013 must be private IPs"}),"\n",(0,l.jsx)(n.li,{children:"ALB can route to multiple target groups"}),"\n",(0,l.jsx)(n.li,{children:"Health checks are at the target group level"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"good-to-know",children:"Good to know"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed hostname (XXX.region.elb.amazonaws.com)"}),"\n",(0,l.jsx)(n.li,{children:"The application servers don\u2019t see the IP of the client directly"}),"\n",(0,l.jsx)(n.li,{children:"The true IP of the client is inserted in the header X-Forwarded-For"}),"\n",(0,l.jsxs)(n.li,{children:["We can also get Port (X-Forwarded-Port) and proto (X-Forwarded-Proto)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(52465).A+"",width:"563",height:"127"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"network-load-balancer-nlb",children:"Network Load Balancer (NLB)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Network load balancers (Layer 4) allow to:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Forward TCP & UDP traffic to your instances"}),"\n",(0,l.jsx)(n.li,{children:"Handle millions of request per seconds"}),"\n",(0,l.jsx)(n.li,{children:"Ultra-low latency"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"NLB has one static IP per AZ, and supports assigning Elastic IP(helpful for whitelisting specific IP)"}),"\n",(0,l.jsx)(n.li,{children:"NLB are used for extreme performance, TCP or UDP traffic"}),"\n",(0,l.jsxs)(n.li,{children:["Not included in the AWS free tier\n",(0,l.jsx)(n.img,{alt:"NLB",src:i(51910).A+"",width:"624",height:"267"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"target-groups-1",children:"Target Groups"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"EC2 instances"}),"\n",(0,l.jsx)(n.li,{children:"IP Addresses \u2013 must be private IPs"}),"\n",(0,l.jsx)(n.li,{children:"Application Load Balancer"}),"\n",(0,l.jsxs)(n.li,{children:["Health Checks support the TCP, HTTP and HTTPS Protocols\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(31639).A+"",width:"613",height:"185"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"gateway-load-balancer-gwlb",children:"Gateway Load Balancer (GWLB)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Deploy, scale, and manage a fleet of 3rd party network virtual appliances in AWS"}),"\n",(0,l.jsx)(n.li,{children:"Operates at Layer 3 (Network Layer) \u2013 IP Packets"}),"\n",(0,l.jsxs)(n.li,{children:["Combines the following functions:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Transparent Network Gateway \u2013 single entry/exit for all traffic"}),"\n",(0,l.jsx)(n.li,{children:"Load Balancer \u2013 distributes traffic to your virtual appliances"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Uses the GENEVE protocol on port 6081\n",(0,l.jsx)(n.img,{alt:"GWLB",src:i(47452).A+"",width:"312",height:"423"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"target-groups-2",children:"Target Groups"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"EC2 instances"}),"\n",(0,l.jsxs)(n.li,{children:["IP Addresses \u2013 must be private IPs\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(52345).A+"",width:"693",height:"284"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"sticky-sessions-session-affinity",children:"Sticky Sessions (Session Affinity)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"It is possible to implement stickiness so that the  same client is always redirected to the same instance behind a load balancer"}),"\n",(0,l.jsx)(n.li,{children:"This works for Classic Load Balancer, Application Load Balancer, and Network Load Balancer"}),"\n",(0,l.jsx)(n.li,{children:"For both CLB & ALB, the \u201ccookie\u201d used for stickiness has an expiration date you control"}),"\n",(0,l.jsx)(n.li,{children:"Use case: make sure the user doesn\u2019t lose his session data"}),"\n",(0,l.jsxs)(n.li,{children:["Enabling stickiness may bring imbalance to the load over the backend EC2 instances\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(31959).A+"",width:"282",height:"384"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"cookie-names",children:"Cookie Names"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Application-based Cookies","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Custom cookie","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generated by the target"}),"\n",(0,l.jsx)(n.li,{children:"Can include any custom attributes required by the application"}),"\n",(0,l.jsx)(n.li,{children:"Cookie name must be specified individually for each target group"}),"\n",(0,l.jsx)(n.li,{children:"Don\u2019t use AWSALB, AWSALBAPP, or AWSALBTG (reserved for use by the ELB)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Application cookie","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generated by the load balancer"}),"\n",(0,l.jsx)(n.li,{children:"Cookie name is AWSALBAPP"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Duration-based Cookies","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Cookie generated by the load balancer"}),"\n",(0,l.jsx)(n.li,{children:"Cookie name is AWSALB for ALB, AWSELB for CLB"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"cross-zone-load-balancing",children:"Cross-Zone Load Balancing"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(31768).A+"",width:"860",height:"384"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Application Load Balancer","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enabled by default (can be disabled at the Target Group level)"}),"\n",(0,l.jsx)(n.li,{children:"No charges for inter AZ data"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Network Load Balancer & Gateway Load Balancer","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Disabled by default"}),"\n",(0,l.jsx)(n.li,{children:"You pay charges ($) for inter AZ data if enabled"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Classic Load Balancer","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Disabled by default"}),"\n",(0,l.jsx)(n.li,{children:"No charges for inter AZ data if enabled"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"ssltls",children:"SSL/TLS"}),"\n",(0,l.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"An SSL certificate allows traffic between your clients and your load balancer o be encrypted in transit (in-flight encryption)"}),"\n",(0,l.jsx)(n.li,{children:"SSL refers to Secure Sockets Layer, used to encrypt connections"}),"\n",(0,l.jsx)(n.li,{children:"TLS refers to Transport Layer Security, which is a newer version"}),"\n",(0,l.jsx)(n.li,{children:"Nowadays, TLS certificates are mainly used, but people still refer as SSL"}),"\n",(0,l.jsx)(n.li,{children:"Public SSL certificates are issued by Certificate Authorities (CA)"}),"\n",(0,l.jsx)(n.li,{children:"Comodo, Symantec, GoDaddy, GlobalSign, Digicert, Letsencrypt, etc\u2026"}),"\n",(0,l.jsx)(n.li,{children:"SSL certificates have an expiration date (you set) and must be renewed"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"load-balancer---ssl-certificates",children:"Load balancer - SSL Certificates"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(96233).A+"",width:"700",height:"127"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The load balancer uses an X.509 certificate (SSL/TLS server certificate)"}),"\n",(0,l.jsx)(n.li,{children:"You can manage certificates using ACM (AWS Certificate Manager)"}),"\n",(0,l.jsx)(n.li,{children:"You can create upload your own certificates alternatively"}),"\n",(0,l.jsxs)(n.li,{children:["HTTPS listener:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You must specify a default certificate"}),"\n",(0,l.jsx)(n.li,{children:"You can add an optional list of certs to support multiple domains"}),"\n",(0,l.jsx)(n.li,{children:"Clients can use SNI (Server Name Indication) to specify the hostname they reach"}),"\n",(0,l.jsx)(n.li,{children:"Ability to specify a security policy to support older versions of SSL / TLS (legacy clients)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ssl---server-name-indication-sni",children:"SSL - Server Name Indication (SNI)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SNI solves the problem of loading multiple SSL certificates onto one web server (to serve multiple websites)"}),"\n",(0,l.jsx)(n.li,{children:"It\u2019s a \u201cnewer\u201d protocol, and requires the client to indicate the hostname of the target server in the initial SSL handshake"}),"\n",(0,l.jsx)(n.li,{children:"The server will then find the correct certificate, or return the default one\nNote:"}),"\n",(0,l.jsx)(n.li,{children:"Only works for ALB & NLB (newer generation), CloudFront"}),"\n",(0,l.jsxs)(n.li,{children:["Does not work for CLB (older gen)\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(48454).A+"",width:"418",height:"397"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"elb---ssl-certificates",children:"ELB - SSL Certificates"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Classic Load Balancer (v1)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Support only one SSL certificate"}),"\n",(0,l.jsx)(n.li,{children:"Must use multiple CLB for multiple hostname with multiple SSL certificates"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Application Load Balancer (v2)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Supports multiple listeners with multiple SSL certificates"}),"\n",(0,l.jsx)(n.li,{children:"Uses Server Name Indication (SNI) to make it work"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Network Load Balancer (v2)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Supports multiple listeners with multiple SSL certificates"}),"\n",(0,l.jsx)(n.li,{children:"Uses Server Name Indication (SNI) to make it work"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"connection-draining",children:"Connection Draining"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(81687).A+"",width:"1183",height:"274"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Feature naming","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Connection Draining \u2013 for CLB"}),"\n",(0,l.jsx)(n.li,{children:"Deregistration Delay \u2013 for ALB & NLB"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Time to complete \u201cin-flight requests\u201d while the instance is de-registering or unhealthy"}),"\n",(0,l.jsx)(n.li,{children:"Stops sending new requests to the EC2 instance which is de-registering"}),"\n",(0,l.jsx)(n.li,{children:"Between 1 to 3600 seconds (default: 300 seconds)"}),"\n",(0,l.jsx)(n.li,{children:"Can be disabled (set value to 0)"}),"\n",(0,l.jsx)(n.li,{children:"Set to a low value if your requests are short"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},20424:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ALB-2-933b26df2782319a58fd3adf3c496fb7.png"},52465:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ALB-3-22af2f30c638493b397e330d59326615.png"},27801:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ALB-f7dfe7c692190132a7ec9e8d7639f4e7.png"},56285:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ELB-7f8a54ae6fc631f849af5341148309e6.png"},52345:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/GWLB-2-9a4968a3e27f16107d3b30ca2e551888.png"},47452:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/GWLB-5d8b1b15f0cf912d2ed0dd3ef19ea9f7.png"},31639:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/NLB-2-5ee945c69ac065b7e1cf0431ae314e16.png"},51910:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/NLB-8dfc322e17b149c5f5e9200026eb67ce.png"},48454:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/SNI-9bb3af373e0bd730635056ee2a9e712a.png"},31768:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/cross-zone-load-balancing-ceebb786962fb83352fa6d58f7f92d76.png"},96233:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/diagram-3744e1f973de2fed615c5d131a2ad2b0.png"},40417:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/health-check-a5675112904a47f8494d26496c6e450a.png"},81687:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img-acf144bdbc8b6a9c79084563d7eb9b4a.png"},31959:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/sticky-sessions-90ee03dbb3aa6f087f39443105ab1555.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(96540);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);