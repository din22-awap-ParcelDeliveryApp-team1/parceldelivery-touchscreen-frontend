import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/TouchScreenView.css';
import NumberPad from './subcomponents/NumberPad';
import CodeViewer from './subcomponents/CodeViewer';
import PickupCompletionView from './PickupCompletionView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PickupInputs = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [pickupCompleted, setPickupCompleted] = useState(false);
  const [selectedCabinetId, setSelectedCabinetId] = useState(null);
  const [parcelId, setParcelId] = useState(null);
  const [pickupMessage, setPickupMessage] = useState('');

  const setNum = (num: number | 'reset') => {
    setInputValue((prev) => (prev.length < 4 ? prev + num.toString() : prev));
  };

  const clearNums = () => {
    setInputValue('');
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/locker/pickup`, {
        //  // (`${process.env.REACT_APP_API}/locker/pickup`) 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupCode: inputValue,
          lockerNumber: location,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setSelectedCabinetId(data.selectedCabinetId);
        setParcelId(data.parcelId);
        setPickupCompleted(true);
        setPickupMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during pickup request:', error);
      setError('Internal Server Error');
    }
  };

  return (
    <div>
      {!pickupCompleted ? (
        <div>
          <div className="text-right">
              <Link to="/" className="back-link me-2">
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Back to Main Menu
              </Link>
          </div>
          <div className="heading pt-1">Please select your pick-up locker and enter the pick-up code correctly</div>

          <div className="location pt-2">
            <label htmlFor="pickupLocation" className="pt-3 pb-3">
              Select Pick-up Location
            </label>
            <select
              className="form-control"
              id="pickupLocation"
              value={location}
              onChange={(e) => setLocation(Number(e.target.value))}
            >
              <option value={1}>Locker 1 : Prisma , Linnanmaa</option>
              <option value={2}>Locker 2 : K Market, Kaijonharju</option>
              <option value={3}>Locker 3 : Prisma , Raksila</option>
              <option value={4}>Locker 4 : Lidl , Tuira</option>
              <option value={5}>Locker 5 : K Market, Rusko</option>
            </select>
          </div>

          <div className="code pt-3">
            <label htmlFor="pickupCode" className="pt-2 pb-3">
              Enter Pick-up Code
            </label>
            <CodeViewer code={inputValue} />
            <NumberPad setNum={(num) => setNum(num)} clearNums={clearNums} />
          </div>
          <button type="button" className="btn btn-lg btn-success input-button mt-3 mx-3" onClick={handleConfirm}>
            Confirm
          </button>
          <div className="hidden-output">
            {error && <div className="error mt-3">{error}</div>}
          </div>
        </div>
      ) : (
        <PickupCompletionView
          message={pickupMessage}
          onCompletePickup={() => setPickupCompleted(false)}
        />
      )}
    </div>
  );
};

export default PickupInputs;
