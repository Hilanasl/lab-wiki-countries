import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
