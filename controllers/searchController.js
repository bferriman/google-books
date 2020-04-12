const axios = require("axios");

module.exports = {
  searchByQuery: function(req, res) {
    console.log("https://www.googleapis.com/books/v1/volumes?q=" + req.params.q + "&key=" + process.env.API_KEY);
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.q + "&key=" + process.env.API_KEY)
    .then(booksData => {
      console.log(booksData.data.items);
      res.json(booksData.data.items)
    })
    .catch(err => res.status(422).json(err));
  }
};