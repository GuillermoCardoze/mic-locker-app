import React from "react";
import NavBar from "../pages/NavBar";

function Header() {
  return (
    <header>
      <h1>
        <NavBar />
        Mic Locker
        <span className="logo" role="img">
        </span>
      </h1>
    </header>
  );
}

export default Header;