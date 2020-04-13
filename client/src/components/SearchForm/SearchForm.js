import React from "react";

function SearchForm(props) {

  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-item">
            <p className="title is-2">
              <strong>Book Search</strong>
            </p>
          </div>
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" placeholder="Find a book" onChange={props.onChange} />
              </p>
              <p className="control">
                <button className="button" onClick={props.onClick} disabled={!props.searchTerm}>
                  <i className="fas fa-search"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;