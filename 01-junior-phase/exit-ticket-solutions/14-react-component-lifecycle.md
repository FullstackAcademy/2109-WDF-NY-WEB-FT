# Day 14: React Component Lifecycle

**You should be able to:**
- Hook into React lifecycle events (i.e. `componentDidMount`)
- Define the order the React lifecycle
- Define the Virtual DOM
- Render lists of data in JSX


## In your own words, what is the React Lifecycle?

- The React Lifecycle describes the various stages a React component travels through. These stages allow us to monitor and manipulate, and can be broken down into the following:

| Stage | Description | Methods triggered </br> (in order) |
| ----- | ----------- | ---------------------------------- |
| **Mounting** | When an instance of a component is being created and inserted into the DOM | `constructor()` </br> `render()` </br> `componentDidMount()` |
| **Updating** | When the `props` or `state` of a component change and the UI is "repainted" | `render()` </br> `componentDidUpdate()` |
| **Unmounting** | When a component is being removed from the DOM | `componentWillUnmount()` |

- Right before, the mounting phase, you can also say there is an “initialization” stage, where we declare some things (such as `state`) in the constructor.
- Mounting means that the component has been converted to real DOM nodes, which have been placed on the DOM and its elements are rendered on the webpage.

**Reference:**
- [React: The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React's lifecycle diagram cheat sheet](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## What lifecycle method is the best place to make AJAX calls?

- **`componentDidMount`** ☑️
  - It runs only **once** throughout the life of a React component so it's a good place to set up subscriptions and fetch data from a server.
- `render`
- `componentDidUpdate`
- `componentWillUnmount`
- `ReactDOM.render`

**Reference:**
- [React: `componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount)
  > `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.


## Which of the following statements is true about the Virtual DOM?

- There is no difference between the Virtual DOM and the "real" DOM
- **The Virtual DOM is a big JS object representing the DOM tree that's used internally by React** ☑️
- We manipulate the Virtual DOM ourselves to get our components to render and re-render

**Reference:**
- [React: Virtual DOM and Internals](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
- [React: Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [Codecademy's React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)


## Choose the correct order of the React Lifecycle:

- `ReactDOM.render` -> mounted component -> `componentDidMount` -> `render`
- **`ReactDOM.render` -> `render` -> mounted component -> `componentDidMount`** ☑️
  - Remember, an initial `render` happens _before_ the component mounts.
- mounted component -> `componentDidMount` -> `render` -> `ReactDOM.render`
- `componentDidMount` -> mounted component -> `ReactDOM.render` -> `render`


## Why do we need the `key` prop when we `map` over lists?

  > Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
  >
  > The best way to pick a `key` is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.
  >
  > When you don’t have stable IDs for rendered items, you _may_ use the item index as a `key` as a last resort.
  >
  > We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

**Reference:**
- [React: Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [Robin Pokorny: Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
- Here is [an example of the issues that can be caused by using indexes as keys](https://reactjs.org/redirect-to-codepen/reconciliation/index-used-as-key) on CodePen, and here is [an updated version of the same example showing how not using indexes as keys will fix these reordering, sorting, and prepending issues](https://reactjs.org/redirect-to-codepen/reconciliation/no-index-used-as-key).


## What lifecycle method is called when the mounted component is removed?

- `componentDidMount`
- **`componentWillUnmount`** ☑️
  - This is a good place to remove any event listeners, intervals, timers, etc. we initialized that React _doesn’t_ have control over.
- `render`
- `componentDidUpdate`

**Reference:**
  - [React: `componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount)
