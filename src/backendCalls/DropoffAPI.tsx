// Example frontend code (DropoffInputs.js)
import React, { useState } from 'react';

const DropoffInputs = () => {
  const [pinCode, setPinCode] = useState('');
  const [selectedLocker, setSelectedLocker] = useState('Location 1');

  const handleConfirm = async () => {
    try {
      // const response = await fetch('http://localhost:3001/api/verify-dropoff' || process.env.REACT_APP_API+'/api/verify-dropoff', {
        const response = await fetch(process.env.REACT_APP_API+'/api/verify-dropoff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pinCode, locker: selectedLocker }),
      });

      if (response.ok) {
        // Drop-off verified successfully
        console.log('Drop-off verified successfully');
      } else {
        // Drop-off verification failed
        console.error('Drop-off verification failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* component UI here */}
      <input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
      <select value={selectedLocker} onChange={(e) => setSelectedLocker(e.target.value)}>
        {/* Options for lockers */}
        <option value="Location 1">Location 1</option>
        <option value="Location 2">Location 2</option>
        {/* Add more options*/}
      </select>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default DropoffInputs;
