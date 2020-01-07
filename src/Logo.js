import React from "react";

export const Logo = ({ url, alt }) => (
  <a style={{ lineHeight: "1" }} href="/">
    <img src={url} alt={alt} style={{ height: "4rem" }} />
  </a>
);
