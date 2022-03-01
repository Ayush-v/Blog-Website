import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="heading">
          <h1>Blog</h1>
          <p>Created by Ayush</p>
        </div>
        <div className="links">
          <div className="links-flex">
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
            <NavLink to="/create" activeclassname="active">
              New Blog
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
