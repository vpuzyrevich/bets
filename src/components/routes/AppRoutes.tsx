import { EventDetails } from 'pages/eventDetails/EventDetails';
import { Homepage } from 'pages/homepage/Homepage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="event/:nameEvent" element={<EventDetails />} />
    </Routes>
  );
};
