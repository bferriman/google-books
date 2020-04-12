import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import SearchForm from "../../components/SearchForm/SearchForm.js";
import Results from "../../components/Results/Results.js";
import useDebounce from "../../utils/debounceHook";
import API from "../../utils/API";

function Search() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    if (debouncedSearchTerm) {
      API.searchBooks(searchTerm)
      .then( res => {
        console.log(res);
        setSearchResults(res.data);
      });
    }
  }, [debouncedSearchTerm]);

  const handleViewButton = event => {
    console.log("view button clicked");
  };

  const handleSaveButton = param => {
    const index = searchResults.findIndex( book => {
      return book.id === param;
    });
    const book = searchResults[index];
  
    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      imageURL: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "",
      link: book.volumeInfo.infoLink
    })
    .then(res => {
      const books = searchResults.filter( book => {
        return book.id !== param;
      });
      setSearchResults(books);  
    })
    .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <SearchForm searchTerm={searchTerm} onChange={handleInputChange} onClick={handleFormSubmit}/>
      <Results books={searchResults} handleView={handleViewButton} handleSave={handleSaveButton}/>
    </>
  );
}

export default Search;