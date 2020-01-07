import React from "react";

export const Navbar = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "pink"
    }}
  >
    {children}
  </div>
);
