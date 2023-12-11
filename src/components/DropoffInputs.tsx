import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/TouchScreenView.css';
import NumberPad from './subcomponents/NumberPad';
import CodeViewer from './subcomponents/CodeViewer';
import DropoffCompletionView from './DropoffCompletionView'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

const DropoffInputs = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [dropoffCompleted, setDropoffCompleted] = useState(false); 
  const [selectedCabinetId, setSelectedCabinetId] = useState(null); 
  const [parcelId, setParcelId] = useState(null); 
  const [dropoffMessage, setDropoffMessage] = useState('');

  const setNum = (num:number|'reset') => {
    setInputValue((prev) => (prev.length < 4 ? prev + num.toString() : prev));
  };

  const clearNums = () => {
    setInputValue('');
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API + '/locker/pickup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dropoffCode: inputValue,
          lockerNumber: location,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setSelectedCabinetId(data.selectedCabinetId);
        setParcelId(data.parcelId);
        setDropoffCompleted(true);
        setDropoffMessage(data.message) 
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during drop-off request:', error);
      setError('Internal Server Error');
    }
  };

  return (
    <div>
      {!dropoffCompleted ? (
        <div>
          <div className="text-right">
              <Link to="/" className="back-link me-2">
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Back to Main Menu
              </Link>
          </div>
          <div className="heading pt-1">Please select your drop-off locker and enter the drop-off code correctly</div>

          <div className="location pt-2">
            <label htmlFor="dropOffLocation" className="pt-3 pb-3">
              Select Drop Off Location
            </label>
            <select
              className="form-control"
              id="dropOffLocation"
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
            <label htmlFor="dropOffCode" className="pt-2 pb-3">
              Enter Drop Off Code
            </label>
            <CodeViewer code={inputValue} />
            <NumberPad setNum={(num:number|'reset') => setNum(num)} clearNums={clearNums} />
          </div>
          <button type="button" className="btn btn-lg btn-success input-button mt-3 mx-3" onClick={handleConfirm}>
            Confirm
          </button>
          <div className="hidden-output">
            {error && <div className="error mt-3">{error}</div>}
          </div>
        </div>
      ) : (
        <DropoffCompletionView 
          message={dropoffMessage} 
          onCompleteDropoff={() => setDropoffCompleted(false)} 
        />
      )}
    </div>
  );
};

export default DropoffInputs;
