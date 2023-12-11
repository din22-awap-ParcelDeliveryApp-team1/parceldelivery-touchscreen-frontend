import React from 'react';
import PickupInputs from '../components/PickupInputs';
import '../styling/TouchScreenView.css';

const PickupfView = () => {
  return (
    <div className="touch-screen-container">
      <div className="tablet-layout text-center">
      <PickupInputs />
      </div>
    </div>
  );
};

export default PickupfView;
