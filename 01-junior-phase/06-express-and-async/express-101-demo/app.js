// 1. Self-defined module ("./express")
// 2. Built-in module ("express")
// 3. Installed module (1. npm install express 2. "express")

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("<h1>Hello, this is my first express page!!</h1>")
})

app.listen(3000);

