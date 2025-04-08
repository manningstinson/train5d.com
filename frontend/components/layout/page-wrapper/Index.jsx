import React from 'react';
import './index.scss'; // Importing page wrapper styles

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
};

export default PageWrapper;
