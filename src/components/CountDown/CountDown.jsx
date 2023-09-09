import React, { useState, useEffect } from 'react';
import './Countdown.css';
import { useNavigate } from 'react-router-dom';

const Countdown = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up an interval to decrement the count every second
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        // When countdown reaches 0, navigate to another page
        clearInterval(countdownInterval);
        navigate('/summary'); // Replace '/other-page' with your desired route
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [count, navigate]);

  return (
    <div className="countdown">
      <div className={`countdown-number ${count === 1 ? 'final' : ''}`}>
        {count}
      </div>
    </div>
  );
};

export default Countdown;
