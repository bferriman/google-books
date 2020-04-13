import React from "react";

function Book(props) {

  const book = props.book;

  let styles = {
    backgroundImage: "url(" + book.imageURL + ")",
    backgroundSize: "cover",
    height: "150px",
    maxWidth: "120px"
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Written by: {book.authors}</p>
      <div className="bookImage" style={styles}></div>
      <div>{book.description}</div>
      <button onClick={() => window.open(book.infoLink)}>View</button>
      {props.children}
    </div>
  );
}

export default Book;