import React from "react";

const Box = ({ children }) => (
  <div style={{ backgroundColor: "red", width: "10rem", height: "10rem" }}>
    {children}
  </div>
);

export default Box;
