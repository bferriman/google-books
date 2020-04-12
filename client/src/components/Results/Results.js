import React from "react";
import Book from "../Book/Book.js";
import { PromiseProvider } from "mongoose";

function Results(props) {

  return (
    <div>
      {props.books.map( (book, ind) => {
        return (
          <Book book={book} handleView={props.handleView} handleSave={props.handleSave} key={ind}/>
        );
      })}
    </div>
  );
}

export default Results;