"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(n),k=r,y=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={title:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",slug:18,tags:["DataBase","Lock","MySQL"]},o=void 0,p={permalink:"/18",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-04-06-MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08.mdx",source:"@site/blog/2023-04-06-MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08.mdx",title:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",description:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",date:"2023-04-06T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 6\uc77c",tags:[{label:"DataBase",permalink:"/tags/data-base"},{label:"Lock",permalink:"/tags/lock"},{label:"MySQL",permalink:"/tags/my-sql"}],readingTime:4.405,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",slug:"18",tags:["DataBase","Lock","MySQL"]},nextItem:{title:"\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900",permalink:"/17"}},c={authorsImageUrls:[]},i=[{value:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",id:"mysql-\uc5d4\uc9c4\uc758-\uc7a0\uae08",level:2},{value:"\uae00\ub85c\ubc8c \ub77d(Global lock)",id:"\uae00\ub85c\ubc8c-\ub77dglobal-lock",level:3},{value:"\ud14c\uc774\ube14 \ub77d(Table lock)",id:"\ud14c\uc774\ube14-\ub77dtable-lock",level:3},{value:"\ub124\uc784\ub4dc \ub77d(Named lock)",id:"\ub124\uc784\ub4dc-\ub77dnamed-lock",level:3},{value:"\uba54\ud0c0\ub370\uc774\ud130 \ub77d(Metadata lock)",id:"\uba54\ud0c0\ub370\uc774\ud130-\ub77dmetadata-lock",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}],m={toc:i};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mysql-\uc5d4\uc9c4\uc758-\uc7a0\uae08"},"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08"),(0,r.kt)("p",null,"MySQL\uc5d0\uc11c\uc758 \ub77d\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4 \ub808\ubca8\uacfc, MySQL \uc5d4\uc9c4 \ub808\ubca8\ub85c \ub098\ub20c \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","MySQL \uc5d4\uc9c4 \ub808\ubca8\uc758 \uc7a0\uae08\uc740 \ubaa8\ub4e0 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4.  "),(0,r.kt)("h3",{id:"\uae00\ub85c\ubc8c-\ub77dglobal-lock"},"\uae00\ub85c\ubc8c \ub77d(Global lock)"),(0,r.kt)("p",null,"MySQL\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc7a0\uae08 \uc911 \uac00\uc7a5 \ub113\uc740 \ubc94\uc704\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc7a0\uae08\uc774\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \ubc94\uc704\ub294 \ud574\ub2f9 \uc11c\ubc84 \uc804\uccb4\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \ub300\uc0c1 \ud14c\uc774\ube14, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0c1\uad00 \uc5c6\uc774 \ub3d9\uc77c\ud558\uac8c \uc601\ud5a5\uc744 \ubc1b\ub294\ub2e4.")),(0,r.kt)("p",null,"\ud55c \uc138\uc158\uc5d0\uc11c \uae00\ub85c\ubc8c \ub77d\uc744 \ud68d\ub4dd\ud558\uba74 \ud574\uc81c \ub420 \ub54c \uae4c\uc9c0 \uc870\ud68c\ub97c \uc81c\uc678\ud55c \ub300\ubd80\ubd84\uc758 \uba85\ub839\uc774 \ub300\uae30 \uc0c1\ud0dc\uac00 \ub41c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc874\uc7ac\ud558\ub294 MyISAM\uc774\ub098 MEMORY \ud14c\uc774\ube14\uc5d0 \ub300\ud574 \uc77c\uad00\ub41c \ubc31\uc5c5\uc744 \ubc1b\uc544\uc57c\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c\ub294 \ubc31\uc5c5 \uc2dc \uc870\uae08 \ub354 \uac00\ubcbc\uc6b4 \ubc31\uc5c5 \ub77d\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- GLOBAL LOCK\nFLUSH TABLES WITH READ LOCK;\n-- UNLOCK\nUNLOCK TABLES;\n\n-- BACKUP LOCK\nLOCK INSTANCE FOR BACKUP;\n-- UNLOCK\nUNLOCK INSTANCE;\n")),(0,r.kt)("admonition",{title:"MyISAM",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MySQL 5.5 \ubc84\uc804 \uc774\uc804\uc758 \uae30\ubcf8 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ud2b8\ub79c\uc7ad\uc158\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uace0, SELECT \uc791\uc5c5 \uc18d\ub3c4\uac00 \ube60\ub974\ub2e4.")),(0,r.kt)("h3",{id:"\ud14c\uc774\ube14-\ub77dtable-lock"},"\ud14c\uc774\ube14 \ub77d(Table lock)"),(0,r.kt)("p",null,"\uac1c\ubcc4 \ud14c\uc774\ube14 \ub2e8\uc704\ub85c \uc124\uc815\ub418\ub294 \uc7a0\uae08\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uba85\uc2dc\uc801 \ub610\ub294 \ubb35\uc2dc\uc801\uc73c\ub85c \ud2b9\uc815 \ud14c\uc774\ube14\uc758 \ub77d\uc744 \ud68d\ub4dd\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ubb35\uc2dc\uc801 \ub77d\uc740 MyISAM\uc774\ub098 MEMORY \ud14c\uc774\ube14\uc5d0 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uba74 \ubc1c\uc0dd\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","InnoDB \ud14c\uc774\ube14\uc5d0\ub294 DML \ucffc\ub9ac\ub294 \ubb34\uc2dc\ub418\uace0 DDL \uc77c \uacbd\uc6b0\uc5d0\ub9cc \ubb35\uc2dc\uc801\uc73c\ub85c \ub77d\uc744 \ud68d\ub4dd\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- TABLE LOCK\nLOCK TABLES table_name [ READ | WRITE ]\n\n-- UNLOCK\nUNLOCK TABLES;\n")),(0,r.kt)("h3",{id:"\ub124\uc784\ub4dc-\ub77dnamed-lock"},"\ub124\uc784\ub4dc \ub77d(Named lock)"),(0,r.kt)("p",null,"\uc784\uc758\uc758 \ubb38\uc790\uc5f4\uc5d0 \ub300\ud55c \uc7a0\uae08\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc7a0\uae08\uc73c\ub85c \uc720\uc800 \ub808\ubca8 \ub77d\uc73c\ub85c\ub3c4 \ubd88\ub9b0\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc5ec\ub7ec \uc2a4\ub808\ub4dc\ub098 \ud504\ub85c\uc138\uc2a4\uac00 \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\ub824\ub294 \uacbd\uc6b0, \ub3d9\uc2dc\uc5d0 \uc218\uc815\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \ubcf4\ud638\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- aGVyYg== \ub77c\ub294 \ubb38\uc790\uc5f4\uc5d0 \ub300\ud55c \uc7a0\uae08 \ud68d\ub4dd, \uc774\ubbf8 \uc7a0\uae08\uc744 \uc0ac\uc6a9\uc911\uc778 \uacbd\uc6b0 1\ucd08 \ub3d9\uc548\ub9cc \ub300\uae30\nSELECT GET_LOCK('aGVyYg==', 1);\n\n-- \ubb38\uc790\uc5f4\uc5d0 \ub300\ud55c \uc7a0\uae08\uc774 \uc124\uc815\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4.\nSELECT IS_FREE_LOCK('aGVyYg==');\n\n-- \ubb38\uc790\uc5f4\uc5d0 \ub300\ud55c \uc7a0\uae08\uc744 \ud574\uc81c\ud55c\ub2e4.\nSELECT RELEASE_LOCK('aGVyYg==');\n\n-- \uc704 3\uac1c \ud568\uc218 \ubaa8\ub450 \uc815\uc0c1\uc801\uc73c\ub85c \ub77d\uc744 \ud68d\ub4dd\ud558\uac70\ub098 \ud574\uc81c\ud55c \uacbd\uc6b0\uc5d0 1\uc744, \uc544\ub2c8\uba74 0\uc744 \ubc18\ud658\ud55c\ub2e4.\n\n-- \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc5d0 \ub300\ud55c \uc7a0\uae08\uc744 \ud574\uc81c\ud55c\ub2e4. \ud574\uc81c\ub41c \uc7a0\uae08\uc758 \uac1c\uc218\ub97c \ubc18\ud658\ud55c\ub2e4.\nSELECT RELEASE_ALL_LOCKS();\n")),(0,r.kt)("h3",{id:"\uba54\ud0c0\ub370\uc774\ud130-\ub77dmetadata-lock"},"\uba54\ud0c0\ub370\uc774\ud130 \ub77d(Metadata lock)"),(0,r.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac1d\uccb4\uc758 \uc774\ub984\uc774\ub098 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\ub294 \uacbd\uc6b0 \ud68d\ub4dd\ud558\ub294 \uc7a0\uae08\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uba85\uc2dc\uc801\uc73c\ub85c \ud68d\ub4dd \ub610\ub294 \ud574\uc81c \ud560 \uc218 \uc5c6\uc9c0\ub9cc \ud14c\uc774\ube14\uc758 \uc774\ub984\uc744 \ubcc0\uacbd\ud558\ub294 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \ud68d\ub4dd\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ubcf4\ud1b5 \ubc30\uce58 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \ud14c\uc774\ube14\uc744 \ubc14\uafd4\uc57c\ud558\ub294 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ub41c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \ubc30\uce58 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \ubcc4\ub3c4\uc758 \uc784\uc2dc \ud14c\uc774\ube14\uc5d0 \uc11c\ube44\uc2a4\uc6a9 \ub7ad\ud0b9 \ub370\uc774\ud130 \uc0dd\uc131 \ud6c4 \uae30\uc874 \ud14c\uc774\ube14\uc744 \ubc31\uc5c5\ud558\ub294 \uacbd\uc6b0\n-- \uc544\ub798 \uad6c\ubb38 \uc2e4\ud589 \uc2dc \uba54\ud0c0\ub370\uc774\ud130 \ub77d\uc744 \uc790\ub3d9\uc73c\ub85c \ud68d\ub4dd\ud55c\ub2e4.\nRENAME TABLE rank TO rank_backup, rank_new TO rank;\n")),(0,r.kt)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,r.kt)("p",null,"Real My SQL 8.0 - 5\uc7a5 \ud2b8\ub79c\uc7ad\uc158\uacfc \uc7a0\uae08, \ubc31\uc740\ube48, \uc774\uc131\uc6b1",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gywn.net/2013/12/mysql-user-level-lock/"},"MySQL\uc758 User Level Lock\ub97c \ud65c\uc6a9\ud55c\ub2e4\uba74?, gywndi"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/locking-functions.html#function_release-all-locks"},"Locking Functions, MySQL 5.7 Reference"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_release-all-locks"},"Locking Functions, MySQL 8.0 Reference")))}s.isMDXComponent=!0}}]);