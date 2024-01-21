import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <h1>CGTV</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
