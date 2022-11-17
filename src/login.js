//import { useHistory } from 'react-router-dom';

const LoginPage = (props) => {    
    return ( 
        <div className="LoginPage">
        <header className="LoginPage-header">
        <div className="LoginPageForm">
              <p>LoginPage</p>  
              <button onClick={() => props.parentFunc('login')}>Login</button>
              <button onClick={() => props.parentFunc('map')}>Map</button>
              <button onClick={() => props.parentFunc('register')}>Register</button>
              <button onClick={() => props.parentFunc('profile')}>Profile</button>
        </div>
        </header>
    </div> 
  );
}
 
export default LoginPage;

//Для будущего роутинга
// const history = useHistory();
// const handleClick = (e, name) => {
//   switch (name) {
//       case "Login":
//         return  history.push('/login');
//       case "Map":
//         return history.push('/map');
//       case "Register":
//         return history.push('/register');
//       case "Profile":
//         return history.push('/profile');
//       default:
//         return console.log(e);
//     }  
// }
// <button onClick={e => handleClick(e,'profile')}>Profile</button>