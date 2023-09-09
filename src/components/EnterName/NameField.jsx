import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { setSelectedName } from '../../redux/NameReducer/NameReducer';

const NameInput = (props) => {
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    dispatch(setSelectedName(newName));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && name.trim() !== '') {
      props.actionProvider.handleNameField(name);
      setName('');
      setIsVisible(false);
    }
  };

  return (
    <div>
      {isVisible && (
        <TextField
          variant="outlined"
          label="Type and press Enter"
          fullWidth
          size="small"
          value={name}
          onChange={handleNameChange}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
};

export default NameInput;
