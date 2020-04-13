import React from "react";
import Book from "../Book/Book.js";

function Results(props) {

  return (
    <section className="section">
      <div className="container">
        {props.books.map( book => {
          return (
            <Book book={book} key={book.id}>
              <button className="button is-info" onClick={() => props.handleSave(book.id)}>Save</button>
            </Book>
          )
        })}
      </div>
    </section>
  );
}

export default Results;