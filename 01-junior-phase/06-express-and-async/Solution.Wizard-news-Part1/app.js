const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

app.get("/posts/:id", (req, res, next) => {
  const posts = postBank.list();
  if (!posts[req.params.id]) {
    const postError = new Error("Post does not exist");
    next(postError);
  } else {
    const post = postBank.find(req.params.id);
    res.send(postDetails(post));
  }
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
