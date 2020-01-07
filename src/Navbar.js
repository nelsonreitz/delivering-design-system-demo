import React from "react";

export const Logo = ({ url, alt }) => (
  <a style={{ lineHeight: "1" }} href="/">
    <img src={url} alt={alt} style={{ height: "4rem" }} />
  </a>
);

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

export const Nav = ({ children }) => (
  <nav style={{ display: "flex" }}>{children}</nav>
);

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
