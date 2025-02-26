import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/blogs">Blogs </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
