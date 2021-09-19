# Day 06: Express, `async`/`await`

(Credit: Noelle Laureano)

**You should be able to:**
- Describe the role of a client, a server, and HTTP
- Describe Express middleware, requests, and responses
- Handle URL params in an Express route
- Know when and why you would use `app.use` and `next` in your Express app
- Explain the purpose of using `async`/`await` & Promises


## In your own words, what is a server?

- A HTTP server listens for HTTP requests and sends HTTP responses.

**Reference:**
  - [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)


## What is the purpose of the `package.json` file in a Node project?

- Store a list of dependencies for the project
- Give the project a name
- Store metadata about the project
- **All of the above** ☑️
- None of the above

**Reference:**
  - See the section "Properties of a package.json file" [here](https://dev.to/easybuoy/understanding-the-package-json-file-3fdg).
  - [Node: What is the file `package.json`?](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)


## What is Express?

- **Node web framework for handling requests** ☑️
  - _Provides mechanisms to:_
    - Write handlers for requests with different HTTP verbs at different URL paths (routes)
    - Set common web application settings like the port to use for connecting
    - Add additional request processing “middleware” at any point within the request handling pipeline
- JavaScript runtime environment
- JavaScript library for building user interfaces
- An ORM

**Reference:**
  - [Express.js documentation](https://expressjs.com/)
  - [MDN: Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - [tutorialspoint: ExpressJS Overview](https://www.tutorialspoint.com/expressjs/expressjs_overview.htm)


## Which of the following statements are true about Express Middleware?

- **An example of it could be `app.use`** ☑️
- **It happens between the request and response** ☑️
- Only one middleware function can be called per request-response cycle
- **An example of it could be `app.get`** ☑️
- It sometimes runs after the response is sent

**Reference:**
  - [Express: Using middleware](https://expressjs.com/en/guide/using-middleware.html)
    - In reference to `app.get`, in this doc, it says, "Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls." Technically, since Express is built on top of and leverages Node, Express sits in between the request and response.
  - [Express: Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)
  - [Express: `app.use()`](https://expressjs.com/en/4x/api.html#app.use)
  - ***A function that receives the request and response objects of an HTTP request/response cycle (i.e. `(req, res, next) => {...}`).***


## What is a Promise?

- A function that runs asynchronous code
- A keyword that marks a function as having asynchronous code
- A callback function that executes after an asynchronous operation finishes
- **An object that represents the eventual completion of an asynchronous operation and its resulting value** ☑️

**Reference:**
  - [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)


## Which of the following statements is true about `async`/`await`?

- You can use `await` outside of an `async` function
- `async` functions are not Promises when the return value is not a Promise itself
- **Inside of an `async` function, the code behaves synchronously** ☑️
- `async` functions are synchronous
