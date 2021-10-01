const html = require("html-template-tag");

module.exports = (movies) => html`
  <h1>Movies</h1>
  <hr>
  <ul>
    <ul>
      ${movies.map(movie => html`<li>
        <a href="/movies/${movie.id}">${movie.title}</a>
      </li>`)}
    </ul>
  </ul>
`;
