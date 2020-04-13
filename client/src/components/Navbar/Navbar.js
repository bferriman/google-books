import React from "react";

function Navbar() {

  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <p className="navbar-item">Google Books</p>
            <label className="navbar-burger burger" role="button" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" />
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="/search">Search</a>
              <a className="navbar-item" href="/saved">Saved</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;