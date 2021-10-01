const html = require("html-template-tag");

module.exports = `
  <h3>Add a Movie </h3>
  <hr>
  <form method="POST" action="/movies/">
    <div>
      <label for="title">Movie Title</label>
      <div>
        <input name="title" type="text" required = "true"/>
      </div>
    </div>
    <div>
      <label for="releaseYear" >Release Year</label>
      <div>
        <input name="releaseYear" type="text" required = "true"/>
      </div>
    </div>
    <div>
      <label for="rating">IMDB Rating</label>
      <div>
        <input name="rating" type="text"/>
      </div>
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
  </form>
`;
