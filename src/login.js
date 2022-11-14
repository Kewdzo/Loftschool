import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const handleClick = (e, name) => {
        switch (name) {
            case "Login":
              return  history.push('/login');
            case "Map":
              return history.push('/map');
            case "Register":
              return history.push('/register');
            case "Profile":
              return history.push('/profile');
            default:
              return console.log(e);
          }
    }
    return ( 
        <div className="LoginPage">
        <header className="LoginPage-header">
        <div className="LoginPageForm">
              <p>LoginPage</p>  
              <button onClick={e => handleClick(e,'Login')}>Login</button>
              <button onClick={e => handleClick(e,'Map')}>Map</button>
              <button onClick={e => handleClick(e,'Register')}>Register</button>
              <button onClick={e => handleClick(e,'Profile')}>Profile</button>
        </div>
        </header>
    </div> 
  );
}
 
export default LoginPage;