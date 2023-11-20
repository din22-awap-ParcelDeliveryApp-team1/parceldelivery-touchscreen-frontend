import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/TouchScreenView.css';
import NumberPad from '../components/NumberPad';
import CodeViewer from '../components/CodeViewer';

// ... (imports)

const Inputs = () => {
  const [inputValue, setInputValue] = useState('');

  const setNum = (num: number| 'reset') => {
    // You might want to add validation to ensure num is a number before concatenating
    setInputValue((prev) => (prev.length < 4 ? prev + num.toString() : prev));
  };

  const clearNums = () => {
    setInputValue('');
  };

  const deleteNum = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  return (
    <div>
      <h1>Please select your drop-off location and enter the drop-off code correctly</h1>

      <div className="location pt-5">
        <label htmlFor="dropOffLocation">Select Drop Off Location</label>
        <select className="form-control" id="dropOffLocation">
          <option>Location 1</option>
          <option>Location 2</option>
          <option>Location 3</option>
          <option>Location 4</option>
          <option>Location 5</option>
        </select>
      </div>

      <div className="code pt-3">
        <label htmlFor="dropOffCode">Enter Drop Off Code</label>
        <CodeViewer code={inputValue} />
        <NumberPad setNum={(num) => setNum(num)} clearNums={clearNums} deleteNum={deleteNum} />
      </div>
    <button type="button" className="btn btn-primary btn-lg btn-block mt-5">Submit</button>
      
    </div>
  );
};

export default Inputs;
