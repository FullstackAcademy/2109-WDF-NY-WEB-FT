const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h1>Looks like this page doesn't exist</h1>
  <a href="/wiki">Back to Homepage</a>
`);