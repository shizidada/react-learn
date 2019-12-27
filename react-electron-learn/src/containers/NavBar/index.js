import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Index</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
