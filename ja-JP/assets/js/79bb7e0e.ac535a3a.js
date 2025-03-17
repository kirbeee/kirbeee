"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3510],{45535:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"AWS/Global Infrastruture/CloudFront","title":"CloudFront","description":"- Content Delivery Network (CDN)","source":"@site/docs/AWS/Global Infrastruture/CloudFront.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/CloudFront","permalink":"/kirbeee/ja-JP/docs/AWS/Global Infrastruture/CloudFront","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/kirbeee/docs/AWS/Global Infrastruture/CloudFront.md","tags":[],"version":"current","lastUpdatedBy":"kirbeee","lastUpdatedAt":1742204848000,"frontMatter":{"title":"CloudFront"},"sidebar":"docs","previous":{"title":"Elastic Load Balancer & Auto Scaling Group","permalink":"/kirbeee/ja-JP/docs/AWS/ELB & ASG/Introduction"},"next":{"title":"Edge Location","permalink":"/kirbeee/ja-JP/docs/AWS/Global Infrastruture/EdgeLocation"}}');var r=i(74848),o=i(28453);const l={title:"CloudFront"},s="CloudFront Overview",a={},c=[{value:"S3 bucket",id:"s3-bucket",level:2},{value:"Custom Origin (HTTP)",id:"custom-origin-http",level:2},{value:"CloudFront:",id:"cloudfront",level:2},{value:"S3 Cross Region Replication:",id:"s3-cross-region-replication",level:2},{value:"ALB or EC2 as an origin",id:"alb-or-ec2-as-an-origin",level:2},{value:"CloudFront Geo Restriction",id:"cloudfront-geo-restriction",level:2},{value:"CloudFront - Pricing",id:"cloudfront---pricing",level:2},{value:"Cache Invalidations",id:"cache-invalidations",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cloudfront-overview",children:"CloudFront Overview"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Content Delivery Network (CDN)"}),"\n",(0,r.jsx)(n.li,{children:"Improves read performance, content is cached at the edge"}),"\n",(0,r.jsx)(n.li,{children:"Improves users experience"}),"\n",(0,r.jsx)(n.li,{children:"216 Point of Presence globally (edge locations)"}),"\n",(0,r.jsx)(n.li,{children:"DDoS protection (because worldwide), integration with Shield, AWS Web Application Firewall"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"origins",children:"Origins"}),"\n",(0,r.jsx)(n.h2,{id:"s3-bucket",children:"S3 bucket"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For distributing files and caching them at the edge"}),"\n",(0,r.jsx)(n.li,{children:"Enhanced security with CloudFront Origin Access Control (OAC)"}),"\n",(0,r.jsx)(n.li,{children:"OAC is replacing Origin Access Identity (OAl)"}),"\n",(0,r.jsx)(n.li,{children:"CloudFront can be used as an ingress (to upload files to S3)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"custom-origin-http",children:"Custom Origin (HTTP)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Application Load Balancer"}),"\n",(0,r.jsx)(n.li,{children:"EC2 instance"}),"\n",(0,r.jsx)(n.li,{children:"S3 website (must first enable the bucket as a static S3 website)"}),"\n",(0,r.jsx)(n.li,{children:"Any HTTP backend you want"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"cloudfront-at-a-high-level",children:"Cloudfront at a high level"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CloudFront",src:i(62375).A+"",width:"3486",height:"1526"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example:\n",(0,r.jsx)(n.img,{alt:"CloudFront",src:i(4042).A+"",width:"3042",height:"1670"})]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"cloudfront-vs-s3-cross-region-replication",children:"Cloudfront vs. S3 Cross Region Replication"}),"\n",(0,r.jsx)(n.h2,{id:"cloudfront",children:"CloudFront:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Global Edge network"}),"\n",(0,r.jsx)(n.li,{children:"Files are cached for a TTL (maybe a day)"}),"\n",(0,r.jsx)(n.li,{children:"Great for static content that must be available everywhere"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"s3-cross-region-replication",children:"S3 Cross Region Replication:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Must be setup for each region you want replication to happen"}),"\n",(0,r.jsx)(n.li,{children:"Files are updated in near real-time"}),"\n",(0,r.jsx)(n.li,{children:"Read only"}),"\n",(0,r.jsx)(n.li,{children:"Great for dynamic content that needs to be available at low-latency in few"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"alb-or-ec2-as-an-origin",children:"ALB or EC2 as an origin"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:i(18453).A+"",width:"1329",height:"592"})}),"\n",(0,r.jsx)(n.h2,{id:"cloudfront-geo-restriction",children:"CloudFront Geo Restriction"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You can restrict who can access your distribution"}),"\n",(0,r.jsx)(n.li,{children:"Allowlist: Allow your users to access your content only if they're in one of the countries on a list of approved countries."}),"\n",(0,r.jsx)(n.li,{children:"Blocklist: Prevent your users from accessing your content if they're in one of the countries on a list of banned countries."}),"\n",(0,r.jsx)(n.li,{children:"The \u201ccountry\u201d is determined using a 3rd party Geo-IP database"}),"\n",(0,r.jsx)(n.li,{children:"Use case: Copyright Laws to control access to content"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cloudfront---pricing",children:"CloudFront - Pricing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CloudFront Edge locations are all around the world"}),"\n",(0,r.jsxs)(n.li,{children:["The cost of data out per edge location varies\n",(0,r.jsx)(n.img,{alt:"img.png",src:i(310).A+"",width:"1093",height:"426"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cache-invalidations",children:"Cache Invalidations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In case you update the back-end origin, CloudFront doesn\u2019t know about it and will only get the refreshed content after the TTL has expired"}),"\n",(0,r.jsx)(n.li,{children:"However, you can force an entire or partial cache refresh (thus bypassing the TTL) by performing a CloudFront Invalidation"}),"\n",(0,r.jsxs)(n.li,{children:["You can invalidate all files (",(0,r.jsx)(n.em,{children:") or a special path (/images/"}),")\n",(0,r.jsx)(n.img,{alt:"img.png",src:i(11308).A+"",width:"648",height:"673"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},18453:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ALB-EC2-6892235b906fe26d5724a6827ecc8606.png"},4042:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Cloudfront-example-42827c8bef16a125e2e8794cfa94b063.png"},62375:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Cloudfront-high-level-8282512b4979b4dfaddc2dfef6f7e433.png"},11308:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cache-invalidation-3b6571d9a5861f8d8b0a021bb629f9ae.png"},310:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cloudfront-pricing-69b62dd284a9d439643a130926e97450.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var t=i(96540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);