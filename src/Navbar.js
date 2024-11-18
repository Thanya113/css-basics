import React from "react";
import "./Navbar.css";
import logo from './image1.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
