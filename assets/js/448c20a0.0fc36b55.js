"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7680],{14079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>T,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const i={title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",slug:"spring-test-isolation",tags:["test"]},a=void 0,o={permalink:"/spring-test-isolation",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-4/2023-10-03-\ud14c\uc2a4\ud2b8 \uaca9\ub9ac.md",source:"@site/blog/2023-4/2023-10-03-\ud14c\uc2a4\ud2b8 \uaca9\ub9ac.md",title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",description:"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac",date:"2023-10-03T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 3\uc77c",tags:[{label:"test",permalink:"/tags/test"}],readingTime:4.315,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",slug:"spring-test-isolation",tags:["test"]},unlisted:!1,prevItem:{title:"MVC \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",permalink:"/mvc-retrospective"},nextItem:{title:"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc1c\uc804 \uacfc\uc815",permalink:"/web-application-evolution"}},c={authorsImageUrls:[]},l=[{value:"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac",id:"\ud14c\uc2a4\ud2b8-\uaca9\ub9ac",level:3},{value:"TestExecutionListener",id:"testexecutionlistener",level:3},{value:"AbstractTestExecutionListener \uc0c1\uc18d\ud558\uc5ec \uad6c\ud604",id:"abstracttestexecutionlistener-\uc0c1\uc18d\ud558\uc5ec-\uad6c\ud604",level:3},{value:"Listener \ub4f1\ub85d",id:"listener-\ub4f1\ub85d",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\ud14c\uc2a4\ud2b8-\uaca9\ub9ac",children:"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac"}),"\n",(0,s.jsxs)(t.p,{children:["\ud14c\uc2a4\ud2b8\uc758 \uc21c\uc11c\uc5d0 \ub530\ub77c \uc131\uacf5 \uc2e4\ud328 \uc5ec\ubd80\uac00 \uacb0\uc815\ub418\ub294 \ube44\uacb0\uc815\uc801\uc778(non-determinism) \ud14c\uc2a4\ud2b8\uac00 \ub418\uc5b4\uc11c\ub294 \uc548\ub418\uace0, \ud14c\uc2a4\ud2b8\ub294 \ud56d\uc0c1 \uc21c\uc11c\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc218\ud589\ub418\ub3c4\ub85d \ubcf4\uc7a5\ub418\uc5b4\uc57c \ud55c\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc790\uc6d0\uc758 \uacf5\uc720, \uc678\ubd80 API, \uc2dc\uac04 \ub4f1\uc73c\ub85c \ube44\uacb0\uc815\uc801\uc778 \ud14c\uc2a4\ud2b8\uac00 \ub41c\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \ub300\uc5ed\uc744 \uc0ac\uc6a9\ud558\uac70\ub098, \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc7ac\uc2e4\ud589\ud558\ub294 ",(0,s.jsx)(t.code,{children:"@DirtiesContext"}),", \uc790\uc6d0\uc744 \ucd08\uae30\ud654\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \uc774\ud6c4\uc5d0 \ud14c\uc774\ube14\uc744 \ub864\ubc31 \ud558\ub294 ",(0,s.jsx)(t.code,{children:"@Transactional"}),"\ub4f1 \ub2e4\uc591\ud55c \ubc29\ubc95\uc774 \uc788\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\ud574\ub2f9 \uae00\uc5d0\uc11c\ub294 \uc2a4\ud504\ub9c1\uc5d0\uc11c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc790\uc6d0\uc758 \uacf5\uc720\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ub97c \uc218\ud589\ud558\ub294 \ubd80\ubd84\uc5d0 \ub300\ud574 \uc124\uba85\ud55c\ub2e4."]}),"\n",(0,s.jsx)(t.admonition,{title:"Independent - FIRST",type:"note",children:(0,s.jsxs)(t.p,{children:["\ud14c\uc2a4\ud2b8\ub07c\ub9ac \uc11c\ub85c \uc758\uc874\ud558\uba74 \uc548 \ub41c\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\uc11c\ub85c \uc758\uc874\ud558\uac8c \ub41c\ub2e4\uba74 \ud558\ub098\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud560 \ub54c, \ub610 \ub2e4\ub978 \ud558\ub098\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud560 \uc218 \uc788\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\ub2e4\ub978 \ud14c\uc2a4\ud2b8\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0, \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589 \uac00\ub2a5\ud55c \ud14c\uc2a4\ud2b8\uac00 \uc88b\uc740 \ud14c\uc2a4\ud2b8\ub2e4."]})}),"\n",(0,s.jsx)(t.h3,{id:"testexecutionlistener",children:"TestExecutionListener"}),"\n",(0,s.jsxs)(t.p,{children:["\uc2a4\ud504\ub9c1\uc5d0\uc11c\ub294 TextExecutionListner\ub97c \uc774\uc6a9\ud558\uc5ec \uac01 \ud14c\uc2a4\ud2b8 \uc2e4\ud589 \ub2e8\uacc4\uc5d0\uc11c \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud560 \uc218 \uc788\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\uc774\ub97c \uc774\uc6a9\ud558\uba74 JUnit\uc758 @BeforeEach\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uc720\uc0ac\ud558\uac8c, \ud14c\uc2a4\ud2b8\uc758 \uc0dd\uba85\uc8fc\uae30 \uc774\uc804 \ub610\ub294 \uc774\ud6c4\uc5d0 \ud544\uc694\ud55c \uc791\uc5c5\uc744 \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"title=TextExecutionListner",children:"public interface TestExecutionListener {\n    default void beforeTestClass(TestContext testContext) throws Exception {}\n    default void prepareTestInstance(TestContext testContext) throws Exception {}\n    default void beforeTestMethod(TestContext testContext) throws Exception {}\n    default void beforeTestExecution(TestContext testContext) throws Exception {}\n    default void afterTestExecution(TestContext testContext) throws Exception {}\n    default void afterTestMethod(TestContext testContext) throws Exception {}\n    default void afterTestClass(TestContext testContext) throws Exception {}\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"abstracttestexecutionlistener-\uc0c1\uc18d\ud558\uc5ec-\uad6c\ud604",children:"AbstractTestExecutionListener \uc0c1\uc18d\ud558\uc5ec \uad6c\ud604"}),"\n",(0,s.jsxs)(t.p,{children:["AbstractTestExecutionListener\ub97c \uc0c1\uc18d\ubc1b\uc544 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \ud074\ub798\uc2a4\ub85c, \uc778\ud130\ud398\uc774\uc2a4\uc778 TextExecutionListner\uc640 \ub2ec\ub9ac Ordered\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc5b4 \ud574\ub2f9 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc81c\uacf5\ud558\ub294 \ub9ac\uc2a4\ub108 \ub2e4\uc74c\uc5d0 \uc2e4\ud589\uc2dc\ud0a4\ub3c4\ub85d \ud574\uc900\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\ub2e4\uc74c\uacfc \uac19\uc774 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac01\uac01\uc758 \ud14c\uc774\ube14\uc5d0 \ud574\ub2f9\ud558\ub294 Truncate \ucffc\ub9ac\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc870\ud68c\ud558\uace0, Test \uba54\uc11c\ub4dc\uac00 \ub05d\ub0a0\ub54c \ub9c8\ub2e4 \ud574\ub2f9 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uc5ec \ud14c\uc774\ube14\uc744 \ucd08\uae30\ud654\uc2dc\ud0a4\ub3c4\ub85d \uc124\uc815\ud55c\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"title=DatabaseCleaner",children:'\npublic class DatabaseCleaner extends AbstractTestExecutionListener {\n\n    private static final String TRUNCATE_TABLE_QUERY = """\n            SELECT Concat(\'TRUNCATE TABLE \', TABLE_NAME, \';\') \n            FROM INFORMATION_SCHEMA.TABLES\n            WHERE TABLE_SCHEMA = \'PUBLIC\'\n            """;\n\n    @Override\n    public void afterTestMethod(TestContext testContext) {\n        JdbcTemplate jdbcTemplate = getJdbcTemplate(testContext);\n        List<String> truncateTableQueries = getTruncateTableQueries(jdbcTemplate);\n        truncateTables(jdbcTemplate, truncateTableQueries);\n    }\n\n    private JdbcTemplate getJdbcTemplate(TestContext testContext) {\n        return testContext.getApplicationContext().getBean(JdbcTemplate.class);\n    }\n\n    private List<String> getTruncateTableQueries(JdbcTemplate jdbcTemplate) {\n        return jdbcTemplate.queryForList(TRUNCATE_TABLE_QUERY, String.class);\n    }\n\n    private void truncateTables(JdbcTemplate jdbcTemplate, List<String> truncateTableQueries) {\n        jdbcTemplate.execute("SET REFERENTIAL_INTEGRITY FALSE");\n        truncateTableQueries.forEach(jdbcTemplate::execute);\n        jdbcTemplate.execute("SET REFERENTIAL_INTEGRITY TRUE");\n    }\n}\n\n'})}),"\n",(0,s.jsx)(t.h3,{id:"listener-\ub4f1\ub85d",children:"Listener \ub4f1\ub85d"}),"\n",(0,s.jsxs)(t.p,{children:["@TestExecutionListeners\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\ub2e4.",(0,s.jsx)(t.br,{}),"\n","mergeMode\uc758 \uae30\ubcf8\uac12\uc740 REPLACE_DEFAULTS\ub85c \ub9ac\uc2a4\ub108\uac00 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0 \ub4f1\ub85d\ub41c \ub9ac\uc2a4\ub108\ub85c \ubcc0\uacbd\ub41c\ub2e4.",(0,s.jsx)(t.br,{}),"\n","MERGE_WITH_DEFAULTS\ub85c \uc124\uc815\ud55c\ub2e4\uba74 Ordered \uae30\uc900\uc73c\ub85c \uc21c\uc11c\uac00 \uacb0\uc815\ub41c\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\uc774\ud6c4 \uaca9\ub9ac\uac00 \ud544\uc694\ud55c \ud14c\uc2a4\ud2b8\ub4e4\uc740 \ub2e4\uc74c\uc758 \ucd94\uc0c1 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"title=AcceptanceTest",children:"\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@TestExecutionListeners(\n        value = DatabaseCleaner.class,\n        mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS\n)\npublic abstract class AcceptanceTest {\n\n    @LocalServerPort\n    private int port;\n\n    @BeforeEach\n    public void setUp() {\n        RestAssured.port = port;\n    }\n}\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.baeldung.com/spring-testexecutionlistener",children:"The Spring TestExecutionListener, Baeldung"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://tecoble.techcourse.co.kr/post/2020-09-15-test-isolation/",children:"\uc778\uc218\ud14c\uc2a4\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ud558\uae30, \ud14c\ucf54\ube14"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://martinfowler.com/articles/nonDeterminism.html",children:"Eradicating Non-Determinism in Tests, martin fowler"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://mangkyu.tistory.com/264",children:"@SpringBootTest\uc758 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\uc2dc\ud0a4\uae30, MangKyu"})]})]})}function T(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);