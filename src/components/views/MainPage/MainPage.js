import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

/** @jsxImportSource theme-ui */
import { Grid, Box, Button, Checkbox, Label, Select } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import {  todosState, filteredSearch, categoryState } from '../../../atoms';

const MainPage = () => {

  const searchTodos = useRecoilValue(filteredSearch);
  const setTodoList = useSetRecoilState(todosState);
  const setCategory = useSetRecoilState(categoryState);

  const deleteTodo = (event, id) => {
    event.preventDefault();
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((index) => {
        return id !== index.id;
      });
      return newTodoList;
    });
  };

  const finishTodo = (id) => {
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.map((item) => {
        if(id == item.id ) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
      return newTodoList;
    });
  };

  const onChange = (event) => {
    setCategory(event.target.value);
  };

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
        minHeight: `82vh`,
        fontFamily: `body`,
      }}>
      <Select
        sx={{
          width: `150px`,
          fontFamily: `body`,
          fontSize: `20px`,
        }}
        defaultValue='Wszystkie'
        onChange={onChange}
      >
        <option>Wszystkie</option>
        <option>Aktywne</option>
        <option>Zakończone</option>
      </Select>
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
      { searchTodos && searchTodos.map(item => (
        <Grid
          key={item.id}
          sx={{
            boxShadow: item.completed ? `none` : `-7px 7px 9px -3px rgba(204,204,204,0.5)`,
            backgroundColor: item.completed ? `backgroundList` : `muted`,
            display: `flex`,
            alignItems: `center`,
            width: `1255px`,
            height: `auto`,
            margin: `15px`,
          }}>
          < >
            <Box
              sx={{
                width: `25px`,
                marginLeft: `10px`,
              }}>
              <Label>
                <Checkbox
                  sx={{
                    color: `background`,
                  }}
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
                color: item.completed ? `completedTodo` : `black`,
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
                width: `180px`,
                marginRight: `20px`,
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
    </div>
  );
};

export default MainPage;
