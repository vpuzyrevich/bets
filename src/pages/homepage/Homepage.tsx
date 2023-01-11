import React from 'react';
import './Homepage.scss';
import { initialState } from 'service/state';
import { Notification } from 'components/notification/Notification';
import { ListEvents } from 'components/listEvents/ListEvents';

export const Homepage = () => {
  const { eventState, isSuccessful } = initialState;
  return (
    <section className="homepage">
      <div
        className={`homepage-notification ${isSuccessful ? 'homepage-notification-display' : ''}`}
      >
        <Notification
          matchGame={`${eventState.team1} - ${eventState.team2}`}
          bet={initialState.value}
        />
      </div>
      <ListEvents />
    </section>
  );
};
