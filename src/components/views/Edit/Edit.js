import React, { useState, useEffect }from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

/** @jsxImportSource theme-ui */
import { Box, Button, Container, Textarea } from 'theme-ui';

import { todosState, editedTitleState  } from '../../../atoms';

const Edit = () => {

  let { id } = useParams();
  const details = useRecoilValue(todosState);
  const [editedTodo, setEditedTodo] = useState(``);
  const [editedTitle, setEditedTitle] = useRecoilState(editedTitleState);
  const setEditTodoList = useSetRecoilState(todosState);

  const editTodo = (id, details) => {
    const edited = details && details.filter((detail) => {
      return detail.id == id;
    });
    setEditedTodo(edited[0]);
  };

  useEffect(() => {
    editTodo(id, details);
  }, []);

  const onChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const editTodoTitle = (oldTodoList) => {
    setEditTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.map((item) => {
        if(id == item.id) {
          return {
            ...item,
            title: editedTitle,
          };
        } else {
          return item;
        }
      });
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
          width: `600px`,
          color: `black`,
          fontFamily: `body`,
        }}>
        <Box
          sx={{
            width: `380px`,
            display: `flex`,
            justifyContent: `flex-end`,
            marginTop: `25px`,
            marginLeft: `120px`,
            marginBottom: `15px`,
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
        >
          <Textarea
            id='textarea'
            sx={{
              width: `500px`,
              marginBottom: `15px`,
            }}
            defaultValue={editedTodo.title}
            onChange={onChange}
          />
          <Button
            variant='third'
            type='button'
            sx={{
              marginBottom: `25px`,
            }}
            onClick={(event) => editTodoTitle(event)}
          >
            Dodaj
          </Button>
          <p>{editedTitle.length}</p>
        </Box>
      </Container>
    </div>
  );
};

export default Edit;
