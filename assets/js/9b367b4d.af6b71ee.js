"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),c=m(a),s=r,u=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(u,i(i({ref:t},b),{},{components:a})):n.createElement(u,i({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900",slug:17,tags:["DataBase","Transaction","Isolation"]},i=void 0,o={permalink:"/17",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-04-05-\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900.mdx",source:"@site/blog/2023-04-05-\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900.mdx",title:"\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900",description:"\ud2b8\ub79c\uc7ad\uc158(Transaction)",date:"2023-04-05T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 5\uc77c",tags:[{label:"DataBase",permalink:"/tags/data-base"},{label:"Transaction",permalink:"/tags/transaction"},{label:"Isolation",permalink:"/tags/isolation"}],readingTime:9.68,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ud2b8\ub79c\uc7ad\uc158\uacfc \uaca9\ub9ac\uc218\uc900",slug:"17",tags:["DataBase","Transaction","Isolation"]},prevItem:{title:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",permalink:"/18"},nextItem:{title:"\ud14c\uc2a4\ud2b8 \ub300\uc5ed",permalink:"/16"}},p={authorsImageUrls:[]},m=[{value:"\ud2b8\ub79c\uc7ad\uc158(Transaction)",id:"\ud2b8\ub79c\uc7ad\uc158transaction",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158\uc758 \uc18d\uc131(ACID)",id:"\ud2b8\ub79c\uc7ad\uc158\uc758-\uc18d\uc131acid",level:3},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc8fc\uc758\uc0ac\ud56d",id:"\ud2b8\ub79c\uc7ad\uc158-\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"\uaca9\ub9ac \uc218\uc900(Isolation level)",id:"\uaca9\ub9ac-\uc218\uc900isolation-level",level:2},{value:"READ UNCOMMITTED",id:"read-uncommitted",level:3},{value:"READ COMMITTED",id:"read-committed",level:3},{value:"REPEATABLE READ",id:"repeatable-read",level:3},{value:"SERIALIZABLE",id:"serializable",level:3},{value:"\uaca9\ub9ac \uc218\uc900\uc5d0 \ub530\ub978 \ubd80\uc815\ud569 \ubb38\uc81c",id:"\uaca9\ub9ac-\uc218\uc900\uc5d0-\ub530\ub978-\ubd80\uc815\ud569-\ubb38\uc81c",level:2},{value:"\ub354\ud2f0 \ub9ac\ub4dc(Dirty read)",id:"\ub354\ud2f0-\ub9ac\ub4dcdirty-read",level:3},{value:"\ubc18\ubcf5 \uac00\ub2a5\ud558\uc9c0 \uc54a\uc740 \uc870\ud68c(Non-repeatable read)",id:"\ubc18\ubcf5-\uac00\ub2a5\ud558\uc9c0-\uc54a\uc740-\uc870\ud68cnon-repeatable-read",level:3},{value:"\ud32c\ud140 \ub9ac\ub4dc(Phantom read, Phantom row)",id:"\ud32c\ud140-\ub9ac\ub4dcphantom-read-phantom-row",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}],b={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158transaction"},"\ud2b8\ub79c\uc7ad\uc158(Transaction)"),(0,r.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ub17c\ub9ac\uc801 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud55c \uc791\uc5c5\uc758 \ub2e8\uc704\ub97c \ub9d0\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ud2b8\ub79c\uc7ad\uc158\uc740 \uc791\uc5c5\uc758 \uc644\uc804\uc131\uacfc \ub370\uc774\ud130\uc758 \uc815\ud569\uc131\uc744 \ubcf4\uc7a5\ud574 \uc900\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub17c\ub9ac\uc801\uc778 \uc791\uc5c5 \uc14b\uc744 \uc644\ubcbd\ud558\uac8c \ucc98\ub9ac\ud558\uac70\ub098, \uc624\ub958 \uc2dc \uc791\uc5c5\uc758 \uc77c\ubd80\ub9cc \uc801\uc6a9\ub418\ub294 \ud604\uc0c1\uc744 \ub9c9\uc544\uc900\ub2e4.  "),(0,r.kt)("h3",{id:"\ud2b8\ub79c\uc7ad\uc158\uc758-\uc18d\uc131acid"},"\ud2b8\ub79c\uc7ad\uc158\uc758 \uc18d\uc131(ACID)"),(0,r.kt)("p",null,"\uc6d0\uc790\uc131(Atomicity): \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc5d0\uc11c \uc2e4\ud589\ub41c \uc791\uc5c5\ub4e4\uc740 \ubaa8\ub450 \uc131\uacf5\ud558\uac70\ub098, \uc2e4\ud328\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc77c\uad00\uc131(Consistency): \ud2b8\ub79c\uc7ad\uc158\uc774 \uc218\ud589\ub418\uae30 \uc804\uacfc \ud6c4\uc5d0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc77c\uad00\ub41c \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uaca9\ub9ac\uc131(Isolation): \uac01\uac01\uc758 \ud2b8\ub79c\uc7ad\uc158\uc740 \ub3c5\ub9bd\uc801\uc774\ub77c \uc11c\ub85c\uc5d0\uac8c \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc9c0\uc18d\uc131(Durability): \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub41c\ub2e4\uba74 \uc601\uad6c\uc801\uc73c\ub85c \uacb0\uacfc\uc5d0 \ubc18\uc601\ub418\uc5b4\uc57c \ud55c\ub2e4.  "),(0,r.kt)("h3",{id:"\ud2b8\ub79c\uc7ad\uc158-\uc8fc\uc758\uc0ac\ud56d"},"\ud2b8\ub79c\uc7ad\uc158 \uc8fc\uc758\uc0ac\ud56d"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc740 \uaf2d \ud544\uc694\ud55c \ucd5c\uc18c\uc758 \ucf54\ub4dc\uc5d0\ub9cc \uc801\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.(\ud2b8\ub79c\uc7ad\uc158\uc758 \ubc94\uc704\ub97c \ucd5c\uc18c\ud654\ud558\ub77c)",(0,r.kt)("br",{parentName:"p"}),"\n","\uad6c\ud604\ud574\uc57c \ud558\ub294 \uc5c5\ubb34\uc5d0 \ub530\ub77c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubb36\uac70\ub098 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc81c\uc678\ud558\uace0, \ub124\ud2b8\uc6cc\ud06c \uc791\uc5c5\uc774 \uc788\ub294 \uacbd\uc6b0 \ubc18\ub4dc\uc2dc \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubc30\uc81c\ud574\uc57c \ud55c\ub2e4.  "),(0,r.kt)("admonition",{title:"\uc65c \ub124\ud2b8\uc6cc\ud06c \uc791\uc5c5\uc774 \uc788\uc744 \ub54c \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubc30\uc81c\ud574\uc57c \ud560\uae4c? \ud83e\udd14",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ub370\uc774\ud130\uc758 \uc77c\uad00\uc131\uacfc \uc548\uc804\uc131\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud574 \ubc30\uc81c\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub124\ud2b8\uc6cc\ud06c \uc791\uc5c5\uc744 \ud2b8\ub79c\uc7ad\uc158 \ub0b4\ubd80\uc5d0 \ud3ec\ud568\ud55c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c \uc791\uc5c5\uc774 \uc911\uac04\uc5d0 \uc2e4\ud328\ud560 \uac00\ub2a5\uc131(\uc548\uc804\uc131 X)"),(0,r.kt)("li",{parentName:"ul"},"\ud1b5\uc2e0\uc73c\ub85c \uc778\ud574 \ub370\uc774\ud130\uac00 \ubcc0\uacbd\ub420 \uc218 \uc788\ub294 \ubd80\ubd84(\uc77c\uad00\uc131 X)"))),(0,r.kt)("h2",{id:"\uaca9\ub9ac-\uc218\uc900isolation-level"},"\uaca9\ub9ac \uc218\uc900(Isolation level)"),(0,r.kt)("p",null,"\uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc774 \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ub420 \ub54c \ud2b9\uc815 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ub370\uc774\ud130\uc758 \uc870\ud68c \ubc0f \ubcc0\uacbd\uc744 \ud5c8\uc6a9\ud560\uc9c0 \uacb0\uc815\ud558\ub294 \uac83\uc744 \ub9d0\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uaca9\ub9ac \uc218\uc900\uc774 \ub192\uc544\uc9c8 \uc218\ub85d \ub3d9\uc2dc \ucc98\ub9ac \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9c0\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\uc9c0\ub9cc, ",(0,r.kt)("inlineCode",{parentName:"p"},"SERIALIZABLE"),"\uc774 \uc544\ub2c8\ub77c\uba74 \ud06c\uac8c \uc131\ub2a5\uc758 \uc800\ud558\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4.  "),(0,r.kt)("h3",{id:"read-uncommitted"},"READ UNCOMMITTED"),(0,r.kt)("p",null,"\uac01 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c\uc758 \ubcc0\uacbd \ub0b4\uc6a9\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT"),"\uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK")," \uc5ec\ubd80\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubcf4\uc778\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub354\ud2f0 \ub9ac\ub4dc \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 \uc815\ud569\uc131\uc758 \ubb38\uc81c\uac00 \ub9ce\uc740 \uaca9\ub9ac \uc218\uc900\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","MySQL \uc0ac\uc6a9\uc2dc \ucd5c\uc18c ",(0,r.kt)("inlineCode",{parentName:"p"},"READ COMMITTED")," \uc774\uc0c1\uc758 \uaca9\ub9ac \uc218\uc900 \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud55c\ub2e4.  "),(0,r.kt)("mermaid",{value:"---\ntitle: READ UNCOMMITTED\n---\nsequenceDiagram\n    Alice->>Database: BEGIN\n    Alice->>Database: INSERT(Alice)\n    Bob->>Database: SELECT\n    Database->>+Bob: Alice\n    Alice->>Database: COMMIT(Alice)"}),(0,r.kt)("h3",{id:"read-committed"},"READ COMMITTED"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\ub354\ub77c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT"),"\uc774 \uc644\ub8cc\ub41c \ub370\uc774\ud130\ub9cc \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc870\ud68c\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc624\ub77c\ud074 DBMS\uc5d0\uc11c \uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uaca9\ub9ac \uc218\uc900\uc774\uba70, \uc628\ub77c\uc778 \uc11c\ube44\uc2a4\uc5d0\uc11c \uac00\uc7a5 \ub9ce\uc774 \uc120\ud0dd\ub418\ub294 \uaca9\ub9ac \uc218\uc900\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"REPEATABLE READ"),"\uac00 \ubcf4\uc7a5\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"NON-REPEATABLE READ")," \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4.  "),(0,r.kt)("mermaid",{value:"---\ntitle: READ COMMITTED\n---\nsequenceDiagram\n    Alice->>Database: BEGIN\n    Alice->>Database: UPDATE(Alice to Bob)\n    Bob->>Database: SELECT\n    Database->>+Bob: Alice(Undo log)\n    Alice->>Database: COMMIT"}),(0,r.kt)("h3",{id:"repeatable-read"},"REPEATABLE READ"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc2dc\uc791\ub418\uae30 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT"),"\uc774 \uc644\ub8cc\ub41c \ub0b4\uc6a9\uc5d0 \ub300\ud574\uc11c\ub9cc \uc870\ud68c\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","MySQL\uc758 InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c \uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uaca9\ub9ac \uc218\uc900\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","MVCC\ub97c \uc774\uc6a9\ud574 \uc5b8\ub450(Undo) \uc601\uc5ed\uc5d0 \ubc31\uc5c5\ub41c \uc774\uc804 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \ub3d9\uc77c \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc904 \uc218 \uc788\uac8c \ubcf4\uc7a5\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub3d9\uc77c\ud55c \uacb0\uacfc\ub97c \ubcf4\uc7a5\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 InnoDB \ud2b8\ub79c\uc7ad\uc158\uc740 \uc21c\ucc28\uc801\uc73c\ub85c \uc99d\uac00\ud558\ub294 \uace0\uc720\ud55c \ud2b8\ub79c\uc7ad\uc158 \ubc88\ud638\ub97c \uac00\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Undo \uc601\uc5ed\uc5d0 \ubc31\uc5c5\ub41c \ub808\ucf54\ub4dc\uc5d0\ub294 \ubcc0\uacbd\uc744 \ubc1c\uc0dd\uc2dc\ud0a8 \ud2b8\ub79c\uc7ad\uc158\uc758 \ubc88\ud638\uac00 \ud3ec\ud568\ub418\uc5b4\uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Undo \uc601\uc5ed\uc758 \ubc31\uc5c5\ub41c \ub370\uc774\ud130\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc774 \ubd88\ud544\uc694\ud558\ub2e4\uace0 \ud310\ub2e8\ud558\ub294 \uacbd\uc6b0 \uc0ad\uc81c\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REPEATABLE READ")," \uaca9\ub9ac \uc218\uc900\uc5d0\uc11c\ub294 MVCC\ub97c \ubcf4\uc7a5\ud558\uae30 \uc704\ud574 \uac00\uc7a5 \uc624\ub798\ub41c \ud2b8\ub79c\uc7ad\uc158 \ubc88\ud638\ubcf4\ub2e4 \uc55e\uc120 Undo \uc601\uc5ed\uc758 \ub370\uc774\ud130\ub294 \uc0ad\uc81c\ud558\uc9c0 \uc54a\ub294\ub2e4. ")),(0,r.kt)("p",null,"InnoDB\uc5d0\uc11c\ub294 \uac2d \ub77d\uacfc \ub125\uc2a4\ud2b8 \ud0a4 \ub77d\uc744 \uc774\uc6a9\ud558\uc5ec \ud32c\ud140 \ub9ac\ub4dc \ud604\uc0c1\uc744 \ubc29\uc9c0\ud55c\ub2e4.  "),(0,r.kt)("mermaid",{value:"---\ntitle: REPEATABLE READ\n---\nsequenceDiagram\n    participant Alice\n    participant Database\n    participant Bob\n    Bob->>Database: BEGIN(TRX-ID: 1)\n    Bob->>Database: SELECT\n    Database->>+Bob: Alice\n    Alice->>Database: BEGIN(TRX-ID: 2)\n    Alice->>Database: UPDATE(Alice to Bob)\n    Alice->>Database: COMMIT\n    Bob->>Database: SELECT\n    Database->>+Bob: Alice(Undo log)"}),(0,r.kt)("admonition",{title:"\uac2d \ub78d(Gap lock)\uacfc \ub125\uc2a4\ud2b8 \ud0a4 \ub77d(Next-key lock)",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uac2d \ub77d: \ub808\ucf54\ub4dc\uc640 \ubc14\ub85c \uc778\uc811\ud55c \ub808\ucf54\ub4dc \uc0ac\uc774\uc758 \uac04\uaca9\ub9cc\uc744 \uc7a0\uadf8\ub294 \ub77d\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub125\uc2a4\ud2b8 \ud0a4 \ub77d: \ub808\ucf54\ub4dc \ub77d\uacfc \uac2d \ub77d\uc744 \ud569\uccd0\ub193\uc740 \ud615\ud0dc\uc758 \uc7a0\uae08\uc73c\ub85c \ub808\ucf54\ub4dc\uc640 \uadf8 \ub808\ucf54\ub4dc \uc55e\uc758 \uac2d \ub77d\uc744 \ud3ec\ud568\ud55c\ub2e4.")),(0,r.kt)("admonition",{title:"MVCC(Multi Version Concurrency Control)",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ub3d9\uc2dc\uc131\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\ub85c \ud558\ub098\uc758 \ub808\ucf54\ub4dc\uc5d0 \ub300\ud574 \uc5ec\ub7ec \uac1c\uc758 \ubc84\uc804\uc774 \ub3d9\uc2dc\uc5d0 \uad00\ub9ac\ub418\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PostgreSQL\uc740 \ub2e4\uc911 \ubc84\uc804\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uac83\uc73c\ub85c MVCC\ub97c \uad6c\ud604\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Oracle, InnoDB\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"Undo log"),"\ub97c \uc774\uc6a9\ud574 \uc774 \uae30\ub2a5\uc744 \uad6c\ud604\ud55c\ub2e4.(\ucd5c\uc2e0 \ubc84\uc804\uc758 \ub370\uc774\ud130\ub9cc DB\uc5d0 \uc800\uc7a5)")),(0,r.kt)("p",{parentName:"admonition"},"\uc7a0\uae08\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc77d\uad00\ub41c \uc77d\uae30\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc774 \ubaa9\uc801\uc774\ub2e4.")),(0,r.kt)("h3",{id:"serializable"},"SERIALIZABLE"),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc9c4\ud589\uc2dc\ud0a4\ub294 \uaca9\ub9ac \uc218\uc900\uc774\uace0 \ub530\ub77c\uc11c \ub3d9\uc2dc \ucc98\ub9ac \uc131\ub2a5\ub3c4 \ub2e4\ub978 \uaca9\ub9ac \uc218\uc900\ubcf4\ub2e4 \ub5a8\uc5b4\uc9c4\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc77d\uace0 \uc4f0\ub294 \ub808\ucf54\ub4dc\ub97c \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c\ub294 \uc811\uadfc\ud560 \uc218 \uc5c6\uace0 \ub2e8\uc21c\ud55c \uc77d\uae30 \uc791\uc5c5\ub3c4 \uacf5\uc720 \uc7a0\uae08(\uc77d\uae30 \uc7a0\uae08)\uc744 \ud68d\ub4dd\ud574\uc57c\ub9cc \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","InnoDB\uc5d0\uc11c\ub294 \ud32c\ud140 \ub9ac\ub4dc \ud604\uc0c1\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"REPEATABLE READ")," \uaca9\ub9ac \uc218\uc900\uc5d0\uc11c \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uad73\uc774 \uc0ac\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4.  "),(0,r.kt)("h2",{id:"\uaca9\ub9ac-\uc218\uc900\uc5d0-\ub530\ub978-\ubd80\uc815\ud569-\ubb38\uc81c"},"\uaca9\ub9ac \uc218\uc900\uc5d0 \ub530\ub978 \ubd80\uc815\ud569 \ubb38\uc81c"),(0,r.kt)("p",null,"\uaca9\ub9ac \uc218\uc900\uc5d0 \ub530\ub77c \ub354\ud2f0 \ub9ac\ub4dc, \ubc18\ubcf5 \uac00\ub2a5\ud558\uc9c0 \uc54a\uc740 \uc870\ud68c, \ud32c\ud140 \ub9ac\ub4dc \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uaca9\ub9ac \uc218\uc900 / \ubd80\uc815\ud569 \ubb38\uc81c"),(0,r.kt)("th",{parentName:"tr",align:null},"\ub354\ud2f0 \ub9ac\ub4dc"),(0,r.kt)("th",{parentName:"tr",align:null},"\ubc18\ubcf5 \uac00\ub2a5\ud558\uc9c0 \uc54a\uc740 \uc870\ud68c"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud32c\ud140 \ub9ac\ub4dc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ UNCOMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"O")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ COMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"O")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REPEATABLE READ"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"O(InnoDB\ub294 X)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERIALIZABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("h3",{id:"\ub354\ud2f0-\ub9ac\ub4dcdirty-read"},"\ub354\ud2f0 \ub9ac\ub4dc(Dirty read)"),(0,r.kt)("p",null,"\uc5b4\ub5a4 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ucc98\ub9ac\ud55c \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc5b4\ub3c4 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ud604\uc0c1",(0,r.kt)("br",{parentName:"p"}),"\n","\ud2b8\ub79c\uc7ad\uc158 \uaca9\ub9ac \uc218\uc900\uc774 READ UNCOMMITTED\uc77c \ub54c \ubc1c\uc0dd\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc608) B\uac00 \ub808\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uace0 \ucee4\ubc0b\uc744 \ud558\uc9c0 \uc54a\uc558\uc9c0\ub9cc, A\uac00 \ud574\ub2f9 \ub808\ucf54\ub4dc\ub97c \uc870\ud68c\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0"),(0,r.kt)("h3",{id:"\ubc18\ubcf5-\uac00\ub2a5\ud558\uc9c0-\uc54a\uc740-\uc870\ud68cnon-repeatable-read"},"\ubc18\ubcf5 \uac00\ub2a5\ud558\uc9c0 \uc54a\uc740 \uc870\ud68c(Non-repeatable read)"),(0,r.kt)("p",null,"\ud55c \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc758 \uac19\uc740 \ud589\uc5d0 \ub450 \ubc88 \uc774\uc0c1 \uc870\ud68c\uac00 \ubc1c\uc0dd\ud588\ub294\ub370, \uadf8 \uac12\uc774 \ub2e4\ub978 \ud604\uc0c1",(0,r.kt)("br",{parentName:"p"}),"\n","\uc608) A\uac00 \ub808\ucf54\ub4dc\ub97c \uc5ec\ub7ec \ubc88 \uc870\ud68c\ud558\ub358 \uc911 B\uac00 \ub808\ucf54\ub4dc\ub97c \ubcc0\uacbd\ud558\uc5ec A\uac00 \uc870\ud68c\ud55c \uac12\uc774 \ub2ec\ub77c\uc9c0\ub294 \uacbd\uc6b0  "),(0,r.kt)("mermaid",{value:"---\ntitle: NON REPEATABLE READ\n---\nsequenceDiagram\n    participant Alice\n    participant Database\n    participant Bob\n    Bob->>Database: BEGIN\n    Bob->>Database: SELECT\n    Database->>+Bob: Alice\n    Alice->>Database: BEGIN\n    Alice->>Database: UPDATE(Alice to Bob)\n    Alice->>Database: COMMIT\n    Bob->>Database: SELECT\n    Database->>+Bob: Bob"}),(0,r.kt)("h3",{id:"\ud32c\ud140-\ub9ac\ub4dcphantom-read-phantom-row"},"\ud32c\ud140 \ub9ac\ub4dc(Phantom read, Phantom row)"),(0,r.kt)("p",null,"\ud55c \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc5d0\uc11c \ub3d9\uc77c\ud55c \ucffc\ub9ac \uc218\ud589\uc2dc, \uc218\ud589 \uacb0\uacfc\uac00 \ub2e4\ub978 \ud604\uc0c1",(0,r.kt)("br",{parentName:"p"}),"\n","\uc608) A\uac00 \ub808\ucf54\ub4dc\ub97c \uc870\ud68c\ud558\uace0 B\uac00 \ub808\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec A\uac00 \ub2e4\uc2dc \uc870\ud68c\ud560 \ub54c \uc874\uc7ac\ud558\uc9c0 \uc54a\uc740 \ub808\ucf54\ub4dc\uac00 \uc870\ud68c\ub418\ub294 \uacbd\uc6b0  "),(0,r.kt)("mermaid",{value:"---\ntitle: PHANTOM READ\n---\nsequenceDiagram\n    participant Alice\n    participant Database\n    participant Bob\n    Bob->>Database: BEGIN(TRX-ID: 1)\n    Bob->>Database: SELECT COUNT\n    Database->>+Bob: 1\n    Alice->>Database: BEGIN(TRX-ID: 2)\n    Alice->>Database: INSERT(Bob)\n    Alice->>Database: COMMIT\n    Bob->>Database: SELECT COUNT\n    Database->>+Bob: 2"}),(0,r.kt)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,r.kt)("p",null,"Real My SQL 8.0 - 5\uc7a5 \ud2b8\ub79c\uc7ad\uc158\uacfc \uc7a0\uae08, \ubc31\uc740\ube48, \uc774\uc131\uc6b1",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html"},"Isolation Level, MySQL")))}d.isMDXComponent=!0}}]);