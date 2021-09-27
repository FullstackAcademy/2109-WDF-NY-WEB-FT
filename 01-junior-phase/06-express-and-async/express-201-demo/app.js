const express = require("express");
const morgan = require("morgan");
const path = require("path")

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public"))); // ~/public

app.get("/", (req, res) => {
  res.send("<h1>Hello this is my first Express page!</h1>")
})

const food = [
  'ice cream',
  'thai',
  'pasta',
  'sushi',
  'poke',
  'hot pot',
  'burger'
]

app.get("/ingredients", (req, res, next) => {
  res.send(food);
})

app.get("/ingredients/:foodId", (req, res, next) => {
  const foodItem = food[req.params.foodId];

  res.send(`<h1>${foodItem}</h1>
            <img src="/ice-cream.jpeg">`);
});

app.listen(3000);
