import React from "react";

const Logo = ({ url, alt }) => (
  <a style={{ lineHeight: "1" }} href="/">
    <img src={url} alt={alt} style={{ height: "4rem" }} />
  </a>
);

export default Logo;
