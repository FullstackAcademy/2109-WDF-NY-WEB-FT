# Day 17: `connect`, Thunks, `combineReducers`

**You should be able to:**
- Use `connect` from `react-redux` to connect a React component to the Redux store, including defining appropriate `mapStateToProps` and `mapDispatchToProps`
- Use thunks to perform AJAX requests with a React/Redux application
- Use combineReducers to split your reducer function into separate functions, each managing independent slices of your store's state


## `connect` modifies the original component.

- True
- **False** ☑️
  - `connect` returns a new component with all the necessary information from `mapDispatch` and `mapState` onto the component's `props` object


## This is an action creator written incorrectly. If we were to actually use this function, it wouldn't work. Can you spot why and what will it return if given an argument?

```js
const gotUsers = (users) => {
    type: 'GOT_USERS',
    users
}
```

- The issue is that the object is **not** surrounded in parenthesis (see below). Object literals must be wrapped in parenthesis so the curly braces are ***not*** mistaken for the opening of a function's body. This is called an implicit return.
  ```js
  const gotUsers = (users) => ({
      type: 'GOT_USERS',
      users
  })
  ```


## This `mapDispatch` function written incorrectly. Spot the error and how do you write it correctly?

```js
const mapDispatch = dispatch => {
    return {
        fetchUsers: dispatch(gotUsers())
    }
}
```

- The error is that the `dispatch` function (the value in the key-value pair) is ***not*** wrapped inside a function.
  ```js
  const mapDispatch = dispatch => {
      return {
          fetchUsers: () => dispatch(gotUsers())
      }
  }
  ```


### This is a `mapState` function defined inside the `AllUsers` Class component. How do you access users in the `AllUsers` component?

```js
// filename: AllUsers.js
const mapState = state => {
    return {
        users: state.users.all
    }
}
```

- `this.props.users`


## Which are correct ways to call `connect`?

|   | Option |
| - | ------ |
| ☑️ | **`connect(mapState, mapDispatch)(Component)`** |
|   | `connect(mapDispatch)(Component)` |
| ☑️ | **`connect(null, mapDispatch)(Component)`** |
|   | `connect(null, null)(Component)` |
|   | `connect(mapState, null)(null)` |


## In which of the following scenarios would you use a thunk?

- When changing the state of your React app
- When using setTimeout to delay execution of code
- **When retrieving data asynchronously from a server** ☑️
  - The point of a thunk is to remove the responsibility of handling asynchronous code from components. Components don't need to know whether an action is async or not. They just need to dispatch.


## At what point in the flow of a client-side application does the thunk middleware check to see if a dispatched action is an object or function?

- After the logging middleware
- After changing client state
- Before creating the store
- After using combineReducers
- **Before reaching the reducer** ☑️
  - The reducer takes in an action object as one of its arguments. If it's passed in a function, the reducer will not know what to do with it so, before it reaches the reducer, it will need to run itself and come back as an object. Think of thunk middleware is a bouncer to a club and the only way in is to be an object.


## How does a thunk have access to `dispatch`?

- `dispatch` is available globally
- **`dispatch` is passed as a parameter to the thunk** ☑️
- through the `<Provider>` component
- through `mapDispatchToProps`


## Give an example of when you would **NOT** use `combineReducers` in your Redux store?

- If you have state in which it doesn't make much sense to split. For example, if all your state has to do with puppies, then it's probably best to keep it as is. However, if you have large state with many different resources such as puppies, kitties and birdies, then it makes sense to split your state up into three different sub-states and use combine reducer.
