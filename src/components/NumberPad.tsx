import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface NumberPadProps {
  setNum: (num: number | 'reset') => void;
  clearNums: () => void;
  deleteNum: () => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ setNum, clearNums}) => {
  const buttons = [];

  // Loop for numbers 1-9
  for (let i = 1; i <= 9; i++) {
    buttons.push(
      <div key={i} className="col-4">
        <button className="number-button" onClick={() => setNum(i)}>
          {i}
        </button>
      </div>
    );
  }

  // Add the "0" button
  buttons.push(
    <div key={0} className="col-4">
      <button className="number-button" onClick={() => setNum(0)}>
        0
      </button>
    </div>
  );

  // Add the "Cancel" button
  buttons.push(
    <div key="reset" className="col-4">
      <button className="reset btn btn-danger" onClick={clearNums}>
        C
      </button>
    </div>
  );

  // Organize buttons in rows of three
  const rows = [];
  while (buttons.length) {
    rows.push(
      <div key={rows.length} className="number-pad-row row">
        {buttons.splice(0, 3)}
      </div>
    );
  }

  return <div className="number-pad mt-3">{rows}</div>;
};

export default NumberPad;
