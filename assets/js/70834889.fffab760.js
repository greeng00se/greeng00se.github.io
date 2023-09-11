"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8",slug:"performance-test",tags:["Mockito","static"]},l=void 0,p={permalink:"/performance-test",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-3/2023-09-10-\uc131\ub2a5 \ud14c\uc2a4\ud2b8/2023-09-10-\uc131\ub2a5 \ud14c\uc2a4\ud2b8.mdx",source:"@site/blog/2023-3/2023-09-10-\uc131\ub2a5 \ud14c\uc2a4\ud2b8/2023-09-10-\uc131\ub2a5 \ud14c\uc2a4\ud2b8.mdx",title:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8",description:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8",date:"2023-09-10T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 10\uc77c",tags:[{label:"Mockito",permalink:"/tags/mockito"},{label:"static",permalink:"/tags/static"}],readingTime:4.8,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8",slug:"performance-test",tags:["Mockito","static"]},prevItem:{title:"\ud1b0\ucea3 \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",permalink:"/tomcat-retrospective"},nextItem:{title:"DB \ubcf5\uc81c, @Transactional\uc5d0 \ub530\ub77c \uc694\uccad \ubd84\ub9ac\ud574\ubcf4\uae30",permalink:"/db-replication"}},i={authorsImageUrls:[]},s=[{value:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8",id:"\uc131\ub2a5-\ud14c\uc2a4\ud2b8",level:2},{value:"\uc2a4\ubaa8\ud06c \ud14c\uc2a4\ud2b8(Smoke Test)",id:"\uc2a4\ubaa8\ud06c-\ud14c\uc2a4\ud2b8smoke-test",level:3},{value:"\uc2a4\ud30c\uc774\ud06c \ud14c\uc2a4\ud2b8(Spike Test)",id:"\uc2a4\ud30c\uc774\ud06c-\ud14c\uc2a4\ud2b8spike-test",level:3},{value:"\ubd80\ud558 \ud14c\uc2a4\ud2b8(Load Test)",id:"\ubd80\ud558-\ud14c\uc2a4\ud2b8load-test",level:3},{value:"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8(Stress Test)",id:"\uc2a4\ud2b8\ub808\uc2a4-\ud14c\uc2a4\ud2b8stress-test",level:3},{value:"\ub0b4\uad6c \ud14c\uc2a4\ud2b8(Endurance Test)",id:"\ub0b4\uad6c-\ud14c\uc2a4\ud2b8endurance-test",level:3},{value:"\uc911\ub2e8\uc810 \ud14c\uc2a4\ud2b8(Breakpoint Test)",id:"\uc911\ub2e8\uc810-\ud14c\uc2a4\ud2b8breakpoint-test",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc131\ub2a5-\ud14c\uc2a4\ud2b8"},"\uc131\ub2a5 \ud14c\uc2a4\ud2b8"),(0,a.kt)("p",null,"API\uc758 \uc694\uccad\uc774 \ub9ce\uc740 \uc0c1\ud669\uc5d0\uc11c \uc11c\ubc84\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8"),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0 \ubd80\ud558\uac00 \uac78\ub9ac\uba74 \ubb38\uc81c \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc591\ud55c \uc0c1\ud669\uc5d0 \ub300\ube44\ud574\uc11c \uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub97c \ud574\uc57c\ud55c\ub2e4.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./test.png",src:n(38715).Z,width:"2168",height:"1002"})),(0,a.kt)("h3",{id:"\uc2a4\ubaa8\ud06c-\ud14c\uc2a4\ud2b8smoke-test"},"\uc2a4\ubaa8\ud06c \ud14c\uc2a4\ud2b8(Smoke Test)"),(0,a.kt)("p",null,"\ucd5c\uc18c\ud55c\uc758 \ubd80\ud558\ub97c \uc8fc\uc5b4 \uc2dc\uc2a4\ud15c\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8  "),(0,a.kt)("p",null,"VU\ub97c \ucd5c\uc18c\ud55c\uc73c\ub85c \ub450\uace0, \uc9e7\uc740 \uc2dc\uac04\uc744 \uac00\uc9c0\uace0 \ud14c\uc2a4\ud2b8\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e4\ub978 \ud14c\uc2a4\ud2b8\ub97c \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \uc2a4\ubaa8\ud06c \ud14c\uc2a4\ud2b8\ub97c \ud568\uc73c\ub85c\uc368 \ud14c\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc624\ub958\uac00 \uc5c6\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uace0, \uc131\ub2a5 \uc9c0\ud45c\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\uc9d1\ub418\uac70\ub098 \ubaa8\ub2c8\ud130\ub9c1\uc774 \ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,a.kt)("admonition",{title:"\uac00\uc0c1 \uc0ac\uc6a9\uc790(VU)",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uac00\uc0c1 \uc0ac\uc6a9\uc790\ub294 \uc11c\ubc84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud574 \ud2b9\uc815 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 \ub2e4\ub978 \uac00\uc0c1 \uc0ac\uc6a9\uc790\uc640 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uba70, \uc5ec\ub7ec \uac00\uc0c1 \uc0ac\uc6a9\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uc2dc \uc5f0\uacb0\uc744 \ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc2a4\ub808\ub4dc\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4.  ")),(0,a.kt)("h3",{id:"\uc2a4\ud30c\uc774\ud06c-\ud14c\uc2a4\ud2b8spike-test"},"\uc2a4\ud30c\uc774\ud06c \ud14c\uc2a4\ud2b8(Spike Test)"),(0,a.kt)("p",null,"\uc0ac\uc6a9\ub7c9\uc774 \uae09\uc99d\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc774 \uacac\ub514\uace0 \uc131\ub2a5\uc5d0 \ubb38\uc81c\uac00 \uc5c6\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8  "),(0,a.kt)("p",null,"\ud2f0\ucf13 \ubc1c\uae09, \ud560\uc778 \ucfe0\ud3f0 \ubc1c\uae09\uacfc \uac19\uc740 \uc774\ubca4\ud2b8\ub97c \ud558\ub294 \uacbd\uc6b0 \ub300\uaddc\ubaa8 \ud2b8\ub798\ud53d\uc774 \ub4e4\uc5b4\uc628\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc2a4\ud30c\uc774\ud06c \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uae09\uc99d\ud558\ub294 \ubd80\ud558 \uc0c1\ud669\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\uace0, \ubd80\ud558\ub97c \uc798 \ubc84\ud2f0\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,a.kt)("h3",{id:"\ubd80\ud558-\ud14c\uc2a4\ud2b8load-test"},"\ubd80\ud558 \ud14c\uc2a4\ud2b8(Load Test)"),(0,a.kt)("p",null,"\ubaa9\ud46f\uac12\uc5d0 \ud574\ub2f9\ub418\ub294 \ubd80\ud558\ub97c \uacac\ub51c \uc218 \uc788\uc744\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8  "),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \ubd80\ud558 \uc0c1\ud669\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub7a8\ud504\uc5c5 \ub610\ub294 \ubb19\ud46f\uac12\uc5d0 \ud574\ub2f9\ud558\ub294 \ubd80\ud558 \uae30\uac04\ub3d9\uc548 \uc131\ub2a5\uc774 \ubb38\uc81c\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc2dc\uc2a4\ud15c \ubcc0\uacbd \ud6c4\uc5d0\ub3c4 \ubd80\ud558 \ud14c\uc2a4\ud2b8\ub97c \ub3cc\ub824 \ub3d9\uc77c\ud558\uac8c \ubaa9\ud46f\uac12\uc744 \ucc98\ub9ac\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,a.kt)("admonition",{title:"\ub7a8\ud504 \uc5c5(Ramp-up)",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ub7a8\ud504 \uc5c5 \uc2dc\uac04\uc740 \ubd80\ud558 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \uc124\uc815\ud55c \uac00\uc0c1 \uc0ac\uc6a9\uc790 \uc218\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ub370 \uac78\ub9ac\ub294 \uc2dc\uac04\uc774\ub2e4.  ")),(0,a.kt)("h3",{id:"\uc2a4\ud2b8\ub808\uc2a4-\ud14c\uc2a4\ud2b8stress-test"},"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8(Stress Test)"),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc758 \ucd5c\ub300\uce58\uc5d0 \ud574\ub2f9\ub418\ub294 \ubd80\ud558\ub97c \ubc1b\uc558\uc744 \ub54c \uc2dc\uc2a4\ud15c\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8  "),(0,a.kt)("p",null,"\uadf8\ub798\ud504\ub97c \ubd24\uc744 \ub54c \ubd80\ud558 \ud14c\uc2a4\ud2b8\uc640 \uc720\uc0ac\ud55c \ud615\ud0dc\ub85c \ubcf4\uc774\uc9c0\ub9cc, \ubd80\ud558\ub7c9\uc774 \ub2e4\ub974\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc77c\ubc18\uc801\uc73c\ub85c \ud3c9\uade0\uc801\uc778 \ubaa9\ud46f\uac12 \ub300\ube44 \uc791\uac8c\ub294 50% \uc774\uc0c1, \ud544\uc694\uc758 \uacbd\uc6b0 \uadf8 \uc774\uc0c1\uc73c\ub85c \ubd80\ud558\ub97c \uc900\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8\ub294 \ubd80\ud558 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud55c \ud6c4\uc5d0\ub9cc \uc2e4\ud589\ud574\uc57c \ud55c\ub2e4. \ubd80\ud558 \ud14c\uc2a4\ud2b8\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc740 \uc0c1\ud669\uc5d0\uc11c \uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ubcd1\ubaa9 \uc9c0\uc810\uc774\ub098 \ubb38\uc81c \uc0c1\ud669\uc744 \ucc3e\uae30 \uc5b4\ub824\uc6cc\uc9c4\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c \ubd80\ud558 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud55c \uc2a4\ud06c\ub9bd\ud2b8\ub97c VU\uac12(\uc2a4\ub808\ub4dc \uc218)\ub9cc \uc218\uc815\ud558\uc5ec \uc7ac\uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.  "),(0,a.kt)("h3",{id:"\ub0b4\uad6c-\ud14c\uc2a4\ud2b8endurance-test"},"\ub0b4\uad6c \ud14c\uc2a4\ud2b8(Endurance Test)"),(0,a.kt)("p",null,"\ud3c9\uade0 \uc0ac\uc6a9\ub960\ub85c \uc77c\uc815 \ubd80\ud558\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uc8fc\uba70 \uc2dc\uc2a4\ud15c\uc774 \ubb38\uc81c\ub418\ub294 \uc9c0\uc810\uc744 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8, \ud761\uc218 \ud14c\uc2a4\ud2b8(Soak Test)\ub77c\uace0\ub3c4 \ud55c\ub2e4.  "),(0,a.kt)("p",null,"\ub0b4\uad6c \ud14c\uc2a4\ud2b8\ub3c4 \uae30\ubcf8\uc801\uc778 \ubd80\ud558 \ud14c\uc2a4\ud2b8\uc758 \ubcc0\ud615\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4.  "),(0,a.kt)("h3",{id:"\uc911\ub2e8\uc810-\ud14c\uc2a4\ud2b8breakpoint-test"},"\uc911\ub2e8\uc810 \ud14c\uc2a4\ud2b8(Breakpoint Test)"),(0,a.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://k6.io/docs/test-types/load-test-types/"},"Load test types, k6"),(0,a.kt)("br",{parentName:"p"}),"\n","\uc790\ubc14 \ucd5c\uc801\ud654 - \ubca4\uc800\ubbfc J. \uc5d0\ubc88\uc2a4, \uc81c\uc784\uc2a4 \uace0\ud504, \ud06c\ub9ac\uc2a4 \ub274\ub79c\ub4dc\n\uc544\ub9c8\uc874 \uc6f9 \uc11c\ube44\uc2a4 \ubd80\ud558 \ud14c\uc2a4\ud2b8 \uc785\ubb38 - \ub098\uce74\uac00\uc640 \ud0c0\ub8e8\ud558\uce58, \ubaa8\ub9ac\uc2dc\ud0c0 \ucf04"))}u.isMDXComponent=!0},38715:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/test-355aba93f96ef7d6a0f3161bf6a9c25e.png"}}]);