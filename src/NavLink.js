import React from "react";

export const NavLink = ({ link, children }) => (
  <a
    href={link}
    style={{
      marginLeft: "1.5rem",
      fontSize: "1.5rem",
      color: "mediumvioletred",
      textDecoration: "none"
    }}
  >
    {children}
  </a>
);
