// HeaderContainer.jsx

"use client";

import React from 'react';
import './index.scss';
import { useEffect, useState } from 'react';
import LogoWrapper from './logo-wrapper/Index';
import NavWrapper from './nav-wrapper/Index';
import MenuWrapper from './menu-wrapper/Index';
import SocialIcons from './social-icons-wrapper/Index';


const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header-container">
      <div className="header-content">
        <LogoWrapper />
        <div className="desktop-nav">
          <NavWrapper />
          <SocialIcons />
        </div>
        <MenuWrapper 
          isOpen={isMenuOpen} 
          onToggle={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
    </header>
  );
};

export default HeaderContainer;