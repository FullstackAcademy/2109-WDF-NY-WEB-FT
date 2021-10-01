const html = require("html-template-tag");
const layout = require("./layout");
const marked = require('marked');

module.exports = (page) => layout(html`
  <h3>${page.title}
      <small> (<a href="/wiki/${page.slug}/similar">Similar</a>)</small>
  </h3>
  <h4>by <a href="/users/${page.author.id}">${page.author.name}</a></h4>
  <ul>
    ${page.tags.map(tag => html`<li>${tag.name}</li>`)}
  </ul>
  <hr/>
  <div class="page-body">$${marked(page.content)}</div>
  <hr/>
  <a href="/wiki/${page.slug}/edit" class="btn btn-primary">edit this page</a>
  <form style='display:inline' method='POST' action='/wiki/${page.slug}?_method=DELETE'>
  <button class="btn btn-danger">delete this page</button>
  </form>
`);
