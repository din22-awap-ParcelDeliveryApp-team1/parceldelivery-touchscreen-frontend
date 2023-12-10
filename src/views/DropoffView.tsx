import React from 'react';
import DropoffInputs from '../components/DropoffInputs';
import '../styling/TouchScreenView.css';

const DropoffView = () => {
  return (
    <div className="touch-screen-container">
      <div className="tablet-layout align text-center">
      <DropoffInputs />
      </div>
    </div>
  );
};

export default DropoffView;
