"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",last_update:{date:"2023/09/22"},tags:["architecture"]},c=void 0,l={unversionedId:"\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",id:"\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",description:"\uac1c\uc694",source:"@site/docs/\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98.mdx",sourceDirName:"\uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",permalink:"/docs/architecture/virtical-slice-architecture",draft:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98.mdx",tags:[{label:"architecture",permalink:"/docs/tags/architecture"}],version:"current",lastUpdatedAt:1695340800,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 22\uc77c",frontMatter:{title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",last_update:{date:"2023/09/22"},tags:["architecture"]},sidebar:"tutorialSidebar",previous:{title:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8 \uc720\ud615",permalink:"/docs/performance/types"},next:{title:"FIRST",permalink:"/docs/test/first"}},o={},p=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uc8fc\uc758 \uc0ac\ud56d",id:"\uc8fc\uc758-\uc0ac\ud56d",level:3},{value:"\ud14c\uc2a4\ud2b8 \uc791\uc131",id:"\ud14c\uc2a4\ud2b8-\uc791\uc131",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("p",null,"\uae30\uc874\uc758 Layered Architecture \u2192 \ub808\uc774\uc5b4\ubcc4 \uc5ed\ud560\uacfc \ucc45\uc784\uc744 \ub098\ub220\uc11c \uad6c\ud604",(0,a.kt)("br",{parentName:"p"}),"\n","Virtical Slice Architecture \u2192 Feature\ub77c\ub294 \ud558\ub098\uc758 \ud074\ub798\uc2a4\uc5d0 \uc751\uc9d1\uc2dc\ucf1c \uad6c\ud604\ud558\ub294 \uad6c\uc870"),(0,a.kt)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,a.kt)("p",null,"Transactional\uacfc Controller\uac00 \uac19\uc774 \ubd99\uc5b4\uc788\ub294 \ud615\ud0dc\ub97c \ub748\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ube60\ub978 \ud53c\ub4dc\ubc31 \uc0ac\uc774\ud074\uc744 \uac00\uc9c4 \uc2e0\uaddc \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0 \ud575\uc2ec \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc9d1\uc911\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uae30\ub2a5\ubcc4\ub85c \uad6c\ud604\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uac00 \uc801\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc791\uc740 \uaddc\ubaa8\uc758 \uc870\uc9c1, \ucf54\ub4dc \ud488\uc9c8 \uad00\ub9ac\uac00 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uc870\uc9c1\uc5d0 \uc801\ud569\ud558\ub2e4.  "),(0,a.kt)("h3",{id:"\uc8fc\uc758-\uc0ac\ud56d"},"\uc8fc\uc758 \uc0ac\ud56d"),(0,a.kt)("p",null,"\ud55c \uacf3\uc5d0 \uae30\ub2a5\uc774 \uc9d1\uc911\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ud30c\uac8c\ud2f0 \ucf54\ub4dc\uac00 \ub418\uc9c0 \uc54a\ub3c4\ub85d \uc9c0\uc18d\uc801\uc73c\ub85c \ucf54\ub4dc \ud488\uc9c8\uc744 \uad00\ub9ac\ud574\uc57c\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","DB\uc5d0 \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 DB \uc911\uc2ec\uc758 \uac1c\ubc1c\uc774 \ub418\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud55c\ub2e4.  "),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\uc791\uc131"},"\ud14c\uc2a4\ud2b8 \uc791\uc131"),(0,a.kt)("p",null,"API \u2192 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\n\ub3c4\uba54\uc778 -> \ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,a.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("p",null,"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98, \uc720\uc2a4\ucf58 23",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SUiWfhAhgQw&t=2116s"},"Vertical Slice Architecture, NDC, Jimmy Bogard"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.jimmybogard.com/vertical-slice-architecture/"},"Vertical Slice Architecture, Jimmy Bogard")))}s.isMDXComponent=!0}}]);