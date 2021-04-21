import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import AddNew from './components/views/AddNew/AddNew';

const App = ({children}) => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/AddNew' component={AddNew} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
