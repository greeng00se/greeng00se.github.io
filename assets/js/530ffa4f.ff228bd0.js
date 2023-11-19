"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},17105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0",slug:"refactoring-retrospective",tags:["Woowahan Techcourse","Retrospective"]},p=void 0,o={permalink:"/refactoring-retrospective",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-4/2023-10-31-\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0.mdx",source:"@site/blog/2023-4/2023-10-31-\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0.mdx",title:"\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0",description:"1\ub2e8\uacc4//github.com/woowacourse/jwp-refactoring/pull/465",date:"2023-10-31T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 31\uc77c",tags:[{label:"Woowahan Techcourse",permalink:"/tags/woowahan-techcourse"},{label:"Retrospective",permalink:"/tags/retrospective"}],readingTime:8.095,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0",slug:"refactoring-retrospective",tags:["Woowahan Techcourse","Retrospective"]},prevItem:{title:"\uc6b0\uc544\ucf58 2023 \ud6c4\uae30",permalink:"/woowacon-2023"},nextItem:{title:"Jdbc \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",permalink:"/jdbc-retrospective"}},i={authorsImageUrls:[]},u=[{value:"\ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158",id:"\ub9ac\ud329\ud130\ub9c1-\ubbf8\uc158",level:3},{value:"1, 2\ub2e8\uacc4",id:"1-2\ub2e8\uacc4",level:3},{value:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ubcf5\uc7a1\uc131\uc744 \ub2e4\ub8e8\ub294 \uc9c0\ud61c",id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758-\ubcf5\uc7a1\uc131\uc744-\ub2e4\ub8e8\ub294-\uc9c0\ud61c",level:3},{value:"3, 4\ub2e8\uacc4",id:"3-4\ub2e8\uacc4",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"PR \ub9c1\ud06c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"1\ub2e8\uacc4: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-refactoring/pull/465"},"https://github.com/woowacourse/jwp-refactoring/pull/465"),(0,a.kt)("br",{parentName:"p"}),"\n","2\ub2e8\uacc4: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-refactoring/pull/547"},"https://github.com/woowacourse/jwp-refactoring/pull/547"),(0,a.kt)("br",{parentName:"p"}),"\n","3\ub2e8\uacc4: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-refactoring/pull/610"},"https://github.com/woowacourse/jwp-refactoring/pull/610"),(0,a.kt)("br",{parentName:"p"}),"\n","4\ub2e8\uacc4: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-refactoring/pull/721"},"https://github.com/woowacourse/jwp-refactoring/pull/721"),"  ")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1-\ubbf8\uc158"},"\ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158"),(0,a.kt)("p",null,"\uc694\uad6c\uc0ac\ud56d \uc791\uc131 \u2192 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud55c \ucf54\ub4dc \ubcf4\ud638 \u2192 \ub9ac\ud329\ud130\ub9c1 \u2192 \uc758\uc874\uc131 \ub9ac\ud329\ud130\ub9c1 \u2192 \uba40\ud2f0\ubaa8\ub4c8 \uc21c\uc11c\ub85c \ubbf8\uc158\uc744 \uc9c4\ud589\ud588\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ubbf8\uc158\uc5d0 \uc628\uc804\ud788 \uc9d1\uc911\ud558\uace0 \uc2f6\uc5c8\uc9c0\ub9cc, \ud504\ub85c\uc81d\ud2b8\uc640 \ubcd1\ud589\ud558\uba74\uc11c \uc9c4\ud589\ud588\uae30\uc5d0 \uc5b4\ub290\uc815\ub3c4 \ud0c0\ud611\ubcf4\uace0 \uc9c4\ud589\ud55c \ubd80\ubd84\uc774 \ub9ce\uc544\uc11c \uc544\uc26c\uc6e0\ub2e4.  "),(0,a.kt)("h3",{id:"1-2\ub2e8\uacc4"},"1, 2\ub2e8\uacc4"),(0,a.kt)("p",null,"1\ub2e8\uacc4\ub294 \uc694\uad6c\uc0ac\ud56d\uc744 \uc791\uc131\ud558\uace0, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec \ucd94\ud6c4\uc5d0 \ub9ac\ud329\ud130\ub9c1 \ud560 \ub54c \uc548\uc815\uac10 \uc788\uac8c \uc9c4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc900\ube44\ud558\ub294 \uacfc\uc815\uc774\uc5c8\ub2e4.\n\uc694\uad6c\uc0ac\ud56d\uc744 \uc791\uc131\ud560 \ub54c \uc81c\uacf5\ub41c \uc6a9\uc5b4 \uc0ac\uc804\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\uba74\uc11c \uae30\uc874\uc758 \ucf54\ub4dc\ub97c \ubcf4\uba74\uc11c \uc694\uad6c\uc0ac\ud56d\uc744 \uc815\ub9ac\ud588\ub2e4.\n\ud14c\uc2a4\ud2b8\ub294 \uc2dc\uac04 \uad00\uacc4\uc0c1 API, \uc11c\ube44\uc2a4 \ub458 \uc911 \ud558\ub098\ub9cc \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud574\uc57c\uaca0\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4. "),(0,a.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc11c\ube44\uc2a4 \uae30\uc900\uc73c\ub85c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud588\ub294\ub370 \uc57d\uac04 \ud6c4\ud68c\ub418\ub294 \uacb0\uc815\uc774\uc5c8\ub358 \uac83 \uac19\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub9ac\ud329\ud130\ub9c1 \uacfc\uc815\uc5d0\uc11c API \uba85\uc138\uac00 \ubc14\ub00c\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uae30\uc900\uc744 \uc7a1\uace0 \uc774\ubc88 \ubbf8\uc158\uc744 \ud55c\ub2e4\uace0 \uac00\uc815\ud588\uc744 \ub54c API \uae30\uc900\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uace0, \ub9ac\ud329\ud130\ub9c1\uc744 \uc9c4\ud589\ud558\ub294 \uac83\uc774 \ub354 \uc548\uc815\uac10 \uc788\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4.  "),(0,a.kt)("p",null,"2\ub2e8\uacc4\ub294 \uc791\uc131\ub41c \ud14c\uc2a4\ud2b8 \uae30\ubc18\uc73c\ub85c \ub9ac\ud329\ud130\ub9c1 \ud558\ub294 \ubbf8\uc158\uc774\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc11c\ube44\uc2a4\uc5d0\uc11c \ub3c4\uba54\uc778\uc744 \uc9c1\uc811 \ubc18\ud658\ud558\ub294 \uad6c\uc870\uc600\ub294\ub370, \ub3c4\uba54\uc778\uc5d0 JPA\ub97c \uc801\uc6a9\ud558\uba74 \uae30\uc874 \uba85\uc138\uc640 \ub2ec\ub77c\uc9c8 \uac83\uc744 \uc6b0\ub824\ud574\uc11c DTO\ub85c \uc218\uc815\ud558\ub294 \uc791\uc5c5\uc744 \uba3c\uc800 \uc9c4\ud589\ud588\ub2e4.\nDTO \uc774\ud6c4\uc5d0 \uc11c\ube44\uc2a4\uc5d0 \uc788\ub294 \ub85c\uc9c1\uc744 \ub3c4\uba54\uc778\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a4\uace0, \ucd5c\uc885\uc801\uc73c\ub85c JPA\ub97c \uc801\uc6a9\ud558\ub294 \uc21c\uc11c\ub85c \ub9ac\ud329\ud130\ub9c1\uc744 \uc9c4\ud589\ud588\ub2e4.\n\uc774 \uacfc\uc815\uc5d0\uc11c \uc758\uc874\uc131 \ubc29\ud5a5\uc774 \uc591\ubc29\ud5a5\uc778 \ubd80\ubd84\ub3c4 \uc0dd\uaca8\ub0ac\ub2e4.  "),(0,a.kt)("h3",{id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758-\ubcf5\uc7a1\uc131\uc744-\ub2e4\ub8e8\ub294-\uc9c0\ud61c"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ubcf5\uc7a1\uc131\uc744 \ub2e4\ub8e8\ub294 \uc9c0\ud61c"),(0,a.kt)("p",null,"\uc911\uac04\uc5d0 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubcf5\uc7a1\uc131\uc744 \ub2e4\ub8e8\ub294 \uc9c0\ud61c\uc5d0 \uad00\ud55c \uc81c\uc774\uc2a8\uc758 \uac15\uc758\uac00 \uc788\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ubcf5\uc7a1\uc131\uc744 \ub2e4\ub8e8\ub294 \uc9c0\ud61c\ub294 \uc5d0\ub9ad \uc5d0\ubc18\uc2a4\uc758 \uc800\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub3c4\uba54\uc778 \uc8fc\ub3c4 \uc124\uacc4"),"\uc758 \ubd80\uc81c\uc774\ub2e4.  "),(0,a.kt)("p",null,"\ub3c4\uba54\uc778 \uc8fc\ub3c4 \uc124\uacc4\ub294 \uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4, \uc804\ub7b5\uc801 \uc124\uacc4, \uc804\uc220\uc801 \uc124\uacc4\uac00 \uc911\uc694\ud558\ub2e4\uace0 \ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4, \uc804\ub7b5\uc801 \uc124\uacc4\uac00 \uc804\uccb4\uc758 90%\uc5d0 \ud574\ub2f9\ud560 \uc815\ub3c4\ub85c \uc911\uc694\ud558\ub2e4\uace0 \ud55c\ub2e4. \ub610\ud55c \uc804\uc220\uc801 \uc124\uacc4\ub9cc \ud558\ub294 \uacbd\uc6b0\ub97c DDD Lite \ub77c\uace0 \ud55c\ub2e4.  "),(0,a.kt)("p",null,"\uac04\ub2e8\ud788 \ub3c4\uba54\uc778 \uc8fc\ub3c4 \uc124\uacc4\uc5d0\uc11c \ub098\uc624\ub294 \ub2e8\uc5b4\ub97c \uc815\ub9ac\ud55c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4.  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ub2e8\uc5b4"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\ub3c4\uba54\uc778"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub85c \ud574\uacb0\ud558\uace0\uc790 \ud558\ub294 \ubb38\uc81c \uc601\uc5ed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\ubc14\uc6b4\ub514\ub4dc \ucee8\ud14d\uc2a4\ud2b8"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud574\uacb0 \uc601\uc5ed, \uad00\uc2ec\uc0ac\ub97c \ubd84\ub9ac\ud558\uace0 \uaca9\ub9ac\ud558\uc5ec \ubb38\uc81c \ud574\uacb0\uc5d0 \uc9d1\uc911\ud560 \ubc94\uc704")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud504\ub85c\uc81d\ud2b8\uc5d0 \uc774\ud574\uad00\uacc4\uc790\ub4e4\uc758 \uacf5\ud1b5\ub41c \uc5b8\uc5b4\ub85c, \uc11c\ub85c\uc758 \uc758\uc0ac\uc18c\ud1b5 \ube44\uc6a9\uc744 \uc904\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uc5b8\uc5b4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\ub7b5\uc801 \uc124\uacc4"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub3c4\uba54\uc778 \uc804\ubb38\uac00\uc640 \uac1c\ubc1c\uc790\uac00 \ud568\uaed8 \uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \ub3c4\uba54\uc778\uacfc \uad00\ub828\ub41c \uc9c0\uc2dd\uc744 \uc774\ud574\ud558\uace0 \uc774\ub97c \ubc14\ud0d5\uc73c\ub85c \uacbd\uacc4\ub97c \ub098\ub220 \ubc14\uc6b4\ub514\ub4dc \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc815\uc758\ud558\uace0, \ucee8\ud14d\uc2a4\ud2b8 \ub9f5\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ud3ec\ud568\ud558\ub294 \uacfc\uc815")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\uc220\uc801 \uc124\uacc4"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\ub7b5\uc801 \uc124\uacc4\uc5d0\uc11c \uc815\uc758\ud55c \ubc14\uc6b4\ub514\ub4dc \ucee8\ud14d\uc2a4\ud2b8\uc640 \ub3c4\uba54\uc778\uc744 \uc774\uc6a9\ud558\uc5ec \uc560\uadf8\ub9ac\uac70\ud2b8, Entity\uc640 VO, Repository \ub4f1\uc744 \uad6c\ud604\ud558\ub294 \uacfc\uc815")))),(0,a.kt)("p",null,"\uc774 \uc678\uc5d0\ub3c4 \ub2e4\uc591\ud55c \ub0b4\uc6a9\ub4e4\uc774 \ub098\uc654\uc9c0\ub9cc, \uc9c0\uc2dd\uc744 \uc81c\ub300\ub85c \ud761\uc218\ud558\uc9c0\ub294 \ubabb\ud588\ub2e4.  "),(0,a.kt)("h3",{id:"3-4\ub2e8\uacc4"},"3, 4\ub2e8\uacc4"),(0,a.kt)("p",null,"\uc81c\uc774\uc2a8\uc758 \uac15\uc758\ub97c \ub4e3\uace0, \uc870\uc601\ud638\ub2d8\uc758 \uc6b0\uc544\ud55c\uac1d\uccb4\uc9c0\ud5a5 \uc720\ud29c\ube0c \uc601\uc0c1\uc744 \ubcf8 \ub2e4\uc74c 3, 4\ub2e8\uacc4\ub97c \uc9c4\ud589\ud588\ub2e4.  "),(0,a.kt)("p",null,"3\ub2e8\uacc4\ub294 \uc758\uc874\uc131 \ub9ac\ud329\ud130\ub9c1\uc5d0 \uad00\ud55c \ub0b4\uc6a9\uc774\uc5c8\ub2e4. \ud074\ub798\uc2a4 \uac04 \ubc29\ud5a5, \ud328\ud0a4\uc9c0 \uac04 \ubc29\ud5a5\uc744 \ub2e8\ubc29\ud5a5\uc774 \ub418\ub3c4\ub85d \ub9ac\ud329\ud130\ub9c1\uc744 \uc9c4\ud589\ud574\uc57c \ud588\uc5c8\ub2e4.\n\ud568\uaed8 \uc0dd\uc131\ub418\uace0 \uc0ad\uc81c\ub418\ub294 \uac1d\uccb4\ub4e4\uc744 \ubb36\uace0, \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uae30 \uc704\ud574 \uc0dd\uba85\uc8fc\uae30\uac00 \ub2e4\ub974\ub2e4\uba74 id\ub97c \uc774\uc6a9\ud558\uc5ec \ucc38\uc870\ud558\ub3c4\ub85d \ubcc0\uacbd\ud588\ub2e4.  "),(0,a.kt)("p",null,"\uc758\uc874\uc131\uc744 \ubd84\ub9ac\ud558\uae30 \uc704\ud574 \uc774\ubca4\ud2b8\ub3c4 \uc0ac\uc6a9\ud574\ubcf4\uc558\ub2e4. \uc774\ubca4\ud2b8\ub294 \ud604\uc7ac \uae30\uc900\uc73c\ub85c \uacfc\uac70\uc5d0 \ubc8c\uc5b4\uc9c4 \uac83\uc744 \ud45c\ud604\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ubca4\ud2b8\uba85\uc740 \uacfc\uac70 \uc2dc\uc81c\uac00 \ub418\uc5b4\uc57c\ud558\ub294 \uac83\uc744 \uc54c\uc558\ub2e4.\n\ucc98\uc74c\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud588\uc9c0\ub9cc, \uc11c\ube44\uc2a4 \ub85c\uc9c1\uc744 \ucd5c\ub300\ud55c \uac04\ub2e8\ud558\uac8c \ud558\uae30 \uc704\ud574 \ub3c4\uba54\uc778 \uc774\ubca4\ud2b8\ub3c4 \uc0ac\uc6a9\ud574\ubcf4\uc558\ub2e4.  "),(0,a.kt)("p",null,"4\ub2e8\uacc4\ub294 \uba40\ud2f0\ubaa8\ub4c8\ub85c \ubd84\ub9ac\ud558\ub294 \ubbf8\uc158\uc774\uc5c8\ub294\ub370 3\ub2e8\uacc4\uc5d0\uc11c \ubd84\ub9ac\ud574\ub454 \ud328\ud0a4\uc9c0 \uadf8\ub300\ub85c \ubd84\ub9ac\ud558\uc9c0\ub294 \uc54a\uc558\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","3\ub2e8\uacc4\uc5d0\uc11c\ub294 \ud568\uaed8 \uc0dd\uc131\ub418\uace0 \uc0ad\uc81c\ub418\ub294 \uac1d\uccb4 \uae30\uc900\uc73c\ub85c \ubd84\ub9ac\ud588\ub2e4. 4\ub2e8\uacc4\uc5d0\uc11c\ub294 \ub0b4\uac00 \uc778\uc2dd\ud558\uae30 \ud3b8\ud55c \uae30\uc900\uc73c\ub85c \ubd84\ub9ac\ub97c \ud588\ub2e4.\n\uc544\uc9c1 \ubd84\ub9ac\ud55c \uae30\uc900\uc5d0 \ub300\ud55c \uadfc\uac70\uac00 \ubaa8\ud638\ud588\uace0, \uc774\uc5d0 \ub300\ud55c \uacf5\ubd80\ub97c \uc870\uae08 \ub354 \ud574\uc57c\uaca0\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4.  "),(0,a.kt)("mermaid",{value:"graph LR\n\tsubgraph Table\n\t\tOrderTable --\x3e TableGroup\n\tend\n\tsubgraph Order\n\t\tO\n\tend\n  O[Order] --\x3e OrderTable\n\tsubgraph Menu\n\t\tM[Menu] --\x3e MenuGroup\n\t\tM --\x3e Product\n\tend\n\tO --\x3e M"}),(0,a.kt)("p",null,"\ucd94\uac00\ub85c \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ub97c \uc704\ud55c \uc9c1\uc811 \uc791\uc131\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServiceTest")," \ucee4\uc2a4\ud140 \uc560\ub108\ud14c\uc774\uc158\uc774 \uc788\uc5c8\ub294\ub370, \uc0c1\uc704 \ubaa8\ub4c8\uc758 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \ub9cc\ub4e0 \ud074\ub798\uc2a4\ub97c \ud558\uc704 \ubaa8\ub4c8\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5c8\ub2e4.\n\ub530\ub77c\uc11c TestFixtures\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0\ud588\ub2e4.  "),(0,a.kt)("h3",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,a.kt)("p",null,"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4\uc758 \ub9c8\uc9c0\ub9c9 \ubbf8\uc158\uc774\ub2c8 \ub9cc\ud07c, \uac00\uc7a5 \ud765\ubbf8\ub85c\uc6b4 \ubbf8\uc158\uc774\uc5c8\uace0 \ubc30\uc6b8\uc810\ub3c4 \ub9ce\uc558\ub358 \uac83 \uac19\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ubc14\uc05c \uae30\uac04\uc774\ub77c \ub9ce\uc740 \ub9ac\ubdf0\ub97c \ub0a8\uae30\uc9c0 \ubabb\ud588\ub358 \ub9ac\ubdf0\uc774 \ud638\uc774\uc5d0\uac8c \ubbf8\uc548\ud558\uace0, \ucf54\uba58\ud2b8 \uaf3c\uaf3c\ud558\uac8c \ub2ec\uc544\uc8fc\uace0 \ubbf8\uc158\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub3c4 \uc624\ud504\ub77c\uc778\uc73c\ub85c \ub9ce\uc774 \ub098\ub208 \ub9ac\ubdf0\uc5b4 \ud14c\uc624\uc5d0\uac8c \ub108\ubb34 \uac10\uc0ac\ud558\ub2e4. "),(0,a.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kmUneexSxk0"},"\ub3c4\uba54\uc778 \uc6d0\uc815\ub300, \uc6b0\uc544\ucf58 2021"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dJ5C4qRqAgA"},"\uc6b0\uc544\ud55c\uac1d\uccb4\uc9c0\ud5a5, \uc6b0\uc544\ud55c\ud14c\ud06c\uc138\ubbf8\ub098"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://kwonnam.pe.kr/wiki/gradle/testfixtures"},"TestFixtures, \uad8c\ub0a8\ub2d8")))}m.isMDXComponent=!0}}]);