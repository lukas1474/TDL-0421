import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState, atom } from 'recoil';
import { Link } from 'react-router-dom';

import axios from 'axios';

/** @jsxImportSource theme-ui */
import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import {  todosState, todosList, todosStats, filteredSearch } from '../../../atoms';

const MainPage = () => {

  // const setTodos = useSetRecoilState(todosState);
  const todos = useRecoilValue(todosState);
  const searchTodos = useRecoilValue(filteredSearch);
  const setTodoList = useSetRecoilState(todosState);
  const stats = useRecoilValue(todosStats);

  console.log(`lista`, todos);

  const deleteTodo = (event, id) => {
    event.preventDefault();
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((index) => {
        return id !== index.id;
      });
      console.log(`usuwanie`, newTodoList);
      return newTodoList;
    });
  };

  const finishTodo = ( id) => {
    // event.preventDefault();
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.map((item) => {
        console.log(`dane ze zemiany`, item);
        if(id == item.id ) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
      console.log(`zmiana stanu`, newTodoList);
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
      {searchTodos && searchTodos.map(item => (
        <Grid
          key={item.id}
          sx={{
            backgroundColor: item.completed ? `white` : `muted`,
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
                <Checkbox
                  defaultChecked={item.completed}
                  onClick={() => {
                    finishTodo(item.id);
                  }}
                />
              </Label>
            </Box>
            <Link to={`/todo/${item.id}`}
              sx={{
                textDecoration: item.completed ? `line-through` : `none`,
                color: item.completed ? `red` : `black`,
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
                <Link to={`/Edit/${item.id}`}>
                  <FontAwesomeIcon
                    sx={{
                      color: `white`,
                    }}
                    icon={faEdit}></FontAwesomeIcon>
                </Link>
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
      <p>{stats.completed}</p>
      <p>{stats.all}</p>
    </div>
  );
};

export default MainPage;
