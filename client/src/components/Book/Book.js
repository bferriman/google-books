import React from "react";

function Book(props) {

  let volume = props.book.volumeInfo;

  let styles = {
    backgroundImage: "url(" + volume.imageLinks.thumbnail + ")",
    backgroundSize: "cover",
    height: "150px",
    maxWidth: "120px"
  };

  return (
    <div>
      <h3>{volume.title}</h3>
      <p>Written by: {volume.authors}</p>
      <div className="bookImage" style={styles}></div>
      <div>{volume.description}</div>
      <button onClick={() => window.open(volume.infoLink)}>View</button>
      <button onClick={props.handleSave}>Save</button>
    </div>
  );
}

export default Book;