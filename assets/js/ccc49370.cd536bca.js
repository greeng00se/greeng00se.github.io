(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{5203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(7294),r=n(6010),o=n(833),l=n(5281),i=n(9460),s=n(9058),c=n(857),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:l,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(o.d,{title:n,description:r,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:l}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=n(9407);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:o}=(0,i.C)(),{nextItem:l,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return a.createElement(s.Z,{sidebar:t,toc:!d&&o.length>0?a.createElement(p.Z,{toc:o,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(c.Z,null,n),(l||m)&&a.createElement(g,{nextItem:l,prevItem:m}))}function b(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),o=n(6010),l=n(3743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,o.Z)(i,"thin-scrollbar",t)},r.createElement(l.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,o.L)(),v=m??p.tableOfContents.minHeadingLevel,b=d??p.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return u((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[s,c,v,b])),r.createElement(g,(0,a.Z)({toc:h,className:n,linkClassName:s},f))}},857:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(390),r=n(7294),o=n(2949),l=n(9460);const i=function(e){const{colorMode:t}=(0,o.I)(),{isBlogPostPage:n}=(0,l.C)(),i="dark"===t?"dark":"light",s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!n)return;const e=s.current.querySelector("iframe.giscus-frame");e?(()=>{const t={setConfig:{theme:i}};e.contentWindow.postMessage({giscus:t},"https://giscus.app")})():(()=>{const e=document.createElement("script");e.src="https://giscus.app/client.js",e.setAttribute("data-repo","greeng00se/greeng00se.github.io"),e.setAttribute("data-repo-id","R_kgDOIRAC3w"),e.setAttribute("data-category","Announcements"),e.setAttribute("data-category-id","DIC_kwDOIRAC384CTcGg"),e.setAttribute("data-mapping","pathname"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme",i),e.setAttribute("data-lang","ko"),e.crossOrigin="anonymous",e.async=!0,s.current.appendChild(e)})()}),[i]),r.createElement(r.Fragment,null,r.createElement(a.Z,e),n&&r.createElement("div",{ref:s}))}},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=1748}}]);