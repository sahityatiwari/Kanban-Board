// src/components/SortingOptions.jsx
import React from 'react';

const SortingOptions = ({ setSorting }) => {
  return (
    <div className="sorting-options">
      <select onChange={(e) => setSorting(e.target.value)}>
        <option value="title">Sort by Title</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
};

export default SortingOptions;
