const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    res.json({});
  },
  create: function(req, res) {
    db.Book.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    res.json({});
  }
};