import React, { useState } from 'react';
import '../../App.css';

function GotItButton(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    // Call the action to handle the "Got it" button click
    if (props.actionProvider.handleGotItButtonClick) {
      // Send the button text as a chat message
      props.actionProvider.handleGotItButtonClick('Got it!');

      // Set the state to indicate that the button is clicked
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
