import{a as $,b as k,c as w,d as N,e as u,f as S,g as A,h as g,i as L,j as h,k as v,l as D,m as R,n as B,o as F,p as T,r as M,s as C,t as E,u as K,v as O,x as _,z as U}from"/myst_assets_folder/_shared/chunk-LHRHUJ2L.js";import{a as Q}from"/myst_assets_folder/_shared/chunk-F54WYA2H.js";import{m as H,o as G}from"/myst_assets_folder/_shared/chunk-MJFQO7Q4.js";import{a as X,h as y,m as P}from"/myst_assets_folder/_shared/chunk-NUFN4NRB.js";import{e as p}from"/myst_assets_folder/_shared/chunk-RAQ24GF6.js";var z={rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",integrity:"sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ",crossOrigin:"anonymous"};var d=p(X(),1);function V({title:t,titleId:o,...r},n){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":o},r),t?d.createElement("title",{id:o},t):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))}var Y=d.forwardRef(V),b=Y;var I=p($());var J=p(Q());var e=p(P()),fe=t=>{var n,i,a;let o=(i=(n=t.parentsData)==null?void 0:n.root)==null?void 0:i.config,r=t.data;return!o||!r||!r.frontmatter?{}:U({origin:"",url:t.location.pathname,title:`${r.frontmatter.title} - ${o==null?void 0:o.title}`,description:r.frontmatter.description,image:(a=r.frontmatter.thumbnailOptimized||r.frontmatter.thumbnail)!=null?a:void 0})},pe=()=>[z];function W({children:t}){return(0,e.jsx)(A,{children:(0,e.jsx)(L,{children:(0,e.jsx)(w,{gridSystem:"article-left-grid",children:(0,e.jsx)("article",{className:"article content article-left-grid subgrid-gap",children:t})})})})}function q(t){switch(t){case"pdf":return"PDF";case"meca":return"MECA";case"xml":return"JATS";default:break}return t}function Z(){var n,i,a,s,c;let t=g(),o=(n=t==null?void 0:t.projects)==null?void 0:n[0],r=[...(i=o==null?void 0:o.exports)!=null?i:[],...(c=(s=(a=o==null?void 0:o.pages)==null?void 0:a[0])==null?void 0:s.exports)!=null?c:[]];return r.length===0?null:(0,e.jsx)("div",{className:"col-margin mt-3 lg:mt-0 lg:w-[350px] lg:self-center",children:(0,e.jsx)("div",{className:"flex flex-col gap-2 w-fit lg:m-auto",children:r.map(l=>(0,e.jsxs)("a",{href:l.url,className:"inline-block mr-2 no-underline lg:mr-0 lg:block",children:[(0,e.jsx)(b,{width:"1.5rem",height:"1.5rem",className:"inline h-5 pr-2"}),(0,e.jsxs)("span",{children:["Download ",q(l.format)]})]},l.url))})})}function j({article:t,hideKeywords:o,hideOutline:r,hideTitle:n}){var m,f;let i=(f=(m=t.frontmatter)==null?void 0:m.keywords)!=null?f:[],a=H(t.mdast),s=G(a,"abstract"),{title:c,subtitle:l}=t.frontmatter;return(0,e.jsx)(u,{references:{...t.references,article:t.mdast},frontmatter:t.frontmatter,children:(0,e.jsx)(v,{children:(0,e.jsxs)(h,{contents:t,children:[!n&&(0,e.jsx)(C,{frontmatter:{title:c,subtitle:l},className:"mb-5"}),!r&&(0,e.jsx)("div",{className:"sticky top-0 z-10 hidden h-0 pt-2 ml-10 col-margin-right lg:block",children:(0,e.jsx)(R,{className:"relative",children:(0,e.jsx)(B,{})})}),(0,e.jsx)(K,{content:s}),(0,e.jsx)(O,{keywords:i,hideKeywords:o}),(0,e.jsx)(D,{mdast:a}),(0,e.jsx)(M,{})]})})})}function ee({article:t}){var l,m,f,x;let o=N(),{projects:r,hide_footer_links:n}=(l=g())!=null?l:{},i=k(),a=S(),s=r==null?void 0:r[0],c=t.slug===(s==null?void 0:s.index);return(0,e.jsx)(u,{references:{...t.references,article:t.mdast},frontmatter:t.frontmatter,children:(0,e.jsx)(v,{children:(0,e.jsxs)(h,{contents:t,children:[(0,e.jsx)(E,{frontmatter:s,children:(0,e.jsx)("div",{className:"pt-5 md:self-center h-fit lg:pt-0 col-body lg:col-margin-right-inset",children:(0,e.jsx)(Z,{})})}),(0,e.jsxs)("main",{id:"main",className:(0,J.default)(o,"subgrid-gap col-screen",{"pt-10":c}),children:[!c&&(0,e.jsxs)("div",{className:"flex items-center p-3 mb-10 border-y bg-slate-50 dark:bg-slate-600 border-y-slate-300 col-screen",children:[(0,e.jsxs)(i,{to:a||"/",className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,e.jsx)(F,{width:"1rem",height:"1rem",className:"self-center transition-transform group-hover:-translate-x-1 shrink-0"}),(0,e.jsx)("span",{children:"Back to Article"})]}),(0,e.jsx)("div",{className:"flex-grow text-center",children:t.frontmatter.title}),(0,e.jsxs)("a",{href:(x=(f=(m=t.frontmatter)==null?void 0:m.exports)==null?void 0:f[0])==null?void 0:x.url,className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,e.jsx)(b,{width:"1rem",height:"1rem",className:"self-center transition-transform group-hover:-translate-x-1 shrink-0"}),(0,e.jsxs)("span",{children:["Download ",t.kind]})]})]}),(0,e.jsx)(j,{article:t,hideKeywords:!c,hideTitle:c})]}),!n&&(0,e.jsx)(T,{links:t.footer})]})})})}function te(){var r,n;let t=y(),{hide_outline:o}=(n=(r=t.frontmatter)==null?void 0:r.design)!=null?n:{};return(0,e.jsx)(W,{children:(0,e.jsx)(ee,{article:t})})}function ue(){return(0,e.jsx)(W,{children:(0,e.jsx)("main",{className:"article",children:(0,e.jsx)(_,{})})})}export{fe as a,pe as b,W as c,te as d,ue as e};