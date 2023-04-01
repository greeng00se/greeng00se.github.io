---
title: 커스텀 JdbcTemplate 만들기
slug: 14
tags: [JDBC, Java]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

체스 미션에서는 데이터베이스에서 값을 가져오기 위해 DAO를 사용했다.  
이 때 JDBC를 사용할 때 데이터베이스의 커넥션을 얻고, try-with-resource를 사용하는 부분이 반복되었다.  
템플릿 콜백 패턴을 이용하여 나만의 JdbcTemplate을 만들어보았다.  

### 기존 코드

<Tabs>
<TabItem value="User" label="User" default>

```java
public class User {
    private final int id;
    private final String name;

    public User(final int id, final String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
```

</TabItem>

<TabItem value="UserDao" label="UserDao">

```java
public class UserDao {
    private final ConnectionPool connectionPool;

    public UserDao(final ConnectionPool connectionPool) {
        this.connectionPool = connectionPool;
    }

    public void insert(final String name) {
        final Connection connection = connectionPool.getConnection();
        final String query = "INSERT INTO User (name) VALUES (?)";
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, name);
            preparedStatement.executeUpdate();
        } catch (final SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    public void delete(final int userId) {
        final Connection connection = connectionPool.getConnection();
        final String query = "DELETE FROM user WHERE id = ?";
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, userId);
            preparedStatement.executeUpdate();
        } catch (final SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    public User findById(final int userId) {
        final Connection connection = connectionPool.getConnection();
        final String query = "SELECT * FROM user WHERE id = ?";
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, userId);
            final ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                return new User(
                        resultSet.getInt("id"),
                        resultSet.getString("name")
                );
            }
        } catch (final SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
        return null;
    }

    public List<User> findAll() {
        final Connection connection = connectionPool.getConnection();
        final String query = "SELECT * FROM user";
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            final ResultSet resultSet = preparedStatement.executeQuery();
            final List<User> result = new ArrayList<>();
            while (resultSet.next()) {
                result.add(new User(
                        resultSet.getInt("id"),
                        resultSet.getString("name")
                ));
            }
            return result;
        } catch (final SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }
}
```

</TabItem>

<TabItem value="ConnectionPool" label="ConnectionPool">

```java
public class ConnectionPool {
    private static final String SERVER = "localhost:13306";
    private static final String DATABASE = "chess";
    private static final String OPTION = "?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";
    private static final String URL = "jdbc:mysql://" + SERVER + "/" + DATABASE + OPTION;
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";

    private final AtomicInteger index = new AtomicInteger();
    private final List<Connection> connections;

    public ConnectionPool(final int connectionCount) {
        connections = generateConnections(connectionCount);
    }

    private List<Connection> generateConnections(final int connectionCount) {
        return Stream.generate(this::generateConnection)
                .limit(connectionCount)
                .collect(toList());
    }

    private Connection generateConnection() {
        try {
            return DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException e) {
            throw new IllegalStateException("데이터베이스에 연결할 수 없습니다.");
        }
    }

    public Connection getConnection() {
        int currentIndex = index.getAndIncrement();
        return connections.get(currentIndex % connections.size());
    }
}
```

</TabItem>
</Tabs>

### SELECT, DELETE 중복 제거

변하지 않는 부분: try-with-resource, preparedStatement를 사용하는 부분, executeUpdate로 실행 등등  
변하는 부분: SQL Query, 매개변수  

다음과 같이 쿼리를 실행하는 부분을 분리하고 가변인수를 사용한다면 SELECT와 DELETE의 중복을 제거할 수 있다.  

```java
public void insert(final String name) {
    final String query = "INSERT INTO User (name) VALUES (?)";
    executeUpdate(query, name);
}

public void delete(final int userId) {
    final String query = "DELETE FROM user WHERE user_id = ?";
    executeUpdate(query, userId);
}

private void executeUpdate(final String query, final Object... parameters) {
    final Connection connection = connectionPool.getConnection();
    try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
        for (int i = 1; i <= parameters.length; i++) {
            preparedStatement.setObject(i, parameters[i - 1]);
        }
        preparedStatement.executeUpdate();
    } catch (final SQLException e) {
        throw new IllegalArgumentException(e.getMessage());
    }
}
```

### 조회 분리하기 - 1. 콜백을 위한 인터페이스 정의

조회는 INSERT, DELETE와 달리 값을 반환받아야 하기 때문에 다른 방법을 사용해야 한다.  
이 때 콜백이라는 것을 사용하여 중복을 제거할 수 있다.  

