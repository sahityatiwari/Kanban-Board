// src/components/GroupingOptions.jsx
import React from 'react';

const GroupingOptions = ({ setGrouping }) => {
  return (
    <div className="grouping-options">
      <select onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="priority">Group by Priority</option>
        <option value="user">Group by User</option>
      </select>
    </div>
  );
};

export default GroupingOptions;
