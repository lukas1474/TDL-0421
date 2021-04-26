import React, { useEffect, useState }from 'react';
import { useRecoilValue } from 'recoil';

import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

/** @jsxImportSource theme-ui */
import { Box, Button, Container, Text } from 'theme-ui';

import { todosState  } from '../../../atoms';

const Details = () => {

  let { id } = useParams();
  const details = useRecoilValue(todosState);
  const [filteredDetails, setFilteredDetails] = useState(``);

  const detailsTodo = (id, details) => {
    const filtered = details.filter((detail) => {
      return detail.id == id;
    });
    setFilteredDetails(filtered[0]);
  };

  useEffect(() => {
    detailsTodo(id, details);
  }, []);

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
          width: `1100px`,
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
            marginBottom: `20px`,
            marginLeft: `650px`,
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
            width: `1050px`,
          }}
        >
          <Text
            sx={{
              fontSize: 4,
              fontWeight: `bold`,
              width: `800px`,
            }}>
            {filteredDetails.title}
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default Details;
