import React from 'react';
import Unauthorized from './pages/Unauthorized';
import Authorized from './pages/Authorized';
import PrivateRoute from './PrivateRoute';
import { Redirect, Route, Switch } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import { getLogInStatus } from './modules/redux';
import { connect } from "react-redux";


const App = (props) => {
  const { isLoggedIn } = props;  

  return (
    <div className="App">
        <Switch>
          <Route path='/login'>
            {
              isLoggedIn
                ? <Redirect to="/map" />
                : <Unauthorized />
            }
          </Route>
          <Route path='/registration'>
            {
              isLoggedIn
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
    </div>

  );
}

export default connect((state) => ({ isLoggedIn: getLogInStatus(state) }))(App);











