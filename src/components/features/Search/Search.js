import React from 'react';

/** @jsxImportSource theme-ui */

import { Input, Label, Box, Button } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => (
  <div>
    <Label
      sx={{
        color: `text`,
        marginBottom: `5px`,
        marginLeft: `10px`,
      }}
    >
      Wyszukaj</Label>
    <Box
      sx={{
        display: `flex`,
        flexDirection: `row`,
        position: `center`,
        alignItems: `center`,
        fontFamily: `body`,
      }}
    >
      <Input defaultValue=""
        sx={{
          backgroundColor: `backgroundInput`,
          color: `inputText`,
          margin: `5px`,
          width: `250px`,
        }}>
      </Input>
      <Button variant='fourth' mr={2}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </Button>
    </Box>

  </div>
);

export default Search;
