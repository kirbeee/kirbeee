"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[9325],{69146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"AWS/Global Infrastruture/Route53","title":"AWS Route 53","description":"- Route53 is a Managed DNS (Domain Name System)","source":"@site/docs/AWS/Global Infrastruture/Route53.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/Route53","permalink":"/kirbeee/docs/AWS/Global Infrastruture/Route53","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Global Infrastruture/Route53.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"AWS Route 53"},"sidebar":"docs","previous":{"title":"Local zone","permalink":"/kirbeee/docs/AWS/Global Infrastruture/Local-zone"},"next":{"title":"WaveLength","permalink":"/kirbeee/docs/AWS/Global Infrastruture/WaveLength"}}');var l=i(74848),t=i(28453);const o={title:"AWS Route 53"},r="Overview",c={},a=[{value:"DNS Terminologies",id:"dns-terminologies",level:2},{value:"DNS work diagram",id:"dns-work-diagram",level:2},{value:"Simple Routing Policy",id:"simple-routing-policy",level:2},{value:"Weighted Routing Policy",id:"weighted-routing-policy",level:2},{value:"Latency Routing Policy",id:"latency-routing-policy",level:2},{value:"Failover Routing Policy(Active-Passive)",id:"failover-routing-policyactive-passive",level:2},{value:"Geolocation Routing Policy",id:"geolocation-routing-policy",level:2},{value:"Geo proximate Routing Policy",id:"geo-proximate-routing-policy",level:2},{value:"IP based Routing Policy",id:"ip-based-routing-policy",level:2},{value:"Multi value Routing Policy",id:"multi-value-routing-policy",level:2},{value:"Record Types",id:"record-types",level:2},{value:"CNAME vs Alias",id:"cname-vs-alias",level:2},{value:"Alias Record Target",id:"alias-record-target",level:2},{value:"Health Check Types",id:"health-check-types",level:2},{value:"Health Check - Monitoring Endpoint",id:"health-check---monitoring-endpoint",level:3},{value:"Calculated Health Checks",id:"calculated-health-checks",level:3},{value:"Health Check - Private Hosted Zone",id:"health-check---private-hosted-zone",level:3}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Route53 is a Managed DNS (Domain Name System)"}),"\n",(0,l.jsx)(n.li,{children:"DNS is a collection of rules and records which helps clients understand how to reach a server through URLs."}),"\n",(0,l.jsx)(n.li,{children:"In AWS, the most common records are:"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"})," => 12.34.56.78 == A record (IPV4)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"})," => 2001:0db8:85a3:0000:0000:8a2e:0370:7334 == AAAA IPv6"]}),"\n",(0,l.jsxs)(n.li,{children:["search.google.com => ",(0,l.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"})," == CNAME: hostname to hostname"]}),"\n",(0,l.jsx)(n.li,{children:"example.com => AWS resource == Alias (ex: ELB, CloudFront, S3, RDS, etc...)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"dns-terminologies",children:"DNS Terminologies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Domain Registrar: Amazon Route 53, GoDaddy, ..."}),"\n",(0,l.jsx)(n.li,{children:"DNS Records: A, AAAA, CNAME, NS, ..."}),"\n",(0,l.jsx)(n.li,{children:"Zone File: contains DNS records"}),"\n",(0,l.jsx)(n.li,{children:"Name Server: resolves DNS queries (Authoritative or Non-Authoritative)"}),"\n",(0,l.jsx)(n.li,{children:"Top Level Domain (TLD): .com, .us, .in, .gov, .org, ..."}),"\n",(0,l.jsx)(n.li,{children:"Second Level Domain (SLD): amazon.com, google.com, ..."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"dns-work-diagram",children:"DNS work diagram"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(73873).A+"",width:"512",height:"512"})}),"\n",(0,l.jsx)(n.h1,{id:"diagram",children:"Diagram"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Route53",src:i(34960).A+"",width:"2800",height:"1626"})}),"\n",(0,l.jsx)(n.h1,{id:"routing-policies",children:"Routing Policies"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"Routing Policies",src:i(63020).A+"",width:"3488",height:"1308"}),"\n",(0,l.jsx)(n.img,{alt:"Routing Policies",src:i(82023).A+"",width:"3556",height:"1334"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Define how Route 53 responds to DNS queries","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Don\u2019t get confused by the word \u201cRouting\u201d"}),"\n",(0,l.jsx)(n.li,{children:"It\u2019s not the same as Load balancer routing which routes the traffic"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"DNS does not route any traffic, it only responds to the DNS queries"}),"\n",(0,l.jsxs)(n.li,{children:["Route 53 Supports the following Routing Policies","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Simple"}),"\n",(0,l.jsx)(n.li,{children:"Weighted"}),"\n",(0,l.jsx)(n.li,{children:"Failover"}),"\n",(0,l.jsx)(n.li,{children:"Latency based"}),"\n",(0,l.jsx)(n.li,{children:"Geolocation"}),"\n",(0,l.jsx)(n.li,{children:"Multi-Value Answer"}),"\n",(0,l.jsx)(n.li,{children:"Geoproximity (using Route 53 Traffic Flow feature)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"simple-routing-policy",children:"Simple Routing Policy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Typically, route traffic to a single resource"}),"\n",(0,l.jsx)(n.li,{children:"Can specify multiple values in the same record"}),"\n",(0,l.jsx)(n.li,{children:"If multiple values are returned, a random one is chosen by the client"}),"\n",(0,l.jsx)(n.li,{children:"When Alias enabled, specify only one AWS resource"}),"\n",(0,l.jsx)(n.li,{children:"Can\u2019t be associated with Health Checks"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"weighted-routing-policy",children:"Weighted Routing Policy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"control the percentage the request that go to each specific resource"}),"\n",(0,l.jsx)(n.li,{children:"Weights don\u2019t need to sum up to 100"}),"\n",(0,l.jsx)(n.li,{children:"DNS records must have the same name and type"}),"\n",(0,l.jsx)(n.li,{children:"Can be associated with Health Checks"}),"\n",(0,l.jsx)(n.li,{children:"Use cases: load balancing between regions, testing new application versions\u2026"}),"\n",(0,l.jsx)(n.li,{children:"Assign a weight of 0 to a record to stop sending traffic to a resource"}),"\n",(0,l.jsx)(n.li,{children:"If all records have weight of 0, then all records"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"latency-routing-policy",children:"Latency Routing Policy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Redirect to the resource that has the least latency close to us"}),"\n",(0,l.jsx)(n.li,{children:"Super helpful when latency for users is a priority"}),"\n",(0,l.jsx)(n.li,{children:"Latency is based on traffic between users and AWS Regions"}),"\n",(0,l.jsx)(n.li,{children:"Germany users may be directed to the US (if that\u2019s the lowest latency)"}),"\n",(0,l.jsx)(n.li,{children:"Can be associated with Health Checks (has a failover capacity)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"failover-routing-policyactive-passive",children:"Failover Routing Policy(Active-Passive)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(47848).A+"",width:"1204",height:"539"})}),"\n",(0,l.jsx)(n.h2,{id:"geolocation-routing-policy",children:"Geolocation Routing Policy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Different from Latency-based!"}),"\n",(0,l.jsx)(n.li,{children:"This routing is based on user location"}),"\n",(0,l.jsx)(n.li,{children:"Specify location by Continent, Country or by US State (if there\u2019s overlapping, most precise location selected)"}),"\n",(0,l.jsx)(n.li,{children:"Should create a \u201cDefault\u201d record (in case there\u2019s no match on location)"}),"\n",(0,l.jsx)(n.li,{children:"Use cases: website localization, restrict content distribution, load balancing, ..."}),"\n",(0,l.jsx)(n.li,{children:"Can be associated with Health Checks"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"geo-proximate-routing-policy",children:"Geo proximate Routing Policy"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"img.png",src:i(25018).A+"",width:"1202",height:"570"}),"\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(49681).A+"",width:"1162",height:"594"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Route traffic to your resources based on the geographic location of users and\nresources"}),"\n",(0,l.jsx)(n.li,{children:"Ability to shift more traffic to resources based on the defined bias"}),"\n",(0,l.jsx)(n.li,{children:"To change the size of the geographic region, specify bias values:"}),"\n",(0,l.jsx)(n.li,{children:"To expand (1 to 99) \u2013 more traffic to the resource"}),"\n",(0,l.jsx)(n.li,{children:"To shrink (-1 to -99) \u2013 less traffic to the resource"}),"\n",(0,l.jsx)(n.li,{children:"Resources can be:"}),"\n",(0,l.jsx)(n.li,{children:"AWS resources (specify AWS region)"}),"\n",(0,l.jsx)(n.li,{children:"Non-AWS resources (specify Latitude and Longitude)"}),"\n",(0,l.jsx)(n.li,{children:"You must use Route 53 Traffic Flow to use this feature"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ip-based-routing-policy",children:"IP based Routing Policy"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(64981).A+"",width:"468",height:"624"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Routing is based on clients\u2019 IP addresses"}),"\n",(0,l.jsx)(n.li,{children:"You provide a list of CIDRs for your clients and the corresponding endpoints/locations(user-IP-to-endpoint mappings)"}),"\n",(0,l.jsx)(n.li,{children:"Use cases: Optimize performance, reduce network costs\u2026"}),"\n",(0,l.jsx)(n.li,{children:"Example: route end users from a particular ISP to a specific endpoint"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"multi-value-routing-policy",children:"Multi value Routing Policy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use when routing traffic to multiple resources"}),"\n",(0,l.jsx)(n.li,{children:"Route 53 return multiple values/resources"}),"\n",(0,l.jsx)(n.li,{children:"Can be associated with Health Checks (return only values for healthy resources)"}),"\n",(0,l.jsx)(n.li,{children:"Up to 8 healthy records are returned for each Multi-Value query"}),"\n",(0,l.jsx)(n.li,{children:"Multi-Value is not a substitute for having an ELB"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"record",children:"Record"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"How you want to route traffic for a domain"}),"\n",(0,l.jsxs)(n.li,{children:["Each record contains:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Domain/subdomain Name \u2013 e.g., example.com"}),"\n",(0,l.jsx)(n.li,{children:"Record Type \u2013 e.g., A or AAAA"}),"\n",(0,l.jsx)(n.li,{children:"Value \u2013 e.g., 12.34.56.78"}),"\n",(0,l.jsx)(n.li,{children:"Routing Policy \u2013 how Route 53 responds to queries"}),"\n",(0,l.jsx)(n.li,{children:"TTL \u2013 amount of time the record cached at DNS Resolvers"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Route 53 supports the following DNS record types:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"(must know) A / AAAA / CNAME / NS"}),"\n",(0,l.jsx)(n.li,{children:"(advanced) CAA / DS / MX / NAPTR / PTR / SOA / TXT / SPF / SRV"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"record-types",children:"Record Types"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A \u2013 maps a hostname to IPv4"}),"\n",(0,l.jsx)(n.li,{children:"AAAA \u2013 maps a hostname to IPv6"}),"\n",(0,l.jsxs)(n.li,{children:["CNAME \u2013 maps a hostname to another hostname","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The target is a domain name which must have an A or AAAA record"}),"\n",(0,l.jsx)(n.li,{children:"Can\u2019t create a CNAME record for the top node of a DNS namespace (Zone Apex)"}),"\n",(0,l.jsxs)(n.li,{children:["Example: you can\u2019t create for example.com, but you can create for ",(0,l.jsx)(n.a,{href:"http://www.example.com",children:"www.example.com"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["NS \u2013 Name Servers for the Hosted Zone","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Control how traffic is routed for a domain"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"hosted-zone",children:"Hosted Zone"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A container for records that define how to route traffic to a domain and its subdomains"}),"\n",(0,l.jsx)(n.li,{children:"Public Hosted Zones \u2013 contains records that specify how to route traffic on the Internet (public domain names)application1.mypublicdomain.com"}),"\n",(0,l.jsx)(n.li,{children:"Private Hosted Zones \u2013 contain records that specify how you route traffic within one or more VPCs (private domain names)application1.company.internal"}),"\n",(0,l.jsxs)(n.li,{children:["You pay $0.50 per month per hosted zone\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(93014).A+"",width:"1373",height:"729"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"record-ttltime-to-live",children:"Record TTL(Time To Live)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"High TTL \u2013 e.g., 24 hr"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Less traffic on Route 53"}),"\n",(0,l.jsx)(n.li,{children:"Possibly outdated records"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Low TTL \u2013 e.g., 60 sec."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"More traffic on Route 53 ($$)"}),"\n",(0,l.jsx)(n.li,{children:"Records are outdated for less time"}),"\n",(0,l.jsx)(n.li,{children:"Easy to change records"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Except for Alias records, TTL is mandatory for each DNS record\n",(0,l.jsx)(n.img,{alt:"img.png",src:i(65671).A+"",width:"764",height:"514"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"cname-vs-alias",children:"CNAME vs Alias"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["AWS Resources (Load Balancer, CloudFront...) expose an AWS hostname:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"lb1-1234.us-east-2.elb.amazonaws.com and you want myapp.mydomain.com"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["CNAME:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Points a hostname to any other hostname. (app.mydomain.com => blabla.anything.com)"}),"\n",(0,l.jsx)(n.li,{children:"ONLY FOR NON ROOT DOMAIN (aka. something.mydomain.com)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Alias:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Points a hostname to an AWS Resource (app.mydomain.com => blabla.amazonaws.com)"}),"\n",(0,l.jsx)(n.li,{children:"Works for ROOT DOMAIN and NON ROOT DOMAIN (aka mydomain.com)"}),"\n",(0,l.jsx)(n.li,{children:"Free of charge"}),"\n",(0,l.jsx)(n.li,{children:"Native health check"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"alias-record",children:"Alias Record"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(7723).A+"",width:"554",height:"637"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Maps a hostname to an AWS resource"}),"\n",(0,l.jsx)(n.li,{children:"An extension to DNS functionality"}),"\n",(0,l.jsx)(n.li,{children:"Automatically recognizes changes in the resource\u2019s IP addresses"}),"\n",(0,l.jsxs)(n.li,{children:["Unlike CNAME, it can be used for the top node of a DNS namespace (Zone Apex), e.g.",":example",".com"]}),"\n",(0,l.jsx)(n.li,{children:"Alias Record is always of type A/AAAA for AWS resources (IPv4 / IPv6)"}),"\n",(0,l.jsx)(n.li,{children:"You can\u2019t set the TTL"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"alias-record-target",children:"Alias Record Target"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Elastic Load Balancers"}),"\n",(0,l.jsx)(n.li,{children:"CloudFront Distributions"}),"\n",(0,l.jsx)(n.li,{children:"API Gateway"}),"\n",(0,l.jsx)(n.li,{children:"Elastic Beanstalk environments"}),"\n",(0,l.jsx)(n.li,{children:"S3 Websites"}),"\n",(0,l.jsx)(n.li,{children:"VPC Interface Endpoints"}),"\n",(0,l.jsx)(n.li,{children:"Global Accelerator accelerator"}),"\n",(0,l.jsx)(n.li,{children:"Route 53 record in the same hosted zone"}),"\n",(0,l.jsx)(n.li,{children:"You cannot set an ALIAS record for an EC2 DNS name"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"health-checks",children:"Health Checks"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(88154).A+"",width:"541",height:"700"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"HTTP Health Checks are only for public resources"}),"\n",(0,l.jsx)(n.li,{children:"Health Check => Automated DNS Failover:"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Health checks that monitor an endpoint(application, server, other AWS resource)"}),"\n",(0,l.jsx)(n.li,{children:"Health checks that monitor other health checks (Calculated Health Checks)"}),"\n",(0,l.jsx)(n.li,{children:"Health checks that monitor CloudWatch Alarms (full control !!) \u2013 e.g., throttles of DynamoDB, alarms on RDS, custom metrics, ... (helpful for private resources)"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Health Checks are integrated with CW metrics"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"health-check-types",children:"Health Check Types"}),"\n",(0,l.jsx)(n.h3,{id:"health-check---monitoring-endpoint",children:"Health Check - Monitoring Endpoint"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(531).A+"",width:"543",height:"661"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["About 15 global health checkers will check the endpoint health","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Healthy/Unhealthy Threshold \u2013 3 (default)"}),"\n",(0,l.jsx)(n.li,{children:"Interval \u2013 30 sec (can set to 10 sec \u2013 higher cost)"}),"\n",(0,l.jsx)(n.li,{children:"Supported protocol: HTTP, HTTPS and TCP"}),"\n",(0,l.jsx)(n.li,{children:"If > 18% of health checkers report the endpoint is healthy, Route 53 considers it Healthy. Otherwise, it\u2019s Unhealthy"}),"\n",(0,l.jsx)(n.li,{children:"Ability to choose which locations you want Route 53 to use"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Health Checks pass only when the endpoint responds with the 2xx and 3xx status codes"}),"\n",(0,l.jsx)(n.li,{children:"Health Checks can be setup to pass / fail based on the text in the first 5120 bytes of the response"}),"\n",(0,l.jsx)(n.li,{children:"Configure you router/firewall to allow incoming requests from Route 53 health checkers"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"calculated-health-checks",children:"Calculated Health Checks"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(93099).A+"",width:"474",height:"624"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Combine the results of multiple Health Checks into a single Health Check"}),"\n",(0,l.jsx)(n.li,{children:"You can use OR, AND, or NOT"}),"\n",(0,l.jsx)(n.li,{children:"Can monitor up to 256 Child Health Checks"}),"\n",(0,l.jsx)(n.li,{children:"Specify how many of the health checks need to pass to make the parent pass"}),"\n",(0,l.jsx)(n.li,{children:"Usage: perform maintenance to your website without causing all health checks to fail"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"health-check---private-hosted-zone",children:"Health Check - Private Hosted Zone"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img.png",src:i(6856).A+"",width:"560",height:"550"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Route 53 health checkers are outside the VPC"}),"\n",(0,l.jsx)(n.li,{children:"They can\u2019t access private endpoints(private VPC or on-premises resource)"}),"\n",(0,l.jsx)(n.li,{children:"You can create a CloudWatch Metric and associate a CloudWatch Alarm, then create a Health Check that checks the alarm itself"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},73873:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/DNS-diagram-064f051e99bc0a81d89b3548386e7eff.png"},65671:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/TTL-ab9c3ca778bcc3f14c3a9f54da38b547.png"},93099:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/calculate-health-check-72d01c808ccd365f9a26a101161eda57.png"},47848:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/fail-over-1e1b0b22173f44b48a9dc75ee08c7b2c.png"},25018:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/geo-1-f542f102e03a3936a82fc810bbdf2060.png"},49681:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/geo-2-85ac0da907b91df21ab3540f3a21d49e.png"},531:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/health-check-2-f13f913bd8b6af8bbc6e02ffd56716b2.png"},88154:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/health-check-4154547078c60834f9691749d54acf75.png"},93014:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/host-zone-efcea9174e233074e6d6231632829a2b.png"},64981:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ip-base-routing-a33392c5a06f8cbf1a84e06aa2d99f2a.png"},6856:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/private-host-zone-1448414b9685ddefb04625dc875cc868.png"},7723:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/route53-alias-a201359797483c16ad0e4702f8bcfa18.png"},34960:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/route53-diagram-3922390a7845faad69cf85baeff3fec0.png"},63020:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/route53-policy1-b9a124b3a0c3d68ddf67ec124560de81.png"},82023:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/route53-policy2-765f8886a925794e57c3259b04c9da90.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);