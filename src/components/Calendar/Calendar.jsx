import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { setSelectedDateTime } from '../../redux/DateAndTime/DateTime';

const CustomCalendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch();

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSave = () => {
    if (selectedDate && selectedTime) {
      const formattedDateTime = `${selectedDate.getDate()} ${selectedDate.toLocaleString(
        'default',
        {
          month: 'short',
        }
      )}, ${selectedDate.toLocaleString('default', {
        weekday: 'short',
      })} ${selectedTime}`;

      // Dispatch the action to store in Redux
      dispatch(setSelectedDateTime(formattedDateTime));
      props.actionProvider.handleTimeSlot(formattedDateTime);
    }
  };

  const renderMorningSection = () => {
    const morningTimes = ['9:00 AM', '10:00 AM', '11:00 AM'];

    return morningTimes.map((time, index) => (
      <Button
        key={index}
        onClick={() => handleTimeSelection(time)}
        variant={selectedTime === time ? 'contained' : 'outlined'}
        size="small"
        style={{ marginRight: '8px', marginBottom: '8px' }}
      >
        {time}
      </Button>
    ));
  };

  const renderNoonSection = () => {
    const noonTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];

    return noonTimes.map((time, index) => (
      <Button
        key={index}
        onClick={() => handleTimeSelection(time)}
        variant={selectedTime === time ? 'contained' : 'outlined'}
        size="small"
        style={{ marginRight: '8px', marginBottom: '8px' }}
      >
        {time}
      </Button>
    ));
  };

  const isDisabledDate = ({ date, view }) => {
    // Disable dates in the past and allow future dates
    const today = new Date();
    return date < today;
  };

  return (
    <div className="calendar-container">
      <Paper elevation={0} className="date-picker" style={{ border: 'none' }}>
        <Calendar
          onChange={handleDateSelection}
          value={selectedDate}
          calendarType="US"
          tileDisabled={isDisabledDate}
        />
      </Paper>
      <div className="time-section">
        <Paper
          elevation={0}
          className="morning"
          style={{ marginBottom: '16px' }}
        >
          <Typography variant="h6">Morning</Typography>
          {renderMorningSection()}
        </Paper>
        <Paper elevation={0} className="noon">
          <Typography variant="h6">Noon</Typography>
          {renderNoonSection()}
        </Paper>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSave}
          disabled={!selectedDate || !selectedTime}
        >
          Save Date and Time
        </Button>
      </div>
    </div>
  );
};

export default CustomCalendar;
