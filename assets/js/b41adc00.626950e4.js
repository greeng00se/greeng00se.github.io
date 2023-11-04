"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1391],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(b,c(c({ref:t},s),{},{components:a})):r.createElement(b,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=a[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={title:"Jdbc \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",slug:"jdbc-retrospective",tags:["Woowahan Techcourse","Retrospective"]},c=void 0,p={permalink:"/jdbc-retrospective",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-4/2023-10-10-Jdbc \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0.mdx",source:"@site/blog/2023-4/2023-10-10-Jdbc \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0.mdx",title:"Jdbc \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",description:"1\ub2e8\uacc4//github.com/woowacourse/jwp-dashboard-jdbc/pull/267",date:"2023-10-10T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 10\uc77c",tags:[{label:"Woowahan Techcourse",permalink:"/tags/woowahan-techcourse"},{label:"Retrospective",permalink:"/tags/retrospective"}],readingTime:3.83,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Jdbc \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",slug:"jdbc-retrospective",tags:["Woowahan Techcourse","Retrospective"]},prevItem:{title:"\ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud68c\uace0",permalink:"/refactoring-retrospective"},nextItem:{title:"MVC \uad6c\ud604 \ubbf8\uc158 \ud68c\uace0",permalink:"/mvc-retrospective"}},l={authorsImageUrls:[]},i=[{value:"Jdbc \uad6c\ud604",id:"jdbc-\uad6c\ud604",level:3},{value:"JdbcTemplate",id:"jdbctemplate",level:3},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc801\uc6a9",id:"\ud2b8\ub79c\uc7ad\uc158-\uc801\uc6a9",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:3}],s={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"PR \ub9c1\ud06c",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"1\ub2e8\uacc4: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/267"},"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/267"),(0,n.kt)("br",{parentName:"p"}),"\n","2\ub2e8\uacc4: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/358"},"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/358"),(0,n.kt)("br",{parentName:"p"}),"\n","3\ub2e8\uacc4: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/448"},"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/448"),(0,n.kt)("br",{parentName:"p"}),"\n","4\ub2e8\uacc4: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/515"},"https://github.com/woowacourse/jwp-dashboard-jdbc/pull/515"),"  ")),(0,n.kt)("h3",{id:"jdbc-\uad6c\ud604"},"Jdbc \uad6c\ud604"),(0,n.kt)("p",null,"\uc774\ubc88 \ubbf8\uc158\uc740 Jdbc \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uad6c\ud604\ud558\uace0, Transaction \uacbd\uacc4 \uc124\uc815\uacfc \ub3d9\uae30\ud654\ud558\ub294 \ubd80\ubd84\uc744 \uad6c\ud604\ud574 \ubcf4\ub294 \ubbf8\uc158\uc774\uc5c8\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\ubbf8\uc158 \ubaa9\ud45c\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JDBC \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uad6c\ud604\ud558\uba74\uc11c \uc911\ubcf5\uc744 \uc81c\uac70\ud558\ub294 \uc5f0\uc2b5\uc744 \ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub300\ud55c \uc774\ud574\ub3c4\ub97c \ub192\uc778\ub2e4.")),(0,n.kt)("p",null,"\ucd5c\ub300\ud55c Java\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9ac\ud329\ud130\ub9c1 \ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ucf54\ub4dc\ub97c \uc791\uc131\ud588\ub2e4.  "),(0,n.kt)("h3",{id:"jdbctemplate"},"JdbcTemplate"),(0,n.kt)("p",null,"JdbcTemplate\uc740 Connection\uc744 \uc774\uc6a9\ud558\uc5ec PreparedStatement\ub97c \uc0dd\uc131\ud558\ub294 \ubd80\ubd84, \uadf8\ub9ac\uace0 PreparedStatement\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \ubd80\ubd84\uc744 \ubd84\ub9ac\ud588\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\ud15c\ud50c\ub9bf \ucf5c\ubc31 \ud328\ud134\uc744 \uc801\uc808\ud558\uac8c \uc801\uc6a9\ud558\uc5ec \uc911\ubcf5\uc744 \ube44\uad50\uc801 \uac04\ub2e8\ud558\uac8c \uc81c\uac70\ud560 \uc218 \uc788\uc5c8\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\uc608\uc804\uc5d0\ub3c4 \ubbf8\uc158\uc744 \uc9c4\ud589\ud558\uba74\uc11c ",(0,n.kt)("a",{parentName:"p",href:"./custom-jdbc-template"},"JdbcTemplate\uc744 \uad6c\ud604"),"\ud55c \uc801\uc774 \uc788\uc5c8\ub294\ub370, \uc774\ubc88\uc5d0\ub294 \uc790\uc6d0 \ud560\ub2f9\uacfc \ud574\uc81c \ubd80\ubd84\uc5d0 \ub300\ud55c \uc911\ubcf5\ub3c4 \uc81c\uac70\ud588\ub2e4.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class JdbcTemplate {\n\n    private static final Logger log = LoggerFactory.getLogger(JdbcTemplate.class);\n\n    private final DataSource dataSource;\n    private final StatementCreator statementCreator;\n    private final StatementExecutor statementExecutor;\n\n    public JdbcTemplate(final DataSource dataSource) {\n        this(dataSource, new StatementCreator(), new StatementExecutor());\n    }\n\n    JdbcTemplate(\n            final DataSource dataSource,\n            final StatementCreator statementCreator,\n            final StatementExecutor statementExecutor\n    ) {\n        this.dataSource = dataSource;\n        this.statementCreator = statementCreator;\n        this.statementExecutor = statementExecutor;\n    }\n\n    private <T> T query(\n            final String sql,\n            final PreparedStatementCallback<T> preparedStatementCallback,\n            final Object... parameters\n    ) {\n        final Connection connection = DataSourceUtils.getConnection(dataSource);\n        try (final PreparedStatement preparedStatement = statementCreator.create(connection, sql, parameters)) {\n            return preparedStatementCallback.execute(preparedStatement);\n        } catch (final SQLException e) {\n            log.error(e.getMessage(), e);\n            throw new DataAccessException(e);\n        } finally {\n            DataSourceUtils.releaseConnection(connection, dataSource);\n        }\n    }\n\n    public void update(final String sql, final Object... parameters) {\n        query(sql, PreparedStatement::executeUpdate, parameters);\n    }\n\n    public <T> Optional<T> queryForObject(final String sql, final RowMapper<T> rowMapper, final Object... parameters) {\n        final List<T> results = query(sql, statement -> statementExecutor.execute(statement, rowMapper), parameters);\n        if (results.size() > 1) {\n            throw new DataAccessException("2\uac1c \uc774\uc0c1\uc758 \uacb0\uacfc\ub97c \ubc18\ud658\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n        }\n        return results.stream().findAny();\n    }\n\n    public <T> List<T> queryForList(final String sql, final RowMapper<T> rowMapper, final Object... parameters) {\n        return query(sql, statement -> statementExecutor.execute(statement, rowMapper), parameters);\n    }\n}\n')),(0,n.kt)("h3",{id:"\ud2b8\ub79c\uc7ad\uc158-\uc801\uc6a9"},"\ud2b8\ub79c\uc7ad\uc158 \uc801\uc6a9"),(0,n.kt)("p",null,"3, 4\ub2e8\uacc4\ub294 \uae30\uc874\uc758 \ucf54\ub4dc\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2dc\uc791\ud558\uace0 \ub05d\ub098\ub294 \ubd80\ubd84\uc778 \ud2b8\ub79c\uc7ad\uc158 \uacbd\uacc4\ub97c \uc124\uc815\ud558\uace0 ThreadLocal\uc744 \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \ub3d9\uae30\ud654(Transaction synchronization)\ub97c \uc801\uc6a9\ud558\ub294 \ubbf8\uc158\uc774\uc5c8\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\ud2b8\ub79c\uc7ad\uc158 \ub3d9\uae30\ud654\ub780 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2dc\uc791\ud558\uae30 \uc704\ud55c Connection \uac1d\uccb4\ub97c ThreadLocal\uacfc \uac19\uc740 \uacf5\uac04\uc5d0 \ub530\ub85c \uc800\uc7a5 \ud6c4, \ud544\uc694\ud560 \ub54c \uc800\uc7a5\ub41c Connection\uc744 \uac00\uc838\ub2e4 \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub85c \ubbf8\uc158\uc744 \uc9c4\ud589\ud588\ub294\ub370, ThreadLocal\uc5d0 Connection \uac1d\uccb4\uac00 \uc544\ub2cc, Connection \uac1d\uccb4\uc640 Transaction\uc774 \uc9c4\ud589 \uc911\uc778\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub294 flag\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \ud074\ub798\uc2a4\ub97c \uc800\uc7a5\ud574\uc11c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud588\ub2e4.  "),(0,n.kt)("mermaid",{value:"graph LR\n\tTransactionTemplate --\x3e TransactionManager\n\tTransactionManager --\x3e TransactionSynchronizationManager\n\tDataSourceUtils --\x3e TransactionSynchronizationManager\n\tJdbcTemplate --\x3e DataSourceUtils"}),(0,n.kt)("h3",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,n.kt)("p",null,"Jdbc \ubbf8\uc158\uc744 \uc9c4\ud589\ud558\uba74\uc11c AOP\ub098 Transactional\uc5d0 \ub300\ud55c \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub3c4 \uc9c4\ud589\ud558\uace0, \uc57d\uac04 \uc54c\ucc2c \ubbf8\uc158\uc774\uc5c8\ub358 \uac83 \uac19\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\uaf3c\uaf3c\ud788 \ucf54\ub4dc\ub97c \ubd10\uc900 \ub9ac\ubdf0\uc5b4 \ud638\uc774 \uadf8\ub9ac\uace0 \uc5f0\ud734 \ub3d9\uc548 \uacc4\uc18d \ud2f0\ud0a4\ud0c0\uce74 \ud558\uba74\uc11c \uc7ac\ubc0c\uac8c \ub9ac\ubdf0\ud55c \ubbfc\ud2b8\uc5d0\uac8c \uac10\uc0ac\ud558\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\ud68c\uace0 \uc774\ub9cc \ub05d\ub0b4\uace0 \ub9ac\ud329\ud130\ub9c1 \ubbf8\uc158 \ud558\ub7ec\uac00\uc57c\uaca0\ub2e4. \ud83d\ude0a"))}u.isMDXComponent=!0}}]);