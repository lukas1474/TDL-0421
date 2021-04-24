import React, { useState }from 'react';
import PropTypes from 'prop-types';

/** @jsxImportSource theme-ui */

import { Box, Button, Label, Input, Container, Text } from 'theme-ui';
import { Link } from 'react-router-dom';

const AddNew = () => {

  const { id, title } = this.props;

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
        }}
      >
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
          sx={{
            marginBottom: `25px`,
          }}
        >
          <Text
            sx={{
              fontSize: 4,
              fontWeight: `bold`,
            }}>
            {title}
          </Text>
        </Box>
      </Container>
    </div>
  );
};

// Details.propTypes = {
//   children: PropTypes.node,
//   id: PropTypes.node,
//   title: PropTypes.object,
// };

export default AddNew;
