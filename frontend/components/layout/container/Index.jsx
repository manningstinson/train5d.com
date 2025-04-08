// src/components/layout/container/Index.jsx
import React from 'react';
import './index.scss';

const Container = ({ fluid, children, className = '' }) => {
  return (
    <div className={`container${fluid ? '-fluid' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Container;