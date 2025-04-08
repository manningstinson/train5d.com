import React from 'react';  // Added React import
import './index.scss';  // Changed from FooterCopyright.scss to match your tree structure


const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} Manning Stinson</p>
    </div>
  );
};

export default FooterCopyright;