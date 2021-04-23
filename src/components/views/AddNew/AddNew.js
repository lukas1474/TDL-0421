import React from 'react';

/** @jsxImportSource theme-ui */

import { Box, Button, Label, Input, Textarea, Container } from 'theme-ui';
import { Link } from 'react-router-dom';

const AddNew = () => {

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
            <Button variant='primary'>
            Powrót
            </Button>
          </Link>
        </Box>
        <Box
          as="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            marginBottom: `25px`,
          }}>
          <Label htmlFor="tytuł">Tytuł</Label>
          <Input name="tytuł" mb={3} />
          <Button variant='third'>Dodaj</Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddNew;
