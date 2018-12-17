const app = require("express")();
const { sendStudents } = require("./controllers/students");

app.get("/", (req, res) => {
  res.send({ msg: "Hi from the home page. 8)" });
});

app.get("/api/students", sendStudents);

module.exports = app;
