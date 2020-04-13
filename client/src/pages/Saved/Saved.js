import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import SavedBooks from "../../components/SavedBooks/SavedBooks.js";
import API from "../../utils/API";

function Saved() {

  const [savedBooks, setSavedBooks] = useState([]);

  const handleDeleteButton = id => {
    console.log("delete button clicked");
  
    API.removeBook(id)
    .then(res => {
      console.log("book deleted"); 
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    API.getSaved()
    .then( res => {
      setSavedBooks(res.data);
    });
  }, [handleDeleteButton]);

  return (
    <>
      <Header />
      <SavedBooks books={savedBooks} handleDelete={handleDeleteButton}/>
    </>
  );
}

export default Saved;