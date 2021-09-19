# Day 13: Intro to React

**You should be able to:**
- Write a class or functional component in React
- Pass, receive, and render `props` in a React component
- Define and update `state` in a component
- Handle state changes in response to user events (e.g. `onClick`)


## Which the following are appropriate ways to access `props` in a component? Select ALL THAT APPLY.

- **In a stateless functional component, get the `props` object from the first argument to the function** ☑️
- In a stateless functional component, get the `props` object from `this` context (i.e. `this.props`)
- **In a class component, get the `props` object from this context (i.e. `this.props`)** ☑️
  - Class components are JavaScript classes written with more modern syntax + JSX so all the `this` context rules apply
- In a class component, get the `props` object from the first argument to the `render` method

**Reference:**
- [React: Components and Props](https://reactjs.org/docs/components-and-props.html)


## How do you update the state on a class component?

- `this.setState()`
  - `setState()` schedules an update to a component’s `state` object. When `state` changes, the component responds by re-rendering.

**Reference:**
- [React: `setState()`](https://reactjs.org/docs/react-component.html#setstate)


## Which of the following statements is true?

- Class components are easier to write than functional components
- **Class components manage `state`, functional components can only receive data through `props`** ☑️
  - Side note: [React Hooks](https://reactjs.org/docs/hooks-intro.html) exist and class components need _not_ be the only type of component that manages `state`
- Class components are always preferred to functional components because they extend React's built-in component
- Class components hold data in their `props`, functional components have no data

**Reference:**
- [React: What is the difference between `state` and `props`?](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)
- Lucy Bain's [ReactJS: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)
- [react-guide: props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)


## In your own words, what is `state`?

- An object that holds data (the parts of the app that can change) in the context of a class component's `this`.


## In your own words, what is `props`?

- Short for "properties," `props` itself is just an object. Similar to a normal JavaScript function's arguments, the key-value pairs of the `props` object are assigned **where** the component is being rendered. They can be described as a "delivery system" for "sending"/making data available to a component. `props` can **only** be passed down (i.e. from a parent component to its child component).
