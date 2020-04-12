import React from "react";

function SearchForm(props) {

  return (
    <form>
      <div>Book Search:</div>
      <input onChange={props.onChange} placeholder={props.searchTerm} name="book"></input>
      <button onClick={props.onClick} disabled={!props.searchTerm}>Submit</button>
    </form>
  );
}

export default SearchForm;