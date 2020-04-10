import React from "react";
import Header from "../../components/Header/Header.js";
import SearchForm from "../../components/SearchForm/SearchForm.js";
import Results from "../../components/Results/Results.js";

function Search() {

  return (
    <>
      <Header />
      <SearchForm />
      <Results />
    </>
  );
}

export default Search;