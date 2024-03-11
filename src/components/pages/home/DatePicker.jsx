//DatePicker.jsx
import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
 const [date, setDate] = useState('');

 const handleDateChange = (event) => {
    setDate(event.target.value);
    onDateChange(event.target.value);
 };

 return (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
      className="p-2 border border-gray-300 rounded-lg"
    />
 );
};

export default DatePicker;