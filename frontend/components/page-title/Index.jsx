// PageTitle.jsx
import React from 'react';
import './index.scss';

const PageTitle = ({ title, description, alignment = "text-center" }) => {
  return (
    <div className={`page-title-container ${alignment}`}>
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
};

export default PageTitle;