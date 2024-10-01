// src/App.jsx
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './index.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status'); // default grouping
  const [sorting, setSorting] = useState('title'); // default sorting

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchTickets();
  }, []);

  return (
    <div className="App">
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
    </div>
  );
};

export default App;
