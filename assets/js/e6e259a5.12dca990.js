"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3771],{9801:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=s(85893),l=s(11151);const i={title:"Swap \uba54\ubaa8\ub9ac \uc124\uc815",slug:"/linux/swap",last_update:{date:"2023/07/20",author:"\ud5c8\ube0c"}},t=void 0,d={id:"\ub9ac\ub205\uc2a4/Swap \uba54\ubaa8\ub9ac \uc124\uc815",title:"Swap \uba54\ubaa8\ub9ac \uc124\uc815",description:"Swap \uba54\ubaa8\ub9ac",source:"@site/docs/\ub9ac\ub205\uc2a4/Swap \uba54\ubaa8\ub9ac \uc124\uc815.md",sourceDirName:"\ub9ac\ub205\uc2a4",slug:"/linux/swap",permalink:"/docs/linux/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/\ub9ac\ub205\uc2a4/Swap \uba54\ubaa8\ub9ac \uc124\uc815.md",tags:[],version:"current",lastUpdatedBy:"\ud5c8\ube0c",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 20\uc77c",frontMatter:{title:"Swap \uba54\ubaa8\ub9ac \uc124\uc815",slug:"/linux/swap",last_update:{date:"2023/07/20",author:"\ud5c8\ube0c"}},sidebar:"tutorialSidebar",previous:{title:"\uc0c1\uc790 \ubc16\uc73c\ub85c \ud0c8\ucd9c\ud558\uae30",permalink:"/docs/book/getting-out-of-the-box"},next:{title:"\ud130\ubbf8\ub110 \uc258 \ud504\ub86c\ud504\ud2b8 \uc124\uc815",permalink:"/docs/linux/shell"}},r={},c=[{value:"Swap \uba54\ubaa8\ub9ac",id:"swap-\uba54\ubaa8\ub9ac",level:3},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"Swap \uba54\ubaa8\ub9ac \ubd80\ud305\uc2dc \uc790\ub3d9\uc73c\ub85c \ub9c8\uc6b4\ud2b8\ud558\ub3c4\ub85d \uc801\uc6a9",id:"swap-\uba54\ubaa8\ub9ac-\ubd80\ud305\uc2dc-\uc790\ub3d9\uc73c\ub85c-\ub9c8\uc6b4\ud2b8\ud558\ub3c4\ub85d-\uc801\uc6a9",level:3},{value:"Swap \uba54\ubaa8\ub9ac \uc801\uc6a9\ub418\uc5c8\ub294\uc9c0 \ud655\uc778",id:"swap-\uba54\ubaa8\ub9ac-\uc801\uc6a9\ub418\uc5c8\ub294\uc9c0-\ud655\uc778",level:3},{value:"Swap \uba54\ubaa8\ub9ac \ube44\ud65c\uc131\ud654",id:"swap-\uba54\ubaa8\ub9ac-\ube44\ud65c\uc131\ud654",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}];function o(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"swap-\uba54\ubaa8\ub9ac",children:"Swap \uba54\ubaa8\ub9ac"}),"\n",(0,a.jsxs)(n.p,{children:["\ud558\ub4dc\ub514\uc2a4\ud06c \uacf5\uac04\uc758 \uc77c\ubd80\ubd84\uc744 \uba54\ubaa8\ub9ac\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774\ub2e4.",(0,a.jsx)(n.br,{}),"\n","\ud558\ub4dc\ub514\uc2a4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub294 \ub9cc\ud07c \uae30\uc874 \uba54\ubaa8\ub9ac\ubcf4\ub2e4 \uc18d\ub3c4\uac00 \ud604\uc800\ud788 \ub5a8\uc5b4\uc9c4\ub2e4."]}),"\n",(0,a.jsx)(n.h3,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,a.jsxs)(n.p,{children:["\ubcf4\ud1b5 Swap \ud30c\uc77c\uc758 \uc6a9\ub7c9\uc740 \uae30\uc874 \uba54\ubaa8\ub9ac\uc758 1.5~2\ubc30 \uc815\ub3c4\uc758 \uc6a9\ub7c9\uc744 \uad8c\uc7a5\ud558\uace0 \uc788\ub2e4.",(0,a.jsx)(n.br,{}),"\n","fallocate\ub610\ub294 dd \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc2a4\uc651 \ud30c\uc77c\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# fallocate\nsudo fallocate -l 2G /swapfile\n\n# dd\nsudo dd if=/dev/zero of=/swapfile bs=1MiB count=2048\n"})}),"\n",(0,a.jsx)(n.p,{children:"\uc77c\ubc18 \uc0ac\uc6a9\uc790\uac00 \ud574\ub2f9 \ud30c\uc77c\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\ub3c4\ub85d \uad8c\ud55c\uc744 \uc124\uc815\ud55c\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo chmod 600 /swapfile\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\ud30c\uc77c\uc744 Swap \ud3ec\ub9f7\uc73c\ub85c \ubcc0\uacbd \ud6c4 \uc2dc\uc2a4\ud15c\uc5d0 \ub4f1\ub85d\ud55c\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo mkswap /swapfile\nsudo swapon /swapfile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"swap-\uba54\ubaa8\ub9ac-\ubd80\ud305\uc2dc-\uc790\ub3d9\uc73c\ub85c-\ub9c8\uc6b4\ud2b8\ud558\ub3c4\ub85d-\uc801\uc6a9",children:"Swap \uba54\ubaa8\ub9ac \ubd80\ud305\uc2dc \uc790\ub3d9\uc73c\ub85c \ub9c8\uc6b4\ud2b8\ud558\ub3c4\ub85d \uc801\uc6a9"}),"\n",(0,a.jsxs)(n.p,{children:["\uc778\uc2a4\ud134\uc2a4\uac00 \uc885\ub8cc\ub418\uac70\ub098 \uc7ac\ubd80\ud305\uc744 \ud558\ub294 \uacbd\uc6b0 Swap \uc124\uc815\uc774 \ucd08\uae30\ud654\ub41c\ub2e4.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.code,{children:"/etc/fstab"})," \ud30c\uc77c\uc744 \uc218\uc815\ud558\uc5ec Swap \uba54\ubaa8\ub9ac\ub97c \uc601\uad6c\uc801\uc73c\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\ud574\ub2f9 \ud30c\uc77c\uc740 \ub9ac\ub205\uc2a4 \ubd80\ud305\uc2dc \ub9c8\uc6b4\ud2b8\uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uace0 \uc788\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# vim\uc744 \uc774\uc6a9\ud558\uc5ec \ud574\ub2f9 \ud30c\uc77c\uc744 \uc218\uc815\ud55c\ub2e4.\nsudo vim /etc/fstab\n# \ucd5c\ud558\ub2e8\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud558\uba74 \ub41c\ub2e4.\n/swapfile swap swap defaults 0 0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"swap-\uba54\ubaa8\ub9ac-\uc801\uc6a9\ub418\uc5c8\ub294\uc9c0-\ud655\uc778",children:"Swap \uba54\ubaa8\ub9ac \uc801\uc6a9\ub418\uc5c8\ub294\uc9c0 \ud655\uc778"}),"\n",(0,a.jsxs)(n.p,{children:["\ub9ac\ub205\uc2a4\uc5d0\uc11c\ub294 ",(0,a.jsx)(n.code,{children:"free"})," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uba54\ubaa8\ub9ac\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,a.jsx)(n.br,{}),"\n","-h \uc635\uc158\uc744 \uc8fc\uba74 \uc880 \ub354 \uc77d\uae30 \ud3b8\ud55c \ud615\ud0dc\ub85c \ucd9c\ub825\ub41c\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"free -h\n              total        used        free      shared  buff/cache   available\nMem:          905Mi       570Mi        65Mi       0.0Ki       270Mi       186Mi\nSwap:         2.0Gi       626Mi       1.4Gi\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\uc544\ub798\uc5d0 Swap \uba54\ubaa8\ub9ac\uac00 \uc801\uc6a9\ub418\uc5b4\uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,a.jsx)(n.br,{}),"\n","\ucd94\uac00\ub85c ",(0,a.jsx)(n.code,{children:"swapon"})," \uba85\ub839\uc5b4\ub85c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,a.jsx)(n.h3,{id:"swap-\uba54\ubaa8\ub9ac-\ube44\ud65c\uc131\ud654",children:"Swap \uba54\ubaa8\ub9ac \ube44\ud65c\uc131\ud654"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"swapoff"})," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube44\ud65c\uc131\ud654 \ud55c \ud6c4 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# swap \uc124\uc815\ud55c \ud30c\uc77c \ube44\ud65c\uc131\ud654\nsudo swapoff -v /swapfile\n# \uc0ad\uc81c\nsudo rm /swapfile\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\ub9cc\uc57d ",(0,a.jsx)(n.code,{children:"/etc/fstab"}),"\uc5d0 \uac12\uc744 \uc124\uc815\ud588\uc744 \uacbd\uc6b0 \ud574\ub2f9 \uac12\uc744 \uc9c0\uc6cc\uc57c\ud55c\ub2e4."]}),"\n",(0,a.jsx)(n.h2,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-20-04/",children:"How to Add Swap Space on Ubuntu 20.04, Lunuxize"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var a=s(67294);const l={},i=a.createContext(l);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);