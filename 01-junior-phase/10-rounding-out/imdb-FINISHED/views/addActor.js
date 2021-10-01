const html = require("html-template-tag");

module.exports = `
  <h3>Add an Actor </h3>
  <hr>
  <form method="POST" action="/actors/">
    <div>
      <label for="name">Actor Name</label>
      <div>
        <input name="name" type="text" required = "true"/>
      </div>
    </div>
    <div>
      <label for="birthYear" >Birth Year</label>
      <div>
        <input name="birthYear" type="text" required = "true"/>
      </div>
    </div>
    <div>
      <label for="deathYear">Death</label>
      <div>
        <input name="deathYear" type="text"/>
      </div>
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
  </form>
`;
