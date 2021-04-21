import React from 'react';

/** @jsxImportSource theme-ui */

import { Grid, Box, Button, Checkbox, Label } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const MainPage = () => {
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
        padding: `25px`,
        minHeight: `80vh`,
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
        <Box>
          <Label>
            <Checkbox defaultChecked={false} />
          </Label>
        </Box>
        <Box>Tytuł</Box>
        <Box>
          <Button variant='secondary' mr={2}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </Button>
          <Button variant='primary'>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
        </Box>
      </Grid>
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
        <Box>
          <Label>
            <Checkbox defaultChecked={false} />
          </Label>
        </Box>
        <Box>Tytuł</Box>
        <Box>
          <Button variant='secondary' mr={2}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </Button>
          <Button variant='primary'>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
        </Box>
      </Grid>
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
        <Box>
          <Label>
            <Checkbox defaultChecked={false} />
          </Label>
        </Box>
        <Box>Tytuł</Box>
        <Box>
          <Button variant='secondary' mr={2}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </Button>
          <Button variant='primary'>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default MainPage;
