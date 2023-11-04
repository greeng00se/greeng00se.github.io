"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c",slug:"/culture/postmortem",last_update:{date:"2023/06/17"},tags:["postmortem"]},p=void 0,l={unversionedId:"\ubb38\ud654/\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c",id:"\ubb38\ud654/\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c",title:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c",description:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c(Postmortem)",source:"@site/docs/\ubb38\ud654/\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c.mdx",sourceDirName:"\ubb38\ud654",slug:"/culture/postmortem",permalink:"/docs/culture/postmortem",draft:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/\ubb38\ud654/\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c.mdx",tags:[{label:"postmortem",permalink:"/docs/tags/postmortem"}],version:"current",lastUpdatedAt:168696e4,formattedLastUpdatedAt:"2023\ub144 6\uc6d4 17\uc77c",frontMatter:{title:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c",slug:"/culture/postmortem",last_update:{date:"2023/06/17"},tags:["postmortem"]},sidebar:"tutorialSidebar",previous:{title:"\ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131",permalink:"/docs/monitoring/intro"},next:{title:"\ubb34\uc911\ub2e8 \ubc30\ud3ec",permalink:"/docs/deploy/zero-downtime"}},i={},c=[{value:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c(Postmortem)",id:"\ud3ec\uc2a4\ud2b8-\ubaa8\ud15cpostmortem",level:3},{value:"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c\uc5d0 \ub2f4\uaca8\uc57c \ud558\ub294 \ub0b4\uc6a9",id:"\ud3ec\uc2a4\ud2b8-\ubaa8\ud15c\uc5d0-\ub2f4\uaca8\uc57c-\ud558\ub294-\ub0b4\uc6a9",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\ud3ec\uc2a4\ud2b8-\ubaa8\ud15cpostmortem"},"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c(Postmortem)"),(0,o.kt)("p",null,"\uc2e4\ud328\ud55c \uadfc\ubcf8 \uc6d0\uc778\uc744 \ubd84\uc11d\ud558\uc5ec \ubb38\uc11c\ub85c \ub0a8\uae30\ub294 \uac83"),(0,o.kt)("h3",{id:"\ud3ec\uc2a4\ud2b8-\ubaa8\ud15c\uc5d0-\ub2f4\uaca8\uc57c-\ud558\ub294-\ub0b4\uc6a9"},"\ud3ec\uc2a4\ud2b8 \ubaa8\ud15c\uc5d0 \ub2f4\uaca8\uc57c \ud558\ub294 \ub0b4\uc6a9"),(0,o.kt)("p",null,"\uc0ac\uac74\uc758 \uac1c\uc694",(0,o.kt)("br",{parentName:"p"}),"\n","\uc0ac\uac74\uc744 \uc778\uc9c0\ud558\uace0 \ud574\uacb0\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0\uc758 \ud0c0\uc784\ub77c\uc778",(0,o.kt)("br",{parentName:"p"}),"\n","\uc0ac\uac74\uc758 \uadfc\ubcf8 \uc6d0\uc778",(0,o.kt)("br",{parentName:"p"}),"\n","\uc601\ud5a5\uacfc \ud53c\ud574 \ud3c9\uac00",(0,o.kt)("br",{parentName:"p"}),"\n","\ubb38\uc81c\ub97c \uc989\uc2dc \ud574\uacb0\ud558\uae30 \uc704\ud55c \uc870\uce58 \ud56d\ubaa9(\uc18c\uc720\uc790 \uba85\uc2dc)",(0,o.kt)("br",{parentName:"p"}),"\n","\uac1c\ubc1c \ubc29\uc9c0\ub97c \uc704\ud55c \uc870\uce58 \ud56d\ubaa9",(0,o.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uad50\ud6c8  "),(0,o.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,o.kt)("p",null,"\uad6c\uae00 \uc5d4\uc9c0\ub2c8\uc5b4\ub294 \uc774\ub807\uac8c \uc77c\ud55c\ub2e4, \ud0c0\uc774\ud130\uc2a4 \uc708\ud130\uc2a4, \ud1b0 \ub9e8\uc26c\ub809, \ud558\uc774\ub7fc \ub77c\uc774\ud2b8 p.86",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://techblog.woowahan.com/4886/"},"\uc6b0\uc544\ud55c \uc7a5\uc560\ub300\uc751")))}s.isMDXComponent=!0}}]);