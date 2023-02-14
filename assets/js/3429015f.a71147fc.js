"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(v,u(u({ref:t},c),{},{components:r})):n.createElement(v,u({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={title:"Parameterized Tests",slug:7,tags:["Java"]},u=void 0,s={permalink:"/7",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-02-12-Parameterized Tests.mdx",source:"@site/blog/2023-02-12-Parameterized Tests.mdx",title:"Parameterized Tests",description:"\ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\ub2e4\ubcf4\uba74 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c \ubc18\ubcf5\uc774 \ub418\ub294 \ud14c\uc2a4\ud2b8\ub4e4\uc774 \uc0dd\uae34\ub2e4.",date:"2023-02-12T00:00:00.000Z",formattedDate:"2023\ub144 2\uc6d4 12\uc77c",tags:[{label:"Java",permalink:"/tags/java"}],readingTime:3.17,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Parameterized Tests",slug:"7",tags:["Java"]},prevItem:{title:"\uc790\ub3d9\ucc28 \uacbd\uc8fc \ubbf8\uc158 \ud68c\uace0",permalink:"/8"},nextItem:{title:"IntelliJ \uc124\uc815",permalink:"/6"}},o={authorsImageUrls:[]},i=[{value:"Argument Sources",id:"argument-sources",level:2},{value:"Value Source",id:"value-source",level:3},{value:"Null &amp; Empty Source",id:"null--empty-source",level:3},{value:"Enum Source",id:"enum-source",level:3},{value:"CSV Source",id:"csv-source",level:3},{value:"Method Source",id:"method-source",level:3},{value:"ETC.",id:"etc",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}],c={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\ub2e4\ubcf4\uba74 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c \ubc18\ubcf5\uc774 \ub418\ub294 \ud14c\uc2a4\ud2b8\ub4e4\uc774 \uc0dd\uae34\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"@ParameterizedTest"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e8\uc77c \ud14c\uc2a4\ud2b8\ub97c \ub9e4\uac1c\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec \ubc88 \ubc18\ubcf5\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"argument-sources"},"Argument Sources"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ParameterizedTest"),"\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ucd5c\uc18c \ud558\ub098 \uc774\uc0c1\uc758 Source \uc560\ub178\ud14c\uc774\uc158\uc774 \ud544\uc694\ud558\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","JUnit\uc774 \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c Source\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud14c\uc2a4\ud2b8\uc5d0 \ub9de\ucdb0 \ub2e4\uc591\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"value-source"},"Value Source"),(0,a.kt)("p",null,"\uac12\uc744 \uc774\uc6a9\ud558\uc5ec \uc81c\uacf5\ud558\ub294 \ud615\ud0dc\ub85c, \ub2e4\uc74c\uacfc \uac19\uc740 \ud0c0\uc785\uc758 \uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"short, int, long, float, double"),(0,a.kt)("li",{parentName:"ul"},"byte, char, boolean, String, Class  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ParameterizedTest\n@ValueSource(ints = {1, 100, Integer.MAX_VALUE})\nvoid valueTest(final int value) {\n    Assertions.assertThat(value).isPositive();\n}\n")),(0,a.kt)("h3",{id:"null--empty-source"},"Null & Empty Source"),(0,a.kt)("p",null,"null \uac12, \ube48 \uac12\uc744 \uc81c\uacf5\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","Empty Source\uc758 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \ud0c0\uc785\uc5d0 \ud55c\ud574 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String"),(0,a.kt)("li",{parentName:"ul"},"java.util.List, java.util.Set, java.util.Map"),(0,a.kt)("li",{parentName:"ul"},"primitive arrays \u2014 ex) int[]"),(0,a.kt)("li",{parentName:"ul"},"object arrays \u2014 ex) String[]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ParameterizedTest\n@NullAndEmptySource\nvoid nullAndEmptyTest(final String value) {\n    Assertions.assertThat(value).isNullOrEmpty();\n}\n")),(0,a.kt)("h3",{id:"enum-source"},"Enum Source"),(0,a.kt)("p",null,"EnumSource\ub97c \uc774\uc6a9\ud558\uc5ec Enum \ub610\ud55c \ub9e4\uac1c\ubcc0\uc218\ub85c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"enum Day {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;\n}\n\n@ParameterizedTest\n@EnumSource(Day.class)\nvoid enumTest(final Day day) {\n    assertThat(day).isInstanceOf(Day.class);\n}\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 mode \uac12\uc744 \uc774\uc6a9\ud558\uc5ec \ud2b9\uc9d5 Enum\uc744 \uc81c\uc678\ud558\uac70\ub098, \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\ub2e4. (default: Mode.Include)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ParameterizedTest\n@EnumSource(value = Day.class, names = {"SATURDAY", "SUNDAY"}, mode = Mode.EXCLUDE)\nvoid enumTest(final Day day) {\n    // MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY\n    assertThat(day).isInstanceOf(Day.class);\n}\n')),(0,a.kt)("h3",{id:"csv-source"},"CSV Source"),(0,a.kt)("p",null,"csv \ud615\uc2dd\uc758 \uac12\uc744 \uc774\uc6a9\ud558\uc5ec \ub9e4\uac1c\ubcc0\uc218\ub97c \uc81c\uacf5\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uad6c\ubd84\uc790\uc758 \uae30\ubcf8\uac12\uc740 \uc27c\ud45c(,)\ub85c \uad6c\ubd84\uc790\ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc744 \ub550 delimeter \uac12\uc744 \ub530\ub85c \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\uac1c\uc778\uc801\uc73c\ub85c 2\uac1c \uc815\ub3c4\uc758 \uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0 CsvSource\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ParameterizedTest\n@CsvSource({"1,1", "2,4", "3,9", "4,16"})\nvoid csvTest(final int number, final int result) {\n    assertThat(number * number).isEqualTo(result);\n}\n')),(0,a.kt)("h3",{id:"method-source"},"Method Source"),(0,a.kt)("p",null,"\ubcf5\uc7a1\ud55c \ud0c0\uc785\uc758 \uac12\uc744 \uc804\ub2ec\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uba54\uc11c\ub4dc\uba85\uc744 \uc785\ub825\ud558\uc5ec \ub9e4\uac1c\ubcc0\uc218\ub97c \uc81c\uacf5\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uba54\uc11c\ub4dc\uba85\uc744 \ub530\ub85c \uc785\ub825\ud558\uc9c0 \uc54a\uc73c\uba74 \ud14c\uc2a4\ud2b8\uba85\uacfc \ub3d9\uc77c\ud55c static \uba54\uc11c\ub4dc\uac00 \uc9c0\uc815\ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ParameterizedTest\n@MethodSource\nvoid methodTest(final List<Integer> numbers, final int count) {\n    assertThat(numbers).hasSize(count);\n}\n\nprivate static Stream<Arguments> methodTest() {\n    return Stream.of(\n            Arguments.of(List.of(1), 1),\n            Arguments.of(List.of(1, 2), 2),\n            Arguments.of(List.of(1, 2, 3), 3)\n    );\n}\n")),(0,a.kt)("h3",{id:"etc"},"ETC."),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \ubc29\ubc95 \uc774\uc678\uc5d0\ub3c4 \ub2e4\uc591\ud55c \ubc29\ubc95\uc73c\ub85c \ub9e4\uac1c\ubcc0\uc218\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CSV \ud30c\uc77c\uc744 \uc774\uc6a9\ud55c CsvFileSource"),(0,a.kt)("li",{parentName:"ul"},"ArgumentsProvider \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\ub294 ArgumentsSource")),(0,a.kt)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.baeldung.com/parameterized-tests-junit-5"},"Guide to JUnit 5 Parameterized Tests"))))}m.isMDXComponent=!0}}]);