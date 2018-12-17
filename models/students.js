const fs = require("fs");
function getStudents(done) {
  fs.readdir("data", "utf8", (err, files) => {
    if (err) done(err);
    else {
      const result = [];
      files.forEach(file => {
        fs.readFile(`data/${file}`, (err, fileContents) => {
          if (err) done(err);
          else {
            const student = JSON.parse(fileContents); //nicer to return objects instead of big strings
            result.push(student);
            if (result.length === files.length) {
              done(null, result);
            }
          }
        });
      });
    }
  });
}

module.exports = { getStudents };
