"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3882],{3068:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"AWS/Security & Compliance/DDoS-protect","title":"DDoS\u4fdd\u8b77(\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426)","description":"DDoS","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Security & Compliance/DDoS-protect.md","sourceDirName":"AWS/Security & Compliance","slug":"/AWS/Security & Compliance/DDoS-protect","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/DDoS-protect","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DDoS\u4fdd\u8b77(\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426)"},"sidebar":"docs","previous":{"title":"\u8a2d\u5b9a","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/Config"},"next":{"title":"Detective","permalink":"/kirbeee/ja-JP/docs/AWS/Security & Compliance/Detective"}}');var c=i(4848),t=i(8453);const r={title:"DDoS\u4fdd\u8b77(\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426)"},s="AWS\u4e0a\u3067DDoS\u4fdd\u8b77(\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426)",d={},o=[{value:"AWS Shield Standard:",id:"aws-shield-standard",level:2},{value:"AWS Shield Advanced:",id:"aws-shield-advanced",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"aws\u4e0a\u3067ddos\u4fdd\u8b77\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426",children:"AWS\u4e0a\u3067DDoS\u4fdd\u8b77(\u5206\u6563\u30b5\u30fc\u30d3\u30b9\u62d2\u5426)"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"DDoS",src:i(5864).A+"",width:"2170",height:"780"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"AWS Shield Standard: \u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eDDOS\u653b\u6483\u304b\u3089\u4fdd\u8b77\u3001\u8ffd\u52a0\u8cbb\u7528\u306a\u3057\u3067\u3059\u3079\u3066\u306e\u304a\u5ba2\u69d8\u3002"}),"\n",(0,c.jsx)(n.li,{children:"AWS Shield Advanced: 24/7 \u30d7\u30ec\u30df\u30a2\u30e0 DDoS \u4fdd\u8b77"}),"\n",(0,c.jsx)(n.li,{children:"AWS WAF: \u30eb\u30fc\u30eb\u306b\u57fa\u3065\u3044\u3066\u7279\u5b9a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30d5\u30a3\u30eb\u30bf\u30fc"}),"\n",(0,c.jsxs)(n.li,{children:["\u96f2\u524d\u3068\u56fd\u905353\u53f7:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30c3\u30b8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3057\u305f\u53ef\u7528\u6027\u4fdd\u8b77"}),"\n",(0,c.jsx)(n.li,{children:"AWS Shield \u3068\u7d44\u307f\u5408\u308f\u305b\u308b\u3068\u3001\u30a8\u30c3\u30b8\u3067\u653b\u6483\u7de9\u548c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u30b9\u30b1\u30fc\u30eb\u306e\u6e96\u5099\u3092\u3057\u3088\u3046 - AWS Auto Scaling\u3092\u6d3b\u7528\u3059\u308b"}),"\n"]}),"\n",(0,c.jsx)(n.h1,{id:"\u30b7\u30fc\u30eb\u30c9",children:"\u30b7\u30fc\u30eb\u30c9"}),"\n",(0,c.jsx)(n.h2,{id:"aws-shield-standard",children:"AWS Shield Standard:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u3059\u3079\u3066\u306eAWS\u9867\u5ba2\u306b\u5bfe\u3057\u3066\u6709\u52b9\u5316\u3055\u308c\u305f\u7121\u6599\u30b5\u30fc\u30d3\u30b9"}),"\n",(0,c.jsx)(n.li,{children:"SYN/UDP \u6d2a\u6c34\u3001\u30ea\u30d5\u30ec\u30af\u30b7\u30e7\u30f3\u653b\u6483\u3001\u305d\u306e\u4ed6\u306e\u30ec\u30a4\u30e4 3/Layer 4 \u653b\u6483\u306a\u3069\u306e\u653b\u6483\u304b\u3089\u4fdd\u8b77\u3057\u307e\u3059"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"aws-shield-advanced",children:"AWS Shield Advanced:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e DDoS \u8efd\u6e1b\u30b5\u30fc\u30d3\u30b9(\u7d44\u7e54\u3042\u305f\u308a\u6708\u984d$ 3,000)"}),"\n",(0,c.jsx)(n.li,{children:"Amazon EC2\u3001Elastic Load Balancing(ELB)\u3001Amazon CloudFront\u3001AWS Global Accelerator\u3001Route 53\u306b\u5bfe\u3059\u308b\u3088\u308a\u9ad8\u5ea6\u306a\u653b\u6483\u304b\u3089\u4fdd\u8b77"}),"\n",(0,c.jsx)(n.li,{children:"AWS DDoS\u30ec\u30b9\u30dd\u30f3\u30b9\u30c1\u30fc\u30e0(DRP)\u3078\u306e2417\u30a2\u30af\u30bb\u30b9"}),"\n",(0,c.jsx)(n.li,{children:"DDoS\u306b\u3088\u308b\u4f7f\u7528\u30b9\u30d1\u30a4\u30af\u306e\u5897\u52a0\u6642\u306b\u9ad8\u984d\u306a\u624b\u6570\u6599\u304b\u3089\u4fdd\u8b77"}),"\n"]}),"\n",(0,c.jsx)(n.h1,{id:"waf-web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb",children:"WAF (Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb)"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4e00\u822c\u7684\u306a\u30a6\u30a7\u30d6\u30a8\u30af\u30b9\u30d7\u30ed\u30a4\u30c8\u304b\u3089\u4fdd\u8b77\u3057\u307e\u3059\uff08\u30ec\u30a4\u30e4 7\uff09"}),"\n",(0,c.jsx)(n.li,{children:"\u30ec\u30a4\u30e4 7 \u306f HTTP \u3067\u3059(\u30ec\u30a4\u30e4 4 \u306f TCP)"}),"\n",(0,c.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3001API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3001CloudFront\u3078\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,c.jsxs)(n.li,{children:["Web ACL (Web \u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30ea\u30b9\u30c8)\u3092\u5b9a\u7fa9:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30eb\u30fc\u30eb\u306b\u306f\u3001IP \u30a2\u30c9\u30ec\u30b9\u3001HTTP \u30d8\u30c3\u30c0\u30fc\u3001HTTP \u672c\u6587\u3001\u307e\u305f\u306f URI \u6587\u5b57\u5217\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4e00\u822c\u7684\u306a\u653b\u6483\u304b\u3089\u4fdd\u8b77 - SQL\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u3068\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30fb\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0(XSS)"}),"\n",(0,c.jsx)(n.li,{children:"\u30b5\u30a4\u30ba\u5236\u7d04\u3001\u30b8\u30aa\u30de\u30c3\u30c1\uff08\u30d6\u30ed\u30c3\u30af\u306e\u56fd\uff09"}),"\n",(0,c.jsx)(n.li,{children:"\u30ec\u30fc\u30c8\u30d9\u30fc\u30b9\u306e\u30eb\u30fc\u30eb (\u30a4\u30d9\u30f3\u30c8\u306e\u767a\u751f\u56de\u6570\u3092\u30ab\u30a6\u30f3\u30c8\u3059\u308b) - DDoS\u4fdd\u8b77"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},5864:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/DDoS-protect-033d578fc70c2d45c5cac21ab166be49.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var l=i(6540);const c={},t=l.createContext(c);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);