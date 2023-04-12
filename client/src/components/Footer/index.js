import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">&copy; 2023 Bootcampers</p>
        <ul className="footer__list">
          <li className="footer__list-item"><a href="/about">About</a></li>
          <li className="footer__list-item"><a href="/contact">Contact</a></li>
          <li className="footer__list-item"><a href="/terms">Developers</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
