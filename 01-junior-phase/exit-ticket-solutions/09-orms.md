# Day 09: ORMs (Sequelize)

**You should be able to:**
- Define an ORM, and explain its pros/cons
- Define models in Sequelize
- Associate models with each other
- Hook into Sequelize lifecycle events
- Query on models (`findAll`, `findOne`, `create`, "magic methods", etc.)


## Sequelize is...

|   | Option | Explanation |
| - | ------ | ----------- |
| ☑️ | **A type of ORM** |  |
|   | A type of database | It just helps us connect to a database. </br> It's _not_ the database itself. |
| ☑️ | **A library that converts between tables/rows and classes/instances** |  |
| ☑️ | **Used in Node applications to connect to SQL databases** |  |
|   | Used in Node applications to connect to ANY type of database | For NoSQL DBs such as Document Store (MongoDB), we would need to use a ODM (Object Data Modeling). </br> In the case of MongoDB, the equivalent would be Mongoose. |


## Fill in the blanks in the code sample:
<small>The model should be defined, the name attribute should not be allowed to be null, its type should be a text type and pictureURL should be a string type.</small>

```js
const User = db._____('user', {
    name: {
        type: Sequelize._____,
        _____: false
    },
    pictureUrl: _____.TEXT
})
```

- **`define`, `STRING`, `allowNull`, `Sequelize`** ☑️
  ```js
  const User = db.define('user', {
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      pictureUrl: Sequelize.TEXT
  })
  ```
- `Sequelize`, `TEXT`, `isNotEmpty`, `define`
- `define`, `TEXT`, `isNotNull`, `Sequelize`
- `define`, `STRING`, `allowNull`, `global`


## Model Associations
<small>A journal app has three entities, Author, Entry and Tag. There is a one-to-one relationship between Author and Pseudonym, a one-to-many relationship between Author and Entry and a many-to-many relationship between Tag and Entry. Choose the correct method for these relationships below.</small>

|   | `hasOne` | `hasMany` | `belongsToMany` |
| - | ------ | ------- | ------------- |
| Author to Entry |   | ☑️ |   |
| Author to Pseudonym | ☑️ |   |   |
| Entry to Tag |   |   | ☑️ |


## Pick the option which lists Sequelize model instance hooks in order:

- `beforeValidate`, `afterDestroy`, `beforeCreate`
- `afterCreate`, `beforeDestroy`, `beforeValidate`
- **`beforeValidate`, `afterValidate`, `beforeCreate`** ☑️
- `beforeDestroy`, `beforeCreate`, `beforeValidate`, `afterUpdate`

**Reference:**
  - [Julissa's Hooks and Ops Gist](https://gist.github.com/Julissa93/6a6d29874d34a801d603d2522645025f)
  - [Sequelize: Hooks](https://sequelize.org/master/manual/hooks.html) (official documentation)


## Choose the method that will return exactly one instance in a query and _not_ modify the database:

- `findAll`
- **`findOne`** ☑️
- `create`
