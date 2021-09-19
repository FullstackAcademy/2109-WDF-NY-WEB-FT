# Day 16: Redux

**You should be able to:**
- Create a Redux store (with a proper reducer and any necessary middleware)
- Write action types and creators corresponding to your store
- Subscribe to store changes
- Dispatch state-changing actions to the store


## In your own words, what is Redux and why do we use it?

- Redux is used to be a centralized place for our state to live in. Its main use case is when the state in our application gets too large. When this happens, it becomes difficult to maintain in React alone. If we declare our state "too high" and that data is needed is needed in a distant child, the only way React can manage is this is to send state through props through many layers of components. This is called 'prop drilling'. If we declare state "too low", and a distant ancestory needs that data, React is unidirectional and we are not supposed to "pass state back up".
  - [State Scenarios Diagrams](https://drive.google.com/file/d/1HQMHTMmcFN-2Jv2WlFU5Ioyc18EP_pmd/view?usp=sharing)
  - [Kent C. Dodds: Prop Drilling](https://kentcdodds.com/blog/prop-drilling)
  - [React Docs: Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)


## Which is _not_ a core principle of Redux?

- The store is a single source of truth
- **Only one store can be invoked per app** ☑️
- State is read-only
- Changes are made through actions which flow through your pure reducer


## Which of these are methods that are accessible directly from the Redux store? Select all that apply.

|   | Option | Explanation |
| - | ------ | ----------- |
|   | `createStore` | This is from Redux itself, _not_ the store. |
|   | `reducer` | We create this ourselves and pass it _into_ the store. |
| ☑️ | **`getState`** | One of the functions that is given to us by the store. |
|   | `applyMiddleware` | From Redux itself, _not_ the store. |
| ☑️ | **`dispatch`** | One of the functions that is given to us by the store. |
| ☑️ | **`subscribe`** | One of the functions that is given to us by the store. |
|   | `unsubscribe` | You can say that this is technically given to us by the Redux store, but it is the return value of the `subscribe` function. |


## Which is _not_ a good use case for Redux?

| Use Redux? |   | Explanation |
| ---------- | - | ----------- |
| ☑️ | A browser-based game with lots of async user events | Keeping track of lots of users events that might affect state means it's a pain to keep that all coordinated while making sure each user gets the updates. The single source of truth aspect of Redux helps with this. |
| ☑️ | An ecommerce store that tracks user authentication across views | Tracking auth state across views is a good use case for Redux. The single source of truth aspects prevents us from having to pass auth state to several different components. |
| ☑️ | A dashboard that updates a series of graphs in real time | Same as above. Keeping multiple graphs (components) updated is tedious if we have to pass state around everywhere. |
| 🚫 | A fan wiki where users can read hundreds of articles | Is there really state being passed around everywhere and shared among multiple views and components? Do we need to keep things in sync? Are there complicated state changing actions? All we need to do here is get the articles and put them in state and display them. There can be a lot contained in state (articles) but state is not complicated. |


## Which of the following statements are true? Select all the apply.

|   | Option | Explanation |
| - | ------ | ----------- |
|   | Redux is part of the React library | Separate library. |
|   | React is part of the Redux library | Separate library. |
|   | Redux is a library for managing components | That's React's job. |
| ☑️ | **Redux is a library for managing state** |  |
| ☑️ | **Redux can be used with any JavaScript app** | It's a separate library so it can be used with anything. |
|   | Redux can only be used with React | It's definitely used with React a lot, and a lot of blog posts make it seem that way, but, again, it's a _separate_ library that can be used with _any_ JavaScript app if you _need_ a centralized place to manage state. |
