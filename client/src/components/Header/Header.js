import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Banner from "../../components/Banner/Banner.js";

function Header() {

  return (
    <section className="hero is-dark is-bold">
      <Navbar />
      <Banner />
    </section>
  );
}

export default Header;