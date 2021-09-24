const fs = require('fs');

module.exports = (done) => {
  fs.readdir('./', 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      done(data.join('\n'));
    }
  });
};
