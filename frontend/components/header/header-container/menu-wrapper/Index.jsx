// MenuWrapper.jsx
import React from 'react';
import './index.scss';

const MenuWrapper = ({ isOpen, onToggle }) => {
  return (
    <div className="menu-wrapper">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="/about">about</a>
          <a href="/portfolio">portfolio</a>
          <a href="/blog">blog</a>
          <a href="/contact">contact</a>
        </nav>
        <div className="mobile-social">
          <a href="https://github.com/manningstinson" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/manningstinson" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://facebook.com/manningstinson" target="_blank" rel="noopener noreferrer">facebook</a>
          <a href="https://instagram.com/mmsartwork" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapper;