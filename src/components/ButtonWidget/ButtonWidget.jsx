import React, { useState } from 'react';
import '../../App.css';

function GotItButton(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (props.actionProvider.handleGotItButtonClick) {
      props.actionProvider.handleGotItButtonClick('Got it!');

      setButtonClicked(true);
    }
  };

  return (
    <div>
      {buttonClicked ? (
        <p></p>
      ) : (
        <button className="got-it-button" onClick={handleClick}>
          Got it!
        </button>
      )}
    </div>
  );
}

export default GotItButton;
