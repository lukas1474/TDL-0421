import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'theme-ui';
import theme from './theme';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';

const App = ({children}) => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </ThemeProvider>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
