"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[9130],{2179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"AWS/Deployment & managing/CodeArtifact","title":"\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8","description":"- \u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u4e92\u3044\u306b\u4f9d\u5b58\u3057(\u30b3\u30fc\u30c9\u4f9d\u5b58\u6027\u3068\u3082\u547c\u3070\u308c\u307e\u3059)\u3001\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/AWS/Deployment & managing/CodeArtifact.md","sourceDirName":"AWS/Deployment & managing","slug":"/AWS/Deployment & managing/CodeArtifact","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/CodeArtifact","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8"},"sidebar":"docs","previous":{"title":"\u30b3\u30fc\u30c9\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/Code-Deployment"},"next":{"title":"CodeBuild","permalink":"/kirbeee/ja-JP/docs/AWS/Deployment & managing/CodeBuild"}}');var r=t(4848),o=t(8453);const a={title:"\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8"},s="\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8",c={},l=[];function d(e){const n={h1:"h1",header:"header",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8",children:"\u30b3\u30fc\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u4e92\u3044\u306b\u4f9d\u5b58\u3057(\u30b3\u30fc\u30c9\u4f9d\u5b58\u6027\u3068\u3082\u547c\u3070\u308c\u307e\u3059)\u3001\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u3053\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u4fdd\u5b58\u3068\u53d6\u5f97\u306f\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u7ba1\u7406\u3068\u547c\u3070\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f1d\u7d71\u7684\u306b\u3001\u72ec\u81ea\u306e\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"CodeArtifact\u306f\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u306e\u305f\u3081\u306e\u5b89\u5168\u3067\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u3067\u8cbb\u7528\u5bfe\u52b9\u679c\u306e\u9ad8\u3044\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u7ba1\u7406\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Maven\u3001Gradle\u3001npm\u3001yarn\u3001twine\u3001pip\u3001NuGet\u306a\u3069\u306e\u4e00\u822c\u7684\u306a\u4f9d\u5b58\u95a2\u4fc2\u7ba1\u7406\u30c4\u30fc\u30eb\u3067\u52d5\u4f5c\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u958b\u767a\u8005\u3068CodeBuild\u306fCodeArtifact\u304b\u3089\u4f9d\u5b58\u95a2\u4fc2\u3092\u76f4\u63a5\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);