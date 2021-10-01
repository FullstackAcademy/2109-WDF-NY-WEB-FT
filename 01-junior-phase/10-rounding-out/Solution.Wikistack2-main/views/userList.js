const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (users) => layout(html`
  <h3>Users</h3>
  <hr>
  <ul class="list-unstyled">
    <ul>
      ${users.map(user => html`<li>
        <a href="/users/${user.id}">${user.name}</a>
      </li>`)}
    </ul>
  </ul>
`);
