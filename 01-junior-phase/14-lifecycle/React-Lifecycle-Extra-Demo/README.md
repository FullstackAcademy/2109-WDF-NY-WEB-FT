# React Lifecycle Demo App

This demonstrates all of the React Lifecycle events.

To run it:

```shell
npm install
npm start
```

It contains the following components:

- `<App>` - The app component conditionally renders the `<Lifecycle>` component based on a boolean which you can toggle on and off to demonstrate `componentWillUnmount`
- `<Lifecycle>` - This app implements a counter function which counts up when you click a button, and implements all the react lifecycle events.
- `<ErrorTester>` - This little component can throw an exception to simulate an error happening in a child component to test the `getDerivedStateFromError` and `componentDidCatch` lifecycle methods.
