"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6180],{47599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=r(85893),c=r(11151);const n={title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",last_update:{date:"2023/09/22"},tags:["architecture"]},s=void 0,a={id:"\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",description:"\uac1c\uc694",source:"@site/docs/\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98.mdx",sourceDirName:"\uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",permalink:"/docs/architecture/virtical-slice-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/\uc544\ud0a4\ud14d\ucc98/\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98.mdx",tags:[{label:"architecture",permalink:"/docs/tags/architecture"}],version:"current",lastUpdatedAt:1695340800,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 22\uc77c",frontMatter:{title:"\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98",slug:"/architecture/virtical-slice-architecture",last_update:{date:"2023/09/22"},tags:["architecture"]},sidebar:"tutorialSidebar",previous:{title:"\uc2a4\ud504\ub9c1\uc758 \ud2b9\uc9d5",permalink:"/docs/spring/essence"},next:{title:"FIRST",permalink:"/docs/test/first"}},l={},d=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uc8fc\uc758 \uc0ac\ud56d",id:"\uc8fc\uc758-\uc0ac\ud56d",level:3},{value:"\ud14c\uc2a4\ud2b8 \uc791\uc131",id:"\ud14c\uc2a4\ud2b8-\uc791\uc131",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}];function o(e){const t={a:"a",br:"br",h3:"h3",p:"p",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,i.jsxs)(t.p,{children:["\uae30\uc874\uc758 Layered Architecture \u2192 \ub808\uc774\uc5b4\ubcc4 \uc5ed\ud560\uacfc \ucc45\uc784\uc744 \ub098\ub220\uc11c \uad6c\ud604",(0,i.jsx)(t.br,{}),"\n","Virtical Slice Architecture \u2192 Feature\ub77c\ub294 \ud558\ub098\uc758 \ud074\ub798\uc2a4\uc5d0 \uc751\uc9d1\uc2dc\ucf1c \uad6c\ud604\ud558\ub294 \uad6c\uc870"]}),"\n",(0,i.jsx)(t.h3,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,i.jsxs)(t.p,{children:["Transactional\uacfc Controller\uac00 \uac19\uc774 \ubd99\uc5b4\uc788\ub294 \ud615\ud0dc\ub97c \ub748\ub2e4.",(0,i.jsx)(t.br,{}),"\n","\ube60\ub978 \ud53c\ub4dc\ubc31 \uc0ac\uc774\ud074\uc744 \uac00\uc9c4 \uc2e0\uaddc \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0 \ud575\uc2ec \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc9d1\uc911\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,i.jsx)(t.br,{}),"\n","\uae30\ub2a5\ubcc4\ub85c \uad6c\ud604\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uac00 \uc801\ub2e4.",(0,i.jsx)(t.br,{}),"\n","\uc791\uc740 \uaddc\ubaa8\uc758 \uc870\uc9c1, \ucf54\ub4dc \ud488\uc9c8 \uad00\ub9ac\uac00 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uc870\uc9c1\uc5d0 \uc801\ud569\ud558\ub2e4."]}),"\n",(0,i.jsx)(t.h3,{id:"\uc8fc\uc758-\uc0ac\ud56d",children:"\uc8fc\uc758 \uc0ac\ud56d"}),"\n",(0,i.jsxs)(t.p,{children:["\ud55c \uacf3\uc5d0 \uae30\ub2a5\uc774 \uc9d1\uc911\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ud30c\uac8c\ud2f0 \ucf54\ub4dc\uac00 \ub418\uc9c0 \uc54a\ub3c4\ub85d \uc9c0\uc18d\uc801\uc73c\ub85c \ucf54\ub4dc \ud488\uc9c8\uc744 \uad00\ub9ac\ud574\uc57c\ud55c\ub2e4.",(0,i.jsx)(t.br,{}),"\n","DB\uc5d0 \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 DB \uc911\uc2ec\uc758 \uac1c\ubc1c\uc774 \ub418\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud55c\ub2e4."]}),"\n",(0,i.jsx)(t.h3,{id:"\ud14c\uc2a4\ud2b8-\uc791\uc131",children:"\ud14c\uc2a4\ud2b8 \uc791\uc131"}),"\n",(0,i.jsx)(t.p,{children:"API \u2192 \ud1b5\ud569 \ud14c\uc2a4\ud2b8\n\ub3c4\uba54\uc778 -> \ub2e8\uc704 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsx)(t.h3,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,i.jsxs)(t.p,{children:["\ubc84\ud2f0\uceec \uc2ac\ub77c\uc774\uc2a4 \uc544\ud0a4\ud14d\ucc98, \uc720\uc2a4\ucf58 23",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=SUiWfhAhgQw&t=2116s",children:"Vertical Slice Architecture, NDC, Jimmy Bogard"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"https://www.jimmybogard.com/vertical-slice-architecture/",children:"Vertical Slice Architecture, Jimmy Bogard"})]})]})}function u(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(67294);const c={},n=i.createContext(c);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);