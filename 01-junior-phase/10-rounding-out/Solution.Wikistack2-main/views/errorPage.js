const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (error) => layout(html`
  <h1>Ops, server error</h1>
  <h2>${error.message}</h2>
  <pre>${error.stack}</pre>
`);