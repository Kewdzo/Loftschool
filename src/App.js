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
import Authorized from './pages/Authorized';
import Unauthorized from './pages/Unauthorized';
import { WithAuth } from './context/main-context';

const App = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="App">
      {
        isLoggedIn
          ? <Authorized />
          : <Unauthorized />
      }
    </div>
  );
}

export default WithAuth(App);





