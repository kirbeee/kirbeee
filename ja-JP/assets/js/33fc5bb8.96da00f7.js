"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[867],{778:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(6540);var a=s(4164),n=s(1213),r=s(7559),o=s(6461),i=s(8774),l=s(4096),h=s(8027),u=s(7713),g=s(1463),c=s(3892),p=s(6913),d=s(4848);function m(e){let{author:t}=e;const s=(0,o.wI)(t);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.be,{title:s}),(0,d.jsx)(g.A,{tag:"blog_authors_posts"})]})}function b(){const{authorsListPath:e}=(0,l.x)();return(0,d.jsx)(i.A,{href:e,children:(0,d.jsx)(o.np,{})})}function x(e){let{author:t,items:s,sidebar:a,listMetadata:n}=e;return(0,d.jsxs)(h.A,{sidebar:a,children:[(0,d.jsxs)("header",{className:"margin-bottom--xl",children:[(0,d.jsx)(p.A,{as:"h1",author:t}),t.description&&(0,d.jsx)("p",{children:t.description}),(0,d.jsx)(b,{})]}),0===s.length?(0,d.jsx)("p",{children:(0,d.jsx)(o.Y4,{})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("hr",{}),(0,d.jsx)(c.A,{items:s}),(0,d.jsx)(u.A,{metadata:n})]})]})}function j(e){return(0,d.jsxs)(n.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,d.jsx)(m,{...e}),(0,d.jsx)(x,{...e})]})}},7713:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(1312),n=s(9022),r=s(4848);function o(e){const{metadata:t}=e,{previousPage:s,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,r.jsx)(n.A,{permalink:s,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,r.jsx)(n.A,{permalink:o,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(4096),n=s(2907),r=s(4848);function o(e){let{items:t,component:s=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)(s,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6461:(e,t,s)=>{s.d(t,{Y4:()=>g,ZD:()=>i,np:()=>u,uz:()=>h,wI:()=>l});s(6540);var a=s(1312),n=s(5846),r=s(4848);function o(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=o();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){const t=o();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const h=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function u(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function g(){return(0,r.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);