"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3392],{98034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(85893),a=t(11151);const s={title:"\uc815\uc801 \ucee8\ud150\uce20 \uc81c\uacf5",slug:"/nginx/static-file",last_update:{date:"2023/08/04"},tags:["nginx"]},r=void 0,o={id:"Nginx/\uc815\uc801_\ucee8\ud150\uce20_\uc81c\uacf5",title:"\uc815\uc801 \ucee8\ud150\uce20 \uc81c\uacf5",description:"root",source:"@site/docs/Nginx/\uc815\uc801_\ucee8\ud150\uce20_\uc81c\uacf5.mdx",sourceDirName:"Nginx",slug:"/nginx/static-file",permalink:"/docs/nginx/static-file",draft:!1,unlisted:!1,editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/docs/Nginx/\uc815\uc801_\ucee8\ud150\uce20_\uc81c\uacf5.mdx",tags:[{label:"nginx",permalink:"/docs/tags/nginx"}],version:"current",lastUpdatedAt:1691107200,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 4\uc77c",frontMatter:{title:"\uc815\uc801 \ucee8\ud150\uce20 \uc81c\uacf5",slug:"/nginx/static-file",last_update:{date:"2023/08/04"},tags:["nginx"]},sidebar:"tutorialSidebar",previous:{title:"\uad6c\uc870 \ubc0f \uba85\ub839\uc5b4",permalink:"/docs/nginx/command"},next:{title:"\ubb38\uc11c",permalink:"/docs/"}},l={},c=[{value:"root",id:"root",level:3},{value:"alias",id:"alias",level:3},{value:"try_files",id:"try_files",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"root",children:"root"}),"\n",(0,i.jsxs)(n.p,{children:["\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ud30c\uc77c\uc744 \uc81c\uacf5\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \uacbd\ub85c\ub97c \uc9c0\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ud55c\ub2e4.",(0,i.jsx)(n.br,{}),"\n","root\uc758 \uacbd\uc6b0 locaiton\uc73c\ub85c \ub118\uc5b4\uc628 \uacbd\ub85c\ub97c root \uacbd\ub85c \ub4a4\uc5d0 \ucd94\uac00\ud55c\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=root",children:"# localhost/images/1.png \ud638\ucd9c /var/www/images/images/1.png \uac80\uc0c9\nlocation /images/ {\n    root /var/www/images;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"alias",children:"alias"}),"\n",(0,i.jsx)(n.p,{children:"location\uc73c\ub85c \ub9e4\uce6d\ub41c \ubd80\ubd84\uc744 \uc81c\uac70\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=alias",children:"# localhost/images/1.png \ud638\ucd9c /var/www/images/1.png \uac80\uc0c9\nlocation /images/ {\n    alias /var/www/images;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"try_files",children:"try_files"}),"\n",(0,i.jsxs)(n.p,{children:["try_files \ub514\ub809\ud2f0\ube0c\ub97c \uc774\uc6a9\ud574\uc11c \ud30c\uc77c\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba74 \uc801\uc808\ud55c \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\ub2e4.",(0,i.jsx)(n.br,{}),"\n","\uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8\uc73c\ub85c 404\ub97c \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"location /images/ {\n    alias /var/www/images;\n    try_files $uri $uri/ =404;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc774 proxy \uc124\uc815\uc73c\ub85c\ub3c4 \uad6c\uc131\ud560 \uc218\ub3c4 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"location /images/ {\n    root /root;\n    try_files $uri $uri/ default-image;\n}\n\nlocation default-image {\n    proxy_pass http://localhost/images/default_image.jpg;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/",children:"Serving Static Content"})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);