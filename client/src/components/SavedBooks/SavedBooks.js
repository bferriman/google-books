import React from "react";
import Book from "../Book/Book.js";

function SavedBooks(props) {

  return (
    <section className="section">
      <div className="container">
        {props.books.map( book => {
          return (
            <Book book={book} key={book.id}>
              <button className="button is-danger" onClick={() => props.handleDelete(book.id)}>Delete</button>
            </Book>
          )
        })}
      </div>
    </section>
  );
}

export default SavedBooks;