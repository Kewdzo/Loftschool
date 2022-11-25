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
import LoginPage from './components/Login';
import MapPage from './components/Map';
import RegisterPage from './components/Registation';
import ProfilePage from './components/Profile';
import { useState } from 'react';
import { MainContext } from './context/main-context';

const App = () => {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  MainContext.login = (email, password) => {
    setPage('map');
    setIsLoggedIn(true);
    window.console.log('Пользователь залогинился');
    window.console.log('Логин: ' + email);
    window.console.log('Пароль: ' + password);
  };
  MainContext.logout = () => {
    setIsLoggedIn(false);
    setPage('login');
  };
  MainContext.isLoggedIn = isLoggedIn;

  return (
    <div className='App'>
      {/*<h1>Показывается страница {page}.js</h1>
      <button onClick={() => setPage('login')}>Перейти на Login</button>
      <button onClick={() => setPage('map')}>Перейти на Map</button>
      <button onClick={() => setPage('register')}>Перейти на Register</button>
      <button onClick={() => setPage('profile')}>Перейти на Profile</button>*/}
      <MainContext.Provider value={{ MainContext }}>
        <div>{
          {
            login: <LoginPage parentFunc={setPage} />,
            map: <MapPage parentFunc={setPage} />,
            register: <RegisterPage parentFunc={setPage} />,
            profile: <ProfilePage parentFunc={setPage} />
          }[page]
        }</div>
      </MainContext.Provider>
    </div>
  );
}

export default App;