![image](https://user-images.githubusercontent.com/58586537/227392528-8139e442-45f7-451b-80e4-845986c791b1.png)

:::note 콜백(Callback)

프로그래밍에서 콜백은 다른 코드의 인수로 넘겨주는 실행 가능한 코드를 뜻한다.  
자바에서는 람다나 익명 클래스를 넘겨서 사용할 수 있다.

:::

데이터베이스에서 값을 조회하고, 해당 값을 객체로 매핑하여 값을 반환해야 한다.  
executeQuery로 조회한 값은 ResultSet 안에 들어가있다.  
이를 원하는 타입의 값으로 변환해야하니 일단 콜백을 위한 인터페이스를 만들어야 한다.  

```java
@FunctionalInterface
public interface RowMapper {
    User mapRow(final ResultSet resultSet) throws SQLException;
}
```

### 조회 분리하기 - 2. 단건 조회

위에서 정의한 RowMapper를 메서드에서 어떻게 사용해야 할까?  
아래와 같이 SQL 쿼리, RowMapper, 파라미터를 분리한 메서드에 넘겨주고 쿼리 실행 후 매핑한 값을 반환하도록 한다.  

```java
public User findById(final int userId) {
    final String query = "SELECT * FROM user WHERE id = ?";
    return queryForSingleResult(query, resultSet -> {
        final int id = resultSet.getInt("id");
        final String name = resultSet.getString("name");
        return new User(id, name);
    }, userId);
}

private User queryForSingleResult(
        final String query,
        final RowMapper rowMapper,
        final Object... parameters
) {
    final Connection connection = connectionPool.getConnection();
    try (final PreparedStatement preparedStatement = connection.prepareStatement(query);
         final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {
        if (resultSet.next()) {
            return rowMapper.mapRow(resultSet);
        }
        return null;
    } catch (SQLException e) {
        throw new IllegalArgumentException(e.getMessage());
    }
}

private ResultSet executeQuery(
        final PreparedStatement preparedStatement,
        final Object[] parameters) throws SQLException {
    for (int i = 1; i <= parameters.length; i++) {
        preparedStatement.setObject(i, parameters[i - 1]);
    }
    return preparedStatement.executeQuery();
}
```

### 조회 분리하기 - 3. 다건 조회

단건 조회와 유사하다.

```java
public List<User> findAll() {
    final String query = "SELECT * FROM user";
    return query(query, resultSet -> {
        final int id = resultSet.getInt("id");
        final String name = resultSet.getString("name");
        return new User(id, name);
    });
}

private List<User> query(final String query, final RowMapper rowMapper, final Object... parameters) {
    final Connection connection = connectionPool.getConnection();
    try (final PreparedStatement preparedStatement = connection.prepareStatement(query);
         final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {
        final List<User> result = new ArrayList<>();
        while (resultSet.next()) {
            result.add(rowMapper.mapRow(resultSet));
        }
        return result;
    } catch (SQLException e) {
        throw new IllegalArgumentException(e.getMessage());
    }
}

private ResultSet executeQuery(
        final PreparedStatement preparedStatement,
        final Object[] parameters) throws SQLException {
    for (int i = 1; i <= parameters.length; i++) {
        preparedStatement.setObject(i, parameters[i - 1]);
    }
    return preparedStatement.executeQuery();
}
```

### 제네릭 사용하기

위의 코드는 User를 조회할 때만 사용할 수 있다.  
아래와 같이 제네릭을 적용하여 다른 Dao에서도 사용 가능하도록 변경할 수 있다.

```java
@FunctionalInterface
public interface RowMapper<T> {
    T mapRow(final ResultSet resultSet) throws SQLException;
}

private <T> List<T> query(final String query, final RowMapper<T> rowMapper, final Object... parameters) {...}
private <T> T queryForSingleResult(final String query, final RowMapper<T> rowMapper, final Object... parameters) {...}
```

### 메서드 분리한 부분 클래스로 분리하기 + Optional 사용하기

메서드로 분리한 부분을 JdbcTemplate이라는 클래스를 만들어 옮긴다.  
또한 null을 반환하기 보단 Optional로 감싸서 반환하도록 변경한다.  
최종적으로 아래와 같은 코드가 완성된다.

<Tabs>
<TabItem value="UserDao" label="UserDao" default>

```java
public class UserDao {
    private final RowMapper<User> rowMapper = resultSet -> {
        final int id = resultSet.getInt("id");
        final String name = resultSet.getString("name");
        return new User(id, name);
    };
    private final JdbcTemplate jdbcTemplate;

    public UserDao(final JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void insert(final String name) {
        final String query = "INSERT INTO User (name) VALUES (?)";
        jdbcTemplate.executeUpdate(query, name);
    }

    public void delete(final int userId) {
        final String query = "DELETE FROM user WHERE user_id = ?";
        jdbcTemplate.executeUpdate(query, userId);
    }

    public Optional<User> findById(final int userId) {
        final String query = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.queryForSingleResult(query, rowMapper, userId);
    }

    public List<User> findAll() {
        final String query = "SELECT * FROM user";
        return jdbcTemplate.query(query, rowMapper);
    }
}
```

</TabItem>
<TabItem value="JdbcTemplate" label="JdbcTemplate" default>

```java
public class JdbcTemplate {
    private final ConnectionPool connectionPool;

    public JdbcTemplate(final ConnectionPool connectionPool) {
        this.connectionPool = connectionPool;
    }

    public void executeUpdate(final String query, final Object... parameters) {
        final Connection connection = connectionPool.getConnection();
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            for (int i = 1; i <= parameters.length; i++) {
                preparedStatement.setObject(i, parameters[i - 1]);
            }
            preparedStatement.executeUpdate();
        } catch (final SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    public <T> Optional<T> queryForSingleResult(
            final String query,
            final RowMapper<T> rowMapper,
            final Object... parameters
    ) {
        final Connection connection = connectionPool.getConnection();
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query);
             final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {
            if (resultSet.next()) {
                return Optional.of(rowMapper.mapRow(resultSet));
            }
            return Optional.empty();
        } catch (SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    private ResultSet executeQuery(
            final PreparedStatement preparedStatement,
            final Object[] parameters
    ) throws SQLException {
        for (int i = 1; i <= parameters.length; i++) {
            preparedStatement.setObject(i, parameters[i - 1]);
        }
        return preparedStatement.executeQuery();
    }

    public <T> List<T> query(
            final String query,
            final RowMapper<T> rowMapper,
            final Object... parameters
    ) {
        final Connection connection = connectionPool.getConnection();
        try (final PreparedStatement preparedStatement = connection.prepareStatement(query);
             final ResultSet resultSet = executeQuery(preparedStatement, parameters)) {
            final List<T> result = new ArrayList<>();
            while (resultSet.next()) {
                result.add(rowMapper.mapRow(resultSet));
            }
            return result;
        } catch (SQLException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }
}
```

</TabItem>
</Tabs>