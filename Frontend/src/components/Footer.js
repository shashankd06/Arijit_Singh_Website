import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Arijit Singh</h3>
          <p>The Voice of Bollywood</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/discography">Discography</a></li>
            <li><a href="/concerts">Concerts</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for updates</p>
          <input type="email" placeholder="Your email" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Arijit Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

