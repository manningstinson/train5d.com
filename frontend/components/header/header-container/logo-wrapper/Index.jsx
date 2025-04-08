import React from 'react';
import './index.scss';
import logo from '../../../../assets/logos/manningstinson-logo.svg';  // Path going up to src then down to assets/logos

const LogoWrapper = () => {
  return (
    <div className="logo-wrapper">
      <a href="/">
        <img src={logo} alt="Manning Stinson Logo" />
      </a>
    </div>
  );
};

export default LogoWrapper;