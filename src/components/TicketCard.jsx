// src/components/TicketCard.jsx
import React from 'react';

const TicketCard = ({ ticket, users }) => {
  // Find the user associated with the ticket
  const user = users.find(user => user.id === ticket.userId);

  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {user ? user.name : 'Unassigned'}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
