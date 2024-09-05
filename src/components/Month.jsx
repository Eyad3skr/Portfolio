import React, { useContext } from "react";
import { DateContext } from "./DateTime";

const Month = () => {
  const { month } = useContext(DateContext);
  return (
    <div style={{ fontSize: "18px", color: "#576B6E" }}>
      {month}
    </div>
  );
};

export default Month;
