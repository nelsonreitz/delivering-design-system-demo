import React from "react";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import { NavLink } from "./NavLink"

export default {
  title: "Components|Navbar",
  component: Navbar
};

export const standard = () => (
  <Navbar>
    <Logo
      url="https://upload.wikimedia.org/wikipedia/en/b/b9/My_Little_Pony_G4_logo.svg"
      alt="My Little pony logo"
    />
    <Nav>
      <NavLink link="https://google.com">Lien 1</NavLink>
      <NavLink link="https://google.com">Lien 2</NavLink>
      <NavLink link="https://google.com">Lien 3</NavLink>
      <NavLink link="https://google.com">Lien 4</NavLink>
    </Nav>
  </Navbar>
);
