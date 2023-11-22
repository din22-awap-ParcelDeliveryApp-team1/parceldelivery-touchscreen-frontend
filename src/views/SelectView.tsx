import React from 'react';
import { Link } from 'react-router-dom';

const SelectView = () => {
  return (
    <div>
      <h1>Select View</h1>

      <Link to="/dropoff">
        <button type="button">Dropoff</button>
      </Link>
      <Link to="/pickup">
        <button type="button">Pickup</button>
      </Link>
    </div>
  );
};

export default SelectView;
