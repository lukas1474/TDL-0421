import React from 'react';

/** @jsxImportSource theme-ui */

const Footer = () => (
  <footer
    sx={{
      backgroundColor: `background`,
      height: `5vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }}>
    <p
      sx={{
        margin: `5px`,
        fontSize: `calc(12px + 2vmin)`,
        fontFamily: `heading`,
        color: `white`,
        alignItems: `center`,
      }}
    >2021</p>
  </footer>
);

export default Footer;
