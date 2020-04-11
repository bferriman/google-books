import React from "react";
import Book from "../Book/Book.js";

function Results({ books }) {

  return (
    <div>
      {books.map( book => {
        return (
          <Book data={book}/>
        );
      })}
    </div>
  );
}

export default Results;