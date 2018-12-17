const { getStudents } = require("../models/students");

exports.sendStudents = (req, res) => {
  getStudents((err, students) => {
    if (err) res.send({ err });
    else res.send({ students });
  });
};
