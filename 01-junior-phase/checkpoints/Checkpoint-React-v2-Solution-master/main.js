const app = require('./app');

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Request some furry pals at port ${PORT}`);
});
