import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import SearchForm from "../../components/SearchForm/SearchForm.js";
import Results from "../../components/Results/Results.js";
import useDebounce from "../../utils/debounceHook";
import API from "../../utils/API";

function Search() {

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    if (debouncedSearchTerm) {
      API.searchBooks(searchTerm)
      .then( res => {
        console.log(res);
      });
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <SearchForm />
      <Results />
    </>
  );
}

export default Search;