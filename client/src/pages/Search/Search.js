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
        setSearchResults(res.data.map( book => {
          return {
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            imageURL: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "images/no_image.png",
            link: book.volumeInfo.infoLink
          }
        }));
      });
    }
  }, [debouncedSearchTerm]);

  const handleSaveButton = param => {
    const index = searchResults.findIndex( book => {
      return book.id === param;
    });
    const book = searchResults[index];
  
    API.saveBook(book)
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
      <Results books={searchResults} handleSave={handleSaveButton}/>
    </>
  );
}

export default Search;