"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7011],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(a),d=n,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},65631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"JSR-310",slug:4,tags:["Java","Time"]},o=void 0,i={permalink:"/4",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023/2023-01-08-JSR-310.mdx",source:"@site/blog/2023/2023-01-08-JSR-310.mdx",title:"JSR-310",description:"\uc774\uc804\uc5d0 \ub9ce\uc740 \ubb38\uc81c\uac00 \uc788\ub358 \uc790\ubc14\uc758 \ud074\ub798\uc2a4(Calendar, Date)\ub97c \ub300\uccb4\ud558\ub294 \ub0a0\uc9dc\uc640 \uc2dc\uac04 API",date:"2023-01-08T00:00:00.000Z",formattedDate:"2023\ub144 1\uc6d4 8\uc77c",tags:[{label:"Java",permalink:"/tags/java"},{label:"Time",permalink:"/tags/time"}],readingTime:1.685,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JSR-310",slug:"4",tags:["Java","Time"]},prevItem:{title:"Kotlin\uc5d0\uc11c null\uc744 \ub2e4\ub8e8\ub294 \ubc29\ubc95",permalink:"/5"},nextItem:{title:"[\ucc45] \uac1d\uccb4\uc9c0\ud5a5\uc758 \uc0ac\uc2e4\uacfc \uc624\ud574",permalink:"/3"}},p={authorsImageUrls:[]},m=[{value:"LocalDate, LocalTime, LocalDateTime",id:"localdate-localtime-localdatetime",level:3},{value:"Instant",id:"instant",level:3},{value:"Duration, Period",id:"duration-period",level:3},{value:"TemporalAdjusters",id:"temporaladjusters",level:3},{value:"DateTimeFormatter",id:"datetimeformatter",level:3},{value:"ZoneId, ZoneOffset",id:"zoneid-zoneoffset",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc774\uc804\uc5d0 \ub9ce\uc740 \ubb38\uc81c\uac00 \uc788\ub358 \uc790\ubc14\uc758 \ud074\ub798\uc2a4(Calendar, Date)\ub97c \ub300\uccb4\ud558\ub294 \ub0a0\uc9dc\uc640 \uc2dc\uac04 API",(0,n.kt)("br",{parentName:"p"}),"\n","ISO-8601\uc744 \uae30\ubc18\uc73c\ub85c \uc791\uc131",(0,n.kt)("br",{parentName:"p"}),"\n","\uc124\uacc4 \ubaa9\ud45c \u2192 \ubd88\ubcc0, Fluent API, \uba85\ud655\ud558\uace0 \uba85\uc2dc\uc801, \ud655\uc7a5 \uac00\ub2a5\uc131"),(0,n.kt)("admonition",{title:"ISO-8601",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\ub0a0\uc9dc\uc640 \uc2dc\uac04\uc5d0 \uad00\ub828\ub41c \ub370\uc774\ud130\ub97c \ub2e4\ub8e8\ub294 \uad6d\uc81c \ud45c\uc900")),(0,n.kt)("h3",{id:"localdate-localtime-localdatetime"},"LocalDate, LocalTime, LocalDateTime"),(0,n.kt)("p",null,"\ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \ud45c\ud604\ud558\ub294 \ud074\ub798\uc2a4"),(0,n.kt)("h3",{id:"instant"},"Instant"),(0,n.kt)("p",null,"\uc720\ub2c9\uc2a4 \uc2dc\uac04(1970-01-01, 00:00:00 UTC) \uae30\uc900\uc73c\ub85c \ud2b9\uc815 \uc9c0\uc810\uae4c\uc9c0\uc758 \uc2dc\uac04\uc744 \ucd08\ub85c \ud45c\ud604\ud558\ub294 \ud074\ub798\uc2a4",(0,n.kt)("br",{parentName:"p"}),"\n","\uae30\uacc4\uc758 \uad00\uc810\uc5d0\uc11c \uc2dc\uac04 \ud45c\ud604"),(0,n.kt)("h3",{id:"duration-period"},"Duration, Period"),(0,n.kt)("p",null,"\uac04\uaca9\uc744 \ud45c\ud604\ud558\ub294 \ud074\ub798\uc2a4"),(0,n.kt)("h3",{id:"temporaladjusters"},"TemporalAdjusters"),(0,n.kt)("p",null,"\ubcf5\uc7a1\ud55c \ub0a0\uc9dc \uc870\uc815\uc774 \ud544\uc694\ud560 \ub54c \uc0ac\uc6a9",(0,n.kt)("br",{parentName:"p"}),"\n","\ud544\uc694\ud55c \uacbd\uc6b0 \ub2e4\uc74c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uc5ec \ucee4\uc2a4\ud140 TemporalAdjuster\ub97c \uad6c\ud604 \uac00\ub2a5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface TemporalAdjuster {\n    Temporal adjustInto(Temporal temporal);\n}\n")),(0,n.kt)("h3",{id:"datetimeformatter"},"DateTimeFormatter"),(0,n.kt)("p",null,"\ub0a0\uc9dc\uc640 \uc2dc\uac04 \ud3ec\ub9f7 \ud074\ub798\uc2a4",(0,n.kt)("br",{parentName:"p"}),"\n","\ud2b9\uc815 \ub0a0\uc9dc \ud328\ud134\uc774\ub098, DateTimeFormatterBuilder\ub97c \uc774\uc6a9\ud574\uc11c \ucee4\uc2a4\ud140\ud55c \ud3ec\ub9f7\uc744 \uc0dd\uc131 \uac00\ub2a5"),(0,n.kt)("h3",{id:"zoneid-zoneoffset"},"ZoneId, ZoneOffset"),(0,n.kt)("p",null,"ZoneId\ub294 \uc9c0\uc5ed ID\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u2018\uc9c0\uc5ed/\ub3c4\uc2dc\u2019")," \ud615\uc2dd, ZoneOffset\uc740 \uc2dc\ucc28 UTC \uae30\uc900 \uace0\uc815\ub41c \uc2dc\uac04 \ucc28\uc774 \uc774\uc6a9",(0,n.kt)("br",{parentName:"p"}),"\n","ZoneId\uc758 \uacbd\uc6b0 IANA Time Zone Database\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc9c0\uc5ed \uc9d1\ud569 \uc815\ubcf4 \uc0ac\uc6a9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Instant instant = Instant.now();\nLocalDateTime utc = LocalDateTime.ofInstant(instant, ZoneOffset.UTC);\n")),(0,n.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://product.kyobobook.co.kr/detail/S000001810171"},"\ubaa8\ub358 \uc790\ubc14 \uc778 \uc561\uc158")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://d2.naver.com/helloworld/645609"},"Java\uc758 \ub0a0\uc9dc\uc640 \uc2dc\uac04 API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/NOTE-datetime"},"ISO-8601")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://download.oracle.com/otn-pub/jcp/date_time-0.2-edr-oth-JSpec/date_time-0_2-edr-spec.pdf?AuthParam=1673171124_74a718be92efe4911c6977c02965aff4"},"JSR-310 Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-temporal-adjuster"},"Temporal Adjuster")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html"},"DateTimeFormatter"))))}u.isMDXComponent=!0}}]);