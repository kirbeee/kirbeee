"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[7548],{7437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"AWS/Compute Service/Lightsail","title":"\u30e9\u30a4\u30c8\u30bb\u30a4\u30eb","description":"- \u4eee\u60f3\u30b5\u30fc\u30d0\u30fc\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Compute Service/Lightsail.md","sourceDirName":"AWS/Compute Service","slug":"/AWS/Compute Service/Lightsail","permalink":"/kirbeee/ja-JP/docs/AWS/Compute Service/Lightsail","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u30e9\u30a4\u30c8\u30bb\u30a4\u30eb"},"sidebar":"docs","previous":{"title":"\u30e9\u30e0\u30c0","permalink":"/kirbeee/ja-JP/docs/AWS/Compute Service/Lambda"},"next":{"title":"amazon-athena","permalink":"/kirbeee/ja-JP/docs/AWS/Database/Athena"}}');var r=t(4848),s=t(8453);const c={title:"\u30e9\u30a4\u30c8\u30bb\u30a4\u30eb"},o="\u30a2\u30de\u30be\u30f3\u30e9\u30a4\u30c8",l={},a=[];function d(e){const n={h1:"h1",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u30a2\u30de\u30be\u30f3\u30e9\u30a4\u30c8",children:"\u30a2\u30de\u30be\u30f3\u30e9\u30a4\u30c8"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4eee\u60f3\u30b5\u30fc\u30d0\u30fc\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}),"\n",(0,r.jsx)(n.li,{children:"\u4f4e\u304f\u4e88\u6e2c\u53ef\u80fd\u306a\u4fa1\u683c"}),"\n",(0,r.jsx)(n.li,{children:"EC2, RDS, ELB, EBS, Route 53..."}),"\n",(0,r.jsx)(n.li,{children:"\u96f2\u304c\u5c11\u306a\u3044\u4eba\u306b\u6700\u9069\u3067\u3059!"}),"\n",(0,r.jsx)(n.li,{children:"\u30e9\u30a4\u30c8\u30bb\u30a4\u30eb\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u901a\u77e5\u3068\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30b7\u30f3\u30d7\u30eb\u306aWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 (LAMP\u3001Nginx\u3001MEAN\u3001Node.js\u7528\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u3042\u308a\u307e\u3059...)"}),"\n",(0,r.jsx)(n.li,{children:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8 (WordPress\u7528\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3001Magento\u3001Plesk \u3001Joomla)"}),"\n",(0,r.jsx)(n.li,{children:"\u958b\u767a/\u30c6\u30b9\u30c8\u74b0\u5883"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u9ad8\u53ef\u7528\u6027\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306f\u3042\u308a\u307e\u305b\u3093\u3002AWS\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);