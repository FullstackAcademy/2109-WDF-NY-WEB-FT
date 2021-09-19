# Day 08: pg, Express Routing, REST

**You should be able to:**
- Describe the role of pg in our stack
- Define REST and its advantages
- Create and mount Express Routers
- Explain the role of body parsing middleware


## What role does `node-postgres` assume when communicating with PostgreSQL (aka Postgres)?

- **Client** ☑️
  - It is requesting something from the PostgreSQL server
- Server
- Neither


## What is REST?

- A node module for handling routes
  - Express
- A type of built-in express middleware for designing routers
  - Express Router
- **An architectural style for designing web services** ☑️
  - Helps answer the question on how to organize routes and how to map functionality to URIs and Methods:
    - Paths represent "nouns" or resources
    - HTTP “verbs” map to data operations
- A algorithm for parsing the text of an HTTP request
  - Body Parser


## Select all HTTP verbs

- **GET** ☑️
- SET
- **POST** ☑️
- **PUT** ☑️
- UPDATE
- REMOVE
- **DELETE** ☑️


## What is the express body parser and why do we use it?

- It's a piece of middleware in which it extracts data from a form and makes it available to `req.body`. It does two things, it turns the stream of data into a parsable string, and it turns both urlencoded data, json data, raw data and plain text data into a plain javascript object so we don't have to do any of that work ourselves.
