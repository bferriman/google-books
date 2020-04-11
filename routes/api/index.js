const router = require("express").Router();
const searchController = require("../../controllers/searchController");
const booksController = require("../../controllers/booksController");

router.route("/search/:q")
  .get(searchController.searchByQuery);

router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/books/:id")
  .delete(booksController.remove);

module.exports = router;