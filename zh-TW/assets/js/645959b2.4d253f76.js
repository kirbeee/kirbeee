"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[5481],{6076:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"AWS/Global Infrastruture/CloudFront","title":"\u4e91\u53f0","description":"- \u5185\u5bb9\u53d1\u9001\u7f51\u7edc (CDN)","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/AWS/Global Infrastruture/CloudFront.md","sourceDirName":"AWS/Global Infrastruture","slug":"/AWS/Global Infrastruture/CloudFront","permalink":"/kirbeee/zh-TW/docs/AWS/Global Infrastruture/CloudFront","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4e91\u53f0"},"sidebar":"docs","previous":{"title":"\u5f39\u6027\u8d1f\u8f7d\u5747\u8861\u548c\u81ea\u52a8\u7f29\u653e\u7ec4","permalink":"/kirbeee/zh-TW/docs/AWS/ELB & ASG/Introduction"},"next":{"title":"\u8fb9\u7f18\u4f4d\u7f6e","permalink":"/kirbeee/zh-TW/docs/AWS/Global Infrastruture/EdgeLocation"}}');var r=l(4848),s=l(8453);const t={title:"\u4e91\u53f0"},d="\u4e91\u524d\u53f0\u6982\u8ff0",c={},o=[{value:"S3 \u6876\u6570",id:"s3-\u6876\u6570",level:2},{value:"\u81ea\u5b9a\u4e49\u6765\u6e90 (HTTP)",id:"\u81ea\u5b9a\u4e49\u6765\u6e90-http",level:2},{value:"\u4e91\u7aef\u524d\u53f0\uff1a",id:"\u4e91\u7aef\u524d\u53f0",level:2},{value:"S3 \u8de8\u533a\u57df\u590d\u5236\uff1a",id:"s3-\u8de8\u533a\u57df\u590d\u5236",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4e91\u524d\u53f0\u6982\u8ff0",children:"\u4e91\u524d\u53f0\u6982\u8ff0"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5185\u5bb9\u53d1\u9001\u7f51\u7edc (CDN)"}),"\n",(0,r.jsx)(n.li,{children:"\u6539\u8fdb\u8bfb\u53d6\u6027\u80fd\uff0c\u5185\u5bb9\u7f13\u5b58\u5728\u8fb9\u7f18\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u6539\u5584\u7528\u6237\u4f53\u9a8c"}),"\n",(0,r.jsx)(n.li,{children:"216 \u5168\u5c40\u5b58\u5728\u70b9 (\u8fb9\u7f18\u4f4d\u7f6e)"}),"\n",(0,r.jsx)(n.li,{children:"DDoS \u4fdd\u62a4 (\u56e0\u4e3a\u4e16\u754c\u8303\u56f4)\uff0c\u4e0e Shield, AWS Web \u5e94\u7528\u7a0b\u5e8f\u9632\u706b\u5899"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u6765\u6e90",children:"\u6765\u6e90"}),"\n",(0,r.jsx)(n.h2,{id:"s3-\u6876\u6570",children:"S3 \u6876\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u5206\u53d1\u6587\u4ef6\u5e76\u7f13\u5b58\u5230\u8fb9\u7f18"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 CloudFront \u6e90\u8bbf\u95ee\u63a7\u5236 (OAC) \u52a0\u5f3a\u5b89\u5168"}),"\n",(0,r.jsx)(n.li,{children:"OAC \u6b63\u5728\u66ff\u6362\u539f\u59cb\u8bbf\u95ee\u8eab\u4efd(OAl)"}),"\n",(0,r.jsx)(n.li,{children:"CloudFront \u53ef\u4ee5\u7528\u4f5c\u5bfc\u5165\u5668 (\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230 S3)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6765\u6e90-http",children:"\u81ea\u5b9a\u4e49\u6765\u6e90 (HTTP)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5e94\u7528\u7a0b\u5e8f\u8d1f\u8f7d\u5747\u8861\u5668"}),"\n",(0,r.jsx)(n.li,{children:"EC2 instance"}),"\n",(0,r.jsx)(n.li,{children:"S3\u7f51\u7ad9 (\u5fc5\u987b\u9996\u5148\u542f\u7528\u5c06\u6876\u4f5c\u4e3a\u9759\u6001S3\u7f51\u7ad9)"}),"\n",(0,r.jsx)(n.li,{children:"\u4efb\u4f55\u60a8\u60f3\u8981\u7684 HTTP \u540e\u7aef"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u4e91\u7aef\u9ad8\u7ea7",children:"\u4e91\u7aef\u9ad8\u7ea7"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CloudFront",src:l(8676).A+"",width:"3486",height:"1526"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example:\n",(0,r.jsx)(n.img,{alt:"CloudFront",src:l(4231).A+"",width:"3042",height:"1670"})]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u4e91\u7aef\u4e0es3\u4ea4\u53c9\u533a\u57df\u590d\u5236\u64cd\u4f5c",children:"\u4e91\u7aef\u4e0eS3\u4ea4\u53c9\u533a\u57df\u590d\u5236\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e91\u7aef\u524d\u53f0",children:"\u4e91\u7aef\u524d\u53f0\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5168\u5c40\u8fb9\u7f18\u7f51\u7edc"}),"\n",(0,r.jsx)(n.li,{children:"TTL\u6587\u4ef6\u5df2\u7f13\u5b58(\u53ef\u80fd\u662f\u4e00\u5929)"}),"\n",(0,r.jsx)(n.li,{children:"\u975e\u5e38\u9002\u5408\u9759\u6001\u5185\u5bb9\uff0c\u5fc5\u987b\u968f\u65f6\u968f\u5730\u53ef\u7528"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"s3-\u8de8\u533a\u57df\u590d\u5236",children:"S3 \u8de8\u533a\u57df\u590d\u5236\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5fc5\u987b\u4e3a\u60a8\u60f3\u8981\u590d\u5236\u7684\u6bcf\u4e2a\u533a\u57df\u8bbe\u7f6e"}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u4ef6\u5728\u8fd1\u5b9e\u65f6\u66f4\u65b0"}),"\n",(0,r.jsx)(n.li,{children:"\u53ea\u8bfb"}),"\n",(0,r.jsx)(n.li,{children:"\u6781\u597d\u7684\u52a8\u6001\u5185\u5bb9\u9700\u8981\u5728\u4f4e\u5ef6\u8fdf\u72b6\u6001\u4e0b\u624d\u80fd\u4f7f\u7528"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4231:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/Cloudfront-example-42827c8bef16a125e2e8794cfa94b063.png"},8676:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/Cloudfront-high-level-8282512b4979b4dfaddc2dfef6f7e433.png"},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>d});var i=l(6540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);