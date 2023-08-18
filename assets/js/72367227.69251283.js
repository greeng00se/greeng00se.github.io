"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[795],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||s[h]||l;return a?n.createElement(m,o(o({ref:e},i),{},{components:a})):n.createElement(m,o({ref:e},i))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81799:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131",slug:41,tags:["cloudwatch","log","monitoring"]},o=void 0,c={permalink:"/41",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-08-17-CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131/2023-08-17-CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131.md",source:"@site/blog/2023-08-17-CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131/2023-08-17-CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131.md",title:"CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131",description:"CloudWatch",date:"2023-08-17T00:00:00.000Z",formattedDate:"2023\ub144 8\uc6d4 17\uc77c",tags:[{label:"cloudwatch",permalink:"/tags/cloudwatch"},{label:"log",permalink:"/tags/log"},{label:"monitoring",permalink:"/tags/monitoring"}],readingTime:5.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CloudWatch\ub97c \uc774\uc6a9\ud55c \ub85c\uae45, \uba54\ud2b8\ub9ad \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd \uad6c\uc131",slug:"41",tags:["cloudwatch","log","monitoring"]},nextItem:{title:"\uacbd\ub85c \uc774\ubbf8\uc9c0 \uc0dd\uc131\ud558\uae30 - \ube44\ub3d9\uae30 \ucc98\ub9ac",permalink:"/40"}},p={authorsImageUrls:[]},d=[{value:"CloudWatch",id:"cloudwatch",level:2},{value:"CloudWatch Metrics",id:"cloudwatch-metrics",level:2},{value:"CloudWatch Agent \uc124\uce58",id:"cloudwatch-agent-\uc124\uce58",level:2},{value:"IAM \uc5ed\ud560 \uc124\uc815",id:"iam-\uc5ed\ud560-\uc124\uc815",level:3},{value:"\uc124\uce58",id:"\uc124\uce58",level:3},{value:"Wizard",id:"wizard",level:3},{value:"\uc124\uc815 \ud30c\uc77c \uc801\uc6a9",id:"\uc124\uc815-\ud30c\uc77c-\uc801\uc6a9",level:3},{value:"types.db: no such file or directory \uc5d0\ub7ec",id:"typesdb-no-such-file-or-directory-\uc5d0\ub7ec",level:3},{value:"\uc9c0\ud45c \ud655\uc778",id:"\uc9c0\ud45c-\ud655\uc778",level:3},{value:"\ub85c\uadf8",id:"\ub85c\uadf8",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}],i={toc:d};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cloudwatch"},"CloudWatch"),(0,r.kt)("p",null,"AWS \ub9ac\uc18c\uc2a4\uc640 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc9c0\ud45c\uc640 \ub85c\uadf8\uc5d0 \ub300\ud55c \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc9c0\ud45c\ub97c \uac10\uc2dc\ud558\uc5ec \uc54c\ub9bc\uc744 \ubcf4\ub0b4\ub294 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ud504\ub9ac\ud2f0\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ub300\uc2dc\ubcf4\ub4dc\ub2f9 3$/M \uc758 \ube44\uc6a9\uc774 \uccad\uad6c\ub418\uace0, \uc9c0\ud45c\ub098 \ub85c\uadf8\uc758 \uc591\uc5d0 \ub530\ub77c \ube44\uc6a9\uc774 \ucd94\uac00\uc801\uc73c\ub85c \uccad\uad6c\ub41c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc694\uae08 \uc815\ubcf4\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/cloudwatch/pricing/"},"\ub2e4\uc74c \ub9c1\ud06c"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("h2",{id:"cloudwatch-metrics"},"CloudWatch Metrics"),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c 5\ubd84\ub9c8\ub2e4 \uc9c0\ud45c\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \uc218\uc9d1\ub41c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc138\ubd80 \ubaa8\ub2c8\ud130\ub9c1(Detailed Monitoring)\uc744 \ud65c\uc131\ud654\ud558\uba74 1\ubd84\ub9c8\ub2e4 \uc9c0\ud45c\ub97c \uc218\uc9d1\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c InstanceId\ub85c \uac80\uc0c9\ud558\uc5ec \uc218\uc9d1\ub41c \uc9c0\ud45c\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch1.png",src:a(7138).Z,width:"3214",height:"1636"})),(0,r.kt)("p",null,"CPUUtilization, NetworkIn, NetworkOut\uacfc \uac19\uc740 \uae30\ubcf8\uc801\uc778 \uc9c0\ud45c\ub97c \uc81c\uacf5\ud558\uace0, \uba54\ubaa8\ub9ac, \ub514\uc2a4\ud06c \uacf5\uac04\uacfc \uac19\uc740 \uc9c0\ud45c\ub97c \ud655\uc778\ud558\ub824\uba74 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc9c0\ud45c\ub97c \uc124\uc815\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("h2",{id:"cloudwatch-agent-\uc124\uce58"},"CloudWatch Agent \uc124\uce58"),(0,r.kt)("p",null,"CloudWatch Agent \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc9c0\ud45c\uc640 \ub85c\uadf8\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("h3",{id:"iam-\uc5ed\ud560-\uc124\uc815"},"IAM \uc5ed\ud560 \uc124\uc815"),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c EC2 \uc778\uc2a4\ud134\uc2a4\uac00 CloudWatchAgentServerPolicy\uc5d0 \ub300\ud55c \uad8c\ud55c\uc774 \uc788\uc5b4\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","IAM \u2192 \uc5ed\ud560\uc5d0\uc11c \uc5ed\ud560 \uc0dd\uc131\uc744 \ud074\ub9ad\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch2.png",src:a(22427).Z,width:"2614",height:"1602"})),(0,r.kt)("p",null,"CloudWatchAgentServerPolicy \uad8c\ud55c \uc815\ucc45\uc744 \uc120\ud0dd\ud558\uace0, \uc801\ub2f9\ud55c \uc5ed\ud560 \uc774\ub984\uc744 \uc785\ub825\ud574\uc11c \uc5ed\ud560\uc744 \uc0dd\uc131\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch3.png",src:a(60912).Z,width:"2650",height:"1616"})),(0,r.kt)("p",null,"EC2 \uc778\uc2a4\ud134\uc2a4 \ubaa9\ub85d\uc73c\ub85c \ub4e4\uc5b4\uac00\uc11c, CloudWatch Agent\ub97c \uc124\uce58\ud560 EC2 \uc778\uc2a4\ud134\uc2a4\ub97c \ud074\ub9ad\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc791\uc5c5 \u2192 \ubcf4\uc548 \u2192 IAM \uc5ed\ud560 \uc218\uc815\uc5d0\uc11c \uc774\uc804\uc5d0 \uc0dd\uc131\ud55c \uc5ed\ud560\uc744 \uc9c0\uc815\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch4.png",src:a(80939).Z,width:"1764",height:"800"})),(0,r.kt)("h3",{id:"\uc124\uce58"},"\uc124\uce58"),(0,r.kt)("p",null,"\ud658\uacbd\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4.  "),(0,r.kt)("p",null,"OS: ubuntu 22.04",(0,r.kt)("br",{parentName:"p"}),"\n","\uc778\uc2a4\ud134\uc2a4 \uc720\ud615: t4g.small (ARM64)  "),(0,r.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec \uc124\uce58\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/arm64/latest/amazon-cloudwatch-agent.deb\nsudo dpkg -i -E ./amazon-cloudwatch-agent.deb\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html"},"\uc0ac\uc6a9 \uc124\uba85\uc11c"),"\uc5d0 \uac01 \uc778\uc2a4\ud134\uc2a4 \uc720\ud615\ub9c8\ub2e4 \ub2e4\uc6b4\ub85c\ub4dc \ub9c1\ud06c\uac00 \uc790\uc138\ud558\uac8c \uc548\ub0b4\ub418\uc5b4 \uc788\ub2e4."),(0,r.kt)("h3",{id:"wizard"},"Wizard"),(0,r.kt)("p",null,"CloudWatch Wizard\ub97c \uc0ac\uc6a9\ud558\uba74 \uac04\ub2e8\ud558\uac8c \uc124\uc815 \ud30c\uc77c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub85c\uadf8\ub97c \uc218\uc9d1\ud558\ub3c4\ub85d \uc124\uc815\ud558\ub294 \uacbd\uc6b0 Wizard \uc2e4\ud589 \uba85\ub839\uc5b4 \uc785\ub825 \uc804 log \ud30c\uc77c\uc758 \uc808\ub300 \uacbd\ub85c\ub97c \ubcf5\uc0ac\ud574\ub450\ub294 \uac83\uc774 \uc88b\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec Wizard\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard\n")),(0,r.kt)("p",null,"\uc124\uc815\uc744 \uc9c4\ud589\ud558\ub2e4 \ubcf4\uba74 \uc124\uc815 \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub420\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub85c\uadf8\ub97c \ucd94\uac00\ud560 \uac83\uc774\ub0d0\uace0 \ubb3c\uc5b4\ubcf4\ub294 \uc785\ub825\ucc3d\uc774 \ub098\uc624\uba74 \uc900\ube44\ud574\ub480\ub358 \ub85c\uadf8 \ud30c\uc77c\uc758 \uc808\ub300 \uacbd\ub85c\ub97c \uc785\ub825\ud55c\ub2e4.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch5.png",src:a(71028).Z,width:"2320",height:"1328"})),(0,r.kt)("p",null,"\uc911\uac04\uc5d0 SSM parameter store\uc5d0 \uc124\uc815 \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uac83\uc774\ub0d0\uace0 \ubb3c\uc5b4\ubcf4\ub294 \ucc3d\uc774 \ub098\uc628\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Do you want to store the config in the SSM parameter store?\n1. yes\n2. no\n")),(0,r.kt)("p",null,"\ucd94\uac00\uc801\uc73c\ub85c \uc124\uc815\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 2\ubc88\uc744 \uc120\ud0dd\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","Parameter Store \uad00\ub9ac\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://dev.classmethod.jp/articles/manage-the-cloudwatch-agent-from-the-parameter-store/"},"\ubb38\uc11c"),"\ub97c \ucc38\uace0\ud558\uba74 \uc88b\uc744 \uac70 \uac19\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc124\uc815\uc774 \uc644\ub8cc\ub418\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/aws/amazon-cloudwatch-agent/bin/config.json")," \uc5d0 \uc124\uc815\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc774 \uc800\uc7a5\ub41c\ub2e4.  "),(0,r.kt)("h3",{id:"\uc124\uc815-\ud30c\uc77c-\uc801\uc6a9"},"\uc124\uc815 \ud30c\uc77c \uc801\uc6a9"),(0,r.kt)("p",null,"\uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec \uc124\uc815\ud30c\uc77c\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","file \ub4a4\uc5d0\ub294 \uc124\uc815 \ud30c\uc77c\uc5d0 \ub300\ud55c \uc808\ub300\uacbd\ub85c(\uc544\ub798 \uba85\ub839\uc5b4 \uae30\uc900 \uae30\ubcf8 \uc0dd\uc131 \uc704\uce58)\ub97c \uc785\ub825\ud558\uba74 \ub41c\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json\n")),(0,r.kt)("h3",{id:"typesdb-no-such-file-or-directory-\uc5d0\ub7ec"},"types.db: no such file or directory \uc5d0\ub7ec"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 types.db \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc11c \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Error running agent: Error loading config file /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.toml: error parsing socket_listener, open /usr/share/collectd/types.db: no such file or directory\n")),(0,r.kt)("p",null,"types.db \ud30c\uc77c \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /usr/share/collectd\nsudo touch /usr/share/collectd/types.db\n")),(0,r.kt)("h3",{id:"\uc9c0\ud45c-\ud655\uc778"},"\uc9c0\ud45c \ud655\uc778"),(0,r.kt)("p",null,"CloudWatch Metrics\uc5d0 \uac00\ubcf4\uba74 CWAgent\ub77c\ub294 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uac00 \ucd94\uac00\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch6.png",src:a(15055).Z,width:"2638",height:"708"})),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815 \ud30c\uc77c\uc5d0 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ucd94\uac00\ud558\uc5ec \uc9c0\ud45c\uc5d0 \ub300\ud55c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4.    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metrics": {\n    "namespace": "2023-hello-world",\n    ......\n   },\n} \n')),(0,r.kt)("h3",{id:"\ub85c\uadf8"},"\ub85c\uadf8"),(0,r.kt)("p",null,"CloudWatch \u2192 \ub85c\uadf8 \uadf8\ub8f9\uc73c\ub85c \uac00\uba74 Wizard\ub85c \ucd94\uac00\ud55c \ub85c\uadf8\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./cloudwatch7.png",src:a(30720).Z,width:"2792",height:"1652"})),(0,r.kt)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"},"CloudWatch\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/cloudwatch/pricing/"},"Amazon CloudWatch \uc694\uae08"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html"},"Linux \uc778\uc2a4\ud134\uc2a4 \uc9c0\ud45c"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html"},"\uc11c\ubc84\uc5d0 CloudWatch \uc5d0\uc774\uc804\ud2b8 \uc124\uce58 \ubc0f \uc2e4\ud589"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dev.classmethod.jp/articles/manage-the-cloudwatch-agent-from-the-parameter-store/"},"CloudWatch Agent\ub97c Parameter Store\uc5d0\uc11c \uad00\ub9ac\ud574 \ubcf4\uae30"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html"},"CloudWatch\uc5d0\uc774\uc804\ud2b8 \uad6c\uc131 \ud30c\uc77c")))}s.isMDXComponent=!0},7138:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch1-859296155df6c20d0846f1388022a86c.png"},22427:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch2-ca9c26868dec08ea7133e2774f49798a.png"},60912:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch3-da10422b87e1901286b6d3e85e2c01cc.png"},80939:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch4-1e7eddc7e8dd890ac18352e900df8e07.png"},71028:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch5-67d1bd59d4552f4fe481452eddc78a5e.png"},15055:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch6-06ead809f7510938baee41505bc72b97.png"},30720:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloudwatch7-a86dfc0db307ddf7d1660d2b9e419c96.png"}}]);