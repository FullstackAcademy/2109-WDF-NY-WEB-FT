# Day 10: Rounding Out Express & Sequelize

(Credit: Noelle Laureano)

**You should be able to:**
- Write custom error handlers in Express
- Utilize eager loading in Sequelize queries
- Write class and instance methods on Sequelize models


## In your own words, what is eager loading?

- **The equivalent to doing an `LEFT JOIN` in SQL.**
    - By default, associations are loaded using a `LEFT JOIN` - that is to say it _only_ includes records from the parent table. However, you can indicate to Sequelize what kind of join you want to do. Below is from the Sequelize Documentation, which is linked below this snippet.

  ```js
  User.findAll({
      include: [{
      model: Task // will create a left join (default)
    }]
  });

  User.findAll({
    include: [{
      model: Task,
      right: true // will create a right join
    }]
  });

  User.findAll({
    include: [{
      model: Task,
      required: true // will create an inner join
    }]
  });
  ```

**Reference:**
  - [Sequelize: Eager Loading](https://sequelize.org/master/manual/eager-loading.html)
     > As briefly mentioned in the associations guide, eager Loading is the act of querying data of several models at once (one 'main' model and one or more associated models). At the SQL level, this is a query with one or more joins).
     >
     > When this is done, the associated models will be added by Sequelize in appropriately named, automatically created field(s) in the returned objects.
     >
     > In Sequelize, eager loading is mainly done by using the include option on a model finder query (such as `findOne`, `findAll`, etc).
     ```js
     // Models
     const User = sequelize.define('user', { name: DataTypes.STRING }, { timestamps: false });
     const Task = sequelize.define('task', { name: DataTypes.STRING }, { timestamps: false });
     const Tool = sequelize.define('tool', {
       name: DataTypes.STRING,
       size: DataTypes.STRING
     }, { timestamps: false });

     // Associations
     User.hasMany(Task);
     Task.belongsTo(User);
     User.hasMany(Tool, { as: 'Instruments' }); // **aliased**

     // Eager Loading examples:

     // (1) Fetching a single associated element (i.e. include each task's user)
     const tasks = await Task.findAll({ include: User });

     // Sample output:
     [{
       "name": "A Task",
       "id": 1,
       "userId": 1,
       "user": {
         "name": "John Doe",
         "id": 1
       }
     }]

     // (2) Fetching all associated elements (i.e. include all of the users' tasks)
     const users = await User.findAll({ include: Task });

     // Sample output:
     [{
       "name": "John Doe",
       "id": 1,
       "tasks": [{
         "name": "A Task",
         "id": 1,
         "userId": 1
       }]
     }]

     // (3) Fetching an Aliased association (i.e. include each user's tools [aka "instruments"])
     // If an association is aliased (using the as option), you must specify this alias when including the model. Instead of passing the model directly to the include option, you should instead provide an object with two options: model and as.
     const users = await User.findAll({
       include: { model: Tool, as: 'Instruments' }
     });

    // Sample output:
    [{
      "name": "John Doe",
      "id": 1,
      "Instruments": [{
        "name": "Scissor",
        "id": 1,
        "userId": 1
      }]
    }]
     ```
  - [FSA Sequelize docs: Joins/Includes (aka "Eager Loading")](https://sequelizedocs.fullstackacademy.com/eager-loading/)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)


## Which of the following is a valid error-handling middleware?

- `app.use((req, res, next) => {...});`
- `app.get((err, req, res, next) => {...});`
- **`app.use((err, req, res, next) => {...});`** ☑️
- `app.use((req, res, err) => {...});`

**Reference:**
  - [Express: Writing error handlers](https://expressjs.com/en/guide/error-handling.html#writing-error-handlers)
  - [Express: How do I setup an error handler?](http://expressjs.com/en/starter/faq.html#how-do-i-setup-an-error-handler)


## What does `this` refer to in this code snippet?

```js
User.findByBirthday = function() {
  return this;
}
```

- **the User model**  ☑️
- a single user instance
- the `findByBirthday` function
- undefined

**Reference:**
  - [Sequelize: Taking advantage of Models being classes](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes)
  - [Sequelize: Expansion of models](https://sequelize.readthedocs.io/en/latest/docs/models-definition/#expansion-of-models)
    ```js
    const User = db.define('user', { firstname: Sequelize.STRING });

    // Adding a class level method
    User.classLevelMethod = function() {
      return 'foo';
    };
    ```
  - [FSA Sequelize docs: Class methods](https://sequelizedocs.fullstackacademy.com/instance-and-class-methods/#class-methods)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)


## What does `this` refer to in this code snippet?

```js
User.prototype.getBirthday = function() {
  return this;
}
```

- the User model
- **a single user instance**  ☑️
- the `findByBirthday` function
- undefined

**Reference:**
  - [Sequelize: Taking advantage of Models being classes](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes)
  - [Sequelize: Expansion of models](https://sequelize.readthedocs.io/en/latest/docs/models-definition/#expansion-of-models)
    ```js
    const User = db.define('user', { firstname: Sequelize.STRING });

    // Adding an instance level method
    User.prototype.instanceLevelMethod = function() {
      return 'bar';
    };
    ```
  - [FSA Sequelize docs: Instance methods](https://sequelizedocs.fullstackacademy.com/instance-and-class-methods/#instance-methods)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)


## Extra Resources

- **Magic Methods**
  - [Sequelize Associations & Magic Methods](https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9)
  - [Jess' Magic Methods Gist](https://gist.github.com/jbracht/1778e93ced532b902fc49d70a743ffb8)
