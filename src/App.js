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

const App = () => { 
  const [page, setPage] = useState('login');
  
  return ( 
    <div className='App'>
        <div>{
          {
            login: <LoginPage parentFunc={setPage} />,
            map: <MapPage parentFunc={setPage} />,
            register: <RegisterPage parentFunc={setPage} />,
            profile: <ProfilePage parentFunc={setPage} />
          }[page]
        }</div>
  </div>
);
}

export default App;





