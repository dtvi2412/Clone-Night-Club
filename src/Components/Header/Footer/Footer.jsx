import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        <h3> © 2020</h3>
        <a href="#"> Privacy Policy</a>
      </div>
      <div className="footer__support">
        <a href="#">SUPPORT</a>
        <a href="#">FAQS</a>
        <a href="#">SITEMAP</a>
        <a href="#">HELP</a>
      </div>
    </footer>
  );
}

export default Footer;
