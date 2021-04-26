import React from 'react';

/** @jsxImportSource theme-ui */
import { Input, Label, Box, Button } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { searchPhrase, todosState } from '../../../atoms';


const Search = () => {

  const [searchTodo, setSetTodo] = useRecoilState(searchPhrase);
  const setSearchTodo = useSetRecoilState(todosState);

  const onChange = (event) => {
    setSetTodo(event.target.value);
  };

  const addTodo = (oldTodoList) => {
    // event.preventDefault();
    if (!title.length) return;
    setSearchTodo((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          title,
        },
      ];
      console.log(`wartość wyszukiwarki`, newTodoList);
      return newTodoList;
    });
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
      Wyszukaj</Label>
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
          onClick={() => SearchTodo()}
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
      </Box>

    </div>
  );
};

export default Search;
