import React from "react";

function Navbar() {

  return (
    <div className="navbar">
      <p>Google Books</p>
      <a href="/search">Search</a>
      <a href="/saved">Saved</a>
    </div>
  );
}

export default Navbar;