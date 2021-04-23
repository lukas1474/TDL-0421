import React from 'react';
import { useRecoilValue  } from 'recoil';

import { todosList } from '../../../atoms';

/** @jsxImportSource theme-ui */

import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const MainPage = () => {

  // const [ todos, setTodos ] = useRecoilState(todosList);

  const todos = useRecoilValue(todosList);

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
                <Checkbox defaultChecked={false} />
              </Label>
            </Box>
            <Box
              sx={{
                width: `1000px`,
              }}>
              {item.title}
            </Box>
            <Box
              sx={{
                display: `flex`,
                justifyContent: `flex-end`,
                width: `130px`,
              }}>
              <Button variant='secondary' mr={2}>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
              <Button variant='primary'>
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
