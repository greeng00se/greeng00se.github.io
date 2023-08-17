"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=i(r),m=o,u=b["".concat(p,".").concat(m)]||b[m]||k[m]||a;return r?n.createElement(u,c(c({ref:t},s),{},{components:r})):n.createElement(u,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"\uc6f9\uc18c\ucf13",slug:34,tags:["WebSocket"]},c=void 0,l={permalink:"/34",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023/2023-06-26-WebSocket.mdx",source:"@site/blog/2023/2023-06-26-WebSocket.mdx",title:"\uc6f9\uc18c\ucf13",description:"\uc6f9\uc18c\ucf13",date:"2023-06-26T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 26\uc77c",tags:[{label:"WebSocket",permalink:"/tags/web-socket"}],readingTime:2.965,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\uc6f9\uc18c\ucf13",slug:"34",tags:["WebSocket"]},prevItem:{title:"\uc790\ubc14 17, \uc2a4\ud504\ub9c1 6.0, \uc2a4\ud504\ub9c1 \ubd80\ud2b8 3.1",permalink:"/35"},nextItem:{title:"Docusaurus",permalink:"/33"}},p={authorsImageUrls:[]},i=[{value:"\uc6f9\uc18c\ucf13",id:"\uc6f9\uc18c\ucf13",level:3},{value:"\uc6f9\uc18c\ucf13 \ub4f1\uc7a5 \ubc30\uacbd",id:"\uc6f9\uc18c\ucf13-\ub4f1\uc7a5-\ubc30\uacbd",level:3},{value:"\uc6f9\uc18c\ucf13\uc758 \ub3d9\uc791",id:"\uc6f9\uc18c\ucf13\uc758-\ub3d9\uc791",level:3},{value:"1. Upgrade \uc694\uccad",id:"1-upgrade-\uc694\uccad",level:3},{value:"2. Switching Protocols",id:"2-switching-protocols",level:3},{value:"3. \ud1b5\uc2e0 \ud6c4 \uc885\ub8cc",id:"3-\ud1b5\uc2e0-\ud6c4-\uc885\ub8cc",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],s={toc:i};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\uc6f9\uc18c\ucf13"},"\uc6f9\uc18c\ucf13"),(0,o.kt)("p",null,"\ub2e8\uc77c TCP \uc5f0\uacb0\uc744 \ud1b5\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84 \uac04 \uc804\uc774\uc911 \uc591\ubc29\ud5a5 \ud1b5\uc2e0\uc744 \uc9c0\uc6d0\ud558\ub294 \ud504\ub85c\ud1a0\ucf5c",(0,o.kt)("br",{parentName:"p"}),"\n","\uc6f9 \ud658\uacbd\uc5d0\uc11c \uc5f0\uc18d\ub41c \ub370\uc774\ud130\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4.  "),(0,o.kt)("p",null,"\uc6f9\uc18c\ucf13\uc740 HTTP\uc758 \ud3ec\ud2b8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \uac01\uac01 \ud3ec\ud2b8 80\uacfc \ud3ec\ud2b8 443\uc744 \uc0ac\uc6a9\ud558\uc5ec HTTP(ws://) \ubc0f HTTPS(wss://)\ub85c \uc11c\ubc84\uc5d0 \uc5f0\uacb0\ud55c\ub2e4.  "),(0,o.kt)("h3",{id:"\uc6f9\uc18c\ucf13-\ub4f1\uc7a5-\ubc30\uacbd"},"\uc6f9\uc18c\ucf13 \ub4f1\uc7a5 \ubc30\uacbd"),(0,o.kt)("p",null,"\uc6f9\uc18c\ucf13\uc774 \ub4f1\uc7a5\ud558\uae30 \uc774\uc804, \uc2e4\uc2dc\uac04\uc131\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud574 Polling, Streaming \uac19\uc740 \uae30\uc220\uc744 \uc0ac\uc6a9\ud588\uc5b4\uc57c \ud588\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 \uc2e4\uc2dc\uac04\uc131\uc774\ub098 \uc591\ubc29\ud5a5\uc131\uc744 \ub9cc\uc871\uc2dc\ud0a4\uc9c0 \ubabb\ud588\uace0, HTTP\ub97c \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uacfc\ub3c4\ud55c \uc624\ubc84\ud5e4\ub4dc\uac00 \ubc1c\uc0dd\ud588\ub2e4.  "),(0,o.kt)("h3",{id:"\uc6f9\uc18c\ucf13\uc758-\ub3d9\uc791"},"\uc6f9\uc18c\ucf13\uc758 \ub3d9\uc791"),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    participant Client\n    participant Server\n    Client->>Server: Handshake - Upgrade\ub97c \uc774\uc6a9\ud55c WebSocket \uc804\ud658 \uc694\uccad\n    Server->>Client: Handshake - HttpStatus 101(Switching Protocols)\n\n    Client->>Server: \uc591\ubc29\ud5a5 \ud1b5\uc2e0\n    Server->>Client: \n\n    Client->>Server: \uc885\ub8cc\n    Server->>Client: "}),(0,o.kt)("h3",{id:"1-upgrade-\uc694\uccad"},"1. Upgrade \uc694\uccad"),(0,o.kt)("p",null,"WebSocket \ud504\ub85c\ud1a0\ucf5c\ub85c \uc804\ud658\ud558\ub294 HTTP \uc694\uccad\uc744 \ubcf4\ub0b8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 HTTP\uc640 \uac19\uc774 80, 443 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc6f9\uc18c\ucf13\uc73c\ub85c \uc804\ud658\ud558\uae30 \uc704\ud574\uc11c\ub294 Upgrade: websocket, Connection: Upgrade \ud5e4\ub354\uac00 \ud544\uc694\ud558\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Sec-WebSocket-Key\ub294 \uc11c\ubc84\uc5d0\uc11c Sec-WebSocket-Accept\ub97c \uacc4\uc0b0\ud558\uc5ec \uc751\ub2f5\ud558\uace0 \uc774 \uac12\uc774 \uc608\uc0c1\ud55c \uac12\uacfc \ub2e4\ub974\uba74 \uc5f0\uacb0\uc774 \uc218\ub9bd\ub418\uc9c0 \uc54a\ub294\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Sec-WebSocket-Protocol\uc758 \uacbd\uc6b0 \uc11c\ube0c\ud504\ub85c\ud1a0\ucf5c\uc758 \ubaa9\ub85d\uc73c\ub85c \uc11c\ubc84 \uce21\uc5d0\uc11c\ub294 \ud574\ub2f9 \ubaa9\ub85d \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uc5ec \ubc18\ud658\ud574\uc57c \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \uc11c\ubc84\uce21\uc5d0\uc11c \uc5ec\ub7ec \uac1c \uc9c0\uc6d0\uc774 \uac00\ub2a5\ud55c \uacbd\uc6b0 \uc9c0\uc6d0 \uac00\ub2a5\ud55c \ud504\ub85c\ud1a0\ucf5c \uc911 \uccab\ubc88\uc9f8 \ud504\ub85c\ud1a0\ucf5c\uc744 \ud074\ub77c\uc774\uc5b8\ud2b8\uce21\uc73c\ub85c \ubcf4\ub0b8\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /chats HTTP/1.1\nHost: localhost:8080\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: Uc9l9TMkWGbHFD2qnFHltg==\nSec-WebSocket-Protocol: v10.stomp, v11.stomp\nSec-WebSocket-Version: 13\nOrigin: http://localhost:8080\n")),(0,o.kt)("h3",{id:"2-switching-protocols"},"2. Switching Protocols"),(0,o.kt)("p",null,"\uc11c\ubc84\ub294 101 Switching Protocols \uc751\ub2f5\uc744 \ubc18\ud658\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Sec-WebSocket-Accept\uc740 Sec-WebSocket-Key \ub4a4\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"),"\ub97c \ubd99\uc774\uace0 SHA1\ub85c \ud574\uc2f1 \ud6c4 Base64\ub85c \uc778\ucf54\ub529\ud558\uc5ec \ubc18\ud658\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 \uc11c\ubc84 \uc6f9\uc18c\ucf13 \ud504\ub85c\ud1a0\ucf5c\uc758 \uc9c0\uc6d0 \uc5ec\ubd80\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uba85\ud655\ud788 \uc54c\ub9ac\uae30 \uc704\ud574 \uc874\uc7ac\ud55c\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 101 Switching Protocols \nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: 1qVdfYHU9hPOl4JYYNXF623Gzn0=\nSec-WebSocket-Protocol: v10.stomp\n")),(0,o.kt)("h3",{id:"3-\ud1b5\uc2e0-\ud6c4-\uc885\ub8cc"},"3. \ud1b5\uc2e0 \ud6c4 \uc885\ub8cc"),(0,o.kt)("p",null,"\uc5f0\uacb0\uc774 \uc218\ub9bd\ub418\uba74 \uc6f9\uc18c\ucf13 \ud504\ub808\uc784 \ub2e8\uc704\ub85c \uc591\ubc29\ud5a5 \ud1b5\uc2e0\uc744 \ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc5f0\uacb0 \uc885\ub8cc\ub97c \uc6d0\ud558\ub294 \uacbd\uc6b0 \ud074\ub77c\uc774\uc5b8\ud2b8, \uc11c\ubc84 \ubaa8\ub450 \uc5f0\uacb0 \uc885\ub8cc\ub97c \uc694\uccad\ud560 \uc218 \uc788\ub2e4.  "),(0,o.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455"},"https://datatracker.ietf.org/doc/html/rfc6455"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications"},"https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_servers"},"https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_servers"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/reference/web/websocket.html"},"https://docs.spring.io/spring-framework/reference/web/websocket.html")))}k.isMDXComponent=!0}}]);