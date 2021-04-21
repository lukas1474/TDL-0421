import React from 'react';

/** @jsxImportSource theme-ui */

const Header = () => (
  <header
    sx={{
      backgroundColor: `background`,
      height: `12vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }}>
    <h2
      sx={{
        fontSize: `calc(15px + 2vmin)`,
        color: `white`,
      }}>
      Lista TODO
    </h2>
  </header>
);

export default Header;
