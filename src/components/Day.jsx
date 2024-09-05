import React, { useContext } from "react";
import { DateContext } from "./DateTime";

const Day = () => {
  const { day } = useContext(DateContext);
  return (
    <div style={{ fontSize: "18px", color: "#576B6E"}}>
      {day}
    </div>
  );
};

export default Day;
