// src/components/footer/Index.jsx
import React from 'react';
import './index.scss';
import FooterContainer from './footer-container/Index';
import FooterContent from './footer-container/footer-content/Index';

const Footer = () => {
  return (
    <footer className="footer">     {/* This line changes from just <footer> */}
      <FooterContainer>
        <FooterContent />
      </FooterContainer>
    </footer>
  );
};

export default Footer;