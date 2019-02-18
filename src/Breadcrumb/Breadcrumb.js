import React from "react";

const Breadcrumb = props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;