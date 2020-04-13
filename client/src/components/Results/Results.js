import React from "react";
import Book from "../Book/Book.js";

function Results(props) {

  return (
    <div>
      {props.books.map( book => {
        return (
          <Book book={book} handleSave={props.handleSave} key={book.id}/>
        );
      })}
    </div>
  );
}

export default Results;