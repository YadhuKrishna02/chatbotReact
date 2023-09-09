import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import './Summary.css';

const Summary = () => {
  // Use useSelector to access name and age from the Redux store
  const name = useSelector((state) => state.nameInput.selectedName);
  const age = useSelector((state) => state.age.selectedAge);

  return (
    <div className="page-container">
      <h1 className="title">Enrollment Confirmation</h1>
      <p className="confirmation-message">
        Your name <span className="user-data">{name}</span> aged{' '}
        <span className="user-data">{age}</span> has been added to the Student
        Info System. You may now exit.
      </p>
      <Link to="/">
        <button className="exit-button">Exit</button>
      </Link>
    </div>
  );
};

export default Summary;
