"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5463],{11365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(85893),s=n(11151);const i={title:"\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870",slug:"/database/query-execution",last_update:{date:"2023/09/25"},tag:["mysql","query"]},o=void 0,a={id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4/\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870",title:"\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870",description:"\uc2e4\ud589 \uad6c\uc870",source:"@site/docs/\ub370\uc774\ud130\ubca0\uc774\uc2a4/\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870.mdx",sourceDirName:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",slug:"/database/query-execution",permalink:"/docs/database/query-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/\ub370\uc774\ud130\ubca0\uc774\uc2a4/\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870.mdx",tags:[],version:"current",lastUpdatedAt:16956e5,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 25\uc77c",frontMatter:{title:"\ucffc\ub9ac \uc2e4\ud589 \uad6c\uc870",slug:"/database/query-execution",last_update:{date:"2023/09/25"},tag:["mysql","query"]},sidebar:"tutorialSidebar",previous:{title:"maximumPoolSize",permalink:"/docs/database/maximumPoolSize"},next:{title:"\uc0c1\uc790 \ubc16\uc73c\ub85c \ud0c8\ucd9c\ud558\uae30",permalink:"/docs/book/getting-out-of-the-box"}},l={},c=[{value:"\uc2e4\ud589 \uad6c\uc870",id:"\uc2e4\ud589-\uad6c\uc870",level:3},{value:"\ud30c\uc11c(Parser)",id:"\ud30c\uc11cparser",level:3},{value:"\uc804\ucc98\ub9ac\uae30(Preprocessor)",id:"\uc804\ucc98\ub9ac\uae30preprocessor",level:3},{value:"\uc635\ud2f0\ub9c8\uc774\uc800(Optimizer)",id:"\uc635\ud2f0\ub9c8\uc774\uc800optimizer",level:3},{value:"\ucffc\ub9ac \uc2e4\ud589 \uc5d4\uc9c4(Query Execution Engine)",id:"\ucffc\ub9ac-\uc2e4\ud589-\uc5d4\uc9c4query-execution-engine",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}];function d(e){const t={a:"a",br:"br",h3:"h3",mermaid:"mermaid",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"\uc2e4\ud589-\uad6c\uc870",children:"\uc2e4\ud589 \uad6c\uc870"}),"\n",(0,r.jsx)(t.mermaid,{value:'graph BT\n\tsubgraph MySQL[MySQL Engine]\n\t  client -- "1. SQL\uc744 \uc2e4\ud589\ud55c\ub2e4." --\x3e parser\n\t\tparser -- "2. SQL\uc744 \ucd5c\uc18c \ub2e8\uc704\ub85c \ubd84\ub9ac\ud558\uc5ec \uad6c\uc131 \uc694\uc18c\ub97c \ud2b8\ub9ac\ub85c \uc791\uc131\ud55c\ub2e4." --\x3e pre-processor\n\t\tpre-processor -- "3. \ud2b8\ub9ac\uc758 \uad6c\uc131 \uc694\uc18c\ub85c \uad8c\ud55c \ubc0f \uc874\uc7ac \uc5ec\ubd80\ub97c \ud655\uc778\ud55c\ub2e4."--\x3e optimizer\n\t\toptimizer -- "4. \uc2e4\ud589\uacc4\ud68d\uc744 \uc804\ub2ec\ud55c\ub2e4." --\x3e QEE[query execution engine]\n\tend\n\n\tQEE <-- "5. \ub370\uc774\ud130\ub97c \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c \uac00\uc838\uc628\ub2e4" --\x3e SE[storage engine]\n\tQEE -- "6. \uacb0\uacfc\ub97c \uc804\ub2ec\ud55c\ub2e4." --\x3e client'}),"\n",(0,r.jsx)(t.h3,{id:"\ud30c\uc11cparser",children:"\ud30c\uc11c(Parser)"}),"\n",(0,r.jsxs)(t.p,{children:["\uc2e4\ud589\ub41c SQL\ubb38\uc744 \ucd5c\uc18c \ub2e8\uc704\ub85c \ubd84\ub9ac\ud574\uc11c \ud2b8\ub9ac\ub97c \ub9cc\ub4e0\ub2e4.",(0,r.jsx)(t.br,{}),"\n","\ud2b8\ub9ac\ub97c \ub9cc\ub4e4\uba70 \uae30\ubcf8\uc801\uc778 \ubb38\ubc95 \uac80\uc0ac\ub97c \uc218\ud589\ud55c\ub2e4."]}),"\n",(0,r.jsx)(t.h3,{id:"\uc804\ucc98\ub9ac\uae30preprocessor",children:"\uc804\ucc98\ub9ac\uae30(Preprocessor)"}),"\n",(0,r.jsxs)(t.p,{children:["\ud30c\uc11c\uc5d0\uc11c \uc0dd\uc131\ud55c \ud30c\uc11c \ud2b8\ub9ac\ub97c \ubc14\ud0d5\uc73c\ub85c SQL\ubb38\uc5d0 \uad6c\uc870\uc801\uc778 \ubb38\uc81c\uc810\uc774 \uc5c6\ub294\uc9c0 \ud30c\uc545\ud55c\ub2e4.",(0,r.jsx)(t.br,{}),"\n","SQL \uad6c\ubb38\uc5d0 \uc791\uc131\ub41c \ud14c\uc774\ube14, \uc5f4\uacfc \uac19\uc740 \uc624\ube0c\uc81d\ud2b8\uac00 \uc2e4\uc81c\ub85c \uc874\uc7ac\ud558\ub294\uc9c0, \uc811\uadfc \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."]}),"\n",(0,r.jsx)(t.h3,{id:"\uc635\ud2f0\ub9c8\uc774\uc800optimizer",children:"\uc635\ud2f0\ub9c8\uc774\uc800(Optimizer)"}),"\n",(0,r.jsxs)(t.p,{children:["\ud30c\uc11c \ud2b8\ub9ac\ub97c \ubc14\ud0d5\uc73c\ub85c \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uc870\uac74\uc740 \uc81c\uac70\ud558\uac70\ub098 \uc5f0\uc0b0 \uacfc\uc815\uc744 \ub2e8\uc21c\ud654 \uc2dc\ud0a8\ub2e4.",(0,r.jsx)(t.br,{}),"\n","\ud14c\uc774\ube14\uc758 \uc811\uadfc \uc21c\uc11c, \uc778\ub371\uc2a4 \uc0ac\uc6a9 \uc5ec\ubd80\uc640 \uac19\uc740 \uc2e4\ud589 \uacc4\ud68d\uc744 \uc218\ub9bd\ud55c\ub2e4."]}),"\n",(0,r.jsx)(t.h3,{id:"\ucffc\ub9ac-\uc2e4\ud589-\uc5d4\uc9c4query-execution-engine",children:"\ucffc\ub9ac \uc2e4\ud589 \uc5d4\uc9c4(Query Execution Engine)"}),"\n",(0,r.jsxs)(t.p,{children:["\uc635\ud2f0\ub9c8\uc774\uc800\uc5d0\uc11c \uc218\ub9bd\ud55c \uc2e4\ud589 \uacc4\ud68d\uc744 \ucc38\uace0\ud558\uc5ec, \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4.",(0,r.jsx)(t.br,{}),"\n","MySQL \uc5d4\uc9c4\uc758 \ubd80\ud558\ub97c \uc904\uc774\ub824\uba74 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ub370\uc774\ud130\uc591\uc744 \uc904\uc774\ub294 \uac8c \ub9e4\uc6b0 \uc911\uc694\ud558\ub2e4."]}),"\n",(0,r.jsx)(t.h3,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,r.jsxs)(t.p,{children:["2\uc7a5 SQL \ud29c\ub2dd \uc6a9\uc5b4\ub97c \uc9c1\uad00\uc801\uc73c\ub85c \uc774\ud574\ud558\uae30, \uc5c5\ubb34\uc5d0 \ubc14\ub85c \uc4f0\ub294 SQL \ud29c\ub2dd - \uc591\ubc14\ub978",(0,r.jsx)(t.br,{}),"\n","16\uc7a5 \ubcf5\uc81c, Real MySQL 8.0 - \ubc31\uc740\ube48, \uc774\uc131\uc6b1",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/pluggable-storage-overview.html",children:"https://dev.mysql.com/doc/refman/8.0/en/pluggable-storage-overview.html"})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);