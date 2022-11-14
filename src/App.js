import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './login.js';
import MapPage from './map.js';
import RegisterPage from './registration.js';
import ProfilePage from './profile.js';


function App() {
  return (
    <div className="App">
      <Router>
            <div className='content'>
              <Switch>
                <Route path='/login'>
                  <LoginPage />
                </Route>
                <Route path='/map'>
                  <MapPage />
                </Route>
                <Route path='/register'>
                  <RegisterPage />
                </Route>
                <Route path='/profile'>
                  <ProfilePage />
                </Route>                
              </Switch>            
          </div>
        </Router>
    </div>
  ); 
}


export default App;
