# Day 07: Databases (PostgreSQL), SQL, Schema Design

**You should be able to:**
- Explain what a database is, and why you would use one
- Write SQL queries using some common keywords (`SELECT`, `FROM`, `WHERE`, `ORDER BY`, `JOIN`, etc.)
- Articulate what a primary key is
- Articulate what a foreign key is and why you would use one
- Explain the differences between a one-to-one, one-to-many, and many-to-many relationship


## A foreign key is...

- a friendly diplomat you can always count on.
- **a column of one table that stores primary keys of another table.** ☑️
- a unique identifier for each row in a table.
  - Note: This is a primary key.


## Match the example to the relationship type:

|   | One-to-one | One-to-many | Many-to-many | Explanation |
| - | ---------- | ----------- | ------------ | ----------- |
| A person and his/her/their passport | ☑️ |   |   |   |
| An album and its songs |   |   | ☑️ | A song can be part of multiple albums </br> (i.e. released in the original album but also be part of a greatest hits album) |
| An author and their books |   | ☑️ |   |   |


## What are examples of good primary keys?

- **Social Security Numbers** ☑️
- Birthdates
- **Phone Numbers** ☑️
- **Fingerprints** ☑️

Explanation: For SSN and Phone Numbers, these would be good but we can also think about how not everyone has these and perhaps the format of these identifiers may be different depending upon where the person is from. Fingerprints are great because they are unique to everyone and everyone has fingerprints


## Choose the correct keywords to fill in the blanks in the following query to list everyone and their RSVP to dinner:

```sql
______ name, response
______ friends
______ responses ON rsvp.friendId = friends.id
______ response DESC;
```

- `SELECT`, `FROM`, `WHERE`, `GROUP BY`
- `SELECT`, `FROM`, `INNER JOIN`, `ORDER BY`
- **`SELECT`, `FROM`, `LEFT JOIN`, `ORDER BY`** ☑️
  ```sql
  SELECT name, response
  FROM friends
  LEFT JOIN responses ON rsvp.friendId = friends.id
  ORDER BY response DESC;
  ```
- `SELECT`, `FROM`, `FULL OUTER JOIN`, `GROUP BY`

