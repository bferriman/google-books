import React from "react";
import Book from "../Book/Book.js";

function Results(props) {

  return (
    <div>
      {props.books.map( book => {
        return (
          <Book book={book} key={book.id}>
            <button onClick={() => props.handleSave(book.id)}>Save</button>
          </Book>
        )
      })}
    </div>
  );
}

export default Results;