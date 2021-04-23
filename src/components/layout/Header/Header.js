import React from 'react';

/** @jsxImportSource theme-ui */

import Search from '../../features/Search/Search';
import { Grid, Box } from 'theme-ui';

const Header = () => (
  <header
    sx={{
      backgroundColor: `background`,
      height: `12vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }}>
    <Grid
      gap={2}
      columns={[2, `1fr 2fr`]}
      sx={{
        width: `1500px`,
        display: `flex`,
        flexDirection: `flex-end`,
        alignItems: `center`,
        margin: `10px`,
      }}>
      <Box>
        <Search />
      </Box>
      <Box>
        <h2
          sx={{
            fontSize: `calc(15px + 2vmin)`,
            color: `white`,
            marginLeft: `300px`,
            fontFamily: `heading`,
          }}>
          Lista TODO
        </h2>
      </Box>
    </Grid>

  </header>
);

export default Header;
