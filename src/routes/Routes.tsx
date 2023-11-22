// Routes.tsx
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import DropoffView from '../views/DropoffView';
import PickupView from '../views/PickupView';
import SelectView from '../views/SelectView';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<SelectView />} />
      <Route path="/dropoff" element={<DropoffView />} />
      <Route path="/pickup" element={<PickupView />} />
    </ReactRoutes>
  );
};

export default Routes;
