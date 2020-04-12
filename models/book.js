const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: {
    type: String,
    unique: true,
    trim: true
  },
  title: { 
    type: String,
    required: true
  },
  authors: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String
  },
  imageURL: {
    type: String,
    trim: true,
    default: "images/no_image.png"
  },
  link: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;