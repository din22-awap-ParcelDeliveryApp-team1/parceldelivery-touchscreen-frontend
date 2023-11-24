import React from 'react';
import { Link } from 'react-router-dom';

interface PickupCompletionViewProps {
  message: string;
  onCompletePickup: () => void;
}

const PickupCompletionView: React.FC<PickupCompletionViewProps> = ({ message, onCompletePickup }) => {
  

  return (
    <div className="mt-5">
      {message && <div className="message mt-3">{message}</div>}
      <Link to="/">
      <button type="button" className="btn btn-lg btn-warning input-button mt-5" onClick={onCompletePickup}>
        Close Door
      </button>
      </Link>
    </div>
  );
};

export default PickupCompletionView;
