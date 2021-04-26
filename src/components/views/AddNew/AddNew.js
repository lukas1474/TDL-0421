import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

/** @jsxImportSource theme-ui */
import { Box, Button, Text, Container, Textarea } from 'theme-ui';

import {  titleState, todosState } from '../../../atoms';

let id = 0;
const getId = () => {
  return id++;
};

const AddNew = () => {

  const [title, setTitle] = useRecoilState(titleState);
  const setTodoList = useSetRecoilState(todosState);

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    if (!title.length) return;
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          id: getId(),
          title,
          completed: false,
        },
      ];
      return newTodoList;
    });
  };

  return(
    <div
      sx={{
        backgroundColor: `backgroundList`,
        display: `flex`,
        flexDirection: `column`,
        position: `center`,
        alignItems: `center`,
        fontSize: `calc(10px + 2vmin)`,
        fontFamily: `body`,
        color: `black`,
        padding: `150px`,
        minHeight: `80vh`,
      }}
    >
      <Container
        sx={{
          backgroundColor: `muted`,
          boxShadow: `-7px 7px 9px -3px rgba(204,204,204,0.5)`,
          display: `flex`,
          flexDirection: `column`,
          position: `center`,
          alignItems: `center`,
          width: `500px`,
          color: `black`,
          fontFamily: `body`,
        }}>
        <Box
          sx={{
            width: `380px`,
            display: `flex`,
            justifyContent: `flex-end`,
            marginTop: `25px`,
            marginBottom: `20px`,
            marginLeft: `65px`,
          }}>
          <Link to='/'>
            <Button
              variant='primary'
              type='button'
            >
            Powrót
            </Button>
          </Link>
        </Box>
        <Box
          as="form"
          sx={{
            marginBottom: `25px`,
          }}>
          <Textarea
            sx={{
              fontSize: `15px`,
              width: `450px`,
              height: `150px`,
            }}
            placeholder='Dodaj treść zadania'
            type='text'
            name='title'
            mb={3}
            value={title}
            onChange={onChange}
          />
          <Link to='/'>
            <Button
              variant='third'
              type='button'
              onClick={() => addTodo()}
            >
            Dodaj
            </Button>
          </Link>
        </Box>
        <Text
          sx={{
            fontSize: `15px`,
            marginBottom: `10px`,
          }}>
          ilość znaków: {title.length}
        </Text>
      </Container>
    </div>
  );
};

export default AddNew;
