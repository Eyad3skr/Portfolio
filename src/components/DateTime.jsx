import React, { createContext, useState, useEffect } from "react";
import moment from "moment-timezone";

// Create a Context for the date
export const DateContext = createContext();

const DateTimeProvider = ({ timeZone, children }) => {
  const [date, setDate] = useState({
    day: moment().tz(timeZone).format("DD"),
    month: moment().tz(timeZone).format("MM"),
    year: moment().tz(timeZone).format("YYYY"),
  });

  useEffect(() => {
    const updateDate = () => {
      setDate({
        day: moment().tz(timeZone).format("DD"),
        month: moment().tz(timeZone).format("MM"),
        year: moment().tz(timeZone).format("YYYY"),
      });
    };

    updateDate();
    const intervalId = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <DateContext.Provider value={date}>
      {children}
    </DateContext.Provider>
  );
};

export default DateTimeProvider;
