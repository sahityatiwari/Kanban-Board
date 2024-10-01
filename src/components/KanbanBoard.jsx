// src/components/KanbanBoard.jsx
import React from 'react';
import TicketCard from './TicketCard';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';

const KanbanBoard = ({ tickets, users, grouping, setGrouping, sorting, setSorting }) => {
  
  const groupTickets = () => {
    if (grouping === 'status') {
      return tickets.reduce((groups, ticket) => {
        const group = ticket.status;
        groups[group] = [...(groups[group] || []), ticket];
        return groups;
      }, {});
    }

    if (grouping === 'priority') {
      return tickets.reduce((groups, ticket) => {
        const group = ticket.priority;
        groups[group] = [...(groups[group] || []), ticket];
        return groups;
      }, {});
    }

    if (grouping === 'user') {
      return tickets.reduce((groups, ticket) => {
        const user = users.find(user => user.id === ticket.userId);
        const group = user ? user.name : 'Unassigned';
        groups[group] = [...(groups[group] || []), ticket];
        return groups;
      }, {});
    }

    return { all: tickets };
  };

  const sortTicketsInGroups = (groupedTickets) => {
    const sortedGroups = {};
    for (const group in groupedTickets) {
      sortedGroups[group] = [...groupedTickets[group]].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else if (sorting === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }
    return sortedGroups;
  };

  const grouped = groupTickets();
  const sortedGroupedTickets = sortTicketsInGroups(grouped);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-options">
          <GroupingOptions setGrouping={setGrouping} />
          <SortingOptions setSorting={setSorting} />
        </div>
      </nav>
      <div className="kanban-container">
        {Object.keys(sortedGroupedTickets).map(group => (
          <div key={group} className="kanban-column">
            <h3>{group}</h3>
            {sortedGroupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
