import React, { useState }from 'react';
import axios from 'axios';

import { goRestApiKey } from '../../../config';
// import { AddTodo } from '../../../atoms';

/** @jsxImportSource theme-ui */

import { Box, Button, Label, Input, Container } from 'theme-ui';
import { Link } from 'react-router-dom';
import { useRecoilCallback, atom } from 'recoil';

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${goRestApiKey}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// export const AddTodo = useRecoilCallback(({set}) => async params => {
//   const response = await axios.post(
//     `https://gorest.co.in/public-api/users/1745/todos?access-token=${goRestApiKey}`,
//     todoData,
//   ).then(response => {
//     console.log(response);
//   });
//   set(response.data);
// });

// const newTodo = atom({
//   key: `newTodo`,
//   default: {
//     title: ``,
//     completed: false,
//   },

// });
// console.log(newTodo.default);

const AddNew = () => {

  const [title, setTitle] = useState(``);
  // const todos = useRecoilValue(todosList);

  // const AddTodo = useRecoilCallback(({set}) => async params => {
  //   const response = await axios.post(
  //     `https://gorest.co.in/public-api/users/1745/todos?access-token=${goRestApiKey}`,
  //     newTodo,
  //   ).then(response => {
  //     console.log(`addtodo`, response);
  //   });
  //   set(newTodo, title, response.data);
  // });


  const AddTodo = event => {
    event.preventDefault();

    const todoData = {
      title,
      user_id: ``,
      name: `Borys`,
      email: `borys@borys.com`,
      completed: false,
      gender: `Male`,
      status: `Active`,
    };

    axios.post(
      `https://gorest.co.in/public-api/users/1331/todos?access-token=${goRestApiKey}`,
      todoData,
    ).then(response => {
      console.log(response);
    });
  };

  return(
    <div
      // onSubmit={onSubmit}
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
            <Button variant='primary'>
            Powrót
            </Button>
          </Link>
        </Box>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          as="form"
          onSubmit={AddTodo}
          sx={{
            marginBottom: `25px`,
          }}>
          <Label>
            Tytuł
          </Label>
          <Input
            name='title'
            mb={3}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button variant='third' type='submit'>
            Dodaj
          </Button>
        </Box>
        {/* </form> */}
      </Container>
    </div>
  );
};

export default AddNew;
