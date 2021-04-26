import React from 'react';
import { useRecoilValue } from 'recoil';

/** @jsxImportSource theme-ui */
import { Label, Box, Grid, Container } from 'theme-ui';

import { todosStats } from '../../../atoms';

const Summary = () => {

  const stats = useRecoilValue(todosStats);

  return(
    <Container
      sx={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        fontFamily: `heading`,
      }}>
      <Label
        sx={{
          color: `text`,
          marginBottom: `5px`,
          marginLeft: `10px`,
          fontSize: `20px`,
        }}
      >
      Podsumowanie zadań
      </Label>
      <Box
      >
        <Grid
          gap={2}
          columns={[2, `1fr 2fr`]}
          sx={{
            display: `flex`,
            flexDirection: `row`,
          }}
        >
          <Box
            sx={{
              fontSize:`15px`,
            }}
          >
            zakończone: {stats.completed} / wszystkie: {stats.all}
          </Box>
        </Grid>
        <p>{stats.title}</p>
      </Box>
    </Container>
  );
};

export default Summary;
