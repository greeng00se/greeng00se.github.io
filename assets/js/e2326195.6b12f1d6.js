"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"\ube44\ub3d9\uae30 \uc608\uc678 \ub85c\uae45",slug:"log-async-exception",tags:["async","exception"]},c=void 0,i={permalink:"/log-async-exception",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-3/2023-09-18-\ube44\ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac/2023-09-18-\ube44\ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac.mdx",source:"@site/blog/2023-3/2023-09-18-\ube44\ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac/2023-09-18-\ube44\ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac.mdx",title:"\ube44\ub3d9\uae30 \uc608\uc678 \ub85c\uae45",description:"\ubb38\uc81c \uc0c1\ud669",date:"2023-09-18T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 18\uc77c",tags:[{label:"async",permalink:"/tags/async"},{label:"exception",permalink:"/tags/exception"}],readingTime:3.615,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ube44\ub3d9\uae30 \uc608\uc678 \ub85c\uae45",slug:"log-async-exception",tags:["async","exception"]},prevItem:{title:"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc1c\uc804 \uacfc\uc815",permalink:"/web-application-evolution"},nextItem:{title:"\ud1b0\ucea3 \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",permalink:"/tomcat-retrospective"}},l={authorsImageUrls:[]},p=[{value:"\ubb38\uc81c \uc0c1\ud669",id:"\ubb38\uc81c-\uc0c1\ud669",level:3},{value:"\ube44\ub3d9\uae30 \uc608\uc678 \ubc1c\uc0dd\uc2dc \ub85c\uae45 \uc124\uc815",id:"\ube44\ub3d9\uae30-\uc608\uc678-\ubc1c\uc0dd\uc2dc-\ub85c\uae45-\uc124\uc815",level:3},{value:"MDC \uc815\ubcf4 \uc5f0\ub3d9 \ubb38\uc81c",id:"mdc-\uc815\ubcf4-\uc5f0\ub3d9-\ubb38\uc81c",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],s={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\ubb38\uc81c-\uc0c1\ud669"},"\ubb38\uc81c \uc0c1\ud669"),(0,a.kt)("p",null,"\ud604\uc7ac \ud2b8\ub9bd\ub4dc\ub85c\uc6b0\uc758 \uacbd\ub85c \uc774\ubbf8\uc9c0 \uc0dd\uc131 \uae30\ub2a5\uc740 \ube44\ub3d9\uae30\ub85c \ucc98\ub9ac\ub418\uace0 \uc788\ub2e4. \ub85c\uadf8\ub97c \ud655\uc778\ud558\ub294 \ub3c4\uc911 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Async"),"\uac00 \uc801\uc6a9\ub41c \uba54\uc11c\ub4dc\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0 \ub85c\uadf8\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ucd9c\ub825\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud655\uc778\ud574 \ubcf4\ub2c8 Spring\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ControllerAdvice")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"@ExceptionHandler"),"\uc758 \uacbd\uc6b0 \ub3d9\uae30 \uc608\uc678\ub9cc \ucc98\ub9ac\ud558\uace0, \ube44\ub3d9\uae30 \uc608\uc678\ub97c \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 \ubc1c\uc0dd\ud55c \ubb38\uc81c\uc600\ub2e4. "),(0,a.kt)("h3",{id:"\ube44\ub3d9\uae30-\uc608\uc678-\ubc1c\uc0dd\uc2dc-\ub85c\uae45-\uc124\uc815"},"\ube44\ub3d9\uae30 \uc608\uc678 \ubc1c\uc0dd\uc2dc \ub85c\uae45 \uc124\uc815"),(0,a.kt)("p",null,"\uc2a4\ud504\ub9c1 4.1 \ubd80\ud130 \uc81c\uacf5\ub418\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/interceptor/AsyncUncaughtExceptionHandler.html"},"AsyncUncaughtExceptionHandler"),"\uc758 \uacbd\uc6b0 \ubc18\ud658 \ud0c0\uc785\uc774 void\uc778 \ube44\ub3d9\uae30 \uba54\uc11c\ub4dc\ub97c \uc608\uc678 \ucc98\ub9ac\ud558\uae30 \uc27d\ub3c4\ub85d \ub3c4\uc640\uc900\ub2e4.  "),(0,a.kt)("p",null,"\ub530\ub77c\uc11c AsyncUncaughtExceptionHandler \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud574\uc11c \uc608\uc678\ub97c \ud578\ub4e4\ub9c1\ud558\ub294 \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud588\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uae30\uc874\uc758 \ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac\uc758 \uacbd\uc6b0 \uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc2e4\ud589 \ud750\ub984\uc744 \ucd94\uc801\ud558\uae30 \uc704\ud574 MDC(Mapped Diagnostic Context)\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ube44\ub3d9\uae30 \uc608\uc678 \ucc98\ub9ac\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c MDC\uc758 \uc815\ubcf4\ub97c \uac00\uc838\uc640\uc11c \ub85c\uadf8\ub97c \ucd9c\ub825\ud558\ub3c4\ub85d \uc124\uc815\ud588\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=AsyncExceptionHandler",title:"AsyncExceptionHandler"},'@Slf4j\npublic class AsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\n\n    private static final String LOG_FORMAT = "[%s] %s";\n\n    @Override\n    public void handleUncaughtException(Throwable throwable, Method method, Object... obj) {\n        log.info(String.format(LOG_FORMAT, MDC.get(REQUEST_ID.key()), throwable.getMessage()), throwable);\n    }\n}\n')),(0,a.kt)("p",null,"AsyncExceptionHandler\uc758 \uacbd\uc6b0 AsyncConfigurer\ub97c \uad6c\ud604\ud55c Configuration \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub4f1\ub85d\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","getAsyncUncaughtExceptionHandler() \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub529\ud558\uc5ec AsyncExceptionHandler\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \uc124\uc815\ud558\uba74 \ub41c\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=AsyncConfig",title:"AsyncConfig"},"@EnableAsync\n@Configuration\npublic class AsyncConfig implements AsyncConfigurer {\n\n    @Override\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\n        return new AsyncExceptionHandler();\n    }\n}\n")),(0,a.kt)("p",null,"\uc774\uc81c \ube44\ub3d9\uae30 \uc0c1\ud669\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0 AsyncUncaughtExceptionHandler\uc758 \uad6c\ud604\uccb4\uc778 AsyncExceptionHandler\uac00 \uc608\uc678\ub97c \uc7a1\uc544 \ucc98\ub9ac\ud55c\ub2e4.  "),(0,a.kt)("h3",{id:"mdc-\uc815\ubcf4-\uc5f0\ub3d9-\ubb38\uc81c"},"MDC \uc815\ubcf4 \uc5f0\ub3d9 \ubb38\uc81c"),(0,a.kt)("p",null,"\ube44\ub3d9\uae30 \ucc98\ub9ac\uc758 \uacbd\uc6b0 \ubcc4\ub3c4\uc758 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 ThreadLocal \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud558\ub294 MDC\uc758 \uc815\ubcf4\ub97c \uc5bb\uc5b4\uc62c \uc218 \uc5c6\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\ub2e4.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./mdc-null.png",src:t(81450).Z,width:"2236",height:"426"})),(0,a.kt)("p",null,"\uc2a4\ud504\ub9c1 4.3 \uc774\uc0c1\ubd80\ud130 \uc81c\uacf5\ub418\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/task/TaskDecorator.html"},"TaskDecorator"),"\ub97c \uc774\uc6a9\ud558\uba74 TaskExecutor\ub97c \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5 \ud560 \uc218 \uc788\ub2e4. TaskDecorator\ub97c \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub97c \ud558\ub098 \uc0dd\uc131\ud558\uace0, Task\uac00 \uc2e4\ud589\ub418\uae30 \uc804 MDC\uc758 \uc815\ubcf4\ub97c \ubcf5\uc0ac\ud558\ub3c4\ub85d \uc124\uc815\ud55c\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MdcTaskDecorator",title:"MdcTaskDecorator"},"public class MdcTaskDecorator implements TaskDecorator {\n\n    @Override\n    public Runnable decorate(final Runnable runnable) {\n        Map<String, String> threadContext = MDC.getCopyOfContextMap();\n        return () -> {\n            MDC.setContextMap(threadContext);\n            runnable.run();\n        };\n    }\n}\n")),(0,a.kt)("p",null,"\uc0dd\uc131\ud55c Decorator \ud074\ub798\uc2a4\ub97c \uc124\uc815 \ud30c\uc77c\uc5d0 \ub4f1\ub85d\ud574 \uc900\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=AsyncConfig",title:"AsyncConfig"},"@RequiredArgsConstructor\n@EnableAsync\n@Configuration\npublic class AsyncConfig implements AsyncConfigurer {\n\n    private final AsyncConfigurationProperties properties;\n\n    @Bean\n    public ThreadPoolTaskExecutor taskExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(properties.coreSize());\n        executor.setMaxPoolSize(properties.maxSize());\n        executor.setQueueCapacity(properties.queueCapacity());\n        \n        // highlight-next-line\n        executor.setTaskDecorator(new MdcTaskDecorator());\n        executor.setWaitForTasksToCompleteOnShutdown(true);\n        executor.initialize();\n        return executor;\n    }\n\n    @Override\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\n        return new AsyncExceptionHandler();\n    }\n}\n")),(0,a.kt)("p",null,"\uc124\uc815 \ud6c4\uc5d0\ub294 \uc815\uc0c1\uc801\uc73c\ub85c MDC\uc5d0 \ub4e4\uc5b4\uac00 \uc788\ub294 UUID\uac00 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./mdc-not-null.png",src:t(97754).Z,width:"2620",height:"440"})),(0,a.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-async"},"spring async, baeldung"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61885358/async-will-not-call-by-controlleradvice-for-global-exception"},"@Async will not call by @ControllerAdvice for global exception"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.gangnamunni.com/post/mdc-context-task-decorator/"},"Spring \uc758 \ub3d9\uae30, \ube44\ub3d9\uae30, \ubc30\uce58 \ucc98\ub9ac\uc2dc \ud56d\uc0c1 context \ub97c \uc720\uc9c0\ud558\uace0 \ub85c\uae45\ud558\uae30, \uac15\ub0a8\uc5b8\ub2c8"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/task/TaskDecorator.html"},"TaskDecorator, Spring docs"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/interceptor/AsyncUncaughtExceptionHandler.html"},"AsyncUncaughtExceptionHandler")))}u.isMDXComponent=!0},97754:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mdc-not-null-2b12c13f4f420a335c9e55dbea503f1b.png"},81450:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mdc-null-95b3bbdce99ef36ba843986413e0421a.png"}}]);