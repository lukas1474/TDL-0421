import React, { useEffect, useState }from 'react';
import { useRecoilValue } from 'recoil';

import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

/** @jsxImportSource theme-ui */
import { Box, Button, Container, Paragraph } from 'theme-ui';

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
          boxShadow: `-7px 7px 9px -3px rgba(204,204,204,0.5)`,
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
          <Paragraph
            sx={{
              fontSize: 5,
            }}>
            {filteredDetails.title}
          </Paragraph>
          <Paragraph
            sx={{
              fontSize: 2,
              marginTop: `10px`,
            }}>
            utworzono: {filteredDetails.created_at}
          </Paragraph>
        </Box>
      </Container>
    </div>
  );
};

export default Details;
