// src/components/footer/footer-container/footer-content/Index.jsx
import React from 'react';
import './index.scss';
import FooterMenu from './footer-menu/Index';
import FooterCopyright from './footer-copyright/Index';

const FooterContent = () => {
  return (
    <div className="footer-content">
      <FooterCopyright />
      <FooterMenu />
    </div>
  );
};

export default FooterContent;