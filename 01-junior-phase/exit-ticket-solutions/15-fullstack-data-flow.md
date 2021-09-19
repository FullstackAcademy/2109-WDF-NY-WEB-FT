# Day 15: Fullstack Data Flow

**You should be able to:**
- Describe how data flows between the client and server in a fullstack application
- Organize a reasonable file structure for a fullstack application


## Pick the correct order for the following flows of data:
<small>Assume that the user has requested the default document and the app is loading its initial data.</small>

| Order | Option | Explanation |
| ----- | ------ | ----------- |
| **1** | The browser makes a request to get `index.html` from the server |  |
| **2** | Express sends `index.html` to the browser |  |
| **3** | The browser executes the bundle referred to in a script tag with a defer attribute | The browser reads the `index.html` file line by line. </br> At some point, it read the script tag with the bundle but if it had `defer` on it, it would be executed after the browser finishes reading the `index.html`. |
| **4** | React components are mounted for the first time | The bundle provides the means to mount the React components that we created. |
| **5** | A route returns a list of albums | This would be executed likely in the `componentDidMount` lifecyle. |


## Pick which folder each file or line of code should be under:

|   | `server` | `client` | `public` | Explaination |
| - | -------- | -------- | -------- | ------------ |
| unicodesnowman.png |   |   | ☑️ | Images are static files and they are usually stored in the public directory. |
| `class SingleSong extends React.Component` |   | ☑️ |   | This is a React component, which is client-side development. |
| `import app from './app'` |   | ☑️ |   | This is using the ES6 Module syntax which is normalized for client- side/front-end development. |
| `require('./app')` | ☑️ |   |   | `require` syntax is usually done in Node (backend/server) as ES Module syntax is not defaulted in Node. |
| `Artist.findAll()` | ☑️ |   |   | This is a Sequelize method which is executed likely in our GET / route, which is on the backend/server. |
| `<script defer src="/bundle.js"></script>` |   |   | ☑️ | This is likely inside `index.html`, which is a static file and static files are usually stored in the public directory. |
