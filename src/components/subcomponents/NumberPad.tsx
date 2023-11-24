import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

interface NumberPadProps {
  setNum: (num: number | 'reset') => void;
  clearNums: () => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ setNum, clearNums }) => {
  const buttons = [];

  // Loop for numbers 1-9
  for (let i = 1; i <= 9; i++) {
    buttons.push(
      <button key={i} className="number-button" onClick={() => setNum(i)}>
        {i}
      </button>
    );

    // Add a line break after every 3 buttons
    if (i % 3 === 0) {
      buttons.push(<br key={i + 'br'} />);
    }
  }

  // Add the "0" button
  buttons.push(
    <button key={0} className="number-button" onClick={() => setNum(0)}>
      0
    </button>
  );

  // Add the "Clear" button with FontAwesome icon
  buttons.push(
    <button key="reset" className="number-button resetButton" onClick={clearNums}>
      <FontAwesomeIcon icon={faBackspace} />
    </button>
  );

  return <div className="number-pad pt-3">{buttons}</div>;
};

export default NumberPad;
