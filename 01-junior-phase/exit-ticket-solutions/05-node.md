# Day 05: Node

**You should be able to:**
- Explain the purpose of Node
- Explain asynchronicity in JavaScript and how to handle asynchronous code
- Use `module.exports` and `require` to create modular applications
- Describe what `npm` is and its purpose


## In your own words, what is Node? And why do we need it?

- Node is a **runtime environment** that has the ability to run a V8 engine on environments other than the browser (e.g. operating systems, servers, etc.).


## What does `module.exports` do?

- It's an object that tells Node which pieces of code to export from a given file so other files are allowed to access the exported code.


## What does `require` do?

- It's a built-in function that allows a file to include modules that exist in _separate_ files. The basic functionality of `require` is that it **reads** a JavaScript file, **executes** the file, and then proceeds to **return** the `exports` object.


## Which of the following is _not_ a built-in Node module?

- fs
- http
- path
- **curl** ☑️


## What is the order of output of this snippet of code:

```js
console.log('Hello')
setTimeout(() => { console.log('a new') }, 5000)
console.log('World')
```

| Log | 1st | 2nd | 3rd |
| --- | --- | --- | --- |
| Hello | ☑️ |  |  |
| a new |  |  | ☑️ |
| World |  | ☑️ |  |


## What is the output of the following snippet of code:

```js
const cool = () => {
  console.log('Running inside the cool function')
  setTimeout(
    () => {
      console.log('Timing out inside the cool function')
    },
    3000
  )
}

setTimeout(
  () => {
    console.log('I am not in any function')
  },
  3000
)

cool()
console.log('End of File')
```

| Log | 1st | 2nd | 3rd | 4th |
| --- | --- | --- | --- | --- |
| Running inside the cool function | ☑️ |  |  |  |
| Timing out inside the cool function |  |  |  | ☑️ |
| I am not in any function |  |  | ☑️ |  |
| End of File |  | ☑️ |  |  |
