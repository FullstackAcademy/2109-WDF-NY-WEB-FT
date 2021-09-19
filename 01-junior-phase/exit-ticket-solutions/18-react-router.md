# Day 18: React Router

(Credit: Noelle Laureano)

**You should be able to:**
- Use the URL bar to manage state and control navigation within a SPA using the `react-router-dom` library
- Set up `HashRouter`/`BrowserRouter` in a parents component to handle routing
- Swap views using `Route` components
- Navigate to specific routes using `Link` components


## Which is **NOT** a main component we import from `react-router-dom`?

- `Route`
- `Router` (`HashRouter` or `BrowserRouter`)
- `Link`
- `History`
  - `History` is **not** a main component that we import from `react-router-dom`. `History` is one of the three route props we have access to within our components rendered via `react-router-dom`'s `Route` component (either implicitly or explicitly).

**Reference:**
  - [Route props](https://reacttraining.com/react-router/web/api/Route/route-props)
  - [history](https://reacttraining.com/react-router/web/api/history)
  - [Guides: Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)


## Which is of the following are default props provided by React Router?

|   | Option |
| - | ------ |
| ☑️ | **`history`** |
|   | `link` |
|   | `route` |
| ☑️ | **`location`** |
|   | `req` |
|   | `router` |
| ☑️ | **`match`** |

- React Router `Route` props include ***match***, ***location***, and ***history***.
  - [Route props](https://reacttraining.com/react-router/web/api/Route/route-props)


## How does React Router handle parameters given in the URL?

- **`props.match.params`** ☑️
- `req.params`
- Defining a new `<Route>` for each possible accepted parameter
- Trick question! React Router cannot handle parameters given in the URL

**Note:**
- A `match` object contains information about how a `<Route path>` matched the URL. `match` objects contain the following properties:
  - **params** - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  - **isExact** - (boolean) true if the entire URL was matched (no trailing characters)
  - **path** - (string) The path pattern used to match. Useful for building nested `<Route>`s
  - **url** - (string) The matched portion of the URL. Useful for building nested `<Link>`s

**Reference:**
  - [`match`](https://reacttraining.com/react-router/web/api/match)


## If you wanted to pass some data into a component rendered via React Router, which of the following code snippets would you use?

- `<Route path="/" component={Component} props={data} />`
- `<Component data={data} />`
- **`<Route path="/" render={ () => <Component data={data} /> } />`** ☑️
- `<Component props={data} {...props} />`

**Note:**
- If you need to pass a prop to a component being rendered by React Router, instead of using `<Route>`s `component` prop, use its `render` prop passing it an inline function then pass along the arguments to the element you’re creating.
  ```jsx
  <Route
    path="/"
    render={ () => <Component data={data} /> }
  />
  ```

**Reference:**
  - [Tyler McGinnis: Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)


<!--

Archived question:

## True or False: Because the URL bar is changing and the UI updates with new content, React Router can only be used for multi page apps.

- ***False***
  > React is often used for building single page applications (SPAs). SPAs tend to have multiple page views. When navigating from one-page view to another, reloading the entire page view is a tedious and not so efficient task. In fact, it diminishes the benefits of a SPA. To work as it should, a SPA must render parts of views when required instead of reloading the entire page.
  >
  > Routing comes into the picture when navigating from one page to another in a SPA app. Routing can be categorized in two ways. Static and dynamic. SPAs follow dynamic approach.
  > [- Aman Mittal](https://blog.crowdbotics.com/introduction-to-react-router-v4-with-reactjs/)

-->
