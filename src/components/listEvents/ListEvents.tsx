import React from 'react';
import './ListEvents.scss';
import { Link } from 'react-router-dom';
import { dataEvents } from 'service/data';
import { initialState } from 'service/state';
import { months } from '../../common/constants';

export const ListEvents = () => {
  const currentData = new Date().getTime();
  return (
    <ul className="list">
      {dataEvents.map((event) => {
        const eventDate = new Date(`${event.date} ${event.time}`);
        const eventDateTime = eventDate.getTime();
        const month = eventDate.getMonth();
        const day = eventDate.getDate();
        if (eventDateTime > currentData) {
          return (
            <li className="list-item" key={event.id}>
              <Link
                to={`event/event${event.id}`}
                onClick={() => (initialState.eventState = event)}
                state={{ event }}
                className="list-link"
              >
                <div>
                  {event.team1} - {event.team2}
                </div>
                <div className="list-date">
                  {day} {months[month]}
                </div>
                <div className="list-time">{event.time.slice(0, -3)}</div>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
