import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import AddNew from './components/views/AddNew/AddNew';
import Details from './components/views/Details/Details';


const App = ({children}) => {
  return (
    <div className="App">
      <RecoilRoot>
        <Suspense fallback={<div>Fetching user data...</div>}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <MainLayout>
                <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route exact path='/AddNew' component={AddNew} />
                  <Route exact path='/:id' component={Details} />
                </Switch>
              </MainLayout>
            </BrowserRouter>
          </ThemeProvider>
        </Suspense>
      </RecoilRoot>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
