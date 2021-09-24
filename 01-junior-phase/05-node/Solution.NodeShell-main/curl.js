const request = require('request') // Option 1
// const http = require('http') // Option 2

// Option 1: Implementation using `request`
module.exports = (url, done) => {
  request(url, (err, response, body) => {
    if (err) {
      done(err)
    } else {
      done(body)
    }
  })
}

// Option 2: Implementation using built-in `http`
// module.exports = (url, done) => {
//   http.get(url, (res) => {
//     let raw = ''
//
//     res
//       .on('data', (chunk) => {
//         raw += chunk
//       })
//       .on('end', () => {
//         done(raw)
//       })
//       .on('error', (err) => {
//         done(err.message)
//       })
//   })
// }
