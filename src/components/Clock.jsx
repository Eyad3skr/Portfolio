import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = ({ timeZone }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update time every second
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm:ss");
      setTime(currentTime);
    };

    // Initial call to set the time immediately
    updateClock();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return <div style={{ color: "#A8CED0", fontSize: "32px", letterSpacing: "7px", fontWeight:"bold", textShadow: "0 0 15px #A8CED0", padding:"20px"}}>{time}</div>;
};

export default Clock;