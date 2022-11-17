// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoginPage from './login.js';
// import MapPage from './map.js';
// import RegisterPage from './registration.js';
// import ProfilePage from './profile.js';
//Для работы через роутинг
// function App() {
//   return (
//     <div className="App">
//       <Router>
//             <div className='content'>
//               <Switch>
//                 <Route path='/login'>
//                   <LoginPage />
//                 </Route>
//                 <Route path='/map'>
//                   <MapPage />
//                 </Route>
//                 <Route path='/register'>
//                   <RegisterPage />
//                 </Route>
//                 <Route path='/profile'>
//                   <ProfilePage />
//                 </Route>                
//               </Switch>            
//           </div>
//         </Router>
//     </div>
//   ); 
// }
// export default App;

import React from 'react';
import LoginPage from './login.js';
import MapPage from './map.js';
import RegisterPage from './registration.js';
import ProfilePage from './profile.js';

class App extends React.Component {
  state = {page: 'login'};

  setPage = (name) => {
    this.setState({ page: name });
  }

  render() {
    return (
      <div className='App'>
        <h1>Показывается страница {this.state.page}.js</h1>
        <button onClick={() => this.setPage('login')}>Перейти на Login</button>
        <button onClick={() => this.setPage('map')}>Перейти на Map</button>
        <button onClick={() => this.setPage('register')}>Перейти на Register</button>
        <button onClick={() => this.setPage('profile')}>Перейти на Profile</button>
        <hr />
        <div>{
          {
            login: <LoginPage parentFunc={this.setPage} />,
            map: <MapPage parentFunc={this.setPage} />,
            register: <RegisterPage parentFunc={this.setPage} />,
            profile: <ProfilePage parentFunc={this.setPage} />
          }[this.state.page]
        }</div>
      </div>
    );
  };
}

export default App;



