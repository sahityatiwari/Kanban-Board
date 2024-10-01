// src/components/NavBar.jsx
import React from 'react';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';

const NavBar = ({ setGrouping, setSorting }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-item">
          
          <GroupingOptions setGrouping={setGrouping} />
        </div>
        <div className="navbar-item">
         
          <SortingOptions setSorting={setSorting} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
