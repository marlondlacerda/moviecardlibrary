import React from 'react';

const Footer = () => (
  <footer className="footer">
    Feito com
    {' '}
    <span role="img" aria-label="heart">❤️</span>
    {' '}
    por
    {' '}
    <a
      className="footer-link"
      href="https://github.com/marlondlacerda"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="fa-blink">
        Marlon Lacerda
      </span>
    </a>
  </footer>
);

export default Footer;
