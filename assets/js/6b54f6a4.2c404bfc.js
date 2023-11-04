"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4558],{57211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(85893),a=t(3905),i=t(74866),l=t(85162);const o={title:"\ucee4\uc2a4\ud140 JdbcTemplate \ub9cc\ub4e4\uae30",slug:"custom-jdbc-template",tags:["JDBC","Java"]},c=void 0,s={permalink:"/custom-jdbc-template",editUrl:"https://github.com/greeng00se/greeng00se.github.io/tree/main/blog/2023-2/2023-04-02-\ucee4\uc2a4\ud140 JdbcTemplate \ub9cc\ub4e4\uae30.mdx",source:"@site/blog/2023-2/2023-04-02-\ucee4\uc2a4\ud140 JdbcTemplate \ub9cc\ub4e4\uae30.mdx",title:"\ucee4\uc2a4\ud140 JdbcTemplate \ub9cc\ub4e4\uae30",description:"\uccb4\uc2a4 \ubbf8\uc158\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac12\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 DAO\ub97c \uc0ac\uc6a9\ud588\ub2e4.",date:"2023-04-02T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 2\uc77c",tags:[{label:"JDBC",permalink:"/tags/jdbc"},{label:"Java",permalink:"/tags/java"}],readingTime:9.025,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ucee4\uc2a4\ud140 JdbcTemplate \ub9cc\ub4e4\uae30",slug:"custom-jdbc-template",tags:["JDBC","Java"]},unlisted:!1,prevItem:{title:"\uc790\ubc14 \ud074\ub798\uc2a4 \ud30c\uc77c \uad6c\uc870",permalink:"/java-class-file"},nextItem:{title:"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4 \ub808\ubca8 1 \ud68c\uace0",permalink:"/woowacourse-level1-retrospective"}},u={authorsImageUrls:[]},p=[{value:"\uae30\uc874 \ucf54\ub4dc",id:"\uae30\uc874-\ucf54\ub4dc",level:3},{value:"SELECT, DELETE \uc911\ubcf5 \uc81c\uac70",id:"select-delete-\uc911\ubcf5-\uc81c\uac70",level:3},{value:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 1. \ucf5c\ubc31\uc744 \uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc815\uc758",id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---1-\ucf5c\ubc31\uc744-\uc704\ud55c-\uc778\ud130\ud398\uc774\uc2a4-\uc815\uc758",level:3},{value:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 2. \ub2e8\uac74 \uc870\ud68c",id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---2-\ub2e8\uac74-\uc870\ud68c",level:3},{value:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 3. \ub2e4\uac74 \uc870\ud68c",id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---3-\ub2e4\uac74-\uc870\ud68c",level:3},{value:"\uc81c\ub124\ub9ad \uc0ac\uc6a9\ud558\uae30",id:"\uc81c\ub124\ub9ad-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\uba54\uc11c\ub4dc \ubd84\ub9ac\ud55c \ubd80\ubd84 \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\ud558\uae30 + Optional \uc0ac\uc6a9\ud558\uae30",id:"\uba54\uc11c\ub4dc-\ubd84\ub9ac\ud55c-\ubd80\ubd84-\ud074\ub798\uc2a4\ub85c-\ubd84\ub9ac\ud558\uae30--optional-\uc0ac\uc6a9\ud558\uae30",level:3}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uccb4\uc2a4 \ubbf8\uc158\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac12\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 DAO\ub97c \uc0ac\uc6a9\ud588\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc774 \ub54c JDBC\ub97c \uc0ac\uc6a9\ud560 \ub54c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \ucee4\ub125\uc158\uc744 \uc5bb\uace0, try-with-resource\ub97c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc774 \ubc18\ubcf5\ub418\uc5c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ud15c\ud50c\ub9bf \ucf5c\ubc31 \ud328\ud134\uc744 \uc774\uc6a9\ud558\uc5ec \ub098\ub9cc\uc758 JdbcTemplate\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc558\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\uae30\uc874-\ucf54\ub4dc",children:"\uae30\uc874 \ucf54\ub4dc"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"User",label:"User",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class User {\n    private final int id;\n    private final String name;\n\n    public User(final int id, final String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n"})})}),(0,r.jsx)(l.Z,{value:"UserDao",label:"UserDao",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class UserDao {\n    private final ConnectionPool connectionPool;\n\n    public UserDao(final ConnectionPool connectionPool) {\n        this.connectionPool = connectionPool;\n    }\n\n    public void insert(final String name) {\n        final Connection connection = connectionPool.getConnection();\n        final String query = "INSERT INTO User (name) VALUES (?)";\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n            preparedStatement.setString(1, name);\n            preparedStatement.executeUpdate();\n        } catch (final SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n\n    public void delete(final int userId) {\n        final Connection connection = connectionPool.getConnection();\n        final String query = "DELETE FROM user WHERE id = ?";\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n            preparedStatement.setInt(1, userId);\n            preparedStatement.executeUpdate();\n        } catch (final SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n\n    public User findById(final int userId) {\n        final Connection connection = connectionPool.getConnection();\n        final String query = "SELECT * FROM user WHERE id = ?";\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n            preparedStatement.setInt(1, userId);\n            final ResultSet resultSet = preparedStatement.executeQuery();\n            if (resultSet.next()) {\n                return new User(\n                        resultSet.getInt("id"),\n                        resultSet.getString("name")\n                );\n            }\n        } catch (final SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n        return null;\n    }\n\n    public List<User> findAll() {\n        final Connection connection = connectionPool.getConnection();\n        final String query = "SELECT * FROM user";\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n            final ResultSet resultSet = preparedStatement.executeQuery();\n            final List<User> result = new ArrayList<>();\n            while (resultSet.next()) {\n                result.add(new User(\n                        resultSet.getInt("id"),\n                        resultSet.getString("name")\n                ));\n            }\n            return result;\n        } catch (final SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"ConnectionPool",label:"ConnectionPool",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class ConnectionPool {\n    private static final String SERVER = "localhost:13306";\n    private static final String DATABASE = "chess";\n    private static final String OPTION = "?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";\n    private static final String URL = "jdbc:mysql://" + SERVER + "/" + DATABASE + OPTION;\n    private static final String USERNAME = "root";\n    private static final String PASSWORD = "root";\n\n    private final AtomicInteger index = new AtomicInteger();\n    private final List<Connection> connections;\n\n    public ConnectionPool(final int connectionCount) {\n        connections = generateConnections(connectionCount);\n    }\n\n    private List<Connection> generateConnections(final int connectionCount) {\n        return Stream.generate(this::generateConnection)\n                .limit(connectionCount)\n                .collect(toList());\n    }\n\n    private Connection generateConnection() {\n        try {\n            return DriverManager.getConnection(URL, USERNAME, PASSWORD);\n        } catch (SQLException e) {\n            throw new IllegalStateException("\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n        }\n    }\n\n    public Connection getConnection() {\n        int currentIndex = index.getAndIncrement();\n        return connections.get(currentIndex % connections.size());\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"select-delete-\uc911\ubcf5-\uc81c\uac70",children:"SELECT, DELETE \uc911\ubcf5 \uc81c\uac70"}),"\n",(0,r.jsxs)(n.p,{children:["\ubcc0\ud558\uc9c0 \uc54a\ub294 \ubd80\ubd84: try-with-resource, preparedStatement\ub97c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84, executeUpdate\ub85c \uc2e4\ud589 \ub4f1\ub4f1",(0,r.jsx)(n.br,{}),"\n","\ubcc0\ud558\ub294 \ubd80\ubd84: SQL Query, \ub9e4\uac1c\ubcc0\uc218"]}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc774 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\ub294 \ubd80\ubd84\uc744 \ubd84\ub9ac\ud558\uace0 \uac00\ubcc0\uc778\uc218\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 SELECT\uc640 DELETE\uc758 \uc911\ubcf5\uc744 \uc81c\uac70\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public void insert(final String name) {\n    final String query = "INSERT INTO User (name) VALUES (?)";\n    executeUpdate(query, name);\n}\n\npublic void delete(final int userId) {\n    final String query = "DELETE FROM user WHERE user_id = ?";\n    executeUpdate(query, userId);\n}\n\nprivate void executeUpdate(final String query, final Object... parameters) {\n    final Connection connection = connectionPool.getConnection();\n    try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n        for (int i = 1; i <= parameters.length; i++) {\n            preparedStatement.setObject(i, parameters[i - 1]);\n        }\n        preparedStatement.executeUpdate();\n    } catch (final SQLException e) {\n        throw new IllegalArgumentException(e.getMessage());\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---1-\ucf5c\ubc31\uc744-\uc704\ud55c-\uc778\ud130\ud398\uc774\uc2a4-\uc815\uc758",children:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 1. \ucf5c\ubc31\uc744 \uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc815\uc758"}),"\n",(0,r.jsxs)(n.p,{children:["\uc870\ud68c\ub294 INSERT, DELETE\uc640 \ub2ec\ub9ac \uac12\uc744 \ubc18\ud658\ubc1b\uc544\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc774 \ub54c \ucf5c\ubc31\uc774\ub77c\ub294 \uac83\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc911\ubcf5\uc744 \uc81c\uac70\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsxs)(n.admonition,{title:"\ucf5c\ubc31(Callback)",type:"note",children:[(0,r.jsxs)(n.p,{children:["\ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \ucf5c\ubc31\uc740 \ub2e4\ub978 \ucf54\ub4dc\uc758 \uc778\uc218\ub85c \ub118\uaca8\uc8fc\ub294 \uc2e4\ud589 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \ub73b\ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc790\ubc14\uc5d0\uc11c\ub294 \ub78c\ub2e4\ub098 \uc775\uba85 \ud074\ub798\uc2a4\ub97c \ub118\uaca8\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    \ud074\ub77c\uc774\uc5b8\ud2b8 -- \ucf5c\ubc31\uc804\ub2ec --\x3e \uba54\uc11c\ub4dc\n    \uba54\uc11c\ub4dc -- \ub0b4\ubd80\ud638\ucd9c --\x3e \uc804\ub2ec\ubc1b\uc740\ucf5c\ubc31"})]}),"\n",(0,r.jsxs)(n.p,{children:["\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac12\uc744 \uc870\ud68c\ud558\uace0, \ud574\ub2f9 \uac12\uc744 \uac1d\uccb4\ub85c \ub9e4\ud551\ud558\uc5ec \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","executeQuery\ub85c \uc870\ud68c\ud55c \uac12\uc740 ResultSet \uc548\uc5d0 \ub4e4\uc5b4\uac00\uc788\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc774\ub97c \uc6d0\ud558\ub294 \ud0c0\uc785\uc758 \uac12\uc73c\ub85c \ubcc0\ud658\ud574\uc57c\ud558\ub2c8 \uc77c\ub2e8 \ucf5c\ubc31\uc744 \uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface\npublic interface RowMapper {\n    User mapRow(final ResultSet resultSet) throws SQLException;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---2-\ub2e8\uac74-\uc870\ud68c",children:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 2. \ub2e8\uac74 \uc870\ud68c"}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc5d0\uc11c \uc815\uc758\ud55c RowMapper\ub97c \uba54\uc11c\ub4dc\uc5d0\uc11c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c?",(0,r.jsx)(n.br,{}),"\n","\uc544\ub798\uc640 \uac19\uc774 SQL \ucffc\ub9ac, RowMapper, \ud30c\ub77c\ubbf8\ud130\ub97c \ubd84\ub9ac\ud55c \uba54\uc11c\ub4dc\uc5d0 \ub118\uaca8\uc8fc\uace0 \ucffc\ub9ac \uc2e4\ud589 \ud6c4 \ub9e4\ud551\ud55c \uac12\uc744 \ubc18\ud658\ud558\ub3c4\ub85d \ud55c\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public User findById(final int userId) {\n    final String query = "SELECT * FROM user WHERE id = ?";\n    return queryForSingleResult(query, resultSet -> {\n        final int id = resultSet.getInt("id");\n        final String name = resultSet.getString("name");\n        return new User(id, name);\n    }, userId);\n}\n\nprivate User queryForSingleResult(\n        final String query,\n        final RowMapper rowMapper,\n        final Object... parameters\n) {\n    final Connection connection = connectionPool.getConnection();\n    try (final PreparedStatement preparedStatement = connection.prepareStatement(query);\n         final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {\n        if (resultSet.next()) {\n            return rowMapper.mapRow(resultSet);\n        }\n        return null;\n    } catch (SQLException e) {\n        throw new IllegalArgumentException(e.getMessage());\n    }\n}\n\nprivate ResultSet executeQuery(\n        final PreparedStatement preparedStatement,\n        final Object[] parameters) throws SQLException {\n    for (int i = 1; i <= parameters.length; i++) {\n        preparedStatement.setObject(i, parameters[i - 1]);\n    }\n    return preparedStatement.executeQuery();\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\uc870\ud68c-\ubd84\ub9ac\ud558\uae30---3-\ub2e4\uac74-\uc870\ud68c",children:"\uc870\ud68c \ubd84\ub9ac\ud558\uae30 - 3. \ub2e4\uac74 \uc870\ud68c"}),"\n",(0,r.jsx)(n.p,{children:"\ub2e8\uac74 \uc870\ud68c\uc640 \uc720\uc0ac\ud558\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public List<User> findAll() {\n    final String query = "SELECT * FROM user";\n    return query(query, resultSet -> {\n        final int id = resultSet.getInt("id");\n        final String name = resultSet.getString("name");\n        return new User(id, name);\n    });\n}\n\nprivate List<User> query(final String query, final RowMapper rowMapper, final Object... parameters) {\n    final Connection connection = connectionPool.getConnection();\n    try (final PreparedStatement preparedStatement = connection.prepareStatement(query);\n         final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {\n        final List<User> result = new ArrayList<>();\n        while (resultSet.next()) {\n            result.add(rowMapper.mapRow(resultSet));\n        }\n        return result;\n    } catch (SQLException e) {\n        throw new IllegalArgumentException(e.getMessage());\n    }\n}\n\nprivate ResultSet executeQuery(\n        final PreparedStatement preparedStatement,\n        final Object[] parameters) throws SQLException {\n    for (int i = 1; i <= parameters.length; i++) {\n        preparedStatement.setObject(i, parameters[i - 1]);\n    }\n    return preparedStatement.executeQuery();\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\uc81c\ub124\ub9ad-\uc0ac\uc6a9\ud558\uae30",children:"\uc81c\ub124\ub9ad \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 User\ub97c \uc870\ud68c\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc544\ub798\uc640 \uac19\uc774 \uc81c\ub124\ub9ad\uc744 \uc801\uc6a9\ud558\uc5ec \ub2e4\ub978 Dao\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub3c4\ub85d \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface\npublic interface RowMapper<T> {\n    T mapRow(final ResultSet resultSet) throws SQLException;\n}\n\nprivate <T> List<T> query(final String query, final RowMapper<T> rowMapper, final Object... parameters) {...}\nprivate <T> T queryForSingleResult(final String query, final RowMapper<T> rowMapper, final Object... parameters) {...}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\uba54\uc11c\ub4dc-\ubd84\ub9ac\ud55c-\ubd80\ubd84-\ud074\ub798\uc2a4\ub85c-\ubd84\ub9ac\ud558\uae30--optional-\uc0ac\uc6a9\ud558\uae30",children:"\uba54\uc11c\ub4dc \ubd84\ub9ac\ud55c \ubd80\ubd84 \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\ud558\uae30 + Optional \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,r.jsxs)(n.p,{children:["\uba54\uc11c\ub4dc\ub85c \ubd84\ub9ac\ud55c \ubd80\ubd84\uc744 JdbcTemplate\uc774\ub77c\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \uc62e\uae34\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ub610\ud55c null\uc744 \ubc18\ud658\ud558\uae30 \ubcf4\ub2e8 Optional\ub85c \uac10\uc2f8\uc11c \ubc18\ud658\ud558\ub3c4\ub85d \ubcc0\uacbd\ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ucd5c\uc885\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \uc644\uc131\ub41c\ub2e4."]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"UserDao",label:"UserDao",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class UserDao {\n    private final RowMapper<User> rowMapper = resultSet -> {\n        final int id = resultSet.getInt("id");\n        final String name = resultSet.getString("name");\n        return new User(id, name);\n    };\n    private final JdbcTemplate jdbcTemplate;\n\n    public UserDao(final JdbcTemplate jdbcTemplate) {\n        this.jdbcTemplate = jdbcTemplate;\n    }\n\n    public void insert(final String name) {\n        final String query = "INSERT INTO User (name) VALUES (?)";\n        jdbcTemplate.executeUpdate(query, name);\n    }\n\n    public void delete(final int userId) {\n        final String query = "DELETE FROM user WHERE user_id = ?";\n        jdbcTemplate.executeUpdate(query, userId);\n    }\n\n    public Optional<User> findById(final int userId) {\n        final String query = "SELECT * FROM user WHERE id = ?";\n        return jdbcTemplate.queryForSingleResult(query, rowMapper, userId);\n    }\n\n    public List<User> findAll() {\n        final String query = "SELECT * FROM user";\n        return jdbcTemplate.query(query, rowMapper);\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"JdbcTemplate",label:"JdbcTemplate",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class JdbcTemplate {\n    private final ConnectionPool connectionPool;\n\n    public JdbcTemplate(final ConnectionPool connectionPool) {\n        this.connectionPool = connectionPool;\n    }\n\n    public void executeUpdate(final String query, final Object... parameters) {\n        final Connection connection = connectionPool.getConnection();\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {\n            for (int i = 1; i <= parameters.length; i++) {\n                preparedStatement.setObject(i, parameters[i - 1]);\n            }\n            preparedStatement.executeUpdate();\n        } catch (final SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n\n    public <T> Optional<T> queryForSingleResult(\n            final String query,\n            final RowMapper<T> rowMapper,\n            final Object... parameters\n    ) {\n        final Connection connection = connectionPool.getConnection();\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query);\n             final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {\n            if (resultSet.next()) {\n                return Optional.of(rowMapper.mapRow(resultSet));\n            }\n            return Optional.empty();\n        } catch (SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n\n    private ResultSet executeQuery(\n            final PreparedStatement preparedStatement,\n            final Object[] parameters\n    ) throws SQLException {\n        for (int i = 1; i <= parameters.length; i++) {\n            preparedStatement.setObject(i, parameters[i - 1]);\n        }\n        return preparedStatement.executeQuery();\n    }\n\n    public <T> List<T> query(\n            final String query,\n            final RowMapper<T> rowMapper,\n            final Object... parameters\n    ) {\n        final Connection connection = connectionPool.getConnection();\n        try (final PreparedStatement preparedStatement = connection.prepareStatement(query);\n             final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {\n            final List<T> result = new ArrayList<>();\n            while (resultSet.next()) {\n                result.add(rowMapper.mapRow(resultSet));\n            }\n            return result;\n        } catch (SQLException e) {\n            throw new IllegalArgumentException(e.getMessage());\n        }\n    }\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>s});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),a=t(86010),i=t(12466),l=t(16550),o=t(20469),c=t(91980),s=t(67392),u=t(50012);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function S(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[s,p]=f({queryString:t,groupId:a}),[S,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=s??S;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=o[t].value;a!==r&&(s(n),l(a))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,h.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...i,className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=S(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,h.jsx)(x,{...e,...n}),(0,h.jsx)(y,{...e,...n})]})}function j(e){const n=(0,g.Z)();return(0,h.jsx)(v,{...e,children:p(e.children)},String(n))}}}]);