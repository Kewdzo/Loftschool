import React, { useEffect } from 'react';
import Unauthorized from './pages/Unauthorized';
import Authorized from './pages/Authorized';
import { WithAuth } from './context/main-context';
import PrivateRoute from './PrivateRoute';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

const App = (props) => {
  const { isAuthorized } = props;
  
  useEffect(() => {
    console.log(isAuthorized);
  })

  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            {
              isAuthorized
                ? <Redirect to="/map" />
                : <Unauthorized />
            }
          </Route>
          <Route path='/registration'>
            {
              isAuthorized
                ? <Redirect to="/map" />
                : <Unauthorized />
            }
          </Route>
          <PrivateRoute
            path="/map"
            component={Authorized}
          />
          <Route path='*'>
          <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default WithAuth(App);











