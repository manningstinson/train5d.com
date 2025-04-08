// src/components/footer/footer-container/footer-content/footer-menu/Index.jsx
import React from 'react';
import './index.scss';

const FooterMenu = () => {
  return (
    <nav className="footer-menu">
      <a href="/about">about</a>
      <a href="/portfolio">portfolio</a>
      <a href="/blog">blog</a>
      <a href="/contact">contact</a>
    </nav>
  );
};

export default FooterMenu;