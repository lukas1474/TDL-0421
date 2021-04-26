import React, { useState, useEffect } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState, atom } from 'recoil';

import { Link } from 'react-router-dom';

import axios from 'axios';

/** @jsxImportSource theme-ui */
import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import {  todosState, todosList  } from '../../../atoms';

const MainPage = () => {
  const setTodos = useSetRecoilState(todosState);
  const todos = useRecoilValue(todosState);
  const setTodoList = useSetRecoilState(todosState);

  console.log(`lista`, todos);

  useEffect(async () => {
    if(todos.data) {
      console.log(`asdsds`, );
      return null;
    }
    const getTodos = async () => {
      console.log(`metoda getdos`);
      const result = await axios(
        `https://gorest.co.in/public-api/todos`,
      );
      setTodos(result.data);
    };
    console.log(`result`, todos.data);
    if(!todos.data) {
      getTodos();
    }

  }, [todos]);

  const deleteTodo = (event, id) => {
    event.preventDefault();
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.data.filter((index) => {

        return id !== index.id;
      });
      console.log(`usuwanie`, newTodoList);
      return newTodoList;
    });
  };

  // console.log(`todos`, todos);

  return(
    <div
      sx={{
        backgroundColor: `backgroundList`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        fontSize: `calc(10px + 2vmin)`,
        color: `black`,
        padding: `25px`,
        minHeight: `80vh`,
        fontFamily: `body`,
      }}>
      <Box
        sx={{
          width: `1500px`,
          display: `flex`,
          justifyContent: `flex-end`,
        }}>
        <Link to='/AddNew'>
          <Button
            variant='third'
            type='button'
          >
            Dodaj
          </Button>
        </Link>
      </Box>
      {todos.data && todos.data.map(item => (
        <Grid
          key={item.id}
          sx={{
            backgroundColor: `muted`,
            display: `flex`,
            alignItems: `center`,
            width: `1155px`,
            margin: `10px`,

          }}>
          < >
            <Box
              sx={{
                width: `25px`,
              }}>
              <Label>
                <Checkbox defaultChecked={item.completed} />
              </Label>
            </Box>
            <Link to={`/todo/${item.id}`}
              sx={{
                textDecoration: `none`,
                color: `black`,
              }}
            >
              <Box
                sx={{
                  width: `1000px`,
                }}>
                {item.title}
              </Box>
            </Link>
            <Box
              sx={{
                display: `flex`,
                justifyContent: `flex-end`,
                width: `130px`,
              }}>
              <Button
                variant='secondary'
                type='button'
                mr={2}
              >
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
              <Button
                variant='primary'
                type='button'
                onClick={(event) => deleteTodo(event, item.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </Button>
            </Box>
          </>
        </Grid>
      ))}
      <Grid
        width={[128, null, 192]}
        sx={{
          backgroundColor: `muted`,
          display: `flex`,
          position: `center`,
          alignItems: `center`,
          justifyContent: `space-between`,
          width: `1000px`,
          margin: `10px`,
        }}>
      </Grid>
    </div>
  );
};

export default MainPage;
