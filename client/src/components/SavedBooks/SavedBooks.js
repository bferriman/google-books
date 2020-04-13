import React from "react";
import Book from "../Book/Book.js";

function SavedBooks(props) {

  return (
    <div>
      {props.books.map( book => {
        return (
          <Book book={book} key={book.id}>
            <button onClick={() => props.handleDelete(book.id)}>Delete</button>
          </Book>
        )
      })}
    </div>
  );
}

export default SavedBooks;