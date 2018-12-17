const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//before the routes - must be at the top
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ msg: "hello world" });
});

app.get("/users/:user", (req, res) => {
  console.log(req.params);
  req.send({ msg: `hi ${req.params.user}` });
});

app.get("/search", (req, res) => {
  // /search?q=cats
  console.log(req.query); // {q: 'cats}
  res.send({ msg: `Got a search for ${req.query.q}` });
});

app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(9090, () => {
  console.log("Listening on port 9090...");
});

/*
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode(200)
        res.write(JSON.stringify({msg: 'hello world'}))
        res.end();
      }
    }
  }
*/
