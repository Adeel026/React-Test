import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const MyCalender = () => {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      colorPrimary="#A41D30"
      shouldHighlightWeekends
    />
  );
};

export default MyCalender;
