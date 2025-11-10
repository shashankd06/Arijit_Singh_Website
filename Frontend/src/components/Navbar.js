import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Arijit Singh</span>
          <span className="logo-subtitle">The Voice of Bollywood</span>
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/discography" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Discography</Link>
          <Link to="/lyrics" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Lyrics</Link>
          <Link to="/concerts" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Concerts</Link>
          <Link to="/gallery" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/news" className="navbar-link" onClick={() => setIsMenuOpen(false)}>News</Link>
          <Link to="/merchandise" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Merchandise</Link>
          <Link to="/awards" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Awards</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

