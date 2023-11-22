import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/TouchScreenView.css';
import NumberPad from './subcomponets/NumberPad';
import CodeViewer from './subcomponets/CodeViewer'; // Import CodeViewer

const DropoffInputs = () => {
  const [inputValue, setInputValue] = useState('');

  const setNum = (num: number | 'reset') => {
    setInputValue((prev) => (prev.length < 4 ? prev + num.toString() : prev));
  };

  const clearNums = () => {
    setInputValue('');
  };

  return (
    <div>
      <div className="heading">Please select your drop-off locker and enter the drop-off code correctly</div>

      <div className="location pt-2">
        <label htmlFor="dropOffLocation" className="pt-3 pb-3">Select Drop Off Location</label>
        <select className="form-control" id="dropOffLocation">
          <option>Location 1</option>
          <option>Location 2</option>
          <option>Location 3</option>
          <option>Location 4</option>
          <option>Location 5</option>
        </select>
      </div>

      <div className="code pt-3">
        <label htmlFor="dropOffCode" className="pt-2 pb-3">Enter Drop Off Code</label>
        <CodeViewer code={inputValue} />
        <NumberPad setNum={(num) => setNum(num)} clearNums={clearNums} />
      </div>
      <button type="button" className="btn .btn-lg btn-success input-button mt-3 mx-3">Confirm</button>
      <div className="hidden-output">
        <div className="message mt-3">here display message. according to the message display close door button</div>
        <button type="button" className="btn .btn-lg btn-warning input-button mt-3 mx-3">Close door</button>
      </div>
    </div>
  );
};

export default DropoffInputs;
