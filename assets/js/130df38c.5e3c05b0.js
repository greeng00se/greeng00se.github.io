"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6493],{83278:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const c={title:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08",slug:"innodb-lock",tags:["DataBase","Lock","InnoDB"]},l=void 0,r={permalink:"/innodb-lock",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-2/2023-04-07-InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08.mdx",source:"@site/blog/2023-2/2023-04-07-InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08.mdx",title:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08",description:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08",date:"2023-04-07T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 7\uc77c",tags:[{label:"DataBase",permalink:"/tags/data-base"},{label:"Lock",permalink:"/tags/lock"},{label:"InnoDB",permalink:"/tags/inno-db"}],readingTime:5.805,hasTruncateMarker:!1,authors:[],frontMatter:{title:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08",slug:"innodb-lock",tags:["DataBase","Lock","InnoDB"]},unlisted:!1,prevItem:{title:"[\ucc45] \uc0c1\uc790 \ubc16\uc5d0 \uc788\ub294 \uc0ac\ub78c",permalink:"/book-leadership-and-self-deception"},nextItem:{title:"MySQL \uc5d4\uc9c4\uc758 \uc7a0\uae08",permalink:"/mysql-lock"}},o={authorsImageUrls:[]},d=[{value:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08",id:"innodb-\uc2a4\ud1a0\ub9ac\uc9c0-\uc5d4\uc9c4\uc758-\uc7a0\uae08",level:2},{value:"Shared &amp; Exclusive Locks",id:"shared--exclusive-locks",level:3},{value:"Intention Locks",id:"intention-locks",level:3},{value:"Record Locks",id:"record-locks",level:3},{value:"Gap Locks",id:"gap-locks",level:3},{value:"Next-Key Locks",id:"next-key-locks",level:3},{value:"AUTO-INC Locks",id:"auto-inc-locks",level:3},{value:"\uc7a0\uae08 \uc608\uc2dc",id:"\uc7a0\uae08-\uc608\uc2dc",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}];function h(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"innodb-\uc2a4\ud1a0\ub9ac\uc9c0-\uc5d4\uc9c4\uc758-\uc7a0\uae08",children:"InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc758 \uc7a0\uae08"}),"\n",(0,t.jsxs)(e.p,{children:["MySQL\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc7a0\uae08\uacfc \ubcc4\uac1c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4 \ub0b4\ubd80\uc5d0\uc11c \ub85c\uc6b0 \ub2e8\uc704\uc758 \uc7a0\uae08\uc744 \uc9c0\uc6d0\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ubcf4\ud1b5 \uba85\uc2dc\uc801\uc73c\ub85c \uc7a0\uae08\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub294 \ub4dc\ubb3c\uace0, \uaca9\ub9ac \uc218\uc900\uc5d0 \ub530\ub77c \ubb35\uc2dc\uc801\uc73c\ub85c \uc7a0\uae08\uc774 \uc0ac\uc6a9\ub41c\ub2e4."]}),"\n",(0,t.jsxs)(e.p,{children:["\ub3d9\uc2dc\uc131 \uc81c\uc5b4 \ubc29\uc2dd\uc5d0\ub294 \ub099\uad00\uc801\uc778 \ubc29\uc2dd\uacfc \ube44\uad00\uc801\uc778 \ubc29\uc2dd\uc774 \uc788\ub2e4.",(0,t.jsx)(e.br,{}),"\n","InnoDB\ub294 \uae30\ubcf8\uc801\uc73c\ub85c MVCC(\ub2e4\uc911 \ubc84\uc804 \ub3d9\uc2dc\uc131 \uc81c\uc5b4)\ub97c \ud1b5\ud574 \ub099\uad00\uc801\uc778 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \ub77d\uc744 \ud1b5\ud574 \ud2b9\uc815 \uc0c1\ud669\uc5d0\uc11c \ube44\uad00\uc801\uc778 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,t.jsx)(e.admonition,{title:"\ub099\uad00\uc801 \ub3d9\uc2dc\uc131 \uc81c\uc5b4(OCC, Optimistic concurrency control)",type:"note",children:(0,t.jsx)(e.p,{children:"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc11c\ub85c \ucda9\ub3cc\ud558\uc9c0 \uc54a\ub294\ub2e4\uace0 \uac00\uc815\ud558\ub294 \ubc29\uc2dd"})}),"\n",(0,t.jsx)(e.admonition,{title:"\ube44\uad00\uc801 \ub3d9\uc2dc\uc131 \uc81c\uc5b4(PCC, Pessimistic Concurrency Control)",type:"note",children:(0,t.jsxs)(e.p,{children:["\ud2b8\ub79c\uc7ad\uc158\uc774 \ucda9\ub3cc\ud558\ub294 \uac00\uc815\ud558\uc5d0 \uc7a0\uae08\uc744 \uac70\ub294 \ubc29\uc2dd",(0,t.jsx)(e.br,{}),"\n","\uc77c\ubc18\uc801\uc73c\ub85c\xa0Shared Lock, Exclusive Lock\uc744 \ud1b5\ud574 \uc774\ub97c \uad6c\ud604\ud55c\ub2e4."]})}),"\n",(0,t.jsx)(e.h3,{id:"shared--exclusive-locks",children:"Shared & Exclusive Locks"}),"\n",(0,t.jsx)(e.p,{children:"InnoDB\ub294 \ub85c\uc6b0 \ub2e8\uc704\uc758 \uc7a0\uae08\uc744 \uc218\ud589\ud560 \ub54c \uacf5\uc720 \uc7a0\uae08\uacfc \ubc30\ud0c0\uc801 \uc7a0\uae08\uc744 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uacf5\uc720 \uc7a0\uae08(S, shared lock)"})}),"\n",(0,t.jsxs)(e.p,{children:["\ub370\uc774\ud130 \uc870\ud68c\ub97c \uc704\ud55c \ub77d, \uc77d\uae30 \uc7a0\uae08(read lock)\uc73c\ub85c\ub3c4 \ubd88\ub9b0\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc77d\uae30\uac00 \uac00\ub2a5\ud558\uc9c0\ub9cc, \uc4f0\uae30\ub294 \ubd88\uac00\ub2a5\ud558\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\uc608) ",(0,t.jsx)(e.code,{children:"SELECT * FROM table_name WHERE id = 1 LOCK IN SHARE MODE;"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\ubc30\ud0c0\uc801 \uc7a0\uae08(X, exclusive lock)"})}),"\n",(0,t.jsxs)(e.p,{children:["\ub370\uc774\ud130 \ubcc0\uacbd\uc744 \uc704\ud55c \ub77d, \uc4f0\uae30 \uc7a0\uae08(write lock)\uc73c\ub85c\ub3c4 \ubd88\ub9b0\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ub77d\uc744 \uac74 \ud2b8\ub79c\uc7ad\uc158\ub9cc\uc774 \ud574\ub2f9 \ub370\uc774\ud130\uc5d0 \uc811\uadfc \uac00\ub2a5\ud558\ub2e4. \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc758 \uacbd\uc6b0 \uc77d\uae30, \uc4f0\uae30\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\uc608) ",(0,t.jsx)(e.code,{children:"SELECT * FROM table_name WHERE id = 1 FOR UPDATE;"})]}),"\n",(0,t.jsx)(e.h3,{id:"intention-locks",children:"Intention Locks"}),"\n",(0,t.jsxs)(e.p,{children:["InnoDB\ub294 \ub85c\uc6b0 \ub2e8\uc704 \uc7a0\uae08\uacfc \ud14c\uc774\ube14 \uc7a0\uae08\uc758 \uacf5\uc874\uc744 \uc704\ud574 \uc778\ud14d\uc158 \uc7a0\uae08\uc744 \uc9c0\uc6d0\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ud14c\uc774\ube14\uc5d0 \uc788\ub294 \ub85c\uc6b0\uc5d0 \ub300\ud574\uc11c \ub098\uc911\uc5d0 \uc694\uccad\ub418\ub294 \uac83\uc774 \uc5b4\ub5a4 \ud615\ud0dc\uc758 \uc7a0\uae08\uc778\uc9c0 \uac00\ub9ac\ud0a4\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\uae30\ubcf8\uc801\uc73c\ub85c \ub85c\uc6b0 \ub2e8\uc704 \uc7a0\uae08\uc744 \uc218\ud589\ud558\uae30 \uc804\uc5d0 \uc778\ud150\uc158 \uc7a0\uae08\uc744 \uba3c\uc800 \ud68d\ub4dd\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\uc778\ud150\uc158 \ub77d\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \ucda9\ub3cc\uc744 \ubc29\uc9c0\ud558\uace0 \ub370\ub4dc\ub77d\uc744 \ubc29\uc9c0\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uc778\ud150\uc158 \uacf5\uc720 \uc7a0\uae08(IS, intention shared lock)"})}),"\n",(0,t.jsx)(e.p,{children:"\ud2b8\ub79c\uc7ad\uc158\uc774 \ud14c\uc774\ube14\uc758 \uac1c\ubcc4 \ub85c\uc6b0\uc5d0 \ub300\ud55c \uacf5\uc720 \uc7a0\uae08\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uc778\ud150\uc158 \ubc30\ud0c0\uc801 \uc7a0\uae08(IX, intention exclusive lock)"})}),"\n",(0,t.jsx)(e.p,{children:"\ud2b8\ub79c\uc7ad\uc158\uc774 \ud14c\uc774\ube14\uc758 \uac1c\ubcc4 \ub85c\uc6b0\uc5d0 \ub300\ud55c \ubc30\ud0c0\uc801 \uc7a0\uae08\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"** \uc7a0\uae08\uac04\uc758 \ud638\ud658\uc131 **"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"X"}),(0,t.jsx)(e.th,{children:"IX"}),(0,t.jsx)(e.th,{children:"S"}),(0,t.jsx)(e.th,{children:"IS"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"X"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Conflict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IX"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Compatible"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Compatible"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"S"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Compatible"}),(0,t.jsx)(e.td,{children:"Compatible"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IS"}),(0,t.jsx)(e.td,{children:"Conflict"}),(0,t.jsx)(e.td,{children:"Compatible"}),(0,t.jsx)(e.td,{children:"Compatible"}),(0,t.jsx)(e.td,{children:"Compatible"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"record-locks",children:"Record Locks"}),"\n",(0,t.jsxs)(e.p,{children:["\ub808\ucf54\ub4dc \uc790\uccb4\ub9cc\uc744 \uc7a0\uadf8\ub294 \ub77d\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\n","InnoDB \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc740 \ub808\ucf54\ub4dc \uc790\uccb4\uac00 \uc544\ub2c8\ub77c \uc778\ub371\uc2a4\uc758 \ub808\ucf54\ub4dc\ub97c \uc7a0\uadfc\ub2e4."]}),"\n",(0,t.jsx)(e.h3,{id:"gap-locks",children:"Gap Locks"}),"\n",(0,t.jsxs)(e.p,{children:["\ub808\ucf54\ub4dc\uc640 \ubc14\ub85c \uc778\uc811\ud55c \ub808\ucf54\ub4dc \uc0ac\uc774\uc758 \uac04\uaca9\ub9cc\uc744 \uc7a0\uadf8\ub294 \ub77d\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ub808\ucf54\ub4dc\uc640 \ub808\ucf54\ub4dc \uc0ac\uc774\uc758 \uac04\uaca9\uc5d0 \uc0c8\ub85c\uc6b4 \ub808\ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\ub294 \uac83\uc744 \uc81c\uc5b4\ud558\uace0, \ub125\uc2a4\ud2b8 \ud0a4 \ub77d\uc758 \uc77c\ubd80\ub85c \uc0ac\uc6a9\ub41c\ub2e4."]}),"\n",(0,t.jsx)(e.h3,{id:"next-key-locks",children:"Next-Key Locks"}),"\n",(0,t.jsxs)(e.p,{children:["\ub808\ucf54\ub4dc \ub77d\uacfc \uac2d \ub77d\uc744 \ud569\uccd0\ub193\uc740 \ud615\ud0dc\uc758 \uc7a0\uae08\uc73c\ub85c \ub808\ucf54\ub4dc\uc640 \uadf8 \ub808\ucf54\ub4dc \uc55e\uc758 \uac2d \ub77d\uc744 \ud3ec\ud568\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.code,{children:"REPEATABLE READ"})," \uaca9\ub9ac \uc218\uc900\uc5d0\uc11c \ud32c\ud140 \ub9ac\ub4dc\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud55c \uc7a0\uae08\uc774\ub2e4."]}),"\n",(0,t.jsx)(e.h3,{id:"auto-inc-locks",children:"AUTO-INC Locks"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"AUTO_INCREMENT"})," \uce7c\ub9bc\uc774 \uc0ac\uc6a9\ub41c \ud14c\uc774\ube14\uc5d0 \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \ub808\ucf54\ub4dc\uac00 ",(0,t.jsx)(e.code,{children:"INSERT"}),"\ub418\ub294 \uacbd\uc6b0, \uac01 \ub808\ucf54\ub4dc\ub294 \uc911\ubcf5\ub418\uc9c0 \uc54a\uace0 \uc800\uc7a5\ub41c \uc21c\uc11c\ub300\ub85c \uc99d\uac00\ud558\ub294 \uc77c\ub828\ubc88\ud638 \uac12\uc744 \uac00\uc838\uc57c \ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","InnoDB \ub294 \ub0b4\ubd80\uc801\uc73c\ub85c AUTO-INC \ub77d\uc774\ub77c\uace0 \ud558\ub294 \ud14c\uc774\ube14 \uc218\uc900\uc758 \uc7a0\uae08\uc744 \uc0ac\uc6a9\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\n","\ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\uacc4 \uc5c6\uc774 ",(0,t.jsx)(e.code,{children:"INSERT"}),"\ub098 ",(0,t.jsx)(e.code,{children:"REPLACE"})," \ubb38\uc7a5\uc5d0\uc11c ",(0,t.jsx)(e.code,{children:"AUTO_INCREMENT"})," \uac12\uc744 \uac00\uc838\uc624\ub294 \uc21c\uac04\ub9cc \ub77d\uc774 \uac78\ub838\ub2e4\uac00 \ud574\uc81c\ub41c\ub2e4."]}),"\n",(0,t.jsx)(e.h3,{id:"\uc7a0\uae08-\uc608\uc2dc",children:"\uc7a0\uae08 \uc608\uc2dc"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"-- \ub808\ucf54\ub4dc\ub294 id \uae30\uc900 10, 20, 30, 40, 50\uc774 \uc788\ub2e4\uace0 \uac00\uc815\n-- Record Locks: 10\uc5d0 \ub300\ud574 \ub77d\uc774 \uac78\ub9b0\ub2e4.\nSELECT * FROM table_name where id = 10 for update;\n\n-- Gap Locks: 51\ubd80\ud130 PositiveInfinity\uae4c\uc9c0 \ub77d\uc774 \uac78\ub9b0\ub2e4.\nSELECT * FROM table_name where id > 100 for update;\n\n-- Next-Key Locks: 21\ubd80\ud130 30, 31\ubd80\ud130 40\uc5d0 \ub77d\uc774 \uac78\ub9b0\ub2e4.\nSELECT * FROM table_name where id BETWEEN 25 AND 35 for update;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,t.jsxs)(e.p,{children:["Real My SQL 8.0 - 5\uc7a5 \ud2b8\ub79c\uc7ad\uc158\uacfc \uc7a0\uae08, \ubc31\uc740\ube48, \uc774\uc131\uc6b1",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://www.ibm.com/docs/en/rational-clearquest/9.0.0?topic=clearquest-optimistic-pessimistic-record-locking",children:"Optimistic and Pessimistic record locking, IBM"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://cecil1018.wordpress.com/2016/06/18/mysql-innodb-locks/",children:"MySQL Innodb Locks, cecil1018"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html",children:"MySQL 8.0 InnoDB Locks, MySQL"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-locks-set.html",children:"Locks Set by Different SQL Statements in InnoDB, MySQL"})]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>l});var t=s(67294);const i={},c=t.createContext(i);function l(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);