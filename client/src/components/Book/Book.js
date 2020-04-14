import React from "react";

function Book(props) {

  const book = props.book;

  // let styles = {
  //   backgroundImage: "url(" + book.imageURL + ")",
  //   backgroundSize: "cover",
  //   height: "150px",
  //   maxWidth: "120px"
  // };

  let styles = {
    marginRight: "15px"
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128 is-2by3">
            <img src={book.imageURL} alt={book.title + " cover"} />
          </figure>
        </div>
        <div className="media-content">
          <h2 className="title">{book.title}</h2>
          <h3 className="subtitle">Written by: {book.authors}</h3>
          <div className="content">
            <p>{book.description}</p>
          </div>
          <div className="level is-mobile">
            <div className="level-left">
              <button className="button" style={styles} onClick={() => window.open(book.link)}>View</button>
              {props.children}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

{/* <h3>{book.title}</h3>
<p>Written by: {book.authors}</p>
<div className="bookImage" style={styles}></div>
<div>{book.description}</div>
<button onClick={() => window.open(book.infoLink)}>View</button>
{props.children} */}


export default Book;