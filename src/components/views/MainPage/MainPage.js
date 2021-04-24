import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue  } from 'recoil';

import { todosList } from '../../../atoms';

/** @jsxImportSource theme-ui */

import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const MainPage = () => {

  const todos = useRecoilValue(todosList);

  console.log(`todos`, todos);

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
                <Checkbox defaultChecked={false} />
              </Label>
            </Box>
            <Link to={`/${item.id}`}>
              <Box
                sx={{
                  width: `1000px`,
                }}>
                {item.title}
              </Box>
              {/* {(props) => (
                <Details
                  {...props}
                  key={this.props.id}
                />
              )} */}
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
                onClick={() => remove(item.id)}
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
