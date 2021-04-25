import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRecoilState, useRecoilValue, useSetRecoilState, atom } from 'recoil';

import {  todosState } from '../../../atoms';

/** @jsxImportSource theme-ui */

import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import Details from '../Details/Details';

// const todosState = atom({
//   key: `todos`,
//   default: [],
// });

const MainPage = () => {
  const setTodos = useSetRecoilState(todosState);
  const todos = useRecoilValue(todosState);
  const setTodoList = useSetRecoilState(todosState);

  console.log(`lista`, todos);

  useEffect(async () => {
    const getTodos = async () => {
      const result = await axios(
        `https://gorest.co.in/public-api/todos`,
      );
      setTodos(result.data);
      // console.log(`result`, result.data);
    };
    getTodos();
  }, []);

  const deleteTodo = (id) => {
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((todo, i) => {
        return i !== id;
      });
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
          <Button variant='third'>
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
            <Link to={`/${item.id}`} >
              <Box
                sx={{
                  width: `1000px`,
                }}>
                {item.title}
                {/* {console.log(`todos tex`, todos.title)} */}
              </Box>
              {() => {
                <Details
                  todos={item}
                  // {...todos}
                  // {...item}
                  // key={item.id}
                  // title={item.title}
                />;
              }}
            </Link>
            <Box
              sx={{
                display: `flex`,
                justifyContent: `flex-end`,
                width: `130px`,
              }}>
              <Button variant='secondary' mr={2}>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
              <Button
                variant='primary'
                onClick={() => deleteTodo(item.id)}
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
