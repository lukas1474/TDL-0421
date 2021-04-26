import React, { useState }from 'react';
import { useRecoilState, useSetRecoilState, atom, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

/** @jsxImportSource theme-ui */
import { Box, Button, Label, Input, Container } from 'theme-ui';

import {  titleState, todosState } from '../../../atoms';

let id = 0;
const getId = () => {
  return id++;
};

const AddNew = () => {

  const [title, setTitle] = useRecoilState(titleState);
  const setTodoList = useSetRecoilState(todosState);
  const oldTodoList = useRecoilValue(todosState);
  // const updateTodo = useSetRecoilState(todo);

  const onChange = (event) => {
    setTitle(event.target.value);
  };
  {console.log(`stara lista`, oldTodoList);}

  const addTodo = (oldTodoList) => {
    // event.preventDefault();
    if (!title.length) return;
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList.data,
        {
          id: getId(),
          title,
          completed: false,
        },
      ];
      console.log(`stara nowa lista`, newTodoList);
      return newTodoList;
    });
  };

  // const addTodo = (event) => {
  //   event.preventDefault();
  // if (!title.length) return;
  //   setTodoList((oldTodoList) => [

  //     ...oldTodoList,
  //     {
  //       id: getId(),
  //       title,
  //       completed: false,
  //     },


  //   ]);
  //   handleClose();
  // };


  // const addValue = () => {
  //   setTitle(``);
  //   updateTodo((oldList) => [
  //     ...oldList,
  //     {
  //       id: getId(),
  //       value: title,
  //     },
  //   ]);
  //   console.log(`old list`, oldList);
  // };


  // const addTodo = () => {
  //   setTodoList((oldTodoList) => [
  //     ...oldTodoList,
  //     {
  //       id: getId(),
  //       text: title,
  //       completed: false,
  //     },
  //   ]);
  //   setTitle(``);
  // };

  // const onChange = ({ target: {title} }) => {
  //   setTitle(title);
  //   console.log(`title`, title);
  // };

  return(
    <div
      sx={{
        backgroundColor: `backgroundList`,
        display: `flex`,
        flexDirection: `column`,
        position: `center`,
        alignItems: `center`,
        fontSize: `calc(10px + 2vmin)`,
        color: `black`,
        padding: `150px`,
        minHeight: `80vh`,
      }}
    >
      <Container
        sx={{
          backgroundColor: `muted`,
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
          // onSubmit={AddTodo}
          sx={{
            marginBottom: `25px`,
          }}>
          <Label>
            Tytuł
          </Label>
          <Input
            type='text'
            name='title'
            mb={3}
            value={title}
            // onChange={event => setTitle(event.target.value)}
            onChange={onChange}
          />
          <Button
            variant='third'
            type='button'
            onClick={() => addTodo()}
          >
            Dodaj
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddNew;
