import React from 'react';

/** @jsxImportSource theme-ui */
import { Grid, Box } from 'theme-ui';

import Search from '../../features/Search/Search';
import Summary from '../../features/Summary/Summary';

const Header = () => (
  <header
    sx={{
      backgroundColor: `background`,
      height: `12vh`,
      display: `flex`,
      justifyContent: `center`,
    }}>
    <Grid
      gap={2}
      columns={[2, `1fr 2fr`]}
      sx={{
        width: `1500px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        margin: `10px`,
      }}>
      <Box>
        <Search />
      </Box>
      <Box>
        <h2
          sx={{
            fontSize: `calc(25px + 2vmin)`,
            color: `white`,
            marginRight: `100px`,
            fontFamily: `heading`,
          }}>
          Lista TODO
        </h2>
      </Box>
      <Box
        sx={{
          display: `flex`,
          justifyContent: `right`,
        }}
      >
        <Summary />
      </Box>
    </Grid>

  </header>
);

export default Header;
