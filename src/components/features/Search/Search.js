import React from 'react';
import { useRecoilState } from 'recoil';

/** @jsxImportSource theme-ui */
import { Input, Label, Box, Button } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { searchPhrase } from '../../../atoms';

const Search = () => {

  const [searchTodo, setSetTodo] = useRecoilState(searchPhrase);

  const onChange = (event) => {
    setSetTodo(event.target.value);
  };

  return(
    <div>
      <Label
        sx={{
          color: `text`,
          marginBottom: `5px`,
          marginLeft: `10px`,
          fontFamily: `heading`,
        }}
      >
      Wyszukaj
      </Label>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `row`,
          position: `center`,
          alignItems: `center`,
        }}
      >
        <Input
          type='text'
          name='search'
          defaultValue=""
          onChange={onChange}
          sx={{
            backgroundColor: `backgroundInput`,
            color: `inputText`,
            margin: `5px`,
            width: `250px`,
          }}>
        </Input>
        <Button
          variant='fourth'
          mr={2}
          type='button'
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
      </Box>

    </div>
  );
};

export default Search;
