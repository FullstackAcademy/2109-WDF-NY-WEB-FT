const html = require("html-template-tag");

module.exports = (actors) => html`
  <h1>Actors</h1>
  <hr>
  <ul>
    <ul>
      ${actors.map(actor => html`<li>
        <a href="/actors/${actor.id}">${actor.name}</a>
      </li>`)}
    </ul>
  </ul>
`;
