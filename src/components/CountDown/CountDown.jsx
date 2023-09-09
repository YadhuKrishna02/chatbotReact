import React, { useState, useEffect } from 'react';
import './Countdown.css';
import { useNavigate } from 'react-router-dom';

const Countdown = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(countdownInterval);
        navigate('/summary');
      }
    }, 1000);

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
