"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[4212],{217:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(6540);var a=s(4164),r=s(8207),o=s(204),l=s(1926),u=s(569),n=s(7220),i=s(9303),c=s(5921);const h={authorListItem:"authorListItem_n3yI"};var g=s(4848);function p(e){let{author:t}=e;return(0,g.jsx)("li",{className:h.authorListItem,children:(0,g.jsx)(c.A,{as:"h2",author:t,count:t.count})})}function d(e){let{authors:t}=e;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",h.authorsListSection),children:(0,g.jsx)("ul",{children:t.map((e=>(0,g.jsx)(p,{author:e},e.key)))})})}function m(e){let{authors:t,sidebar:s}=e;const c=(0,l.uz)();return(0,g.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogAuthorsListPage),children:[(0,g.jsx)(r.be,{title:c}),(0,g.jsx)(n.A,{tag:"blog_authors_list"}),(0,g.jsxs)(u.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:c}),(0,g.jsx)(d,{authors:t})]})]})}},1926:(e,t,s)=>{s.d(t,{ZD:()=>l,uz:()=>u});s(6540);var a=s(539),r=s(1430);s(4848);function o(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=o();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const u=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})}}]);