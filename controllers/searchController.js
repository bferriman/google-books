const axios = require("axios");

module.exports = {
  searchByQuery: function(req, res) {
    axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
      req.params.q +
      "&key=" +
      process.env.API_KEY)
    .then(booksData => res.json(booksData))
    .catch(err => res.status(422).json(err));
  }
};