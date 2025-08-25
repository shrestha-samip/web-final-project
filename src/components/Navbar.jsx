import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="inner_navbar">
        <div className="logo">
          <Link to="/">
            <span>Samip</span> Hospital
          </Link>
        </div>
        <div className={`menu ${isActive ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={isCurrentPage('/') ? 'active' : ''}
                onClick={() => setIsActive(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/profile" 
                className={isCurrentPage('/profile') ? 'active' : ''}
                onClick={() => setIsActive(false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isCurrentPage('/about') ? 'active' : ''}
                onClick={() => setIsActive(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isCurrentPage('/contact') ? 'active' : ''}
                onClick={() => setIsActive(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={isCurrentPage('/services') ? 'active' : ''}
                onClick={() => setIsActive(false)}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
