import React, { useContext } from "react";
import { DateContext } from "./DateTime";

const Year = () => {
  const { year } = useContext(DateContext);
  return (
    <div style={{ fontSize: "18px", color: "#576B6E" }}>
      {year}
    </div>
  );
};

export default Year;
